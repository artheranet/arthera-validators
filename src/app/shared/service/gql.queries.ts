import {gql} from "apollo-angular";


export const GQL_CURRENT_EPOCH = gql`query CurrentEpoch {
  currentEpoch
}`

export const GQL_EPOCH_INFO = gql`query Epoch($id: Long!) {
  epoch(id: $id) {
    endTime
    duration
    epochFee
    totalBaseRewardWeight
    totalTxRewardWeight
    baseRewardPerSecond
    stakeTotalAmount
    totalSupply
  }
}`

export const GQL_EPOCHS = gql`query Epochs($cursor: Cursor, $count: Int) {
  epochs(count: $count, cursor: $cursor) {
    totalCount
    pageInfo {
      first
      last
    }
    edges {
      epoch {
        id
        endTime
        duration
        epochFee
        totalBaseRewardWeight
        totalTxRewardWeight
        baseRewardPerSecond
        stakeTotalAmount
        totalSupply
      }
    }
  }
}`

export const GQL_VALIDATORS = gql`query Validators {
  validatorStakes {
    id
    validatorAddress
    totalStake
    stake
    artheraStake
    delegatedMe
    isActive
    isWithdrawn
    isCheater
    isOffline
    isStakeLocked
    createdEpoch
    createdTime
    lockedFromEpoch
    lockedUntil
    deactivatedEpoch
    deactivatedTime
    missedBlocks
    downtime
  }
}`

export const GQL_TOKEN_PRICE = gql`query Price($to: String!) {
  price(to: $to) {
    price
  }
}`

export const GQL_SUBSCRIPTION_DATA = gql`query SubscriptionData($address: Address!) {
    subscriptionData(address: $address) {
        id
        balance
        startTime
        endTime
        lastCapReset
        periodUsage
        plan {
            id
            name
            description
            duration
            price
            priceAA
            units
            capFrequency
            capUnits
            forContract
            active
        }
    }
}`;

export const GQL_SUBSCRIPTION_PLANS = gql`query SubscriptionPlans {
    subscriptionPlans {
      id
      name
      description
      duration
      price
      priceAA
      units
      capFrequency
      capUnits
      forContract
      active
    }
  }
`;

export const GQL_DELEGATIONS_BY_ADDRESS = gql`query DelegationsByAddress($address: Address!) {
  delegationsByAddress(address: $address) {
    totalCount
    edges {
      delegation {
        toStakerId
        amountDelegated
        createdTime
        amount
        withdrawRequests {
          withdrawRequestID
          amount
          createdTime
          withdrawTime
        }
      }
    }
  }
}`;

