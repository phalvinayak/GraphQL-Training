import { useMutation } from '@apollo/client';
import usePopup from '@library/ux-popup/hooks/usePopup';
import { useCallback } from 'react';
import { DELETE_TODO } from '@src/application/graph-query/mutations/todo.mutations';
import { GET_TODOS } from '@src/application/graph-query/queries/todo.queries';

function useDeleteTodo({ id, onDelete }) {
    const { openPopup, closePopup } = usePopup();

    const [deleteTodo, { error, loading }] = useMutation(DELETE_TODO, {
        refetchQueries: [GET_TODOS, 'getAllTodos'],
    });

    const confirmDeleteTodo = useCallback(async () => {
        await deleteTodo({ variables: { id } });
        closePopup();
        onDelete?.();
    }, [id, deleteTodo, closePopup, onDelete]);

    const openDeleteTodoPopup = useCallback(() => {
        openPopup(
            {
                title: 'Delete Todo',
                children: <div>Are you sure you want to delete the todo?</div>,
            },
            {
                handleAccept: () => {
                    confirmDeleteTodo();
                },
                handleCancel: () => {
                    closePopup();
                },
                acceptButtonVariant: 'danger',
                acceptButtonText: 'Delete',
            }
        );
    }, [openPopup, closePopup, confirmDeleteTodo]);

    return { openDeleteTodoPopup, error, loading };
}

export default useDeleteTodo;
