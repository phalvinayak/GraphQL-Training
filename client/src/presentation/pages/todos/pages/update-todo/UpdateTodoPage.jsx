import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import { useCallback, useMemo } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import ApiError from '@components/api-error/ApiError';
import { GET_TODO, GET_TODOS } from '@graphQuery/queries/todo.queries';
import { UPDATE_TODO } from '@graphQuery/mutations/todo.mutations';
import TodoForm from '@pages/todos/components/todo-form/TodoForm';

function UpdateTodoPage() {
    const { id } = useParams();
    const {
        error: loadTodoError,
        loading: todosLoading,
        data,
    } = useQuery(GET_TODO, {
        variables: { id },
    });

    const initialValues = useMemo(() => {
        if (!data?.todo) {
            return {
                id: '',
                userId: '',
                title: '',
                completed: false,
            };
        }
        return {
            id: data.todo.id,
            userId: data.todo.userId,
            title: data.todo.title,
            completed: data.todo.completed,
        };
    }, [data]);

    const [updateTodo, { error: updateTodoError, loading: updateTodoLoading }] =
        useMutation(UPDATE_TODO, {
            refetchQueries: [GET_TODOS, 'getAllTodos'],
        });

    const onSubmit = useCallback(
        (todoFormData) => {
            updateTodo({
                variables: { todo: todoFormData },
            });
        },
        [updateTodo]
    );

    return (
        <div>
            <UxBackLink text="Back to Todos" />
            <h1>Update Todo</h1>
            <TodoForm
                initialValues={initialValues}
                onSubmit={onSubmit}
                isDisabled={todosLoading || updateTodoLoading}
                isEdit
            />
            {loadTodoError && <ApiError error={loadTodoError} />}
            {updateTodoError && <ApiError error={updateTodoError} />}
        </div>
    );
}

export default UpdateTodoPage;
