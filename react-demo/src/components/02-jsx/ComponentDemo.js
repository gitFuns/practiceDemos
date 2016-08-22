import React, { Component } from 'react';

// 1. 组件命名遵循驼峰命名，首字母大写
class ComponentDemo extends Component {
  render(){
    {
      /*
      2. 这是代码注释
      也可以是多行
      */
    }
    const name = this.props.name;

    // 3. render 方法 return 回来的根元素只能是一个，超过会报错
    // 4. { } 里面可以写JS代码
    return (
      <div>
        hello, {name ? name : "我是默认的"}
      </div>
    );
  }
}

export default ComponentDemo;
