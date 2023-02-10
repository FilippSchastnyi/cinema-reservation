import { gql } from '@apollo/client';

export const GET_FILM_CARDS_INFO = gql(`
  query GetCinemaFilms($input: InputQuery) {
    cardInfoList:getCinemaFilms(input: $input) {
      id:_id
      name
      genres
      image
    }
  }
`);
