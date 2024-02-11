export interface ValidatorStake {
  id: string;
  validatorAddress: string;
  // Amount of total staked tokens in WEI.
  totalStake: string;
  // Amount of own staked tokens in WEI.
  stake: string;
  artheraStake: string;
  // Amount of tokens delegated to the staker in WEI.
  delegatedMe: string;
  isActive: string;
  isWithdrawn: string;
  isCheater: string;
  isOffline: string;
  isStakeLocked: string;
  createdEpoch: string;
  createdTime: string;
  lockedFromEpoch: string;
  lockedUntil: string;
  deactivatedEpoch: string;
  deactivatedTime: string;
  // How many blocks the validator missed.
  missedBlocks: string;
  // Number of seconds the staker is offline.
  downtime: string;
}


export interface AccountDelegations {
  delegationsByAddress: {
    totalCount: string;
    edges: AccountDelegation[];
  };
}

export interface AccountDelegation {
  // Amount delegated in WEI. The value includes all the pending un-delegations.
  amount: string;
  // Current active amount delegated in WEI.
  amountDelegated: string;
  pendingRewards: {
    amount: string;
  };
  isDelegationLocked: boolean;
  lockedUntil: string;
  toStakerId: string;
  withdrawRequests: WithdrawRequest[];
  lockedAmount: string;
  delegation: AccountDelegation;
}

export interface WithdrawRequest {
  withdrawRequestID: string;
  amount: string;
  createdTime: string;
  withdrawTime: string;
}

