import InfoMessage from '@components/info-message/InfoMessage';
import { useMemo } from 'react';
import UxTable from '@library/ux-table/UxTable';
import AlbumActions from '../album-actions/AlbumActions';
import AlbumRelatedLinks from '../album-related-links/AlbumRelatedLinks';

function AlbumList({ albumList }) {
    const columns = useMemo(
        () => [
            {
                key: 'id',
                title: '#ID',
            },
            {
                key: 'userId',
                title: 'User Id',
            },
            {
                key: 'title',
                title: 'Title',
            },
            {
                key: 'relatedRecords',
                title: 'Related Records',
                render: (album) => <AlbumRelatedLinks album={album} />,
            },
            {
                key: 'action',
                title: 'Action',
                render: (album) => <AlbumActions album={album} />,
            },
        ],
        []
    );

    if (albumList.length === 0) {
        return (
            <InfoMessage
                title="No albums found"
                message="Please create a new album"
            />
        );
    }

    return <UxTable columns={columns} data={albumList} />;
}

export default AlbumList;
