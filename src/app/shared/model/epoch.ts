export interface Epoch {
  id: string;
  endTime: string;
  duration: string;
  epochFee: string;
  totalBaseRewardWeight: string;
  totalTxRewardWeight: string;
  baseRewardPerSecond: string;
  stakeTotalAmount: string;
  totalSupply: string;
}

export interface Epochs {
  totalCount: string;
  pageInfo: {
    first: string;
    last: string;
  }
  edges: {
    epoch: Epoch
  }[]
}
