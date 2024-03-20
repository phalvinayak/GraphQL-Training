import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { MdEdit, MdDeleteOutline } from 'react-icons/md';
import { AbsoluteUserRoutes } from '@src/presentation/router/routes.constant';
import useDeleteUser from '@pages/users/hooks/useDeleteUser';
import UxButton from '@library/ux-button/UxButton';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function UserActions({ user }) {
    const navigate = useNavigate();
    const onDelete = useCallback(() => {
        toast.success('User deleted successfully');
        navigate(AbsoluteUserRoutes.Users);
    }, [navigate]);
    const { openDeleteUserPopup, loading } = useDeleteUser({
        id: user.id,
        onDelete,
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
