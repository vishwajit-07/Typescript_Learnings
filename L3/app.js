//  UNION
function combine(num1, num2) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var addition = combine(11, "Vishwajit");
var concatination = combine("Vishwajit", "Mavalankar");
console.log(addition, concatination);
// Literal Types
function literalTypes(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum_of_numbers = literalTypes("10", 12, "as-number");
var combine_name = literalTypes(10, " Mavalankar", "as-string");
console.log(sum_of_numbers, combine_name);
function literalTypes2(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var ans = literalTypes2("10", 22, "as-number");
var ans2 = literalTypes2("Vishwajit", " Mavalankar", "as-string");
var ans3 = literalTypes2(10, " Mavalankar", "as-string");
console.log(ans, ans2, ans3);
