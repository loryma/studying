import React, { useState } from 'react';
import Counter from './Counter';

function CounterParent() {
  const [countersNumber, setCountersNumber] = useState(0);

  return (
    <div>
      <button onClick={() => setCountersNumber(count => count + 1)}>
        add
      </button>
      <button onClick={() => setCountersNumber(count => count - 1)}>
        removed
      </button>
      {[...new Array(countersNumber)].map((el, index) => (
        <Counter key={index} />
      ))}
    </div>
  );
};

export default CounterParent;