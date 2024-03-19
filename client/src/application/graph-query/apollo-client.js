import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import {
    APOLLO_SERVER_HOST,
    APOLLO_SERVER_POST,
} from '../constants/api.constants';

const errorLink = onError(({ graphqlErrors }) => {
    if (graphqlErrors) {
        graphqlErrors.map(({ message, location, path }) => {
            alert(
                `Graphql error ${message} \n location: ${location} \n path: ${path}`
            );
        });
    }
});

const link = from([
    errorLink,
    new HttpLink({ uri: `${APOLLO_SERVER_HOST}:${APOLLO_SERVER_POST}` }),
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});

export default client;
