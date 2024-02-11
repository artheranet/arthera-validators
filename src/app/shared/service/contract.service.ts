import {Injectable} from "@angular/core";
import {Contract} from "@ethersproject/contracts";
import {abis} from "../contracts";
import {SYSTEM_CONTRACT_ADDRESS} from "../constants";
import {JsonRpcSigner} from "@ethersproject/providers";
import {Wallet} from "@ethersproject/wallet";
import {BigNumber} from "@ethersproject/bignumber";
import {ArtheraRpcService} from "./arthera-rpc.service";

export interface ArtheraValidator {
  createdEpoch: BigNumber,
  createdTime: BigNumber,
  deactivatedEpoch: BigNumber,
  deactivatedTime: BigNumber,
  receivedStake: BigNumber,
  status: BigNumber,
}

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private system_contracts: Map<string, Contract> = new Map();
  private signer: JsonRpcSigner | Wallet;

  constructor(
      private artheraRpcService: ArtheraRpcService,
  ) {
    // just a random private key
    this.signer = new Wallet('0x254612183df29ae773d43646e52b68f6c398439b235feb306c9b75da4d0dc1e3', this.artheraRpcService.getProvider());
  }

  public loadContract(address: string, abi: any): Contract {
    return new Contract(address, abi, this.signer);
  }

  public loadSystemContracts() {
    this.system_contracts.clear();
    this.system_contracts.set('staking', this.loadContract(SYSTEM_CONTRACT_ADDRESS['staking'], abis.staking));
    this.system_contracts.set('validatorInfo', this.loadContract(SYSTEM_CONTRACT_ADDRESS['validatorInfo'], abis.validatorInfo));
    this.system_contracts.set('subscribers', this.loadContract(SYSTEM_CONTRACT_ADDRESS['subscribers'], abis.subscribers));
    this.system_contracts.set('emitterDriver', this.loadContract(SYSTEM_CONTRACT_ADDRESS['emitterDriver'], abis.emitterDriver));
  }

  public async getValidatorPubkey(validatorId: number): Promise<string> {
    const contract = this.system_contracts.get('staking');
    return await contract["getValidatorPubkey"](validatorId);
  }

  public async getValidator(validatorId: number): Promise<ArtheraValidator> {
    const contract = this.system_contracts.get('staking');
    return await contract["getValidator"](validatorId);
  }

  public async getValidatorInfoUrl(validatorId: number): Promise<string> {
    const contract = this.system_contracts.get('validatorInfo');
    return await contract["getInfo"](validatorId);
  }

  public async getLastValidatorID(): Promise<string> {
    const contract = this.system_contracts.get('staking');
    return await contract["lastValidatorID"]();
  }

  public async getCurrentEpoch(): Promise<BigNumber> {
    const contract = this.system_contracts.get('staking');
    return await contract["currentEpoch"]();
  }

  public setSigner(signer: JsonRpcSigner | Wallet) {
    this.signer = signer;
  }

  public getSigner(): JsonRpcSigner | Wallet {
    return this.signer;
  }
}
