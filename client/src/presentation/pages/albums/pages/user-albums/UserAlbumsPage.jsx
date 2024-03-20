import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import TableLoader from '@components/table-loader/TableLoader';
import ApiError from '@components/api-error/ApiError';
import { AbsoluteAlbumRoutes } from '@src/presentation/router/routes.constant';
import { GET_ALBUMS_BY_USER_ID } from '@graphQuery/queries/album.queries';
import AlbumList from '../../components/album-list/AlbumList';

function UserAlbumsPage() {
    const { id: userId } = useParams();
    const { error, loading, data } = useQuery(GET_ALBUMS_BY_USER_ID, {
        variables: { userId: userId },
    });

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h1>User Albums</h1>
                <Link
                    to={AbsoluteAlbumRoutes.CreateAlbum}
                    className="btn btn-outline-primary btn-sm"
                >
                    Create Album
                </Link>
            </div>
            {loading && <TableLoader />}
            {error && <ApiError error={error} />}
            {data && <AlbumList albumList={data.albumsByUserId} />}
        </div>
    );
}

export default UserAlbumsPage;
