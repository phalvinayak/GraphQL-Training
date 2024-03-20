import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    from,
    split,
} from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { onError } from '@apollo/client/link/error';
import { getMainDefinition } from '@apollo/client/utilities';
import {
    APOLLO_SERVER_HOST,
    APOLLO_SERVER_POST,
    APOLLO_SERVER_ENDPOINT,
} from '@src/application/constants/api.constants';

const errorLink = onError(({ graphqlErrors }) => {
    if (graphqlErrors) {
        graphqlErrors.map(({ message, location, path }) => {
            alert(
                `Graphql error ${message} \n location: ${location} \n path: ${path}`
            );
        });
    }
});

const httpLink = from([
    errorLink,
    new HttpLink({
        uri: `${APOLLO_SERVER_HOST}:${APOLLO_SERVER_POST}${APOLLO_SERVER_ENDPOINT}`,
    }),
]);

const wsLink = new GraphQLWsLink(
    createClient({
        url: 'ws://localhost:4000/graphql',
    })
);

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink
);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: splitLink,
});

export default client;
