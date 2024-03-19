import { gql } from '@apollo/client';

export const GET_POSTS = gql`
    query getAllPosts {
        posts {
            id
            userId
            title
        }
    }
`;

export const GET_POSTS_BY_USER_ID = gql`
    query getPostsByUserId($userId: String) {
        postsByUserId(userId: $userId) {
            id
            userId
            title
        }
    }
`;

export const GET_POST = gql`
    query getPost($id: ID!) {
        post(id: $id) {
            id
            userId
            title
            body
        }
    }
`;
