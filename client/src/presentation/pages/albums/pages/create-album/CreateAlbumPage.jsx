import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import { useCallback, useMemo } from 'react';
import { useMutation } from '@apollo/client';
import ApiError from '@src/presentation/common/components/api-error/ApiError';
import { CREATE_ALBUM } from '@graphQuery/mutations/album.mutations';
import { GET_ALBUMS } from '@graphQuery/queries/album.queries';
import AlbumForm from '@pages/albums/components/album-form/AlbumForm';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AbsoluteAlbumRoutes } from '@src/presentation/router/routes.constant';

function CreateAlbumPage() {
    const navigate = useNavigate();
    const initialValues = useMemo(() => {
        return {
            id: '',
            userId: '',
            title: '',
        };
    }, []);

    const [createAlbum, { error, loading }] = useMutation(CREATE_ALBUM, {
        refetchQueries: [GET_ALBUMS, 'getAllAlbums'],
    });

    const onSubmit = useCallback(
        async (albumFormData) => {
            try {
                await createAlbum({
                    variables: { album: albumFormData },
                });
                toast.success('Album created successfully');
                navigate(AbsoluteAlbumRoutes.Albums);
            } catch (error) {
                toast.error('Unable to create album');
            }
        },
        [createAlbum, navigate]
    );

    return (
        <div>
            <UxBackLink text="Back to Albums" />
            <h1>Create Album</h1>
            <AlbumForm
                initialValues={initialValues}
                onSubmit={onSubmit}
                isDisabled={loading}
            />
            {error && <ApiError error={error} />}
        </div>
    );
}

export default CreateAlbumPage;
