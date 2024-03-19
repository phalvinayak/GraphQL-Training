import { useMutation } from '@apollo/client';
import usePopup from '@library/ux-popup/hooks/usePopup';
import { useCallback } from 'react';
import { DELETE_POST } from '@graphQuery/mutations/post.mutations';
import { GET_POSTS } from '@graphQuery/queries/post.queries';

function useDeletePost({ id, onDelete }) {
    const { openPopup, closePopup } = usePopup();

    const [deletePost, { error, loading }] = useMutation(DELETE_POST, {
        refetchQueries: [GET_POSTS, 'getAllPosts'],
    });

    const confirmDeletePost = useCallback(async () => {
        await deletePost({
            variables: {
                id: id,
            },
        });
        closePopup();
        onDelete?.();
    }, [id, deletePost, closePopup, onDelete]);

    const openDeletePostPopup = useCallback(() => {
        openPopup(
            {
                title: 'Delete Post',
                children: <div>Are you sure you want to delete the Post?</div>,
            },
            {
                handleAccept: () => {
                    confirmDeletePost();
                },
                handleCancel: () => {
                    closePopup();
                },
                acceptButtonVariant: 'danger',
                acceptButtonText: 'Delete',
            }
        );
    }, [openPopup, closePopup, confirmDeletePost]);

    return { openDeletePostPopup, error, loading };
}

export default useDeletePost;
