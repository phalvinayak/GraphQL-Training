import { Link } from 'react-router-dom';
import {
    AbsolutePostRoutes,
    AbsoluteTodoRoutes,
    AbsoluteAlbumRoutes,
} from '@src/presentation/router/routes.constant';

function UserRelatedLinks({ user }) {
    return (
        <div className="d-flex align-items-center gap-2">
            <Link
                to={AbsolutePostRoutes.UserPosts.replace(':id', user.id)}
                title="View user"
            >
                Posts
            </Link>
            <Link
                to={AbsoluteTodoRoutes.UserTodos.replace(':id', user.id)}
                title="Edit user"
            >
                Todos
            </Link>
            <Link
                to={AbsoluteAlbumRoutes.UserAlbums.replace(':id', user.id)}
                title="View user"
            >
                Albums
            </Link>
        </div>
    );
}

export default UserRelatedLinks;
