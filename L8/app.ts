// Generics intro
const fruits: Array<string> = [];
fruits.push("One");
fruits.push("Two");
fruits.push("Three");
console.log(fruits);

type person = {
    name: string;
    age: number;
}
const person: Array<person> = [{ name: "Vishwajit", age: 24 }, { name: "Kiran", age: 22 }];

console.log(person);

//3
// function merge<T, U, V>(obj1: T, obj2: U, obj3: V) {
//     return { ...obj1, ...obj2, ...obj3 }
// }
// console.log(merge({ name: "Vish" }, { age: 24 }, { role: "Web Developer" }));


//4 Generic Constraints
function creatObject<T extends number, U extends string, V extends boolean>(key: T, value: U, isActive: V): { key: T, value: U, isActive: V } {
    return ({ key, value, isActive });
}

const res = creatObject(1, "Vishwajit", true);
console.log(res);



//Generic Interface
interface Box<T> {
    value: T;
}
const numberBox: Box<number> = { value: 12 };
const stringBox: Box<string> = { value: "String" };
const booleanBox: Box<boolean> = { value: true }
console.log(numberBox, stringBox, booleanBox);

//Generic Default
interface User<T = number> {
    value: T;
    status: string
}

const U1: User = { value: 200, status: "OK" };
const U2: User<object> = { value: { name: "User" }, status: "User Done" };
console.log(U1, U2);


//Ex 2
interface User1<T = string> {
    value: T;
    status: number;
}

type person2 = {
    name: string;
    age: number;
}
//here we create type object and add it to User1 interface follows person2 object
const student: User1<person2> = { value: { name: "Vishwajit", age: 24 }, status: 200 }
console.log(student);


//Generic with classes
class container<T> {
    private content: T;
    constructor(content: T) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
}

const numberContainer = new container<number>(12);
const stringContainer = new container<string>("Vishwajit");
console.log(numberContainer.getContent());
console.log(stringContainer.getContent());


//Generic with Array
function array<T>(arr: T[]): T {
    return arr[0];
}
const numberArray = array([1, 2, 3, 4, 5]);
const stringArray = array(["V", "I", "S", "H", "W", "A", "J", "I", "T"]);

console.log(numberArray);
console.log(stringArray);

//ex 3
function property<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
const cars = { name: "Ertiga", model: 2025 };
const bikes = { name: "Unicorn", model: 2016 };
const object1 = property(cars, "name");
const object2 = property(bikes, "model");
console.log(object1, object2);
