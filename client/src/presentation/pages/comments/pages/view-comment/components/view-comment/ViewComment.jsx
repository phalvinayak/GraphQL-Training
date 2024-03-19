function ViewComment({ comment }) {
    return (
        <div>
            <dl>
                <dt>#ID</dt>
                <dd>{comment.id}</dd>
                <dt>Post #ID</dt>
                <dd>{comment.postId}</dd>
                <dt>Name</dt>
                <dd>{comment.name}</dd>
                <dt>E-Mail</dt>
                <dd>{comment.email}</dd>
                <dt>Body</dt>
                <dd>{comment.body}</dd>
            </dl>
        </div>
    );
}

export default ViewComment;
