import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import { GET_USER } from '@graphQuery/queries/user.queries';
import TableLoader from '@components/table-loader/TableLoader';
import ApiError from '@components/api-error/ApiError';
import ViewUser from '@pages/users/pages/view-user/components/view-user/ViewUser';
import { AbsoluteUserRoutes } from '@src/presentation/router/routes.constant';
import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import UxButton from '@src/presentation/common/library/ux-button/UxButton';
import useDeleteUser from '@pages/users/hooks/useDeleteUser';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function ViewUserPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const onDelete = useCallback(() => {
        navigate(AbsoluteUserRoutes.Users);
    }, [navigate]);
    const { error, loading, data } = useQuery(GET_USER, { variables: { id } });
    const { openDeleteUserPopup, loading: deleteUserLoading } = useDeleteUser({
        id,
        onDelete,
    });

    return (
        <div>
            <UxBackLink text="Back to Users" />
            <div className="d-flex justify-content-between align-items-center">
                <h1>View Users</h1>
                <div className="d-flex gap-2">
                    <Link
                        to={AbsoluteUserRoutes.EditUser.replace(':id', id)}
                        className="btn btn-outline-primary btn-sm"
                    >
                        Edit User
                    </Link>
                    <UxButton
                        variant="outline"
                        title="Delete User"
                        onClick={openDeleteUserPopup}
                        disabled={deleteUserLoading}
                        className="btn btn-outline-danger btn-sm"
                    >
                        Delete User
                    </UxButton>
                </div>
            </div>
            {loading && <TableLoader />}
            {error && <ApiError error={error} />}
            {data && <ViewUser user={data.user} />}
        </div>
    );
}

export default ViewUserPage;
