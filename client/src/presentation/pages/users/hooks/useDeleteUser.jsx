import { useMutation } from '@apollo/client';
import usePopup from '@library/ux-popup/hooks/usePopup';
import { useCallback } from 'react';
import { DELETE_USER } from '@graphQuery/mutations/user.mutations';
import { GET_USERS } from '@graphQuery/queries/user.queries';

function useDeleteUser({ id, onDelete }) {
    const { openPopup, closePopup } = usePopup();

    const [deleteUser, { error, loading }] = useMutation(DELETE_USER, {
        refetchQueries: [GET_USERS, 'getAllUsers'],
    });

    const confirmDeleteUser = useCallback(async () => {
        await deleteUser({ variables: { id } });
        closePopup();
        onDelete?.();
    }, [id, deleteUser, closePopup, onDelete]);

    const openDeleteUserPopup = useCallback(() => {
        openPopup(
            {
                title: 'Delete User',
                children: <div>Are you sure you want to delete the user?</div>,
            },
            {
                handleAccept: () => {
                    confirmDeleteUser();
                },
                handleCancel: () => {
                    closePopup();
                },
                acceptButtonVariant: 'danger',
                acceptButtonText: 'Delete',
            }
        );
    }, [openPopup, closePopup, confirmDeleteUser]);

    return { openDeleteUserPopup, error, loading };
}

export default useDeleteUser;
