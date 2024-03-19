import { gql } from '@apollo/client';

export const CREATE_PHOTO = gql`
    mutation createPhoto($photo: createPhotoInput!) {
        createPhoto(photo: $photo) {
            id
        }
    }
`;

export const UPDATE_PHOTO = gql`
    mutation updatePhoto($photo: updatePhotoInput!) {
        updatePhoto(photo: $photo) {
            id
        }
    }
`;

export const DELETE_PHOTO = gql`
    mutation deletePhoto($id: ID!) {
        deletePhoto(id: $id) {
            id
        }
    }
`;
