import React from 'react';

class CreateRefComponent extends React.Component {
  constructor(props) {
    super(props);

    // this.ref = React.createRef();
    this.ref = { current: null };
    this.state = { counter: 0 };
    console.log(this.ref);
  }

  componentDidMount() {
    console.log(this.ref.current);
  }

  increment = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    return <div ref={this.ref}>
      <button onClick={this.increment}>+</button>
      <span>{this.state.counter}</span>
      </div>
  }
}

export default CreateRefComponent;