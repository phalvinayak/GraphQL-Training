import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function UxPopup({
    isPopupVisible,
    popupModel,
    popupControlsModel,
    closePopup,
}) {
    const { title, children } = popupModel;
    const {
        handleCancel,
        handleAccept,
        handleClose,
        acceptButtonText = 'Accept',
        cancelButtonText = 'Cancel',
        isAcceptButtonDisabled = false,
        isCancelButtonDisabled = false,
        isAcceptButtonVisible = true,
        isCancelButtonVisible = true,
        isCloseButtonVisible = true,
        acceptButtonVariant = 'primary',
    } = popupControlsModel;

    const onClose = () => {
        closePopup();
        handleClose?.();
    };

    return (
        <Modal
            show={isPopupVisible}
            onHide={onClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton={isCloseButtonVisible}>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            {(isAcceptButtonVisible || isCancelButtonVisible) && (
                <Modal.Footer>
                    {isCancelButtonVisible && (
                        <Button
                            variant="secondary"
                            onClick={handleCancel}
                            disabled={isCancelButtonDisabled}
                        >
                            {cancelButtonText}
                        </Button>
                    )}
                    {isAcceptButtonVisible && (
                        <Button
                            variant={acceptButtonVariant}
                            onClick={handleAccept}
                            disabled={isAcceptButtonDisabled}
                        >
                            {acceptButtonText}
                        </Button>
                    )}
                </Modal.Footer>
            )}
        </Modal>
    );
}

export default UxPopup;
