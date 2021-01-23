import React from 'react';
import Switcher from '../event-handlers/Switcher';
import store from './store';

class App extends React.Component {
  constructor(props) {
    super(props);
    store.onChange(this.forceUpdate.bind(this));
  }

  render() {
    return (
      <div>
        <Switcher
          value={ store.get() }
          onChange={ store.set.bind(store) }/>
      </div>
    );
  }
};

export default App;