import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import TableLoader from '@components/table-loader/TableLoader';
import ApiError from '@components/api-error/ApiError';
import { AbsolutePhotoRoutes } from '@src/presentation/router/routes.constant';
import { GET_PHOTOS } from '@graphQuery/queries/photo.queries';
import PhotoList from '@pages/photos/components/photo-list/PhotoList';

function PhotosPage() {
    const { error, loading, data } = useQuery(GET_PHOTOS);

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Photos</h1>
                <Link
                    to={AbsolutePhotoRoutes.CreatePhoto}
                    className="btn btn-outline-primary btn-sm"
                >
                    Create Photo
                </Link>
            </div>
            {loading && <TableLoader />}
            {error && <ApiError error={error} />}
            {data && <PhotoList photoList={data.photos} />}
        </div>
    );
}

export default PhotosPage;
