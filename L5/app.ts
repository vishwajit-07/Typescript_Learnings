//unknown
let carName: unknown;
carName = 20;
let brand: string;
brand = carName; // Error Type 'unknown' is not assignable to type 'string'
console.log(brand);  //with unkown type variable value can not be assign to other variable


//any
let fullName: any;
fullName = 20;
let age: string;
age = fullName;
console.log(age);  //with any type the value can be assign to other variable

//Never return type
function errorHandling(message: string, code: number): never {
    throw { message: message, statusCode: code }
}
const res = errorHandling("Internal Sever", 500);
console.log(res);

