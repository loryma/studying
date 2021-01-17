import React from 'react';
import Header from './Header';

class DependencyInjection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'React Dependency Injection'};
  }
  render() {
    return <Header />;
  }
};

export default DependencyInjection;