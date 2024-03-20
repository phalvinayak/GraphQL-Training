import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import { useCallback, useMemo } from 'react';
import { useMutation } from '@apollo/client';
import ApiError from '@src/presentation/common/components/api-error/ApiError';
import { CREATE_TODO } from '@graphQuery/mutations/todo.mutations';
import { GET_TODOS } from '@graphQuery/queries/todo.queries';
import TodoForm from '@pages/todos/components/todo-form/TodoForm';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AbsoluteTodoRoutes } from '@src/presentation/router/routes.constant';

function CreateTodoPage() {
    const navigate = useNavigate();
    const initialValues = useMemo(() => {
        return {
            id: '',
            userId: '',
            title: '',
            completed: false,
        };
    }, []);

    const [createTodo, { error, loading }] = useMutation(CREATE_TODO, {
        refetchQueries: [GET_TODOS, 'getAllTodos'],
    });

    const onSubmit = useCallback(
        async (todoFormData) => {
            try {
                await createTodo({
                    variables: { todo: todoFormData },
                });
                toast.success('Todo created successfully');
                navigate(AbsoluteTodoRoutes.Todos);
            } catch (error) {
                toast.error('Unable to create todo');
            }
        },
        [createTodo, navigate]
    );

    return (
        <div>
            <UxBackLink text="Back to Todos" />
            <h1>Create Todo</h1>
            <TodoForm
                initialValues={initialValues}
                onSubmit={onSubmit}
                isDisabled={loading}
            />
            {error && <ApiError error={error} />}
        </div>
    );
}

export default CreateTodoPage;
