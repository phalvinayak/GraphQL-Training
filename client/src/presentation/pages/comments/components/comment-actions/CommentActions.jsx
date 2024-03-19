import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { MdEdit, MdDeleteOutline } from 'react-icons/md';
import { AbsoluteCommentRoutes } from '@src/presentation/router/routes.constant';
import UxButton from '@library/ux-button/UxButton';
import useDeleteComment from '@pages/comments/hooks/useDeleteComment';

function CommentActions({ comment }) {
    const { openDeleteCommentPopup, loading } = useDeleteComment({
        id: comment.id,
    });

    return (
        <div className="d-flex align-items-center gap-2">
            <Link
                to={AbsoluteCommentRoutes.ViewComment.replace(
                    ':id',
                    comment.id
                )}
                title="View comment"
            >
                <FaEye />
            </Link>
            <Link
                to={AbsoluteCommentRoutes.EditComment.replace(
                    ':id',
                    comment.id
                )}
                title="Edit comment"
            >
                <MdEdit />
            </Link>
            <UxButton
                variant="link"
                title="Delete comment"
                onClick={openDeleteCommentPopup}
                disabled={loading}
                className="p-0"
            >
                <MdDeleteOutline className="text-danger" />
            </UxButton>
        </div>
    );
}

export default CommentActions;
