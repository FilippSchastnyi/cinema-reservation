import { gql } from '@apollo/client';

export const CREATE_USER = gql(`
  mutation createUser($input: UserInput){
    createUser(input: $input) {
      __typename
      ... on AuthUserData {
        roles
        token
      }
      ... on DuplicatedUser {
        message
      }
      ... on UnexpectedError {
        message
      }
      ... on EmptyUser {
        message
      }
    }
  }
`);

export const LOGIN_USER = gql(`
  mutation loginUser($input: UserInput){
    loginUser(input: $input) {
      __typename
      ... on AuthUserData {
        roles
        token
      }
    }
  }
`);
