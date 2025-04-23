// 1.Type Guards
type combinable = number | string;
type numeric = number | boolean;
type universal = combinable & numeric;

let addition = (n1: combinable, n2: combinable) => {
    //type guards add here
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
console.log(addition(10, 20));
console.log(addition("10", 20));

// 2 type guards example 2
type Admin = {
    name: string;
    privileges: string[];
}
type Employee = {
    name: string;
    startDate: Date;
}
type ElevatedEmployee = Admin & Employee;
type UnknownEmployee = Admin | Employee;

const emp1: ElevatedEmployee = {
    name: "Vishwajit Mavalankar",
    privileges: ["Create Server", "Add_Employee"],
    startDate: new Date(),
}

function EmployeeInformation(emp: UnknownEmployee) {
    console.log(`Welcome ${emp.name}`);
    if ("privileges" in emp) {
        console.log(`Privileges are = ${emp.privileges}`);
    }
    if ("startDate" in emp) {
        console.log(`Start Date is ${emp.startDate}`);
    }
}
EmployeeInformation(emp1);
EmployeeInformation({ name: "Viraj", privileges: ["API calling", "create server"], startDate: new Date() });



class Car {
    drive() {
        console.log("You are driving a car.....");
    }
}

class Truck {
    drive() {
        console.log("Your are driving a truck....");
    }
    loadCargo(amount: number) {
        console.log("Your cargo amount is ", amount);
    }
}

type vehicle = Car | Truck;

const v1 = new Car;
const v2 = new Truck;

function useVehical(Vehicle: vehicle) {
    Vehicle.drive();
    if ("loadCargo" in Vehicle) {
        Vehicle.loadCargo(4000);
    }
    // if (Vehicle instanceof Truck) {  ///This is another way of use guards using word instanceof
    //     Vehicle.loadCargo(5000);
    // }
}

useVehical(v1);
useVehical(v2);

//type casting / type assertion
// const userInput =<HTMLInputElement> document.getElementById("user-input")!;  // This is first way
const userInput = document.getElementById("user-input")! as HTMLInputElement;   //This is Second way
userInput.value="Hello, I am VIshwajit!";