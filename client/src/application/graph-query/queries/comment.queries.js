import { gql } from '@apollo/client';

export const GET_COMMENTS = gql`
    query getAllComments {
        comments {
            id
            postId
            name
            email
            body
        }
    }
`;

export const GET_COMMENTS_BY_POST_ID = gql`
    query commentsByPostId($postId: String) {
        commentsByPostId(postId: $postId) {
            id
            postId
            name
            email
            body
        }
    }
`;

export const GET_COMMENT = gql`
    query getComment($id: ID!) {
        comment(id: $id) {
            id
            postId
            name
            email
            body
        }
    }
`;
