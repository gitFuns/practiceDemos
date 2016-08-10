# React技术学习--入门篇

> 自ReactJS开源以来，前端繁荣的世界里又多了一位重量级的成员，在大家以拥抱的心态去接触它学习它的之前，我们有必要先去了解它解决了什么问题，它适用于什么场景。这是我开篇最想和大家一起聊的话题。

## 基本认识

React是一个用于构建用户界面的JAVASCRIPT库，它不是一个MVC框架，它最多只是View层，甚至React的思想并不是非常认可MVC模式。还有人拿React和Web Component相比较，其实他们二者并不是一个你死我活的竞争关系，你也可以使用React来开发出一个Web Component；还有人说，React有jsx语法，它是不是一个新的模板语言，其实jsx只是一个封装组件的语法，没有jsx，React也可以正常工作。

## 为什么用React

> - 高效DOM渲染

以前没有ajax技术的时候，web页面从服务端整体render出html送到浏览器端进行渲染，同样的，用户的一个改变页面的操作也会刷新整个页面来完成。直到有了ajax出现，实现页面局部刷新，带来的高效和分离让web开发者们惊叹不已。但随着而来的代价是，复杂的用户交互及展现需要通过大量的DOM操作来完成，这让页面的性能以及开发的效率又出现了新的瓶颈。

时至今日，谈到前端性能优化，减少DOM元素、减少reflow和repain、编码过程中尽量减少DOM的查询等手段是大家耳熟能详的。而页面任何UI的变化都是通过整体刷新来完成的。幸运的是，React通过自己实现的DOM Diff算法，计算出虚拟页面当前版本和新版本之间的差异，最小化重绘，避免不必要的DOM操作，解决了这两个公认的前端性能瓶颈，实现高效DOM渲染。

> -  组件化实现

组件化一直都是前端领域的挑战，在React出现之前，普遍通过资源重组的方式实现前端的组件化，比较典型的是fis的widget的实现。实现高效开发的重要前提之一是代码的高度重用，而组件化就是一个重要方向。有了组件化的实现，我们可以很直观的将一个页面分而治之，将一个复杂的页面分割成一小块一小块的独立组件，再通过组装的方式，完成一个复杂的页面。减轻了逻辑复杂度，实现了代码的重用。在React中使用JSX语法封装组件，可以将组件的DOM结构 数据逻辑甚至样式都聚合在一起，以独立组件的方式进行调用和展现。

React认为一个组件应该具有如下的特征：

* 可组合：一个组件可以和其他的组件一起使用或者可以直接嵌套在另一个组件内部，通过这样的组合方式，一个复杂的UI组件可以分拆成若干个简单的UI组件
* 可重用：每个组件都是具有独立功能的，它可以被使用在多个UI场景
* 可维护：每个小的组件仅仅包含自身的逻辑，更容易被理解和维护

> - 单向数据流

在React中，数据的流向是从父节点到子节点的单向流动，这样可以使组件简单并且容易把握，因为子节点是无状态的，只需要从父节点获取props渲染即可。这样带来的收益是，顶层组件的某个prop改变了，React就会向下递归遍历整棵组件树，重新渲染所有使用到了这个属性的组件。单向数据流带来的几个重要的好处是：
  * 相比之前的资源重组实现的组件，单向数据流可以很好的完成组件间的数据通信，否则的话，我们需要写一个事件机制来处理这个事情。
  * 大家可能会问，这所倡导的单向流动，那相对MVC或是MVVM框架的双向数据绑定简直是弱爆了。那么这里需要理解的是，这里的单向，是循环流动的单向，数据是持续更新的。双向数据绑定是优秀便捷的实现，这个需要用实现的成本和业务场景来考量二者了。
  * 对于单向数据流目前已经有很好的类库实现了，如flux reflux redux等。

## React和Angular等框架的差异

已经有无数的人追着问这样一些问题了：react和angular那个好，我应该学哪个啊？react也是前端的mvc框架吗？很多类似的问题，充斥在初学者的脑海。很多人认为 React 是 MVC 中的 V（视图），当然，我们也可以这么认为，正是因为它的这种位置，让React可以和各种前端框架进行结合。如果你是用backbone或是angular等框架，可以很容易的把react用起来完成view层的展现。

## 如何从Jquery的经验中转变过来

我已经习惯了jquery的api调用来操作dom书写业务逻辑，而且基于jquery有非常丰富的功能插件，如果从jquery的思维转变过来是在学习的路上无可避免的，而且很多人容易在这里被坑到。比如使用react的获取dom后又调用jquery的一个插件，这个时候就得很好的注意内存问题，确保在组件的生命周期结束的时候，dom上绑定的jquery插件也得进行解除绑定。

## 你在使用之前还是需要考虑这些

- 相比于之前的看不懂的官方文档，现在的中文论坛、文档、学习书籍慢慢完善起来了，但这还不够，这也是为什么写这个学习资料的原因。说这些的目的是，学习也需要考虑学习资源的。

- 它确实有些大，React 大小不到 144KB。通过 gzip 压缩传输后在 35KB 左右，当然，这不包括加载的jsx语法解析文件，以及其他丰富的引用资源，所以它的大小，也是选用时的考虑点。

- 我想，浏览器兼容性、周边生态、应用架构、事件系统等，也是你在使用后不得不考虑的问题。

- 任何一门新兴的技术都不是十全十美的出现，一些不是那么愉快的功能点也不妨碍我们对react的继续探索。所以有了这些基本的储备，我们可以坦然的开始了。

# React技术学习--基础篇（一）

> 越是基础的东西，越是重要；越是原理的内容，越要去理清楚。为什么在开篇回去强调这个内容，因为也许等你学习React后会发现，使用React的人慢慢的分成了两派，一派是专门封装React组件或组件库的，一派是专门使用前者的。所以，学习基础将是让自己拥有封装和运用组件的基础。

## 0. 0.13版本和0.14版本的差异

### 提供的文件不一样

0.13版本
```
react.js
react-with-addons.js
JSXTransformer.js
```

0.14版本
```
react.js
react-dom.js
react-with-addons.js
```
### React被拆分为react和react-dom两个包
react包提供React.createElement、 .createClass、 .Component， .PropTypes， .Children等API接口，react-dom package 中包含 ReactDOM.render、 .unmountComponentAtNode、 .findDOMNode等。
### React.addons被拆分出若干个独立的包
(说明下，这个是官方提供的已封装的一系列组件)下面的工具全部变成了独立的 package也变成了独立的package。
### 编译器优化
**react-tools 及 JSXTransformer.js 已弃用**
以前是采用JSXTransformer来解析JSX语法，现在是全面拥抱Babel（可以```npm insttall babel -g```安装babel进行JSX语法解析、或是加上babel提供的browser.js库进行解析）。

## 1. JSX语法

先看看不用JSX语法怎么写基于React的代码：
```
// 比如我想写一个h1元素
React.DOM.h1({"className": "header"}, "我是标题");
// 或者是这样
React.createElement('h1', {className: 'header'}, '我是标题');
```
而如果采用JSX语法的话，可以这样：
```
<script type="text/babel">
  var div = React.createClass({
    render: function(){
      return (
          <h1 className="header">我是标题</h3>
      );
    }
  });

</script>
```

> 其实，一般的，在实际编码过程中很少会直接调用React的原生创建DOM的API来封装，而是采用JSX语法来封装组件，这样的好处是：
- 更加熟悉
- 更加语义化
- 更加抽象且直观
- 关注点分离

### demo示例
### 两种运行JSX的方式
- 页面中加browser.js，script标签的type设置为text/babel(0.13版本为text/jsx)
- 页面中直接运行babel解析jsx的文件。
### 几个注意点
- render的方法中return的顶级元素只能是一个

## 2. 数据流

**三个维度来看待React中数据流**

> 在React中数据的流向是单向的，即从父节点流向子节点，这样就更方便组件的渲染（子组件只需要从父组件获取props渲染即可）

> 组件内部有自己的状态，这些状态只能组件内部修改，保持独立性

> React组件本身很简单，可以把它看成就是一个函数，而这个函数有两个传参，props和state，调用这个函数后悔返回一个虚拟的DOM。

### 定义一个组件
```
var MyTitle = React.createClass({
    // 相当于接口文档
    propTypes: {
      title: React.PropTypes.string.isRequired,
    },
    // 定义初始化的props
    getDefaultProps: function (){
      return {
        title: "welcome to React!"
      }
    },
    // 定义初始化的state
    getInitialState: function(){
      return {
        name: "Space X"
      }
    },
    // 定义一个改变组件state的方法
    changeState: function(){
      this.setState({
        name: "Elon Musk"
      });
    },
    render: function() {
      return (
          <header>
            <h1>props: {this.props.title}
            <p onCick={this.changeState}>click me! {name}</p>
          </header>
        );
    }
});

```
- state
每一个组件都有自己的state，这让我们可以将组件看成是一个状态机
改变组件可以使用```setState```或是```replaceState```，千万不要这样类似这样写```this.state.name = ''```。
- PropTypes
这是验证props的方式，类似于约定了一个接口文档。
- props
通过props，可以把任意类型的数据传递给组件
- getDefaultProps和getInitialState
分别是定义初始化props和state值的两个钩子函数，不一样的是，在组件的生命周期中，前者只会执行一次，具体下一部分细说。

### 理解state和props

需要理解清楚的是，虽然state和prop都是存储数据的，但是要区分二者的区别：
- state存放的是流动的，变化的组件数据，而且，**state只存在于组件的内部**
- 把props当成是组件的数据源，一般用来存放组件初始后不变的数据和属性
需要提醒的是：
- 不要将props的数据复制到state中去
- 不要使用setProps改变组件的属性
- 要慎用replaceState

二者的结合则可完成组件的单向数据流动

## 3. 组件的全生命周期和对应的那些钩子函数

React为每个组件都提供了简洁的生命周期API，去响应组件在不同阶段（创建时，存在时，销毁时）执行相应的操作，完全自定义化。

> 组件生命周期的设计：
- 组件在高内聚的同时，往往需要暴露一些接口供外界调用，从而能够适应复杂的页面需求；
- 更精细的掌控对组件的管理，更强的性能管理。

### 钩子函数总结

每个生命周期对应的一些钩子函数总结
- 实例化（渲染前）
  * getDefaultProps()
  * getInitialState()
  * componentWillmount()
  * render()
  * componentDidMount()
这意味着你可以在这个组件插入到DOM之前都可以调用这个API
- 组件存在期（渲染为真实的DOM）
  * componentDidMount()
  * shouldComponentUpdate()
  * componentWillUpdate()
  * componentWillUnmount()
- 销毁期
  * componentDidUnmount()


## 复合组件

多个简单的组件嵌套，可构成一个复杂的复合总结，从而完成复杂的交互逻辑

## DOM操作和事件处理
