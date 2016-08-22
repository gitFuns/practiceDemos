'use strict';

import React, { Component } from 'react';

class ComponentA extends Component {
  render() {
    return <a href='#'>我是组件A<br/></a>
  }
}

class ComponentB extends Component {
  render() {
    return <a href='#'>我是组件B</a>
  }
}


class SelfCreateComponent extends Component {
  render() {
    return (
      <i>
        <ComponentA />
        <ComponentB />
      </i>
    );
  }
}

export default SelfCreateComponent;
