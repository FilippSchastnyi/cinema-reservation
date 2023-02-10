import { gql } from '@apollo/client';

export const GET_ALL_CINEMAS = gql(`
    query GetAllCinemas {
      cinemaList: getAllCinemas {
        id:_id
        name
      }
    }
`);
