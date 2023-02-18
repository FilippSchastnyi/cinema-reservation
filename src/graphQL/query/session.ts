import gql from 'graphql-tag'

export const GET_SESSION_DETAILS = gql`
    query GetSessionDetails($id: ID){
        getOneSession(id: $id){
            film
            
        }
    } 
`
