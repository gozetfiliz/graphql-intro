import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      age
    }
  }
`;

export const GET_USER = gql`
  query GetUser($id: String) {
    user(id: $id) {
      id
      name
      age
      books {
        userId
        name
        page
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($createUserInput: CreateUserInput) {
    createUser(createUserInput: $createUserInput) {
      id
      name
      age
    }
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($updateUserInput: UpdateUserInput) {
    updateUser(updateUserInput: $updateUserInput) {
      id
      name
      age
    }
  }
`;

export const REMOVE_USER = gql`
  mutation RemoveUser($id: String) {
    removeUser(id: $id) {
      id
      name
      age
    }
  }
`;
