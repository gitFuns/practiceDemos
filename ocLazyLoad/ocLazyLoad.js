//var NG_APP_CLASS_REGEXP = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/,
//    className = ' ng-app ',
//    match = NG_APP_CLASS_REGEXP.exec(className);
//console.log((match[2] || '').replace(/\s+/g, ','));

var student = {
    name: 'joshua',
    age: '26',
    password: '123'
};

JSON.stringify(student, function (key, value) {
    console.log(key, value);
    console.log('-----');
});