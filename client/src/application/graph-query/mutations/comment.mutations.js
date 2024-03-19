import { gql } from '@apollo/client';

export const CREATE_COMMENT = gql`
    mutation createComment($comment: createCommentInput!) {
        createComment(comment: $comment) {
            id
        }
    }
`;

export const UPDATE_COMMENT = gql`
    mutation updateComment($comment: updateCommentInput!) {
        updateComment(comment: $comment) {
            id
        }
    }
`;

export const DELETE_COMMENT = gql`
    mutation deleteComment($id: ID!) {
        deleteComment(id: $id) {
            id
        }
    }
`;
