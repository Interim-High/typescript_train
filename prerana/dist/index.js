"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const interface_1 = __importDefault(require("./interface"));
const object_1 = __importDefault(require("./object"));
let a = 10;
console.log(" hello", a);
let b = 25;
console.log(a + b);
console.log(typeof a);
const uniquekey = Symbol("key");
console.log(uniquekey);
//Declare an array called colors that holds the names of three colors as strings.
const colors = ["red", "green", "blue"];
console.log(colors);
/* Define a tuple named student to hold:
A string for the student's name.
A number for the student's age.
A boolean indicating whether the student is enrolled. */
let student = ["Prerana", 21, true];
console.log(student[0]);
console.log(typeof student);
// Write a function multiply that takes two number parameters and returns their product.
function multiply(a, b) {
    return a * b;
}
console.log("The multiplication:", multiply(5, 9));
// Write a function greet that takes a string parameter (name) and returns a greeting message.
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet("Prerana"));
(0, object_1.default)();
(0, interface_1.default)();
