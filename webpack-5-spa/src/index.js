import React, { useState } from 'react';
import { render } from 'react-dom';

function App() {
  const [state, setState] = useState('on');

  return <button onClick={() => setState(state => state === 'on' ? 'off' : 'on')}>
    {state}
  </button>;
};

render(<App />, document.getElementById('root'));