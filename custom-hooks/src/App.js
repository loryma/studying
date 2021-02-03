import React, { useRef } from 'react';
import useClickInside from './hooks/useClickInside';
import useClickOutside from './hooks/useClickOutside';

function clickInsiderRefOneCallback(e) {
  alert(`I am callback 1. Button by the name ${e.target.textContent} was clicked`);
};

function clickInsiderRefTwoCallback(e) {
  alert(`I am callback 2. Button by the name ${e.target.textContent} was clicked`);
};

function clickOutside(e) {
  console.log(`I am an outside callback`);
}

function HooksApp() {
  const clickInsideRefOne = useRef();
  const clickInsideRefTwo = useRef();
  const clickOutsideRef = useRef();

  useClickInside(clickInsideRefOne, clickInsiderRefOneCallback);
  useClickInside(clickInsideRefTwo, clickInsiderRefTwoCallback);

  useClickOutside(clickOutsideRef, clickOutside);

  return (
    <div>
      <h3>
        Click inside
      </h3>
      <button 
        ref={clickInsideRefOne}
      >
        button 1 
      </button>
      <button 
        ref={clickInsideRefTwo}
      >
        button 2
      </button>
      <h3>Click outside</h3>
      <div ref={clickOutsideRef} style={{width: '400px', height: '300px', border: '1px solid red'}}>
        <div style={{width: '250px', height: '50px', border: '1px solid black'}}>
          child of element on which outside clicks are registered
        </div>
      </div>
    </div>

  );
};

export default HooksApp;
