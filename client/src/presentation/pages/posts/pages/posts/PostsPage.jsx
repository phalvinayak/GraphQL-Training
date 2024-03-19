import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import TableLoader from '@components/table-loader/TableLoader';
import ApiError from '@components/api-error/ApiError';
import PostList from '@src/presentation/pages/posts/components/post-list/PostList';
import { AbsolutePostRoutes } from '@src/presentation/router/routes.constant';
import { GET_POSTS } from '@src/application/graph-query/queries/post.queries';

function PostsPage() {
    const { error, loading, data } = useQuery(GET_POSTS);

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Posts</h1>
                <Link
                    to={AbsolutePostRoutes.CreatePost}
                    className="btn btn-outline-primary btn-sm"
                >
                    Create Post
                </Link>
            </div>
            {loading && <TableLoader />}
            {error && <ApiError error={error} />}
            {data && <PostList postList={data.posts} />}
        </div>
    );
}

export default PostsPage;
