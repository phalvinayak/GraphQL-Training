import commentsDB from './commentsDb.js';

let comments = commentsDB;

const usersResolver = {
    // Resolvers for Queries
    Query: {
        comments: () => comments,
        comment: (_, { id }) => comments.find((comment) => comment.id == id),
    },

    Post: {
        comments(post) {
            return comments.filter((comment) => comment.postId === post.id);
        },
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
            if (index >= 0) {
                comments[index] = { ...comments[index], ...comment };
                return comments[index];
            }
            throw new Error('Comment does not exist');
        },

        deleteComment: (_, { id }) => {
            console.log('delete', id);
            comments = comments.filter((c) => c.id != id);
            return comments;
        },
    },
};

export default usersResolver;
