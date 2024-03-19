import { useMutation } from '@apollo/client';
import usePopup from '@library/ux-popup/hooks/usePopup';
import { useCallback } from 'react';
import { DELETE_PHOTO } from '@src/application/graph-query/mutations/photo.mutations';
import { GET_PHOTOS } from '@src/application/graph-query/queries/photo.queries';

function useDeletePhoto({ id, onDelete }) {
    const { openPopup, closePopup } = usePopup();

    const [deletePhoto, { error, loading }] = useMutation(DELETE_PHOTO, {
        refetchQueries: [GET_PHOTOS, 'getAllPhotos'],
    });

    const confirmDeletePhoto = useCallback(async () => {
        await deletePhoto({
            variables: {
                id: id,
            },
        });
        closePopup();
        onDelete?.();
    }, [id, deletePhoto, closePopup, onDelete]);

    const openDeletePhotoPopup = useCallback(() => {
        openPopup(
            {
                title: 'Delete Photo',
                children: <div>Are you sure you want to delete the Photo?</div>,
            },
            {
                handleAccept: () => {
                    confirmDeletePhoto();
                },
                handleCancel: () => {
                    closePopup();
                },
                acceptButtonVariant: 'danger',
                acceptButtonText: 'Delete',
            }
        );
    }, [openPopup, closePopup, confirmDeletePhoto]);

    return { openDeletePhotoPopup, error, loading };
}

export default useDeletePhoto;
