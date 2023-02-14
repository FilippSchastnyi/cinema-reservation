import { gql } from '@apollo/client'

export const GET_FILM_CARDS_INFO = gql(`
  query GetCinemaFilms($input: InputQuery) {
    cinemaFilmsData: getCinemaFilms(input: $input) {
      films {
            id:_id
            name
            genres {
              _id
              name
            }
            image
      }
      documentsCount
    }
  }
`)