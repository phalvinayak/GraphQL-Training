import { mergeResolvers } from '@graphql-tools/merge';
import usersResolver from './user/users.resolver.js';
import postsResolver from './post/posts.resolver.js';
import commentsResolver from './comment/comments.resolver.js';
import todosResolver from './todo/todos.resolver.js';
import albumsResolver from './album/albums.resolver.js';
import photosResolver from './photo/photos.resolver.js';
import subscriptionResolvers from './subscription/subscription.resolver.js';

export default mergeResolvers([
    usersResolver,
    postsResolver,
    commentsResolver,
    todosResolver,
    albumsResolver,
    photosResolver,
    subscriptionResolvers,
]);
