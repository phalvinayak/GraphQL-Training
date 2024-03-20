import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadFilesSync } from '@graphql-tools/load-files';
import { printSchema } from 'graphql';
import resolvers from './resolver.js';

const typeDefs = loadSchemaSync('./**/*.graphql', {
    loaders: [new GraphQLFileLoader()],
});

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server);

console.log(`🚀 Server ready at ${url}`);
