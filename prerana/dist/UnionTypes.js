"use strict";
//SYNTAX
/* let variable: type1 | type2;

function functionName(param: type1 | type2): returnType {
  // logic
}*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UnionExample;
exports.Example2 = Example2;
//Declare a variable status that can hold either a boolean or a string. 
// Write a function updateStatus that takes a parameter of type boolean | string and logs it.
function UnionExample() {
    let status = "Prerana";
    function updateStatus(value) {
        console.log("value", value);
    }
    updateStatus(true);
    updateStatus(status);
}
function Example2() {
    function checker(value) {
        if (typeof value === 'string') {
            console.log("The entered value is String", value);
        }
        else {
            console.log("The entered value is number type", value);
        }
    }
    checker(256);
    checker("Hello world, see ya");
}
