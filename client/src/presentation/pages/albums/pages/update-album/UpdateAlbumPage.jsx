import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import { useCallback, useMemo } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import ApiError from '@components/api-error/ApiError';
import { GET_ALBUM, GET_ALBUMS } from '@graphQuery/queries/album.queries';
import AlbumForm from '@pages/albums/components/album-form/AlbumForm';
import { UPDATE_ALBUM } from '@graphQuery/mutations/album.mutations';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AbsoluteAlbumRoutes } from '@src/presentation/router/routes.constant';

function UpdateAlbumPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const {
        error: loadAlbumError,
        loading: isAlbumLoading,
        data,
    } = useQuery(GET_ALBUM, {
        variables: { id },
    });

    const initialValues = useMemo(() => {
        if (!data?.album) {
            return {
                id: '',
                userId: '',
                title: '',
            };
        }
        return {
            id: data.album.id,
            userId: data.album.userId,
            title: data.album.title,
        };
    }, [data]);

    const [
        updateAlbum,
        { error: updateAlbumError, loading: updateAlbumLoading },
    ] = useMutation(UPDATE_ALBUM, {
        refetchQueries: [GET_ALBUMS, 'getAllAlbums'],
    });

    const onSubmit = useCallback(
        async (albumFormData) => {
            try {
                await updateAlbum({
                    variables: { album: albumFormData },
                });
                toast.success('Album updated successfully');
                navigate(AbsoluteAlbumRoutes.Albums);
            } catch (error) {
                toast.error('Unable to update album');
            }
        },
        [updateAlbum, navigate]
    );

    return (
        <div>
            <UxBackLink text="Back to Albums" />
            <h1>Update Album</h1>
            <AlbumForm
                initialValues={initialValues}
                onSubmit={onSubmit}
                isDisabled={isAlbumLoading || updateAlbumLoading}
                isEdit
            />
            {loadAlbumError && <ApiError error={loadAlbumError} />}
            {updateAlbumError && <ApiError error={updateAlbumError} />}
        </div>
    );
}

export default UpdateAlbumPage;
