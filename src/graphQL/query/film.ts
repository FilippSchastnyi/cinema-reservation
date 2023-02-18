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
    movieData: getOneFilm(id: $filmId) {
      _id
      name
      description
      country
      director
      duration
      release
      genres {
        id:_id
        name
      }
      image
    }
  }
`
