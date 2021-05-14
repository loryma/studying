import React, { useState } from 'react';
import Popup from './Popup';
import './PageWithPopup.css';

function PageWithPopup({ buttonText, contentClass }) {
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
        <div className={ ["outer-popup", contentClass].join(' ')}>
          <p>I am a content of the popup after button '{buttonText}' is clicked</p>
          <button onClick={openSecondPopup}>
            If you click me you will see another popup.
            <Popup isOpened={isInnerPopupOpened} onClose={closeSecondPopup}>
              <div className="inner-popup">
                I am an inner popup 
              </div>
            </Popup>
          </button>
        </div>
      </Popup>
    </div>
  )
};

export default PageWithPopup;