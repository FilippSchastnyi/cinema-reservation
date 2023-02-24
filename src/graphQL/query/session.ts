import gql from 'graphql-tag'

export const GET_SESSION_DETAILS = gql`
    query GetOneSession($getOneSessionId: ID!) {
        sessionData:getOneSession(id: $getOneSessionId) {
            hallName
            hall {
                rowNumber
                seats {
                    seatNumber
                    status
                    isBusy
                }

            }
            showTime
            booking {
                row
                seats
            }
        }
    }
`
