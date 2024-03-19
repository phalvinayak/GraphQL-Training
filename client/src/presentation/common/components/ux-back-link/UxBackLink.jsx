import { MdOutlineChevronLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import UxButton from '@library/ux-button/UxButton';
import { useCallback } from 'react';

function UxBackLink({ text }) {
    const navigate = useNavigate();

    const goBack = useCallback(() => navigate(-1), [navigate]);

    return (
        <div className="d-flex align-items-center">
            <UxButton
                variant="link"
                className="text-decoration-none d-flex align-items-center"
                onClick={goBack}
            >
                <MdOutlineChevronLeft className="fs-4" />
                {text}
            </UxButton>
        </div>
    );
}

export default UxBackLink;
