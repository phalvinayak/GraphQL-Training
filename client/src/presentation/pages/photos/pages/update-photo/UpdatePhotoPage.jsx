import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import { useCallback, useMemo } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import ApiError from '@components/api-error/ApiError';
import { GET_PHOTO, GET_PHOTOS } from '@graphQuery/queries/photo.queries';
import { UPDATE_PHOTO } from '@graphQuery/mutations/photo.mutations';
import PhotoForm from '../../components/photo-form/PhotoForm';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AbsolutePhotoRoutes } from '@src/presentation/router/routes.constant';

function UpdatePhotoPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const {
        error: loadPhotoError,
        loading: isPhotoLoading,
        data,
    } = useQuery(GET_PHOTO, {
        variables: { id },
    });

    const initialValues = useMemo(() => {
        if (!data?.photo) {
            return {
                id: '',
                albumId: '',
                title: '',
                url: '',
                thumbnailUrl: '',
            };
        }
        return {
            id: data.photo.id,
            albumId: data.photo.albumId,
            title: data.photo.title,
            url: data.photo.url,
            thumbnailUrl: data.photo.thumbnailUrl,
        };
    }, [data]);

    const [
        updatePhoto,
        { error: updatePhotoError, loading: updatePhotoLoading },
    ] = useMutation(UPDATE_PHOTO, {
        refetchQueries: [GET_PHOTOS, 'getAllPhotos'],
    });

    const onSubmit = useCallback(
        async (photoFormData) => {
            try {
                await updatePhoto({
                    variables: { photo: photoFormData },
                });
                toast.success('Photo updated successfully');
                navigate(AbsolutePhotoRoutes.Photos);
            } catch (error) {
                toast.error('Unable to update photo');
            }
        },
        [updatePhoto, navigate]
    );

    return (
        <div>
            <UxBackLink text="Back to Photos" />
            <h1>Update Photo</h1>
            <PhotoForm
                initialValues={initialValues}
                onSubmit={onSubmit}
                isDisabled={isPhotoLoading || updatePhotoLoading}
                isEdit
            />
            {loadPhotoError && <ApiError error={loadPhotoError} />}
            {updatePhotoError && <ApiError error={updatePhotoError} />}
        </div>
    );
}

export default UpdatePhotoPage;
