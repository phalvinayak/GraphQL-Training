import { gql } from '@apollo/client';

export const GET_USERS = gql`
    query getAllUsers {
        users {
            id
            name
            username
        }
    }
`;

export const GET_USER = gql`
    query getUser($id: ID!) {
        user(id: $id) {
            id
            name
            username
        }
    }
`;
