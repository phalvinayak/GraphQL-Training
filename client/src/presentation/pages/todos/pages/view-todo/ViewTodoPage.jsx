import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import TableLoader from '@components/table-loader/TableLoader';
import ApiError from '@components/api-error/ApiError';
import { AbsoluteTodoRoutes } from '@src/presentation/router/routes.constant';
import UxBackLink from '@src/presentation/common/components/ux-back-link/UxBackLink';
import UxButton from '@src/presentation/common/library/ux-button/UxButton';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ViewTodo from '@pages/todos/pages/view-todo/components/view-todo/ViewTodo';
import { GET_TODO } from '@graphQuery/queries/todo.queries';
import useDeleteTodo from '@pages/todos/hooks/useDeleteTodo';
import { toast } from 'react-toastify';

function ViewTodoPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const onDelete = useCallback(() => {
        toast.success('Todo deleted successfully');
        navigate(AbsoluteTodoRoutes.Todos);
    }, [navigate]);
    const { error, loading, data } = useQuery(GET_TODO, { variables: { id } });
    const { openDeleteTodoPopup, loading: deleteTodoLoading } = useDeleteTodo({
        id,
        onDelete,
    });

    return (
        <div>
            <UxBackLink text="Back to Todos" />
            <div className="d-flex justify-content-between align-items-center">
                <h1>View Todos</h1>
                <div className="d-flex gap-2">
                    <Link
                        to={AbsoluteTodoRoutes.EditTodo.replace(':id', id)}
                        className="btn btn-outline-primary btn-sm"
                    >
                        Edit Todo
                    </Link>
                    <UxButton
                        variant="outline"
                        title="Delete todo"
                        onClick={openDeleteTodoPopup}
                        disabled={deleteTodoLoading}
                        className="btn btn-outline-danger btn-sm"
                    >
                        Delete Todo
                    </UxButton>
                </div>
            </div>
            {loading && <TableLoader />}
            {error && <ApiError error={error} />}
            {data && <ViewTodo todo={data.todo} />}
        </div>
    );
}

export default ViewTodoPage;
