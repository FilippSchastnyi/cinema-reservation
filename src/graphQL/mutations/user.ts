import { gql } from '@apollo/client';

export const CREATE_USER = gql(`
  mutation createUser($input: UserInput){
    createUser(input: $input) {
      __typename
      ... on UserData {
            message
            email
            user_id
            roles
            access_token
      }
      ... on AccessDenied {
        message
      }
    }
  }
`);

export const LOGIN_USER = gql(`
  mutation loginUser($input: UserInput){
    loginUser(input: $input) {
      __typename
      ... on UserData {
            message
            email
            user_id
            roles
            access_token
      }
      ... on AccessDenied {
            message
      }
    }
  }
`);
