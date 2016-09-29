//var Child = Vue.extend({
//    template: '<p>This is child component!</p>'
//});
//
//var Parent = Vue.extend({
//    template: '<p>This is parent component</p><child-component></child-component>',
//    /*在父组件中注册子组件*/
//    components: {
//        'child-component': Child
//    }
//});
//
///*全局注册组件*/
//Vue.component('parent-component', Parent);

/*下面的代码是上面代码的语法糖*/
Vue.component('parent-component', {
    template: '<p>This is parent component</p><child-component></child-component>',
    components: {
        'child-component': {
            template: '<p>This is child component</p>'
        }
    }
});

Vue.component('component1', {
    template: '#component1'
});

/*============================================================================*/

var vm = new Vue({
    el: '#app'
});