var addition = function (n1, n2) {
    //type guards add here
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
};
console.log(addition(10, 20));
console.log(addition("10", 20));
var emp1 = {
    name: "Vishwajit Mavalankar",
    privileges: ["Create Server", "Add_Employee"],
    startDate: new Date(),
};
function EmployeeInformation(emp) {
    console.log("Welcome ".concat(emp.name));
    if ("privileges" in emp) {
        console.log("Privileges are = ".concat(emp.privileges));
    }
    if ("startDate" in emp) {
        console.log("Start Date is ".concat(emp.startDate));
    }
}
EmployeeInformation(emp1);
EmployeeInformation({ name: "Viraj", privileges: ["API calling", "create server"], startDate: new Date() });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("You are driving a car.....");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Your are driving a truck....");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Your cargo amount is ", amount);
    };
    return Truck;
}());
var v1 = new Car;
var v2 = new Truck;
function useVehical(Vehicle) {
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
var userInput = document.getElementById("user-input"); //This is Second way
userInput.value = "Hello, I am VIshwajit!";
