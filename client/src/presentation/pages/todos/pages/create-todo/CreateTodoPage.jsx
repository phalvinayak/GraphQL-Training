import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import { useCallback, useMemo } from 'react';
import { useMutation } from '@apollo/client';
import ApiError from '@src/presentation/common/components/api-error/ApiError';
import { CREATE_TODO } from '@src/application/graph-query/mutations/todo.mutations';
import { GET_TODOS } from '@src/application/graph-query/queries/todo.queries';
import TodoForm from '@pages/todos/components/todo-form/TodoForm';

function CreateTodoPage() {
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
        (todoFormData) => {
            createTodo({
                variables: { todo: todoFormData },
            });
        },
        [createTodo]
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
