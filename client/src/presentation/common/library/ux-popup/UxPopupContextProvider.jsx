import { useCallback, useMemo, useState } from 'react';
import PopupContext from '@library/ux-popup/UxPopupContext';
import UxPopup from '@library/ux-popup/components/popup/UxPopup';

function UxPopupContextProvider({ children }) {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [popupModel, setPopupModel] = useState({});
    const [popupControlsModel, setPopupControlsModel] = useState({});
    const [isPopupControlsDisabled, setIsPopupControlsDisabled] =
        useState(false);

    const openPopup = useCallback((model, controls) => {
        setPopupModel(model);
        setPopupControlsModel(controls);
        setIsPopupVisible(true);
    }, []);

    const updatePopupModel = useCallback((model) => setPopupModel(model), []);

    const updatePopupControlsModel = useCallback(
        (controls) => setPopupControlsModel(controls),
        []
    );

    const closePopup = useCallback(() => {
        setIsPopupVisible(false);
    }, []);

    const setPopupControlsDisabled = useCallback((isDisabled) => {
        setIsPopupControlsDisabled(isDisabled);
    }, []);

    const contextData = useMemo(
        () => ({
            openPopup,
            closePopup,
            updatePopupModel,
            updatePopupControlsModel,
            setPopupControlsDisabled,
            popupModel,
            popupControlsModel,
            isPopupVisible,
        }),
        [
            openPopup,
            closePopup,
            updatePopupModel,
            updatePopupControlsModel,
            setPopupControlsDisabled,
            popupModel,
            popupControlsModel,
            isPopupVisible,
        ]
    );
    return (
        <PopupContext.Provider value={contextData}>
            <UxPopup
                isPopupVisible={isPopupVisible}
                isPopupControlsDisabled={isPopupControlsDisabled}
                popupModel={popupModel}
                popupControlsModel={popupControlsModel}
                closePopup={closePopup}
            />
            {children}
        </PopupContext.Provider>
    );
}

export default UxPopupContextProvider;
