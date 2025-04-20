//  UNION
function combine(num1: number | string, num2: number | string) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number") {
        result = num1 + num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
const addition = combine(11, "Vishwajit");
const concatination = combine("Vishwajit", "Mavalankar");
console.log(addition, concatination);

// Literal Types
function literalTypes(num1: number | string, num2: number | string, conversionType: "as-number" | "as-string") {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
const sum_of_numbers = literalTypes("10", 12, "as-number");
const combine_name = literalTypes(10, " Mavalankar", "as-string");
console.log(sum_of_numbers, combine_name);


// Type Alias / custom types
type combine = number | string | boolean;

function literalTypes2(num1: combine, num2: combine, conversionType: "as-number" | "as-string") {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    } else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
const ans = literalTypes2("10", 22, "as-number");
const ans2 = literalTypes2("Vishwajit", " Mavalankar", "as-string");
const ans3 = literalTypes2(10, " Mavalankar", "as-string");
console.log(ans, ans2, ans3);

