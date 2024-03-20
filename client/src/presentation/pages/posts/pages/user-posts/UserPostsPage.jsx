import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import TableLoader from '@components/table-loader/TableLoader';
import ApiError from '@components/api-error/ApiError';
import PostList from '@src/presentation/pages/posts/components/post-list/PostList';
import { AbsolutePostRoutes } from '@src/presentation/router/routes.constant';
import { GET_POSTS_BY_USER_ID } from '@graphQuery/queries/post.queries';

function UserPostsPage() {
    const { id: userId } = useParams();
    const { error, loading, data } = useQuery(GET_POSTS_BY_USER_ID, {
        variables: { userId: userId },
    });

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h1>User Posts</h1>
                <Link
                    to={AbsolutePostRoutes.CreatePost}
                    className="btn btn-outline-primary btn-sm"
                >
                    Create Post
                </Link>
            </div>
            {loading && <TableLoader />}
            {error && <ApiError error={error} />}
            {data && <PostList postList={data.postsByUserId} />}
        </div>
    );
}

export default UserPostsPage;
