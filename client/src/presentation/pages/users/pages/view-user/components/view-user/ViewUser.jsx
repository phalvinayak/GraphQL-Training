function ViewUser({ user }) {
    return (
        <div>
            <dl>
                <dt>Id</dt>
                <dd>{user.id}</dd>
                <dt>Name</dt>
                <dd>{user.name}</dd>
                <dt>Username</dt>
                <dd>{user.username}</dd>
            </dl>
        </div>
    );
}

export default ViewUser;
