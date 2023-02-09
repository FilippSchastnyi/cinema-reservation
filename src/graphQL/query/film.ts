import { gql } from '@apollo/client';

export const GET_FILM_CARDS_INFO = gql(`
  query GetCinemaFilms($input: InputQuery) {
    cardInfo:getCinemaFilms(input: $input) {
      name
      genres
      image
    }
  }
`);
