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
    this.props.onChange(!this.props.value);
    console.log(this.props.value);
    console.log('Button is clicked inside' +  this.state.name );
  }
};
export default Switcher;