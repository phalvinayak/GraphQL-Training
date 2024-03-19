import { Link } from 'react-router-dom';
import { AbsoluteCommentRoutes } from '@src/presentation/router/routes.constant';

function PostRelatedLinks({ post }) {
    return (
        <div className="d-flex align-items-center gap-2">
            <Link
                to={AbsoluteCommentRoutes.PostComments.replace(':id', post.id)}
                title="View user"
            >
                Comments
            </Link>
        </div>
    );
}

export default PostRelatedLinks;
