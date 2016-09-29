var url = 'http://cswebapi.ttelife.com/api/Comm/HomeCategory';

/*组件构造器*/
var myComponent = Vue.extend({
    template: '<span>this is my first vue component</span>'
});

/*注册组件  -- 这种方式是全局注册的*/
Vue.component('my-component', myComponent);

/*上面两个步骤对顺序有依赖关系 必须在 Vue 实体构造之前执行 important*/
var vm = new Vue({
    el: '#app',
    data: {
        isFocus: false,
        message: 'hello, wolrd',
        types: [ '生鲜蔬果', '粮油副食', '厨房调料', '家居日用']
    },
    methods: {
        focus: function () {
            /**
             * this对象有属性 方法 组成 this返回的是一个vue实体对象  将 data methods 赋值给这个对象
             */
            this.isFocus = true;
        },
        blur: function () {
            this.isFocus = false;
        }
    }
});


