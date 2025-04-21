//unknown
var fullName;
fullName = 20;
var age;
age = fullName;
console.log(age);
//any
//Never return type
function errorHandling(message, code) {
    throw { message: message, statusCode: code };
}
var res = errorHandling("Internal Sever", 500);
console.log(res);
