
var babel = require('babel');

const has = p => o => o.hasOwnProperty(p);

console.log(babel.transform(has).code);

const sortBy = p => (a, b) => a[p] > b[p];

console.log(babel.transform(sortBy).code);

const is = p => v => o => o.hasOwnProperty(p) && o[p] == v;

console.log(babel.transform(is).code);