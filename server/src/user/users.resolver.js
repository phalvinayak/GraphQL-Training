import usersDB from './usersDb.js';

let users = usersDB;

const usersResolver = {
    // Resolvers for Queries
    Query: {
        greeting: () => 'Greeting GraphQL world!👋',
        welcome: () => 'Welcome GraphQL world!👋',
        hello: () => 'Hello GraphQL world!👋',
        users: () => users,
        user: (_, { id }) => users.find((user) => user.id === id),
    },

    // Resolvers for Mutations
    Mutation: {
        createUser: (_, { user }) => {
            users.push(user);
            return user;
        },

        updateUser: (_, { user }) => {
            const index = users.findIndex((u) => u.id === user.id);
            if (index >= 0) {
                users[index] = { ...users[index], ...user };
                return users[index];
            }
            throw new Error('User does not exist');
        },

        deleteUser: (_, { id }) => {
            console.log('delete', id);
            users = users.filter((u) => u.id != id);
            return users;
        },
    },
};

export default usersResolver;
