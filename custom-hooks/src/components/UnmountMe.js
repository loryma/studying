import React from 'react';
import useComponentWillUnmount from '../hooks/useComponentWillUnmount';

function componentUnmountedCallback() {
  console.log('I am a callback that executes on component unmount');
};

function UnmountMe({ onClick }) {

  useComponentWillUnmount(componentUnmountedCallback);

  return (
    <button onClick={onClick}>
      Unmount child component
    </button>
  )
};

export default UnmountMe;