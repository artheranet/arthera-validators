import {environment} from "../environments/environment";

export const API_ENDPOINTS: string[] = environment.apiEndpoints;
export const CHAIN_ID = environment.chainId;

export const ARTHERA_NETWORK_DETAILS = {
  10242: {
    chainId: 0x2802,
    chainName: "Arthera Mainnet",
    nativeCurrency: {
      name: "Arthera",
      symbol: "AA",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.arthera.net/"],
    blockExplorerUrls: ["https://explorer.arthera.net/"],
    minStake: 500_000,
  },
  10243: {
    chainId: 0x2803,
    chainName: "Arthera Testnet",
    nativeCurrency: {
      name: "Arthera",
      symbol: "AA",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-test2.arthera.net/"],
    blockExplorerUrls: ["https://explorer-test2.arthera.net"],
    minStake: 100_000,
  },
  10245: {
    chainId: 0x2805,
    chainName: "Arthera Devnet",
    nativeCurrency: {
      name: "Arthera",
      symbol: "AA",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-dev.arthera.net/"],
    blockExplorerUrls: ["https://explorer-dev.arthera.net"],
    minStake: 100_000,
  },
  10244: {
    chainId: 0x2804,
    chainName: "Arthera Fakenet",
    nativeCurrency: {
      name: "Arthera",
      symbol: "AA",
      decimals: 18,
    },
    rpcUrls: ["http://localhost:18545/"],
    blockExplorerUrls: ["https://explorer-fake.arthera.net"],
    minStake: 100_000,
  },
}

export const SYSTEM_CONTRACT_ADDRESS = {
  staking: "0x000000000000000000000000000000000000aa04",
  validatorInfo: "0x000000000000000000000000000000000000Aa05",
  subscribers: "0x000000000000000000000000000000000000Aa07",
  rewards: "0x000000000000000000000000000000000000Aa06",
  emitterDriver: "0x000000000000000000000000000000000000aa08"
};

export const isTestnet = ARTHERA_NETWORK_DETAILS[CHAIN_ID].chainId === 0x2803;
