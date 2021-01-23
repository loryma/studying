import React from 'react';

class Switcher extends React.Component {
  state = { name: 'React in patterns' }

  render() {
    return (
      <button onClick= { this._handleButtonClick}>
        click me
      </button>
    );
  };
  _handleButtonClick = () => {
    console.log('Button is clicked inside' +  this.state.name );
  }
};
export default Switcher;