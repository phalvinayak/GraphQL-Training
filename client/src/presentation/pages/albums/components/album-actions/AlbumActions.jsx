import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { MdEdit, MdDeleteOutline } from 'react-icons/md';
import { AbsoluteAlbumRoutes } from '@src/presentation/router/routes.constant';
import UxButton from '@library/ux-button/UxButton';
import useDeleteAlbum from '@pages/albums/hooks/useDeleteAlbum';
import { useCallback } from 'react';
import { toast } from 'react-toastify';

function AlbumActions({ album }) {
    const onDelete = useCallback(() => {
        toast.success('Album deleted successfully');
    }, []);
    const { openDeleteAlbumPopup, loading } = useDeleteAlbum({
        id: album.id,
        onDelete,
    });

    return (
        <div className="d-flex align-items-center gap-2">
            <Link
                to={AbsoluteAlbumRoutes.ViewAlbum.replace(':id', album.id)}
                title="View album"
            >
                <FaEye />
            </Link>
            <Link
                to={AbsoluteAlbumRoutes.EditAlbum.replace(':id', album.id)}
                title="Edit album"
            >
                <MdEdit />
            </Link>
            <UxButton
                variant="link"
                title="Delete album"
                onClick={openDeleteAlbumPopup}
                disabled={loading}
                className="p-0"
            >
                <MdDeleteOutline className="text-danger" />
            </UxButton>
        </div>
    );
}

export default AlbumActions;
