import gql from 'graphql-tag'

const CINEMA_INFO_FRAGMENT = gql`
  fragment cinemaInfo on CinemaData {
    _id
    name
    city
    films {
      name
    }
  }
`

export const GET_CINEMAS_NAMES = gql`
  query getCinemasNames {
    cinemaList: getAllCinemas {
      id: _id
      name
    }
  }
`

export const GET_CINEMA_STORE = gql`
  query getOneCinemaStore($id: ID!) {
    cinema: getOneCinema(id: $id) {
      _id
      name
      city
      store{
          goods {
              name
              price
              count
          }
          tickets {
              type
              price
          }
      }
    }
  }
`

export const GET_CINEMAS_INFO = gql`
  query getCinemasInfo {
    cinemaList: getAllCinemas {
      ...cinemaInfo
    }
  }
  ${CINEMA_INFO_FRAGMENT}
`

export const GET_ONE_CINEMA_INFO = gql`
  query getOneCinemaInfo($id: ID!) {
    cinema: getOneCinema(id: $id) {
      ...cinemaInfo
    }
  }
  ${CINEMA_INFO_FRAGMENT}
`
