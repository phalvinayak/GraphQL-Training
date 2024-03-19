function ViewPhoto({ photo }) {
    return (
        <div>
            <dl>
                <dt>#ID</dt>
                <dd>{photo.id}</dd>
                <dt>Album ID</dt>
                <dd>{photo.albumId}</dd>
                <dt>Title</dt>
                <dd>{photo.title}</dd>
                <dt>Image</dt>
                <dd>
                    <img
                        src={photo.url}
                        className="w-50 h-50 img-fluid rounded img-thumbnail"
                        alt={photo.title}
                    />
                </dd>
            </dl>
        </div>
    );
}

export default ViewPhoto;
