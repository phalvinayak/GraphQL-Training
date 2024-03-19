function ViewTodo({ todo }) {
    return (
        <div>
            <dl>
                <dt>#ID</dt>
                <dd>{todo.id}</dd>
                <dt>User #ID</dt>
                <dd>{todo.userID}</dd>
                <dt>Title</dt>
                <dd>{todo.title}</dd>
                <dt>Is Completed</dt>
                <dd>{todo.isCompleted ? 'Yes' : 'No'}</dd>
            </dl>
        </div>
    );
}

export default ViewTodo;
