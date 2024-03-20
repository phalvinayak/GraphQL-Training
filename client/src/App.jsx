import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import UxHeader from './presentation/common/components/ux-header/UxHeader.jsx';
import UxPopupContextProvider from './presentation/common/library/ux-popup/UxPopupContextProvider.jsx';

function App() {
    return (
        <UxPopupContextProvider>
            <ToastContainer />
            <div>
                <UxHeader />
                <Container className="mt-4 mb-4">
                    <Row>
                        <Col>
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            </div>
        </UxPopupContextProvider>
    );
}

export default App;
