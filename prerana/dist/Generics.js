"use strict";
//SYNTAX
// function functionName<T>(param: T): T {
//     return param;
//   }
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = genericExample;
//   Write a generic function getFirstElement that takes an array of type T and returns the first element of the array.
function genericExample() {
    function getElement(value) {
        return value;
    }
    console.log(getElement("Ram"));
    console.log(getElement(true));
    function getFirstElement(value) {
        return value[0];
    }
    console.log(getFirstElement([2, 5, 8, 7, 9]));
}
