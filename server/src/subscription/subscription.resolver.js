import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();
const mockLongLastingOperation = (name) => {
    setTimeout(() => {
        pubSub.publish('OPERATION_FINISHED', {
            operationFinished: { name, endDate: new Date().toLocaleString() },
        });
    }, 1000);
};

const subscriptionResolvers = {
    Mutation: {
        scheduleOperation(_, { name }) {
            mockLongLastingOperation(name);
            return `Operation: ${name} scheduled! at ${new Date().toLocaleString()}`;
        },
    },
    Query: {
        foo() {
            return 'Welcome To GraphQL Subscription Example';
        },
    },
    Subscription: {
        operationFinished: {
            subscribe: () => pubSub.asyncIterator(['OPERATION_FINISHED']),
        },
    },
};

export default subscriptionResolvers;
