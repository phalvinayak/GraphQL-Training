import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import UserForm from '@pages/users/components/user-form/UserForm';
import { useCallback, useMemo } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '@src/application/graph-query/mutations/user.mutations';
import { GET_USERS } from '@src/application/graph-query/queries/user.queries';
import ApiError from '@src/presentation/common/components/api-error/ApiError';

function CreateUserPage() {
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
        (userFormData) => {
            createUser({
                variables: userFormData,
            });
        },
        [createUser]
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
