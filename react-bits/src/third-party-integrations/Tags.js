import React from 'react';
import $ from 'jquery';

class Tags extends React.Component {
  componentDidMount() {
    this.list = $(this.refs.list);
    this.list.tagit();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(newProps) {
    this.list.tagit('createTag', newProps.newTag);
  }

  render() {
    return (
      <ul ref='list'>
        { this.props.tags.map((tag, i) => <li key={ i }>{ tag } </li>) }
      </ul>
    )
  }
};

export default Tags;