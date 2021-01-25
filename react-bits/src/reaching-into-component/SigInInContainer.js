import React, { useEffect, useRef } from 'react';
import Input from './Input';

function SignInContainer() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
        <label>User name:</label>
        <Input
          ref={inputRef}
        />
      </div>
  )
};

export default SignInContainer;