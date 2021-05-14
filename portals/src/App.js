import logo from './logo.svg';
import './App.css';
import PageWithPopup from './portal/PageWithPopup';

function App() {
  return (
    <div className="App">
      <PageWithPopup buttonText={'Click me to see first popup'} contentClass={"pink"} />
      <PageWithPopup buttonText={'Click me to see second popup'} contentClass={"yellow"} />
    </div>
  );
}

export default App;
