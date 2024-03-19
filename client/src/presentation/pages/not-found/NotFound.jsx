import { TbError404 } from 'react-icons/tb';
import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column mt-5 mb-5 p-5">
            <TbError404 className="fs-1 text-danger" />
            <h3>Page Not Found</h3>
            <p>The page you are looking for does not exist</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default NotFound;
