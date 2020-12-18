import React, { useState } from 'react';

function App() {
  const [state, setState] = useState('on');

  return <button onClick={() => setState(state => state === 'on' ? 'off' : 'on')}>
    button is {state}
  </button>;
};

export default App;
