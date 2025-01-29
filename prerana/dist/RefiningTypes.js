"use strict";
/* Write a function processValue that takes a parameter of type string | number.
If the value is a string, log its length. If it's a number, log its square.  */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RefiningTypesExample;
//Syntax
// if (typeof variable === "type") {
//     // Narrow down the type
//   }
function RefiningTypesExample() {
    function processValue(input) {
        if (typeof input === "string") {
            console.log("The length of variable is: ", input.length);
        }
        else {
            console.log("The squared number is: ", input * input);
        }
    }
    processValue("Prerana");
    processValue(2);
}
