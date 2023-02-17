import gql from 'graphql-tag'

export const GET_CINEMA_HALLS_DETAILS = gql`
    query GetCinemaHallDetails($cinemaId: ID!){
        hallsData:getAllHalls(cinemaId: $cinemaId) {
            cinemaName,
            halls {
                name,
                showTimeList
            }
        }
    }
`
