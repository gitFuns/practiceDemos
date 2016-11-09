var result = [
    {
        id: 1,
        name: 'whb'
    },
    {
        id: 2,
        name: 'ssy'
    },
    {
        id: 3,
        name: 'lp'
    }
];

const filter = p => v => o => o.hasOwnProperty(p) && o[p] == v;

let tmpArray = result.filter(item => filter('id')(2)(item));

console.log(tmpArray);