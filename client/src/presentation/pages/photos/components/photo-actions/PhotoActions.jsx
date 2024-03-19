import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { MdEdit, MdDeleteOutline } from 'react-icons/md';
import { AbsolutePhotoRoutes } from '@src/presentation/router/routes.constant';
import UxButton from '@library/ux-button/UxButton';
import useDeletePhoto from '@pages/photos/hooks/useDeletePhoto';

function PhotoActions({ photo }) {
    const { openDeletePhotoPopup, loading } = useDeletePhoto({ id: photo.id });

    return (
        <div className="d-flex align-items-center gap-2">
            <Link
                to={AbsolutePhotoRoutes.ViewPhoto.replace(':id', photo.id)}
                title="View photo"
            >
                <FaEye />
            </Link>
            <Link
                to={AbsolutePhotoRoutes.EditPhoto.replace(':id', photo.id)}
                title="Edit photo"
            >
                <MdEdit />
            </Link>
            <UxButton
                variant="link"
                title="Delete photo"
                onClick={openDeletePhotoPopup}
                disabled={loading}
                className="p-0"
            >
                <MdDeleteOutline className="text-danger" />
            </UxButton>
        </div>
    );
}

export default PhotoActions;
