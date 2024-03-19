import { FaInfoCircle } from 'react-icons/fa';

function InfoMessage({ title, message }) {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column mt-5 mb-5 p-5">
            <FaInfoCircle className="fs-2 text-primary" />
            <h3>{title}</h3>
            <p>{message}</p>
        </div>
    );
}

export default InfoMessage;
