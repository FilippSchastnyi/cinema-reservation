import { gql } from '@apollo/client';

export const CREATE_FILM = gql(`
  mutation createFilm($input: FilmInput) {
    createFilm(input: $input) {
      image
    }
  }
`);
