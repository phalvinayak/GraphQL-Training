import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import TableLoader from '@components/table-loader/TableLoader';
import ApiError from '@components/api-error/ApiError';
import { AbsoluteAlbumRoutes } from '@src/presentation/router/routes.constant';
import { GET_ALBUMS } from '@src/application/graph-query/queries/album.queries';
import AlbumList from '@pages/albums/components/album-list/AlbumList';

function AlbumsPage() {
    const { error, loading, data } = useQuery(GET_ALBUMS);

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Albums</h1>
                <Link
                    to={AbsoluteAlbumRoutes.CreateAlbum}
                    className="btn btn-outline-primary btn-sm"
                >
                    Create Album
                </Link>
            </div>
            {loading && <TableLoader />}
            {error && <ApiError error={error} />}
            {data && <AlbumList albumList={data.albums} />}
        </div>
    );
}

export default AlbumsPage;
