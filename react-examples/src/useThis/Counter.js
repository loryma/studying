import React, { useState } from 'react';

let globalCounter = 0;

const Counter = () => {
  const [stateCounter, setStateCounter] = useState(0);

  const onClick = () => {
    globalCounter++;
    setStateCounter(stateCounter => stateCounter + 1);
  }

  return (
    <div>
      <p>global counter - <b>{globalCounter}</b></p>
      <p>state counter - <b>{stateCounter}</b></p>
      <button onClick={onClick}>increment</button>
    </div>
  )
};

export default Counter;