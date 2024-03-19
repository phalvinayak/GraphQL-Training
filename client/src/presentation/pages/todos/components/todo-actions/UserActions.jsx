import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { MdEdit, MdDeleteOutline } from 'react-icons/md';
import { AbsoluteTodoRoutes } from '@src/presentation/router/routes.constant';
import UxButton from '@library/ux-button/UxButton';
import useDeleteTodo from '@src/presentation/pages/todos/hooks/useDeleteTodo';

function TodoActions({ todo }) {
    const { openDeleteTodoPopup, loading } = useDeleteTodo({
        id: todo.id,
    });

    return (
        <div className="d-flex align-items-center gap-2">
            <Link
                to={AbsoluteTodoRoutes.ViewTodo.replace(':id', todo.id)}
                title="View todo"
            >
                <FaEye />
            </Link>
            <Link
                to={AbsoluteTodoRoutes.EditTodo.replace(':id', todo.id)}
                title="Edit todo"
            >
                <MdEdit />
            </Link>
            <UxButton
                variant="link"
                title="Delete todo"
                onClick={openDeleteTodoPopup}
                disabled={loading}
                className="p-0"
            >
                <MdDeleteOutline className="text-danger" />
            </UxButton>
        </div>
    );
}

export default TodoActions;
