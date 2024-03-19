import InfoMessage from '@components/info-message/InfoMessage';
import { useMemo } from 'react';
import UxTable from '@library/ux-table/UxTable';
import TodoActions from '@src/presentation/pages/todos/components/todo-actions/UserActions';

function TodoList({ todoList }) {
    const columns = useMemo(
        () => [
            {
                key: 'id',
                title: '#ID',
            },
            {
                key: 'userId',
                title: 'User #ID',
            },
            {
                key: 'title',
                title: 'Title',
            },
            {
                key: 'completed',
                title: 'Is Completed',
                render: (todo) => (todo.completed ? 'Yes' : 'No'),
            },
            {
                key: 'action',
                title: 'Action',
                render: (todo) => <TodoActions todo={todo} />,
            },
        ],
        []
    );

    if (todoList.length === 0) {
        return (
            <InfoMessage
                title="No Todo's found"
                message="Please create a new Todo!"
            />
        );
    }

    return <UxTable columns={columns} data={todoList} />;
}

export default TodoList;
