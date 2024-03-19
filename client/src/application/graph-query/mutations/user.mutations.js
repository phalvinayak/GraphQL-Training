import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($id: ID!, $name: String, $username: String) {
        createUser(user: { id: $id, name: $name, username: $username }) {
            id
            name
            username
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($id: ID!, $name: String, $username: String) {
        updateUser(user: { id: $id, name: $name, username: $username }) {
            id
            name
            username
        }
    }
`;

export const DELETE_USER = gql`
    mutation deleteUser($id: ID!) {
        deleteUser(id: $id) {
            id
            name
            username
        }
    }
`;
