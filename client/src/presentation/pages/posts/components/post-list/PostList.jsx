import InfoMessage from '@components/info-message/InfoMessage';
import { useMemo } from 'react';
import UxTable from '@library/ux-table/UxTable';
import PostRelatedLinks from '@src/presentation/pages/posts/components/post-related-links/PostRelatedLinks';
import PostActions from '@src/presentation/pages/posts/components/post-actions/PostActions';

function PostList({ postList }) {
    const columns = useMemo(
        () => [
            {
                key: 'id',
                title: '#ID',
            },
            {
                key: 'userId',
                title: 'User Id',
            },
            {
                key: 'title',
                title: 'Title',
            },
            {
                key: 'relatedRecords',
                title: 'Related Records',
                render: (post) => <PostRelatedLinks post={post} />,
            },
            {
                key: 'action',
                title: 'Action',
                render: (post) => <PostActions post={post} />,
            },
        ],
        []
    );

    if (postList.length === 0) {
        return (
            <InfoMessage
                title="No posts found"
                message="Please create a new post"
            />
        );
    }

    return <UxTable columns={columns} data={postList} />;
}

export default PostList;
