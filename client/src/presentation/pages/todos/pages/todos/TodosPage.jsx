import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import TableLoader from '@components/table-loader/TableLoader';
import ApiError from '@components/api-error/ApiError';
import { AbsoluteTodoRoutes } from '@src/presentation/router/routes.constant';
import { GET_TODOS } from '@src/application/graph-query/queries/todo.queries';
import TodoList from '@src/presentation/pages/todos/components/todo-list/TodoList';

function TodosPage() {
    const { error, loading, data } = useQuery(GET_TODOS);

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
            {data && <TodoList todoList={data.todos} />}
        </div>
    );
}

export default TodosPage;
