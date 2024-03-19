import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { MdEdit, MdDeleteOutline } from 'react-icons/md';
import { AbsolutePostRoutes } from '@src/presentation/router/routes.constant';
import useDeletePost from '@pages/posts/hooks/useDeletePost';
import UxButton from '@library/ux-button/UxButton';

function PostActions({ post }) {
    const { openDeletePostPopup, loading } = useDeletePost({ id: post.id });

    return (
        <div className="d-flex align-items-center gap-2">
            <Link
                to={AbsolutePostRoutes.ViewPost.replace(':id', post.id)}
                title="View post"
            >
                <FaEye />
            </Link>
            <Link
                to={AbsolutePostRoutes.EditPost.replace(':id', post.id)}
                title="Edit post"
            >
                <MdEdit />
            </Link>
            <UxButton
                variant="link"
                title="Delete post"
                onClick={openDeletePostPopup}
                disabled={loading}
                className="p-0"
            >
                <MdDeleteOutline className="text-danger" />
            </UxButton>
        </div>
    );
}

export default PostActions;
