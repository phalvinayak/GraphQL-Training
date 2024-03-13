import postsDB from './postsDb.js';

let posts = postsDB;

const postsResolver = {
    // Resolvers for Queries
    Query: {
        posts: () => posts,
        post: (parent, { id }, context) => posts.find((post) => post.id === id),
    },

    // Resolvers for Mutations
    Mutation: {
        createPost: (_, { post }) => {
            posts.push(post);
            return post;
        },

        updatePost: (_, { post }) => {
            const index = posts.findIndex((p) => p.id === post.id);
            if (index) {
                posts[index] = { ...posts[index], ...post };
            }
            return posts[index];
        },

        deletePost: (_, { id }) => {
            posts = posts.filter((p) => p.id != id);
            return posts;
        },
    },
};

export default postsResolver;
