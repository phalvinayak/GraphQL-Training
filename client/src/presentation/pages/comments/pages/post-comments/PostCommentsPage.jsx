import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import TableLoader from '@components/table-loader/TableLoader';
import ApiError from '@components/api-error/ApiError';
import { AbsoluteCommentRoutes } from '@src/presentation/router/routes.constant';
import { useParams } from 'react-router-dom';
import { GET_COMMENTS_BY_POST_ID } from '@graphQuery/queries/comment.queries';
import CommentList from '@pages/comments/components/comment-list/CommentList';

function PostCommentsPage() {
    const { id: postId } = useParams();

    const { error, loading, data } = useQuery(GET_COMMENTS_BY_POST_ID, {
        variables: { postId: postId },
    });

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Comments</h1>
                <Link
                    to={AbsoluteCommentRoutes.CreateComment}
                    className="btn btn-outline-primary btn-sm"
                >
                    Create Comment
                </Link>
            </div>
            {loading && <TableLoader />}
            {error && <ApiError error={error} />}
            {data && <CommentList commentList={data.commentsByPostId} />}
        </div>
    );
}

export default PostCommentsPage;
