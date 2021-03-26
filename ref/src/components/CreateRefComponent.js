import React from 'react';

class CreateRefComponent extends React.Component {
  constructor(props) {
    super(props);

    this.ref = React.createRef();
    // this.ref = { current: null };
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
    return <div>
      <button onClick={this.increment}>+</button>
      <span>{this.state.counter}</span>
      {this.state.counter % 2 === 0 && <div ref={this.ref}>test</div>}
      </div>
  }
}

export default CreateRefComponent;