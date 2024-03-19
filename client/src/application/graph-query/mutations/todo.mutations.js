import { gql } from '@apollo/client';

export const CREATE_TODO = gql`
    mutation createTodo($todo: createTodoInput!) {
        createTodo(todo: $todo) {
            id
        }
    }
`;

export const UPDATE_TODO = gql`
    mutation updateTodo($todo: updateTodoInput!) {
        updateTodo(todo: $todo) {
            id
        }
    }
`;

export const DELETE_TODO = gql`
    mutation deleteTodo($id: ID!) {
        deleteTodo(id: $id) {
            id
        }
    }
`;
