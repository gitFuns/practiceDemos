var Book = function (title, publisher) {
    this.title = title;
    this.publisher = publisher;
};

Book.prototype.sayTitle = function () {
    alert(this.title);
};

var book1 = new Book('javaScript高效编程', '人民邮电出版社');

console.log(book1.__proto__);
console.log(book1.__proto__.constructor);
console.log(book1.__proto__.constructor.toString());
console.log('---------------------------------------');
console.log(book1.__proto__.__proto__);
console.log(book1.__proto__.__proto__.constructor);
console.log(book1.__proto__.__proto__.constructor.toString());