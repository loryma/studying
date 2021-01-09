import React from 'react';

class AsyncStateComponent extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      dollars: 10,
    };

    this._saveButtonRef = (btn => { this._btnRef = btn});

    this._onTimeoutHandler = this._onTimeoutHandler.bind(this);
    this._onMouseLeaveHandler = this._onMouseLeaveHandler.bind(this);
    this._onClickHandler = this._onClickHandler.bind(this);
    this._onAjaxCallback = this._onAjaxCallback.bind(this);
  }

  componentDidMount() {
    this._btnRef.addEventListener('mouseleave', this._onMouseLeaveHandler);
    setTimeout(this._onTimeoutHandler, 10000);
    fetch('https://api.github.com/users')
      .then(this._onAjaxcallback);
  }

  render() {
    console.log('State in render ' + JSON.stringify(this.state));
    return (
      <button 
        ref={this._saveButtonRef}
        onClick={this._onClickHandler}
      >
        'Click me'
      </button>
    )
  }

  _onClickHandler() {
    console.log('State before (_onClickHanlder): ' + JSON.stringify(this.state));
    this.setState({
      dollars: this.state.dollars + 10
    });
    console.log('State after (_onClickHandler: ' + JSON.stringify(this.state));
  }

  _onMouseLeaveHandler() {
    console.log('State before (mouseleave): ' + JSON.stringify(this.state));
    this.setState({
      dollars: this.state.dollars + 20
    });
    console.log('State after (mouseleave): ' + JSON.stringify(this.state));
  }

  _onTimeoutHandler() {
    console.log('State before (timeout): ' + JSON.stringify(this.state));
    this.setState({
      dollars: this.state.dollars + 30
    });
    console.log('State after (timeout): ' + JSON.stringify(this.state));
  }

  _onAjaxCallback(response) {
    if (response.status !== 200) {
      console.log('Error in AJAX call: ' + response.statusText);
      return;
    }
    console.log('State before (AJAX call): ' + JSON.stringify(this.state));
    this.setState({
      dollars: this.state.dollars + 40
    });
    console.log('State after (AJAX call): ' + JSON.stringify(this.state));
  }
};

export default AsyncStateComponent;