function add(n1, n2) {
    return n1 + n2;
}
function greet(name) {
    console.log("Hello ".concat(name, "!"));
}
// Not good practice
// const combinefunction: Function = add;
// console.log(combinefunction(10, 20));
// const combinefunction1: Function = greet;
// combinefunction1("Vishwajit");
//Good Practice
var combineFunction;
combineFunction = add;
console.log(combineFunction(103, 524));
function callback(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
callback(11, 22, function (result) {
    console.log(result);
});
