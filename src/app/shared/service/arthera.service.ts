import {Injectable} from "@angular/core";
import {Apollo} from "apollo-angular";
import {Wallet} from "@ethersproject/wallet";
import {JsonRpcSigner, Web3Provider} from "@ethersproject/providers";
import {GQL_CURRENT_EPOCH, GQL_EPOCH_INFO, GQL_EPOCHS, GQL_VALIDATORS} from "./gql.queries";
import {ContractService} from "./contract.service";
import {Epoch, Epochs} from "../model/epoch";
import {map, Observable} from "rxjs";
import {ApolloQueryResult} from "@apollo/client/core";
import {ValidatorStake} from "../model/validator";

@Injectable({
  providedIn: 'root'
})
export class ArtheraService {
  private provider: Web3Provider;
  private wallet: JsonRpcSigner | Wallet;

  constructor(
    private apollo: Apollo,
    private contractsService: ContractService,
  ) {
  }
  public fetchCurrentEpochId(): Observable<any> {
    return this.apollo.query<any>({
      query: GQL_CURRENT_EPOCH,
      variables: {},
      errorPolicy: "all",
      fetchPolicy: "no-cache"
    }).pipe(
      map((result: ApolloQueryResult<any>) => result.data.currentEpoch)
    );
  }

  public fetchEpochInfo(epochId: string): Observable<Epoch> {
    return this.apollo.query<Epoch>({
      query: GQL_EPOCH_INFO,
      variables: { id: epochId },
      errorPolicy: "all",
      fetchPolicy: "no-cache"
    }).pipe(
      map((result: ApolloQueryResult<any>) => result.data.epoch)
    );
  }

  public fetchEpochs(count: number, cursor: string): Observable<Epochs> {
    return this.apollo.query<Epochs>({
      query: GQL_EPOCHS,
      variables: {
        count,
        cursor
      },
      errorPolicy: "all",
      fetchPolicy: "no-cache"
    }).pipe(
      map((result: ApolloQueryResult<any>) => result.data.epochs)
    );
  }

  public fetchValidators(): Observable<ValidatorStake[]> {
    return this.apollo.query<ValidatorStake[]>({
      query: GQL_VALIDATORS,
      variables: {},
      errorPolicy: "all",
      fetchPolicy: "no-cache"
    }).pipe(
      map((result: ApolloQueryResult<any>) => result.data.validatorStakes)
    );
  }

  public async setWeb3Provider(provider: Web3Provider) {
    this.provider = provider;
    if (!this.wallet) {
      this.wallet = this.provider.getSigner();
    }
    const address = await this.wallet.getAddress();
    this.contractsService.setSigner(this.wallet);
    this.contractsService.loadSystemContracts();
  }
}
