import React from 'react';

class SetRefComponent extends React.Component {
  setRef = (ref) => {
    this.ref = ref;
  }

  componentDidMount() {
    console.log(this.ref);
  }

  render() {
    return <div ref={this.setRef}>setRef</div>
  }
};

export default SetRefComponent;