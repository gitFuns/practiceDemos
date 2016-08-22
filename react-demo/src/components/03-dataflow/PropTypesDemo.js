import React, { Component, PropTypes } from 'react';

class PropTypesDemo extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  }

  props = {
      title: '默认的title'
  }

  render(){
    return <b>{this.props.title}</b>
  }
}

export default PropTypesDemo;
