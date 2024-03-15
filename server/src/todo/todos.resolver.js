import todosDB from './todosDb.js';

let todos = todosDB;

const todosResolver = {
    // Resolvers for Queries
    Query: {
        todos: () => todos,
        todo: (_, { id }) => todos.find((todo) => todo.id === id),
        todosByUserId: (_, { userId }) =>
            todos.filter((todo) => todo.userId === userId),
    },

    User: {
        todos(user) {
            return todos.filter((todo) => todo.userId === user.id);
        },
    },

    // Resolvers for Mutations
    Mutation: {
        createTodo: (_, { todo }) => {
            todos.push(todo);
            console.log('Creating new todo', todo);
            return todo;
        },

        updateTodo: (_, { todo }) => {
            const index = todos.findIndex((c) => c.id === todo.id);
            if (index >= 0) {
                todos[index] = { ...todos[index], ...todo };
                return todos[index];
            }
            throw new Error('Todo does not exist');
        },

        deleteTodo: (_, { id }) => {
            console.log('delete', id);
            todos = todos.filter((todo) => todo.id != id);
            return todos;
        },
    },
};

export default todosResolver;
