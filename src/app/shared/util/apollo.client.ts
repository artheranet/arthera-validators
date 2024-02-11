import {HttpLink} from "apollo-angular/http";
import {RetryLink} from "@apollo/client/link/retry";

export class ArtheraApolloClient {
    httpProvider = '';
    httpProviderOrigin = '';
    apolloProviders: string[] = [];
    httpApolloProviders: string[] = [];
    defaultHttpProvider: any;
    defaultProviderIndex: any;
    maxRetryLinkAttempts: number;
    lastOperationName = '';

    constructor(apolloProviders: string[] = [], defaultProviderIndex = 'random', maxRetryLinkAttempts = Infinity) {
        this.apolloProviders = apolloProviders;
        this.maxRetryLinkAttempts = maxRetryLinkAttempts;

        if (defaultProviderIndex === 'random') {
            this.defaultProviderIndex = Math.floor(Math.random() * this.apolloProviders.length);
        } else {
            this.defaultProviderIndex = +defaultProviderIndex;
        }

        this.defaultHttpProvider = this.apolloProviders[this.defaultProviderIndex];
        this.setHttpProvider(this.defaultHttpProvider);
        this.httpApolloProviders = this.setHttpApolloProviders(this.apolloProviders, this.defaultHttpProvider);
    }

    setHttpProvider(httpProvider = '') {
        const url = new URL(httpProvider);

        this.httpProvider = httpProvider;
        this.httpProviderOrigin = url.origin;
    }

    setHttpApolloProviders(_providers: string[], _defaultHttpProvider?: string): string[] {
        const providers = _providers.filter(_value => _value !== _defaultHttpProvider);
        shuffle(providers);
        return providers;
    }

    resetHttpApolloProviders() {
        this.httpApolloProviders = this.setHttpApolloProviders(this.apolloProviders);
        this.lastOperationName = '';
    }

    getCurrentHttpProvider() {
        return this.httpProvider;
    }

    getCurrentHttpProviderOrigin() {
        return this.httpProviderOrigin;
    }

    getHttpLink(httpLink: HttpLink) {
        return httpLink.create({
            uri: () => this.getCurrentHttpProvider(),
        })
    }

    getRetryLink() {
        return new RetryLink({
            delay: {
                initial: 350,
                // max: Infinity,
                max: 6000,
                jitter: true,
            },
            attempts: {
                max: this.maxRetryLinkAttempts,
                retryIf: (_error, _operation) => {
                    // change http provider
                    if (
                        this.httpApolloProviders.length > 0 &&
                        (!this.lastOperationName || _operation.operationName === this.lastOperationName)
                    ) {
                        this.setHttpProvider(this.httpApolloProviders.pop());
                        this.lastOperationName = _operation.operationName;
                    }

                    if (this.httpApolloProviders.length === 0) {
                        this.resetHttpApolloProviders();
                    }

                    return !!_error;
                },
            },
        });
    }
}

function shuffle(_array) {
    for (let i = _array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

        [_array[i], _array[j]] = [_array[j], _array[i]];
    }
}