import { gql } from '@apollo/client';

export const CREATE_POST = gql`
    mutation createPost($post: createPostInput!) {
        createPost(post: $post) {
            id
            title
            userId
            body
        }
    }
`;

export const UPDATE_POST = gql`
    mutation updatePost($post: updatePostInput!) {
        updatePost(post: $post) {
            id
        }
    }
`;

export const DELETE_POST = gql`
    mutation deletePost($id: ID!) {
        deletePost(id: $id) {
            id
        }
    }
`;
