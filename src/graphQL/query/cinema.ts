import { gql } from '@apollo/client'

export const GET_CINEMAS_NAMES = gql(`
    query GetCinemasNames {
      cinemaList: getAllCinemas {
        id:_id
        name
      }
    }
`)

export const GET_CINEMAS_INFO = gql(`
    query GetCinemasInfo {
      cinemaList: getAllCinemas {
        _id
        name
        city
        films {
          name
        }
        halls
      }
    }
`)