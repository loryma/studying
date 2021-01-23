import logo from './logo.svg';
import './App.css';
import AsyncStateComponent from './async-nature-of-state/AsyncStateComponent';
import Switcher from './event-handlers/Switcher';
import StateApp from './one-way-data-flow/App.js';
import Clock from './presentation-vs-container';

function App() {
  return (
    <>
      <AsyncStateComponent />
      <Switcher />
      <StateApp />
      <Clock time={new Date()} />
    </>
  );
}

export default App;
