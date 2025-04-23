// //Interface
// interface person{
//     name:string;
//     age:number;
//     greet(text:string):void;
// }

// let user: person;

// user={
//     name:"Vishwajit",
//     age:24,
//     greet(text){
//         console.log(`Hello ${text}`);
//     }
// }

// console.log(user);
// user.greet("Vishwajit");

// interface person{
//     name:string;
//     greet(text:string):void
// }
// class Employee implements person{
//     name:string;
//     constructor(n:string){
//         this.name=n;
//     }
//     greet(text: string): void {
//         console.log(`${text}${this.name}`); 
//     }
// }

// const E1 = new Employee("Vishwajit");
// E1.greet("Hii there, I am ")

//!Extending interface
interface named {
    name: string;
}
interface greetable extends named { //when interface to interface we use extends
    greet(text: string): void;
}
class person2 implements greetable { //when class to interface we use implements
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    greet(text: string): void {
        console.log(`${text}${this.name}`);
    }
}
const p2 = new person2("Vishwajit");
p2.greet("Welcome ");
console.log(p2);

//using interface
interface addFun {
    (n1: number, n2: number): number;
}
let add: addFun;
add = (num1: number, num2: number) => {
    return num1 + num2;
}
console.log(add(10, 30));

//same code using type
type addFunc = (number1: number, number2: number) => number;
let addition: addFunc;
addition = (n1: number, n2: number) => {
    return n1 + n2;
}
console.log(addition(10, 2));

interface name2 {
    name: string;
    age?: number; // This ? mark means optional means that value is not compulsory in the class
}
class human implements name2 {
    name: string;
    // age: number;
    constructor(n: string) {
        this.name = n;
        // this.age = a;
    }
}
const h1 = new human("Vishu");
console.log(h1);


