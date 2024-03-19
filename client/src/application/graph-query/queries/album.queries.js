import { gql } from '@apollo/client';

export const GET_ALBUMS = gql`
    query getAllAlbums {
        albums {
            id
            userId
            title
        }
    }
`;

export const GET_ALBUMS_BY_USER_ID = gql`
    query albumsByUserId($userId: String) {
        albumsByUserId(userId: $userId) {
            id
            userId
            title
        }
    }
`;

export const GET_ALBUM = gql`
    query getAlbum($id: ID!) {
        album(id: $id) {
            id
            userId
            title
        }
    }
`;
