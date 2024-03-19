import InfoMessage from '@components/info-message/InfoMessage';
import { useMemo } from 'react';
import UserActions from '@pages/users/pages/users/components/user-actions/UserActions';
import UserRelatedLinks from '@pages/users/pages/users/components/user-related-links/UserRelatedLinks';
import UxTable from '@library/ux-table/UxTable';

function UserList({ userList }) {
    const columns = useMemo(
        () => [
            {
                key: 'id',
                title: '#ID',
            },
            {
                key: 'name',
                title: 'Name',
            },
            {
                key: 'username',
                title: 'Username',
            },
            {
                key: 'relatedRecords',
                title: 'Related Records',
                render: (user) => <UserRelatedLinks user={user} />,
            },
            {
                key: 'action',
                title: 'Action',
                render: (user) => <UserActions user={user} />,
            },
        ],
        []
    );

    if (userList.length === 0) {
        return (
            <InfoMessage
                title="No users found"
                message="Please create a user"
            />
        );
    }

    return <UxTable columns={columns} data={userList} />;
}

export default UserList;
