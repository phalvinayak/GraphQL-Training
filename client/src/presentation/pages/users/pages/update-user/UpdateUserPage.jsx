import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import UserForm from '@pages/users/components/user-form/UserForm';
import { useCallback, useMemo } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_USER } from '@graphQuery/mutations/user.mutations';
import { GET_USER, GET_USERS } from '@graphQuery/queries/user.queries';
import { useParams } from 'react-router-dom';
import ApiError from '@components/api-error/ApiError';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AbsoluteUserRoutes } from '@src/presentation/router/routes.constant';

function UpdateUserPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const {
        error: loadUserError,
        loading: loadUserLoading,
        data,
    } = useQuery(GET_USER, {
        variables: { id },
    });

    const initialValues = useMemo(() => {
        if (!data?.user) {
            return {
                id: '',
                name: '',
                username: '',
            };
        }
        return {
            id: data.user.id,
            name: data.user.name,
            username: data.user.username,
        };
    }, [data]);

    const [updateUser, { error: updateUserError, loading: updateUserLoading }] =
        useMutation(UPDATE_USER, {
            refetchQueries: [GET_USERS, 'getAllUsers'],
        });

    const onSubmit = useCallback(
        async (userFormData) => {
            try {
                await updateUser({
                    variables: userFormData,
                });
                toast.success('User updated successfully');
                navigate(AbsoluteUserRoutes.Users);
            } catch (error) {
                toast.error('Unable to update user');
            }
        },
        [updateUser, navigate]
    );

    return (
        <div>
            <UxBackLink text="Back to Users" />
            <h1>Update User</h1>
            <UserForm
                initialValues={initialValues}
                onSubmit={onSubmit}
                isDisabled={loadUserLoading || updateUserLoading}
                isEdit
            />
            {loadUserError && <ApiError error={loadUserError} />}
            {updateUserError && <ApiError error={updateUserError} />}
        </div>
    );
}

export default UpdateUserPage;
