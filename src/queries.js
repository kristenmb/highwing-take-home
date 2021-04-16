import { gql } from '@apollo/client'

export const BROKER_QUERY = gql`
  query {
    mostRecentSnapshot {
      broker {
        description
        name
      }
    }
  }
`

export const BROKER_CARRIER_SLICE_QUERY = gql`
  query {
    mostRecentSnapshot {
      brokerSlice {
        industries {
          premium
          proportion
          title
        }
        premiumRange {
          premium
          proportion
          title
        }
      }
    carrierSlice {
        industries {
          premium
          proportion
          title
        }
        premiumRange {
          premium
          proportion
          title
        }
      }
    }
  }
`