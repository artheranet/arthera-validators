import {NgModule} from '@angular/core';
import {APOLLO_FLAGS, APOLLO_OPTIONS, ApolloModule} from 'apollo-angular';
import {ApolloClientOptions, ApolloLink, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import {ArtheraApolloClient} from "./util/apollo.client";
import {API_ENDPOINTS} from "./constants";

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const artheraClient = new ArtheraApolloClient(API_ENDPOINTS);

  return {
    link: ApolloLink.from([
        artheraClient.getRetryLink(),
        artheraClient.getHttpLink(httpLink),
    ]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
    {
      provide: APOLLO_FLAGS,
      useValue: {
        useInitialLoading: true
      },
    },
  ],
})
export class GraphQLModule {
}
