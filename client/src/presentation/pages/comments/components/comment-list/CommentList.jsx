import InfoMessage from '@components/info-message/InfoMessage';
import { useMemo } from 'react';
import UxTable from '@library/ux-table/UxTable';
import CommentActions from '@pages/comments/components/comment-actions/CommentActions';

function CommentList({ commentList }) {
    const columns = useMemo(
        () => [
            {
                key: 'id',
                title: '#ID',
            },
            {
                key: 'postId',
                title: 'Post #ID',
            },
            {
                key: 'name',
                title: 'Name',
            },
            {
                key: 'email',
                title: 'Email',
            },
            {
                key: 'action',
                title: 'Action',
                render: (comment) => <CommentActions comment={comment} />,
            },
        ],
        []
    );

    if (commentList.length === 0) {
        return (
            <InfoMessage
                title="No Comment's found"
                message="Please create a new Comment!"
            />
        );
    }

    return <UxTable columns={columns} data={commentList} />;
}

export default CommentList;
