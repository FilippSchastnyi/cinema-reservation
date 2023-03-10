import gql from 'graphql-tag'

export const GET_SESSION_DETAILS = gql`
  query GetOneSession($sessionId: ID!, $cinemaId: ID!, $movieId: ID!) {
    session: getOneSession(id: $sessionId) {
      location
      schema {
        rowNumber
        seats {
          id:_id
          status
          seatNumber
          isBusy
          price
        }
      }
      showTime
      booking {
        row
        seats
      }
    }
    cinema: getOneCinema(id: $cinemaId) {
      name
      city
    }
    movie: getOneFilm(id: $movieId) {
      name
      image
    }
  }
`
