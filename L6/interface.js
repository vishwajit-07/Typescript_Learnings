"use strict";
// //Interface
// interface person{
//     name:string;
//     age:number;
//     greet(text:string):void;
// }
class person2 {
    constructor(n) {
        this.name = n;
    }
    greet(text) {
        console.log(`${text}${this.name}`);
    }
}
const p2 = new person2("Vishwajit");
p2.greet("Welcome ");
console.log(p2);
let add;
add = (num1, num2) => {
    return num1 + num2;
};
console.log(add(10, 30));
let addition;
addition = (n1, n2) => {
    return n1 + n2;
};
console.log(addition(10, 2));
class human {
    // age: number;
    constructor(n) {
        this.name = n;
        // this.age = a;
    }
}
const h1 = new human("Vishu");
console.log(h1);
