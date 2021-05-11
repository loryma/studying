import React from 'react';
import SetRefComponent from './components/SetRefComponent';
import CreateRefComponent from './components/CreateRefComponent';
import CreateRefFunc from './components/CreateRefFunc';
import PageWithPopup from './portal/PageWithPopup';

function App() {

  return (
    <div>
      <SetRefComponent />
      <CreateRefComponent />
      <CreateRefFunc />
      <PageWithPopup buttonText={'Click me to see first popup'} />
      <PageWithPopup buttonText={'Click me to see second popup'} />
    </div>
  );
};

export default App;
