import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import TableLoader from '@components/table-loader/TableLoader';
import ApiError from '@components/api-error/ApiError';
import { AbsolutePhotoRoutes } from '@src/presentation/router/routes.constant';
import PhotoList from '@pages/photos/components/photo-list/PhotoList';
import { GET_PHOTOS_BY_ALBUM_ID } from '@graphQuery/queries/photo.queries';

function AlbumPhotosPage() {
    const { id: albumId } = useParams();
    const { error, loading, data } = useQuery(GET_PHOTOS_BY_ALBUM_ID, {
        variables: { albumId: albumId },
    });

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Album Photos</h1>
                <Link
                    to={AbsolutePhotoRoutes.CreatePhoto}
                    className="btn btn-outline-primary btn-sm"
                >
                    Create Photo
                </Link>
            </div>
            {loading && <TableLoader />}
            {error && <ApiError error={error} />}
            {data && <PhotoList photoList={data.photosByAlbumId} />}
        </div>
    );
}

export default AlbumPhotosPage;
