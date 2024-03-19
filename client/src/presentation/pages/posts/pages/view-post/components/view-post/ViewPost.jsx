function ViewPost({ post }) {
    return (
        <div>
            <dl>
                <dt>#ID</dt>
                <dd>{post.id}</dd>
                <dt>User ID</dt>
                <dd>{post.userId}</dd>
                <dt>Title</dt>
                <dd>{post.title}</dd>
                <dt>Body</dt>
                <dd>{post.body}</dd>
            </dl>
        </div>
    );
}

export default ViewPost;
