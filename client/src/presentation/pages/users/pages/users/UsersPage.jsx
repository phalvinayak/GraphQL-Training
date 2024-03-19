import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_USERS } from '@graphQuery/queries/user.queries';
import TableLoader from '@components/table-loader/TableLoader';
import ApiError from '@components/api-error/ApiError';
import UserList from '@pages/users/pages/users/components/user-list/UserList';
import { AbsoluteCommonRoutes } from '@src/presentation/router/routes.constant';

function UsersPage() {
    const { error, loading, data } = useQuery(GET_USERS);

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Users</h1>
                <Link
                    to={AbsoluteCommonRoutes.CreateUser}
                    className="btn btn-outline-primary btn-sm"
                >
                    Create User
                </Link>
            </div>
            {loading && <TableLoader />}
            {error && <ApiError error={error} />}
            {data && <UserList userList={data.users} />}
        </div>
    );
}

export default UsersPage;
