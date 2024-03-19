import { gql } from '@apollo/client';

export const GET_TODOS = gql`
    query getAllTodos {
        todos {
            id
            userId
            title
            completed
        }
    }
`;

export const GET_TODOS_BY_USER_ID = gql`
    query getTodosByUserId($userId: String) {
        todosByUserId(userId: $userId) {
            id
            userId
            title
            completed
        }
    }
`;

export const GET_TODO = gql`
    query getPost($id: ID!) {
        todo(id: $id) {
            id
            userId
            title
            completed
        }
    }
`;
