import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import UserForm from '@pages/users/components/user-form/UserForm';
import { useCallback, useMemo } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '@graphQuery/mutations/user.mutations';
import { GET_USERS } from '@graphQuery/queries/user.queries';
import ApiError from '@src/presentation/common/components/api-error/ApiError';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AbsoluteUserRoutes } from '@src/presentation/router/routes.constant';

function CreateUserPage() {
    const navigate = useNavigate();
    const initialValues = useMemo(() => {
        return {
            id: '',
            name: '',
            username: '',
        };
    }, []);

    const [createUser, { error, loading }] = useMutation(CREATE_USER, {
        refetchQueries: [GET_USERS, 'getAllUsers'],
    });

    const onSubmit = useCallback(
        async (userFormData) => {
            try {
                await createUser({
                    variables: userFormData,
                });
                toast.success('User created successfully');
                navigate(AbsoluteUserRoutes.Users);
            } catch (error) {
                toast.error('Unable to crate user');
            }
        },
        [createUser, navigate]
    );

    return (
        <div>
            <UxBackLink text="Back to Users" />
            <h1>Create User</h1>
            <UserForm
                initialValues={initialValues}
                onSubmit={onSubmit}
                isDisabled={loading}
            />
            {error && <ApiError error={error} />}
        </div>
    );
}

export default CreateUserPage;
