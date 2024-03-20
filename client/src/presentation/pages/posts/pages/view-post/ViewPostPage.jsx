import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import { GET_POST } from '@graphQuery/queries/post.queries';
import TableLoader from '@components/table-loader/TableLoader';
import ApiError from '@components/api-error/ApiError';
import { AbsolutePostRoutes } from '@src/presentation/router/routes.constant';
import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import UxButton from '@src/presentation/common/library/ux-button/UxButton';
import useDeletePost from '@pages/posts/hooks/useDeletePost';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ViewPost from '@pages/posts/pages/view-post/components/view-post/ViewPost';
import { toast } from 'react-toastify';

function ViewUserPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const onDelete = useCallback(() => {
        toast.success('Post deleted successfully');
        navigate(AbsolutePostRoutes.Posts);
    }, [navigate]);
    const { error, loading, data } = useQuery(GET_POST, { variables: { id } });
    const { openDeletePostPopup, loading: deletePostLoading } = useDeletePost({
        id,
        onDelete,
    });

    return (
        <div>
            <UxBackLink text="Back to Posts" />
            <div className="d-flex justify-content-between align-items-center">
                <h1>View Post</h1>
                <div className="d-flex gap-2">
                    <Link
                        to={AbsolutePostRoutes.EditPost.replace(':id', id)}
                        className="btn btn-outline-primary btn-sm"
                    >
                        Edit Post
                    </Link>
                    <UxButton
                        variant="outline"
                        title="Delete Post"
                        onClick={openDeletePostPopup}
                        disabled={deletePostLoading}
                        className="btn btn-outline-danger btn-sm"
                    >
                        Delete Post
                    </UxButton>
                </div>
            </div>
            {loading && <TableLoader />}
            {error && <ApiError error={error} />}
            {data && <ViewPost post={data.post} />}
        </div>
    );
}

export default ViewUserPage;
