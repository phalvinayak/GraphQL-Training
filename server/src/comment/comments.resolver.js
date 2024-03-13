import commentsDB from './commentsDb.js';

let comments = commentsDB;

const usersResolver = {
    // Resolvers for Queries
    Query: {
        comments: () => comments,
        comment: (_, { id }) => comments.find((comment) => comment.id == id),
    },

    // Resolvers for Mutations
    Mutation: {
        createComment: (_, { comment }) => {
            comments.push(comment);
            console.log('Creating new comment', comment);
            return comment;
        },

        updateComment: (_, { comment }) => {
            const index = comments.findIndex((c) => c.id === comment.id);
            if (index) {
                comments[index] = { ...comments[index], ...comment };
            }
            return comments[index];
        },

        deleteComment: (_, { id }) => {
            console.log('delete', id);
            comments = comments.filter((c) => c.id != id);
            return comments;
        },
    },
};

export default usersResolver;
