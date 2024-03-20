import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import TableLoader from '@components/table-loader/TableLoader';
import ApiError from '@components/api-error/ApiError';
import { AbsoluteAlbumRoutes } from '@src/presentation/router/routes.constant';
import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import UxButton from '@src/presentation/common/library/ux-button/UxButton';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_ALBUM } from '@graphQuery/queries/album.queries';
import useDeleteAlbum from '@pages/albums/hooks/useDeleteAlbum';
import ViewAlbum from '@pages/albums/pages/view-album/components/view-album/ViewAlbum';

function ViewAlbumPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const onDelete = useCallback(() => {
        navigate(AbsoluteAlbumRoutes.Albums);
    }, [navigate]);
    const { error, loading, data } = useQuery(GET_ALBUM, { variables: { id } });
    const { openDeleteAlbumPopup, loading: deleteAlbumLoading } =
        useDeleteAlbum({
            id,
            onDelete,
        });

    return (
        <div>
            <UxBackLink text="Back to Albums" />
            <div className="d-flex justify-content-between align-items-center">
                <h1>View Album</h1>
                <div className="d-flex gap-2">
                    <Link
                        to={AbsoluteAlbumRoutes.EditAlbum.replace(':id', id)}
                        className="btn btn-outline-primary btn-sm"
                    >
                        Edit Album
                    </Link>
                    <UxButton
                        variant="outline"
                        title="Delete Album"
                        onClick={openDeleteAlbumPopup}
                        disabled={deleteAlbumLoading}
                        className="btn btn-outline-danger btn-sm"
                    >
                        Delete Album
                    </UxButton>
                </div>
            </div>
            {loading && <TableLoader />}
            {error && <ApiError error={error} />}
            {data && <ViewAlbum album={data.album} />}
        </div>
    );
}

export default ViewAlbumPage;
