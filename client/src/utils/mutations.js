import { gql } from '@apollo/client';

export const SIGNIN_USER = gql`
  mutation login($password: String!) {
    login(password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!,  $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;