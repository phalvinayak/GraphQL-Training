import { mergeResolvers } from '@graphql-tools/merge';
import usersResolver from './user/users.resolver.js';
import postsResolver from './post/posts.resolver.js';
import commentsResolver from './comment/comments.resolver.js';

export default mergeResolvers([usersResolver, postsResolver, commentsResolver]);
