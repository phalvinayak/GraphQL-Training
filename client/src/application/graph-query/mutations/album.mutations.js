import { gql } from '@apollo/client';

export const CREATE_ALBUM = gql`
    mutation createAlbum($album: createAlbumInput!) {
        createAlbum(album: $album) {
            id
        }
    }
`;

export const UPDATE_ALBUM = gql`
    mutation updateAlbum($album: updateAlbumInput!) {
        updateAlbum(album: $album) {
            id
        }
    }
`;

export const DELETE_ALBUM = gql`
    mutation deleteAlbum($id: ID!) {
        deleteAlbum(id: $id) {
            id
        }
    }
`;
