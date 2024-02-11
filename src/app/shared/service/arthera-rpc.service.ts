import {Injectable} from "@angular/core";
import {JsonRpcProvider} from "@ethersproject/providers";
import {ARTHERA_NETWORK_DETAILS, CHAIN_ID} from "../constants";

@Injectable({
  providedIn: "root"
})
export class ArtheraRpcService {
  private readonly artheraRpcProvider: JsonRpcProvider;

  constructor() {
    this.artheraRpcProvider = new JsonRpcProvider(ARTHERA_NETWORK_DETAILS[CHAIN_ID].rpcUrls[0], ARTHERA_NETWORK_DETAILS[CHAIN_ID]);
  }

  public getProvider(): JsonRpcProvider {
    return this.artheraRpcProvider;
  }
}
