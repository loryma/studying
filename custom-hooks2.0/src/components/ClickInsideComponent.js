import React, { useRef } from 'react';
import useClickInside from '../hooks/useClickInside';
import callback from './callbackInsideClick';

function ClickInsideComponent() {
  const divRef = useRef();
  
  useClickInside(divRef, callback);

  return (
    <div>
      I am parent 
      <div ref={divRef}>
        I and my children have click listener
        <div>I am a child and my parent has click listener</div>
      </div>
    </div>
  )
};

export default ClickInsideComponent;