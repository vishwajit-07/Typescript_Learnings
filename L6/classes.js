"use strict";
//basic class
//private and public, readonly access modifiers
// class Department {
//     name: string;
//     private employees: string[]; //in this we use private then it will not accessable to out side the class
//     private readonly id: string;
//     constructor(n: string) {
//         this.name = n;
//         this.employees = [];
//         this.id = "D1";   //using readonly you can initialize the id only one time
//     }
//     describe(this: Department) {
//         console.log(`Department is ${this.name}`);
//     }
//     addEmployee(emp: string) {
//         this.employees.push(emp)
//     }
//     displayInfo() {
//         console.log(`Total employees = ${this.employees.length}`);
//         console.log(`Employees ${this.employees}`);
//     }
// }
// const employee = new Department("MCA");
// employee.describe();
// employee.addEmployee("Vishal");
// employee.addEmployee("Kaushal");
// employee.displayInfo();
//Inheritance
//override properties & protected access modifier
//setter and getter
class Department {
    constructor(n) {
        this.name = n;
        this.employees = [];
        this.id = "D2";
    }
    describe() {
        console.log(`Department (${this.id}) ${this.name}`);
    }
    addEmployee(text) {
        this.employees.push(text);
    }
    viewEmployee() {
        console.log(`Total employees are ${this.employees.length}`);
        console.log(`Employee list - ${this.employees}`);
    }
}
class Account extends Department {
    constructor() {
        super("Accounting");
        this.reports = [];
    }
    addReport(text) {
        this.reports.push(text);
    }
    viewReport() {
        console.log(`Total reports are ${this.reports.length}`);
        console.log(`Reports list ${this.reports}`);
    }
    addEmployee(text) {
        if (text === "Vishwajit") {
            return;
        }
        this.employees.push(text);
    }
    get getReports() {
        if (this.reports.length < 0) {
            throw Error("Reports not found!");
        }
        return this.reports;
    }
    set setReport(value) {
        if (!value) {
            throw Error("You entered blank spaces");
        }
        this.reports.push(value);
    }
}
const accReport = new Account();
accReport.describe();
accReport.addEmployee("Vishwajit Mavalankar");
accReport.addEmployee("Suresh Raina");
accReport.viewEmployee();
accReport.addReport("Top Developer");
accReport.addReport("Highest run scorer");
accReport.viewReport();
console.log(accReport.getReports); //print getter method
console.log(accReport.setReport = "Cool work"); //setter method
console.log(accReport.getReports); // getter method
//static method
class Department2 {
    constructor(n) {
        this.name = n;
        this.employees = [];
        this.id = "D1";
    }
    describe() {
        console.log(`Department2 (${this.id}) ${this.name}`);
    }
    addEmployee(text) {
        this.employees.push(text);
    }
    viewEmployee() {
        console.log(`Total employees are ${this.employees.length}`);
        console.log(`Employee list - ${this.employees}`);
    }
    static viewSalary() {
        return { salary: 500000 };
    }
}
const newSalary = Department2.viewSalary(); //here we directly call method without creating object
console.log(newSalary);
//abstract classes
class Department3 {
    constructor(n, id) {
        this.employee = [];
        this.name = n;
        this.id = id;
    }
}
class SubClass extends Department3 {
    constructor(id) {
        super(id, "D1");
    }
    describe() {
        console.log(`Department ${this.id}`);
    }
    displayName() {
        console.log(this.name);
    }
}
const subClass = new SubClass("ID 1");
subClass.describe();
