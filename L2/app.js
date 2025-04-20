// //Defining Object and array skills is an array
// const person: {
//     name: string;
//     age: number;
//     address: {
//         city: string;
//         postal_code: number;
//     };
//     skills: String[];
// } = {
//     name: "VIshwajit",
//     age: 24,
//     address: {
//         city: "Ratngiri",
//         postal_code: 415612
//     },
//     skills: ["ReactJS", "NodeJS"]
// }
// console.log(person);
// let hobbies: string[];
// hobbies = ["Cricket", "Football", "Golf"];
// console.log(hobbies);
// let hobbies2: any[];
// hobbies2 = ["Cricket", "Football", "Golf", 55, true];
// console.log(hobbies2);
// //Tuples
// const person1: {
//     name: string;
//     age: number;
//     skills: string[];
//     product: [number, string] //Fixed array of two types
// } = {
//     name: "Vishwajit",
//     age: 24,
//     skills: ["Ract", "Javascript"],
//     product: [1, "Project"] //Tuple used here
// }
// console.log(person1);
//usingEnum
var role;
(function (role) {
    role[role["ADMIN"] = 0] = "ADMIN";
    role[role["USER"] = 1] = "USER";
    role[role["RECRUITER"] = 2] = "RECRUITER";
})(role || (role = {}));
;
var person3 = {
    name: "Vishwajit",
    age: 24,
    skills: ["Ract", "Javascript"],
    product: [1, "Project"], //Tuple used here
    role: role.USER
};
if (person3.role === role.ADMIN) {
    console.log("Admin");
}
else if (person3.role === role.RECRUITER) {
    console.log("Recruiter");
}
else {
    console.log("User");
}
