import { createBrowserRouter } from 'react-router-dom';
import App from '@src/App';
import {
    CommonRoutes,
    UserRoutes,
    PostRoutes,
    TodoRoutes,
    CommentRoutes,
    AlbumRoutes,
    PhotoRoutes,
} from '@src/presentation/router/routes.constant';
import ErrorPage from '@pages/error/ErrorPage';
import NotFound from '@pages/not-found/NotFound';
import UsersPage from '@pages/users/pages/users/UsersPage';
import ViewUserPage from '@pages/users/pages/view-user/ViewUserPage';
import CreateUserPage from '@pages/users/pages/create-user/CreateUserPage';
import UpdateUserPage from '@pages/users/pages/update-user/UpdateUserPage';
import PostsPage from '@pages/posts/pages/posts/PostsPage';
import ViewPostPage from '@pages/posts/pages/view-post/ViewPostPage';
import CreatePostPage from '@pages/posts/pages/create-post/CreatePostPage';
import UpdatePostPage from '@pages/posts/pages/update-post/UpdatePostPage';
import UserPostsPage from '@pages/posts/pages/user-posts/UserPostsPage';
import TodosPage from '@pages/todos/pages/todos/TodosPage';
import UserTodosPage from '@pages/todos/pages/user-todos/UserTodosPage';
import ViewTodoPage from '@pages/todos/pages/view-todo/ViewTodoPage';
import CreateTodoPage from '@pages/todos/pages/create-todo/CreateTodoPage';
import UpdateTodoPage from '@pages/todos/pages/update-todo/UpdateTodoPage';
import CommentsPage from '@pages/comments/pages/comments/CommentsPage';
import PostCommentsPage from '@pages/comments/pages/post-comments/PostCommentsPage';
import ViewCommentPage from '@pages/comments/pages/view-comment/ViewCommentPage';
import CreateCommentPage from '@pages/comments/pages/create-comment/CreateCommentPage';
import UpdateCommentPage from '@pages/comments/pages/update-comment/UpdateCommentPage';
import AlbumsPage from '@pages/albums/pages/albums/AlbumsPage';
import UserAlbumsPage from '@pages/albums/pages/user-albums/UserAlbumsPage';
import ViewAlbumPage from '@pages/albums/pages/view-album/ViewAlbumPage';
import CreateAlbumPage from '@pages/albums/pages/create-album/CreateAlbumPage';
import UpdateAlbumPage from '@pages/albums/pages/update-album/UpdateAlbumPage';
import UpdatePhotoPage from '@pages/photos/pages/update-photo/UpdatePhotoPage';
import CreatePhotoPage from '@pages/photos/pages/create-photo/CreatePhotoPage';
import ViewPhotoPage from '@pages/photos/pages/view-photo/ViewPhotoPage';
import AlbumPhotosPage from '@pages/photos/pages/album-photos/AlbumPhotosPage';
import PhotosPage from '@pages/photos/pages/photos/PhotosPage';
import HomePage from '@pages/home/HomePage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: UserRoutes.Users,
                children: [
                    {
                        index: true,
                        element: <UsersPage />,
                    },
                    {
                        path: UserRoutes.ViewUser,
                        element: <ViewUserPage />,
                    },
                    {
                        path: UserRoutes.CreateUser,
                        element: <CreateUserPage />,
                    },
                    {
                        path: UserRoutes.EditUser,
                        element: <UpdateUserPage />,
                    },
                ],
            },
            {
                path: PostRoutes.Posts,
                children: [
                    {
                        index: true,
                        element: <PostsPage />,
                    },
                    {
                        path: PostRoutes.UserPosts,
                        element: <UserPostsPage />,
                    },
                    {
                        path: PostRoutes.ViewPost,
                        element: <ViewPostPage />,
                    },
                    {
                        path: PostRoutes.CreatePost,
                        element: <CreatePostPage />,
                    },
                    {
                        path: PostRoutes.EditPost,
                        element: <UpdatePostPage />,
                    },
                ],
            },
            {
                path: TodoRoutes.Todos,
                children: [
                    {
                        index: true,
                        element: <TodosPage />,
                    },
                    {
                        path: TodoRoutes.UserTodos,
                        element: <UserTodosPage />,
                    },
                    {
                        path: TodoRoutes.ViewTodo,
                        element: <ViewTodoPage />,
                    },
                    {
                        path: TodoRoutes.CreateTodo,
                        element: <CreateTodoPage />,
                    },
                    {
                        path: TodoRoutes.EditTodo,
                        element: <UpdateTodoPage />,
                    },
                ],
            },
            {
                path: CommentRoutes.Comments,
                children: [
                    {
                        index: true,
                        element: <CommentsPage />,
                    },
                    {
                        path: CommentRoutes.PostComments,
                        element: <PostCommentsPage />,
                    },
                    {
                        path: CommentRoutes.ViewComment,
                        element: <ViewCommentPage />,
                    },
                    {
                        path: CommentRoutes.CreateComment,
                        element: <CreateCommentPage />,
                    },
                    {
                        path: CommentRoutes.EditComment,
                        element: <UpdateCommentPage />,
                    },
                ],
            },
            {
                path: AlbumRoutes.Albums,
                children: [
                    {
                        index: true,
                        element: <AlbumsPage />,
                    },
                    {
                        path: AlbumRoutes.UserAlbums,
                        element: <UserAlbumsPage />,
                    },
                    {
                        path: AlbumRoutes.ViewAlbum,
                        element: <ViewAlbumPage />,
                    },
                    {
                        path: AlbumRoutes.CreateAlbum,
                        element: <CreateAlbumPage />,
                    },
                    {
                        path: AlbumRoutes.EditAlbum,
                        element: <UpdateAlbumPage />,
                    },
                ],
            },
            {
                path: PhotoRoutes.Photos,
                children: [
                    {
                        index: true,
                        element: <PhotosPage />,
                    },
                    {
                        path: PhotoRoutes.AlbumPhotos,
                        element: <AlbumPhotosPage />,
                    },
                    {
                        path: PhotoRoutes.ViewPhoto,
                        element: <ViewPhotoPage />,
                    },
                    {
                        path: PhotoRoutes.CreatePhoto,
                        element: <CreatePhotoPage />,
                    },
                    {
                        path: PhotoRoutes.EditPhoto,
                        element: <UpdatePhotoPage />,
                    },
                ],
            },
            {
                path: CommonRoutes.NotFound,
                element: <NotFound />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);

export default router;
