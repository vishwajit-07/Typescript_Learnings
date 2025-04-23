// Generics intro
var fruits = [];
fruits.push("One");
fruits.push("Two");
fruits.push("Three");
console.log(fruits);
var person = [{ name: "Vishwajit", age: 24 }, { name: "Kiran", age: 22 }];
console.log(person);
//3
// function merge<T, U, V>(obj1: T, obj2: U, obj3: V) {
//     return { ...obj1, ...obj2, ...obj3 }
// }
// console.log(merge({ name: "Vish" }, { age: 24 }, { role: "Web Developer" }));
//4 Generic Constrains
function creatObject(key, value, isActive) {
    return ({ key: key, value: value, isActive: isActive });
}
var res = creatObject(1, "Vishwajit", true);
console.log(res);
var numberBox = { value: 12 };
var stringBox = { value: "String" };
var booleanBox = { value: true };
console.log(numberBox, stringBox, booleanBox);
var U1 = { value: 200, status: "OK" };
var U2 = { value: { name: "User" }, status: "User Done" };
console.log(U1, U2);
//here we create type object and add it to User1 interface follows person2 object
var student = { value: { name: "Vishwajit", age: 24 }, status: 200 };
console.log(student);
//Generic with classes
var container = /** @class */ (function () {
    function container(content) {
        this.content = content;
    }
    container.prototype.getContent = function () {
        return this.content;
    };
    return container;
}());
var numberContainer = new container(12);
var stringContainer = new container("Vishwajit");
console.log(numberContainer.getContent());
console.log(stringContainer.getContent());
//Generic with Array
function array(arr) {
    return arr[0];
}
var numberArray = array([1, 2, 3, 4, 5]);
var stringArray = array(["V", "I", "S", "H", "W", "A", "J", "I", "T"]);
console.log(numberArray);
console.log(stringArray);
//ex 3
function property(obj, key) {
    return obj[key];
}
var cars = { name: "Ertiga", model: 2025 };
var bikes = { name: "Unicorn", model: 2016 };
var object1 = property(cars, "name");
var object2 = property(bikes, "model");
console.log(object1, object2);
