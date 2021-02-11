import React, { useRef } from 'react';
import useClickOutside from '../hooks/useClickOutside';
import callback from './callbackClick';

function ClickOutsideComponent() {
  const divRef = useRef();
  
  useClickOutside(divRef, callback);

  return (
    <div data-testid="outer-div">
      I am parent 
      <div ref={divRef}>
        I and my children have click listener for outsideclicks
        <div>I am a child and my parent has click listener</div>
      </div>
    </div>
  )
};

export default ClickOutsideComponent;