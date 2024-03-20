import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import TableLoader from '@components/table-loader/TableLoader';
import ApiError from '@components/api-error/ApiError';
import { AbsolutePhotoRoutes } from '@src/presentation/router/routes.constant';
import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import UxButton from '@library/ux-button/UxButton';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_PHOTO } from '@graphQuery/queries/photo.queries';
import useDeletePhoto from '@pages/photos/hooks/useDeletePhoto';
import ViewPhoto from '@pages/photos/pages/view-photo/components/view-photo/ViewPhoto';
import { toast } from 'react-toastify';

function ViewPhotoPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const onDelete = useCallback(() => {
        toast.success('Photo deleted successfully');
        navigate(AbsolutePhotoRoutes.Photos);
    }, [navigate]);

    const { error, loading, data } = useQuery(GET_PHOTO, { variables: { id } });
    const { openDeletePhotoPopup, loading: deletePhotoLoading } =
        useDeletePhoto({ id, onDelete });

    return (
        <div>
            <UxBackLink text="Back to Photos" />
            <div className="d-flex justify-content-between align-items-center">
                <h1>View Photo</h1>
                <div className="d-flex gap-2">
                    <Link
                        to={AbsolutePhotoRoutes.EditPhoto.replace(':id', id)}
                        className="btn btn-outline-primary btn-sm"
                    >
                        Edit Photo
                    </Link>
                    <UxButton
                        variant="outline"
                        title="Delete Photo"
                        onClick={openDeletePhotoPopup}
                        disabled={deletePhotoLoading}
                        className="btn btn-outline-danger btn-sm"
                    >
                        Delete Photo
                    </UxButton>
                </div>
            </div>
            {loading && <TableLoader />}
            {error && <ApiError error={error} />}
            {data && <ViewPhoto photo={data.photo} />}
        </div>
    );
}

export default ViewPhotoPage;
