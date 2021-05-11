import React, { useState } from 'react';
import Popup from './Popup';

function PageWithPopup({ buttonText }) {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [isInnerPopupOpened, setIsInnerPopupOpened] = useState(false);

  const closeFirstPopup = () => {
    setIsPopupOpened(false);
  };

  const openFirstPopup = () => {
    setIsPopupOpened(true);
  };

  const closeSecondPopup = () => {
    setIsInnerPopupOpened(false);
  };

  const openSecondPopup = (e) => {
    e.stopPropagation();
    setIsInnerPopupOpened(true);
  }

  return (
    <div>
        <button onClick={openFirstPopup}>
          {buttonText}
        </button>
      <Popup isOpened={isPopupOpened} onClose={closeFirstPopup}>
        <p>
          I am a content of the popup
          <button onClick={openSecondPopup}>
            If you click me you will see another popup.
            <Popup isOpened={isInnerPopupOpened} onClose={closeSecondPopup}>
              I am an inner popup
            </Popup>
          </button>
        </p>
      </Popup>
    </div>
  )
};

export default PageWithPopup;