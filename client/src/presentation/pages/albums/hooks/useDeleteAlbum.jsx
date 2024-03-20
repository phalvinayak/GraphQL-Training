import { useMutation } from '@apollo/client';
import usePopup from '@library/ux-popup/hooks/usePopup';
import { useCallback } from 'react';
import { DELETE_ALBUM } from '@graphQuery/mutations/album.mutations';
import { GET_ALBUMS } from '@graphQuery/queries/album.queries';

function useDeleteAlbum({ id, onDelete }) {
    const { openPopup, closePopup } = usePopup();

    const [deleteAlbum, { error, loading }] = useMutation(DELETE_ALBUM, {
        refetchQueries: [GET_ALBUMS, 'getAllAlbums'],
    });

    const confirmDeleteAlbum = useCallback(async () => {
        await deleteAlbum({
            variables: {
                id: id,
            },
        });
        closePopup();
        onDelete?.();
    }, [id, deleteAlbum, closePopup, onDelete]);

    const openDeleteAlbumPopup = useCallback(() => {
        openPopup(
            {
                title: 'Delete Album',
                children: <div>Are you sure you want to delete the Album?</div>,
            },
            {
                handleAccept: () => {
                    confirmDeleteAlbum();
                },
                handleCancel: () => {
                    closePopup();
                },
                acceptButtonVariant: 'danger',
                acceptButtonText: 'Delete',
            }
        );
    }, [openPopup, closePopup, confirmDeleteAlbum]);

    return { openDeleteAlbumPopup, error, loading };
}

export default useDeleteAlbum;
