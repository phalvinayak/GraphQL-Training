import {
    AbsoluteAlbumRoutes,
    AbsoluteCommentRoutes,
    AbsolutePhotoRoutes,
    AbsolutePostRoutes,
    AbsoluteTodoRoutes,
    AbsoluteUserRoutes,
    AbsoluteCommonRoutes,
} from '@src/presentation/router/routes.constant';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Hello, Apollo Graphql!</h1>
            <p className="lead">
                This is a simple react client application using Apollo Graphql
                to demonstrate usage of GraphQL. With static JSON Placeholder
                data.
            </p>
            <hr className="my-4" />
            <h3>Routes</h3>
            <ul>
                <li>
                    <Link to={AbsoluteUserRoutes.Users}>Users</Link>
                </li>
                <li>
                    <Link to={AbsolutePostRoutes.Posts}>Posts</Link>
                </li>
                <li>
                    <Link to={AbsoluteCommentRoutes.Comments}>Comments</Link>
                </li>
                <li>
                    <Link to={AbsoluteTodoRoutes.Todos}>Todos</Link>
                </li>
                <li>
                    <Link to={AbsoluteAlbumRoutes.Albums}>Albums</Link>
                </li>
                <li>
                    <Link to={AbsolutePhotoRoutes.Photos}>Photos</Link>
                </li>
                <li>
                    <Link to={AbsoluteCommonRoutes.Subscription}>
                        Subscription
                    </Link>
                </li>
            </ul>
            <hr className="my-4" />
            <h3>Reference</h3>
            <ul>
                <li>
                    <a
                        href="https://jsonplaceholder.typicode.com"
                        target="_blank"
                    >
                        {`{JSON} Placeholder`}
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.apollographql.com/docs/react/"
                        target="_blank"
                    >
                        Apollo GraphQL Client
                    </a>
                </li>
                <li>
                    <a
                        href="https://react-bootstrap.netlify.app/"
                        target="_blank"
                    >
                        React Bootstrap
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default HomePage;
