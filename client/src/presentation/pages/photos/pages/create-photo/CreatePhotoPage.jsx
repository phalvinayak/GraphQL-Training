import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import { useCallback, useMemo } from 'react';
import { useMutation } from '@apollo/client';
import ApiError from '@src/presentation/common/components/api-error/ApiError';
import { CREATE_PHOTO } from '@graphQuery/mutations/photo.mutations';
import { GET_PHOTOS } from '@graphQuery/queries/photo.queries';
import PhotoForm from '@pages/photos/components/photo-form/PhotoForm';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AbsolutePhotoRoutes } from '@src/presentation/router/routes.constant';

function CreatePhotoPage() {
    const navigate = useNavigate();
    const initialValues = useMemo(() => {
        return {
            id: '',
            albumId: '',
            title: '',
            url: '',
            thumbnailUrl: '',
        };
    }, []);

    const [createPhoto, { error, loading }] = useMutation(CREATE_PHOTO, {
        refetchQueries: [GET_PHOTOS, 'getAllPhotos'],
    });

    const onSubmit = useCallback(
        async (photoFormData) => {
            try {
                await createPhoto({
                    variables: { photo: photoFormData },
                });
                toast.success('Photo created successfully');
                navigate(AbsolutePhotoRoutes.Photos);
            } catch (error) {
                toast.error('Unable to create photo');
            }
        },
        [createPhoto, navigate]
    );

    return (
        <div>
            <UxBackLink text="Back to Photos" />
            <h1>Create Photo</h1>
            <PhotoForm
                initialValues={initialValues}
                onSubmit={onSubmit}
                isDisabled={loading}
            />
            {error && <ApiError error={error} />}
        </div>
    );
}

export default CreatePhotoPage;
