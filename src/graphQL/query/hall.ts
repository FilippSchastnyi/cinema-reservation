import gql from 'graphql-tag'

export const GET_CINEMA_HALLS_DETAILS = gql`
    query GetCinemaHallDetails($cinemaId: ID!){
        hallsData:getAllCinemaHalls(cinemaId: $cinemaId) {
            id:_id
            name,
            schedule {
                id:_id
                showTime
            }
        }
        cinemaData:getOneCinema(id: $cinemaId) {
            name
        }
    }
`
