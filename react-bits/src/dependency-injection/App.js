import Header from './Header';

var context = {title: 'React in patterns'};

class App extends React.Component {
  getChildContext() {
    return context;
  }
  render() {
    return <Header />;
  }
};

App.childContextTypes = {
  title: PropTypes.string
};