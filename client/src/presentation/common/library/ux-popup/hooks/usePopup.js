import { useContext } from 'react';
import PopupContext from '@library/ux-popup/UxPopupContext';

function usePopup() {
    return useContext(PopupContext);
}

export default usePopup;
