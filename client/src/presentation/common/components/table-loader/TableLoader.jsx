import Spinner from 'react-bootstrap/Spinner';

function TableLoader() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-center align-items-center mt-5 mb-5 p-5">
                        <Spinner animation="border" variant="secondary" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableLoader;
