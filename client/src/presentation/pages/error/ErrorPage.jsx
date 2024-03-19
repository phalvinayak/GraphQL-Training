import { Link } from 'react-router-dom';
import { BiSolidErrorAlt } from 'react-icons/bi';

function ErrorPage() {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column mt-5 mb-5 p-5">
            <BiSolidErrorAlt className="fs-1 text-danger" />
            <h3>Oops something went wrong</h3>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default ErrorPage;
