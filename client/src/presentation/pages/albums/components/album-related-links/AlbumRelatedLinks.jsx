import { Link } from 'react-router-dom';
import { AbsolutePhotoRoutes } from '@src/presentation/router/routes.constant';

function AlbumRelatedLinks({ album }) {
    return (
        <div className="d-flex align-items-center gap-2">
            <Link
                to={AbsolutePhotoRoutes.AlbumPhotos.replace(':id', album.id)}
                title="View Photos"
            >
                Photos
            </Link>
        </div>
    );
}

export default AlbumRelatedLinks;
