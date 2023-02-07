import { gql } from '@apollo/client';

export const CREATE_USER = gql(`
  mutation CreateUser($input: UserInput) {
    createUser(input: $input) {
      ... on UserData {
        email
        user_id
        message
        roles
        access_token
      }
      ... on UnexpectedError {
        message
      }
      ... on AccessError {
        message
      }
    }
  }
`);

export const LOGIN_USER = gql(`
  mutation logInUser($input: UserInput){
    logInUser(input: $input) {
      __typename
      ... on UserData {
            message
            email
            user_id
            roles
            access_token
      }
      ... on AccessError {
            message
      }
    }
  }
`);
