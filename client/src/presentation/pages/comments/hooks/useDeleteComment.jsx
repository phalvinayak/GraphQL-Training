import { useMutation } from '@apollo/client';
import usePopup from '@library/ux-popup/hooks/usePopup';
import { useCallback } from 'react';
import { DELETE_COMMENT } from '@src/application/graph-query/mutations/comment.mutations';
import { GET_COMMENTS } from '@src/application/graph-query/queries/comment.queries';

function useDeleteComment({ id, onDelete }) {
    const { openPopup, closePopup } = usePopup();

    const [deleteComment, { error, loading }] = useMutation(DELETE_COMMENT, {
        refetchQueries: [GET_COMMENTS, 'getAllComments'],
    });

    const confirmDeleteComment = useCallback(async () => {
        await deleteComment({ variables: { id } });
        closePopup();
        onDelete?.();
    }, [id, deleteComment, closePopup, onDelete]);

    const openDeleteCommentPopup = useCallback(() => {
        openPopup(
            {
                title: 'Delete Comment',
                children: (
                    <div>Are you sure you want to delete the comment?</div>
                ),
            },
            {
                handleAccept: () => {
                    confirmDeleteComment();
                },
                handleCancel: () => {
                    closePopup();
                },
                acceptButtonVariant: 'danger',
                acceptButtonText: 'Delete',
            }
        );
    }, [openPopup, closePopup, confirmDeleteComment]);

    return { openDeleteCommentPopup, error, loading };
}

export default useDeleteComment;
