function ViewAlbum({ album }) {
    return (
        <div>
            <dl>
                <dt>#ID</dt>
                <dd>{album.id}</dd>
                <dt>User ID</dt>
                <dd>{album.userId}</dd>
                <dt>Title</dt>
                <dd>{album.title}</dd>
            </dl>
        </div>
    );
}

export default ViewAlbum;
