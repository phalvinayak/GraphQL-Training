import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { MdEdit, MdDeleteOutline } from 'react-icons/md';
import { AbsoluteUserRoutes } from '@src/presentation/router/routes.constant';
import useDeleteUser from '@pages/users/hooks/useDeleteUser';
import UxButton from '@library/ux-button/UxButton';

function UserActions({ user }) {
    const { openDeleteUserPopup, loading } = useDeleteUser({
        id: user.id,
    });

    return (
        <div className="d-flex align-items-center gap-2">
            <Link
                to={AbsoluteUserRoutes.ViewUser.replace(':id', user.id)}
                title="View user"
            >
                <FaEye />
            </Link>
            <Link
                to={AbsoluteUserRoutes.EditUser.replace(':id', user.id)}
                title="Edit user"
            >
                <MdEdit />
            </Link>
            <UxButton
                variant="link"
                title="Delete user"
                onClick={openDeleteUserPopup}
                disabled={loading}
                className="p-0"
            >
                <MdDeleteOutline className="text-danger" />
            </UxButton>
        </div>
    );
}

export default UserActions;
