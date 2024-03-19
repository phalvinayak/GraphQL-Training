import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import TableLoader from '@components/table-loader/TableLoader';
import ApiError from '@components/api-error/ApiError';
import { AbsoluteTodoRoutes } from '@src/presentation/router/routes.constant';
import { GET_TODOS_BY_USER_ID } from '@src/application/graph-query/queries/todo.queries';
import TodoList from '@src/presentation/pages/todos/components/todo-list/TodoList';
import { useParams } from 'react-router-dom';

function UserTodosPage() {
    const { id: userId } = useParams();
    const { error, loading, data } = useQuery(GET_TODOS_BY_USER_ID, {
        variables: { userId: userId },
    });

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Todos</h1>
                <Link
                    to={AbsoluteTodoRoutes.CreateTodo}
                    className="btn btn-outline-primary btn-sm"
                >
                    Create Todo
                </Link>
            </div>
            {loading && <TableLoader />}
            {error && <ApiError error={error} />}
            {data && <TodoList todoList={data.todosByUserId} />}
        </div>
    );
}

export default UserTodosPage;
