import { gql } from '@apollo/client';

export const GET_PHOTOS = gql`
    query getAllPhotos {
        photos {
            id
            albumId
            title
            url
            thumbnailUrl
        }
    }
`;

export const GET_PHOTOS_BY_ALBUM_ID = gql`
    query photosByAlbumId($albumId: String) {
        photosByAlbumId(albumId: $albumId) {
            id
            albumId
            title
            url
            thumbnailUrl
        }
    }
`;

export const GET_PHOTO = gql`
    query getPhoto($id: ID!) {
        photo(id: $id) {
            id
            albumId
            title
            url
            thumbnailUrl
        }
    }
`;
