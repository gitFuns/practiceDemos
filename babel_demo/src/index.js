import "babel-polyfill";

[1, 2, 3, 4, 5].map(n => n + 1);

/**
 * babel-preset-es2015只会转换新的es6的语法 但是不会转换 新的APIs
 * 所以需要 babel-polyfill 出场
 * */

function addAll() {
    return Array.from(arguments).reduce((a, b) => a + b);
}

class Foo {
    method() {}
}
