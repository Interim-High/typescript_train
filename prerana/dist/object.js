"use strict";
// Create an object named car with the following properties:
// brand (string)
// model (string)
// year (number)
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ObjectExample;
function ObjectExample() {
    let car = {
        brand: "tesla",
        model: "suv",
        year: 2010,
    };
    console.log(car.model);
    console.log(student);
    console.log(product);
    console.log(library);
    console.log(employeeSalaries);
    console.log(students);
}
// Define an object student with the following properties:
// name (string)
// age (number)
// isEnrolled? (boolean) – Optional property indicating if the student is enrolled.
let student = {
    name: "Prerana",
    age: 21,
    isEnrolled: false,
};
// Create an object product with the following properties:
// id (number) – Readonly property.
// name (string)
// price (number)
// Make sure the id property is readonly.
let product = {
    id: 205,
    name: "Prerana",
    price: 2356,
};
// Create an object library with the following properties:
// name (string)
// address (nested object with city and country properties, both of type string)
let library = {
    name: "Prerana",
    address: {
        city: "kathmandu",
        country: "Nepal",
    },
};
// define an object employeeSalaries where the keys are employee names (strings) and 
// the values are their salaries (numbers). Add at least three entries.
let employeeSalaries = {
    Namita: 20000,
    pramitra: 2500,
};
//Arary of object
/* Create an array of objects called students with the following structure:
name (string)
age (number)
grade (string)
Add at least three students to the array and print the name and grade of each student.*/
let students = [
    { name: "Prerana", age: 21, grade: "Twelve" },
    { name: "Prerana", age: 21, grade: "Twelve" },
];
