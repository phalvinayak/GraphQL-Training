import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import {
    AbsoluteAlbumRoutes,
    AbsoluteCommentRoutes,
    AbsoluteCommonRoutes,
    AbsolutePhotoRoutes,
    AbsolutePostRoutes,
    AbsoluteTodoRoutes,
    AbsoluteUserRoutes,
} from '@src/presentation/router/routes.constant';

function UxHeader() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <Link
                    to={AbsoluteCommonRoutes.BaseUrl}
                    className="navbar-brand"
                >
                    Apollo GraphQL Client
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link
                            to={AbsoluteCommonRoutes.BaseUrl}
                            className="nav-link"
                        >
                            Home
                        </Link>
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <Link
                                to={AbsoluteUserRoutes.Users}
                                className="dropdown-item"
                            >
                                Users
                            </Link>
                            <Link
                                to={AbsolutePostRoutes.Posts}
                                className="dropdown-item"
                            >
                                Posts
                            </Link>
                            <Link
                                to={AbsoluteCommentRoutes.Comments}
                                className="dropdown-item"
                            >
                                Comments
                            </Link>
                            <Link
                                to={AbsoluteAlbumRoutes.Albums}
                                className="dropdown-item"
                            >
                                Albums
                            </Link>
                            <Link
                                to={AbsolutePhotoRoutes.Photos}
                                className="dropdown-item"
                            >
                                Photos
                            </Link>
                            <Link
                                to={AbsoluteTodoRoutes.Todos}
                                className="dropdown-item"
                            >
                                Todos
                            </Link>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default UxHeader;
