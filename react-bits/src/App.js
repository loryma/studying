import logo from './logo.svg';
import './App.css';
import AsyncStateComponent from './async-nature-of-state/AsyncStateComponent';
import Switcher from './event-handlers/Switcher';
import StateApp from './one-way-data-flow/App.js';
import Clock from './presentation-vs-container';
// import AppTagit from './third-party-integrations/AppTagit';
import SignInContainer from './reaching-into-component/SigInInContainer';
import Price from './format-text-via-component/Price';
import Scrollable from './findDomNode/UsingDomNodeExample';
import BoxComponent from './styles/StyleFunctions';
import { ButtonBig, ButtonGreen, ButtonRed, ButtonOutline } from './styles/BaseComponent';

function App() {
  return (
    <>
      <AsyncStateComponent />
      <Switcher />
      <StateApp />
      <Clock time={new Date()} />
      {/* <AppTagit /> */}
      <SignInContainer />
      <Price />
      <Scrollable />
      <BoxComponent />
      <ButtonBig>Big</ButtonBig>
      <ButtonGreen>Green</ButtonGreen>
      <ButtonRed>Red</ButtonRed>
      <ButtonOutline>Outline</ButtonOutline>
    </>
  );
}

export default App;
