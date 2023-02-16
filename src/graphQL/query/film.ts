import gql from 'graphql-tag'

export const GET_FILM_CARDS_INFO = gql`
  query GetCinemaFilms($input: InputQuery) {
    cinemaFilmsData: getCinemaFilms(input: $input) {
      films {
        id: _id
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
`

export const GET_FILM_INFO = gql`
  query GetOneCinemaFilm($filmId: ID!) {
    filmData: getOneFilm(id: $filmId) {
      id: _id
      name
      description
      country
      director
      duration
      release
      genres {
        _id
        name
      }
      image
    }
  }
`
