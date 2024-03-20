import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import TableLoader from '@components/table-loader/TableLoader';
import ApiError from '@components/api-error/ApiError';
import { AbsoluteCommentRoutes } from '@src/presentation/router/routes.constant';
import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import UxButton from '@src/presentation/common/library/ux-button/UxButton';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_COMMENT } from '@graphQuery/queries/comment.queries';
import useDeleteComment from '@pages/comments/hooks/useDeleteComment';
import ViewComment from '@pages/comments/pages/view-comment/components/view-comment/ViewComment';
import { toast } from 'react-toastify';

function ViewCommentPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const onDelete = useCallback(() => {
        toast.success('Comment deleted successfully');
        navigate(AbsoluteCommentRoutes.Comments);
    }, [navigate]);
    const { error, loading, data } = useQuery(GET_COMMENT, {
        variables: { id },
    });
    const { openDeleteCommentPopup, loading: deleteCommentLoading } =
        useDeleteComment({
            id,
            onDelete,
        });

    return (
        <div>
            <UxBackLink text="Back to Comments" />
            <div className="d-flex justify-content-between align-items-center">
                <h1>View Comments</h1>
                <div className="d-flex gap-2">
                    <Link
                        to={AbsoluteCommentRoutes.EditComment.replace(
                            ':id',
                            id
                        )}
                        className="btn btn-outline-primary btn-sm"
                    >
                        Edit Comment
                    </Link>
                    <UxButton
                        variant="outline"
                        title="Delete comment"
                        onClick={openDeleteCommentPopup}
                        disabled={deleteCommentLoading}
                        className="btn btn-outline-danger btn-sm"
                    >
                        Delete Comment
                    </UxButton>
                </div>
            </div>
            {loading && <TableLoader />}
            {error && <ApiError error={error} />}
            {data && <ViewComment comment={data.comment} />}
        </div>
    );
}

export default ViewCommentPage;
