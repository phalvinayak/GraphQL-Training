import { BiSolidErrorAlt } from 'react-icons/bi';

function ApiError({ error }) {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column mt-5 mb-5 pb-5 pt-5">
            <BiSolidErrorAlt className="fs-2 text-danger" />
            <h3>Something went wrong!</h3>
            <p>{error.message}</p>
        </div>
    );
}

export default ApiError;
