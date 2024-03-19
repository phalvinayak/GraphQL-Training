import InfoMessage from '@components/info-message/InfoMessage';
import { useMemo } from 'react';
import UxTable from '@library/ux-table/UxTable';
import PhotoActions from '@pages/photos/components/photo-actions/PhotoActions';

function PhotoList({ photoList }) {
    const columns = useMemo(
        () => [
            {
                key: 'id',
                title: '#ID',
            },
            {
                key: 'albumId',
                title: 'Album Id',
            },
            {
                key: 'title',
                title: 'Title',
            },
            {
                key: 'thumbnail',
                title: 'Thumbnail',
                render: (photo) => (
                    <img
                        src={photo.thumbnailUrl}
                        className="img-thumbnail w-25 h-25"
                        alt={photo.title}
                    />
                ),
            },
            {
                key: 'action',
                title: 'Action',
                render: (photo) => <PhotoActions photo={photo} />,
            },
        ],
        []
    );

    if (photoList.length === 0) {
        return (
            <InfoMessage
                title="No albums found"
                message="Please create a new album"
            />
        );
    }

    return <UxTable columns={columns} data={photoList} />;
}

export default PhotoList;
