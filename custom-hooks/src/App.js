import React, { useRef, useState } from 'react';
import usePrevious from './hooks/usePrevious';
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
  const [value, setValue] = useState('');

  useClickInside(clickInsideRefOne, clickInsiderRefOneCallback);
  useClickInside(clickInsideRefTwo, clickInsiderRefTwoCallback);

  useClickOutside(clickOutsideRef, clickOutside);

  const previous = usePrevious(value);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const input = form.get("input");
    setValue(input);
  }

  return (
    <div>
      <h3>Previous</h3>
      <form onSubmit={onSubmit}>
        <input name="input" type='text' />
      </form>
      {previous && <p>Previous: {previous}</p>}
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
