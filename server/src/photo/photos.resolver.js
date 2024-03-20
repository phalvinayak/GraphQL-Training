import photosDB from './photosDb.js';

let photos = photosDB;

const photosResolver = {
    // Resolvers for Queries
    Query: {
        photos: () => photos,
        photo: (_, { id }) => photos.find((photo) => photo.id === id),
        photosByAlbumId: (_, { albumId }) =>
            photos.filter((photo) => photo.albumId === albumId),
    },

    Album: {
        photos(album) {
            return photos.filter((photo) => photo.albumId === album.id);
        },
    },

    // Resolvers for Mutations
    Mutation: {
        createPhoto: (_, { photo }) => {
            photos.push(photo);
            return photo;
        },

        updatePhoto: (_, { photo }) => {
            const index = photos.findIndex((p) => p.id === photo.id);
            if (index >= 0) {
                photos[index] = { ...photos[index], ...photo };
                return photos[index];
            }
            throw new Error('Photo does not exist');
        },

        deletePhoto: (_, { id }) => {
            photos = photos.filter((photo) => photo.id != id);
            return photos;
        },
    },
};

export default photosResolver;
