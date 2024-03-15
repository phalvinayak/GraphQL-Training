import postsDB from './postsDb.js';

let posts = postsDB;

const postsResolver = {
    // Resolvers for Queries
    Query: {
        posts: () => posts,
        post: (parent, { id }, context) => posts.find((post) => post.id === id),
        postByUserId: (_, { userId }) =>
            posts.filter((post) => post.userId === userId),
    },

    User: {
        posts(user) {
            console.log('....userId :' + user.id);
            return posts.filter((post) => post.userId === user.id);
        },
    },

    // Resolvers for Mutations
    Mutation: {
        createPost: (_, { post }) => {
            posts.push(post);
            return post;
        },

        updatePost: (_, { post }) => {
            const index = posts.findIndex((p) => p.id === post.id);
            if (index >= 0) {
                posts[index] = { ...posts[index], ...post };
                return posts[index];
            }
            throw new Error('Post does not exist');
        },

        deletePost: (_, { id }) => {
            posts = posts.filter((p) => p.id != id);
            return posts;
        },
    },
};

export default postsResolver;
