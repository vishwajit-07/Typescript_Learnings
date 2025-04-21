"use strict";
//basic class
// class Department {
//     name: string;
//     constructor(n: string) {
//         this.name = n;
//     }
//     describe(this: Department) {
//         console.log(`Your department is ${this.name}`);
//     }
// }
// const accounting = new Department("Accounting");
// accounting.describe();
// const accountingCopy = {
//     name: "Dummy",
//     describe: accounting.describe
// }
// accountingCopy.describe();
//private and public access modifiers
class Department {
    constructor(n) {
        this.name = n;
        this.employees = [];
    }
    describe() {
        console.log(`Department is ${this.name}`);
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    displayInfo() {
        console.log(`Total employees = ${this.employees.length}`);
        console.log(`Employees ${this.employees}`);
    }
}
const employee = new Department("MCA");
employee.describe();
employee.addEmployee("Vishal");
employee.addEmployee("Kaushal");
employee.displayInfo();
