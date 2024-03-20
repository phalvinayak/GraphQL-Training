export const AbsoluteCommonRoutes = {
    BaseUrl: '/',
    Subscription: '/subscription',
    NotFound: '/404',
};

export const CommonRoutes = {
    BaseUrl: '',
    Subscription: 'subscription',
    NotFound: '404',
};

export const AbsoluteUserRoutes = {
    Users: '/users',
    ViewUser: '/users/:id',
    CreateUser: '/users/create',
    EditUser: '/users/edit/:id',
};

export const UserRoutes = {
    Users: 'users',
    ViewUser: ':id',
    CreateUser: 'create',
    EditUser: 'edit/:id',
};

export const AbsolutePostRoutes = {
    Posts: '/posts',
    UserPosts: '/posts/user/:id',
    ViewPost: '/posts/:id',
    CreatePost: '/posts/create',
    EditPost: '/posts/edit/:id',
};

export const PostRoutes = {
    Posts: 'posts',
    UserPosts: 'user/:id',
    ViewPost: ':id',
    CreatePost: 'create',
    EditPost: 'edit/:id',
};

export const AbsoluteTodoRoutes = {
    Todos: '/todos',
    UserTodos: '/todos/user/:id',
    ViewTodo: '/todos/:id',
    CreateTodo: '/todos/create',
    EditTodo: '/todos/edit/:id',
};

export const TodoRoutes = {
    Todos: 'todos',
    UserTodos: 'user/:id',
    ViewTodo: ':id',
    CreateTodo: 'create',
    EditTodo: 'edit/:id',
};

export const AbsoluteCommentRoutes = {
    Comments: '/comments',
    PostComments: '/comments/post/:id',
    ViewComment: '/comments/:id',
    CreateComment: '/comments/create',
    EditComment: '/comments/edit/:id',
};

export const CommentRoutes = {
    Comments: 'comments',
    PostComments: 'post/:id',
    ViewComment: ':id',
    CreateComment: 'create',
    EditComment: 'edit/:id',
};

export const AbsoluteAlbumRoutes = {
    Albums: '/albums',
    UserAlbums: '/albums/user/:id',
    ViewAlbum: '/albums/:id',
    CreateAlbum: '/albums/create',
    EditAlbum: '/albums/edit/:id',
};

export const AlbumRoutes = {
    Albums: 'albums',
    UserAlbums: 'user/:id',
    ViewAlbum: ':id',
    CreateAlbum: 'create',
    EditAlbum: 'edit/:id',
};

export const AbsolutePhotoRoutes = {
    Photos: '/photos',
    AlbumPhotos: '/photos/album/:id',
    ViewPhoto: '/photos/:id',
    CreatePhoto: '/photos/create',
    EditPhoto: '/photos/edit/:id',
};

export const PhotoRoutes = {
    Photos: 'photos',
    AlbumPhotos: 'album/:id',
    ViewPhoto: ':id',
    CreatePhoto: 'create',
    EditPhoto: 'edit/:id',
};
