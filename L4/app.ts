function add(n1: number, n2: number): number {
    return n1 + n2;
}
function greet(name: string): void {
    console.log(`Hello ${name}!`);
}

// Not good practice
// const combinefunction: Function = add;
// console.log(combinefunction(10, 20));

// const combinefunction1: Function = greet;
// combinefunction1("Vishwajit");

//Good Practice
let combineFunction: (a: number, b: number) => number;
combineFunction = add;
console.log(combineFunction(103, 524));


//Function typs & callback
type CB = (n: number) => void
function callback(num1: number, num2: number, cb: CB) {
    let result = num1 + num2;
    cb(result);
}
callback(11, 22, (result: number) => {
    console.log(result);
});