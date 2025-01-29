"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FunctionQuestion;
function FunctionQuestion() {
    // Write a function to calculate the factorial of a number with proper type annotations.
    function Factorial(value) {
        if (value === 0) {
            return 1;
        }
        else {
            return value * Factorial(value - 1);
        }
    }
    let Result = Factorial(3);
    console.log("The Factorial is : ", Result);
    //Write an arrow function to return the maximum of two numbers.
    let MaximumNumber = (a, b) => {
        if (a > b) {
            return a;
        }
        else {
            return b;
        }
        //return a>b?a:b
    };
    const Response = MaximumNumber(9, 100);
    console.log(`The greater number is between a and b is`, Response);
    //Create a function with default parameters and call it with and without the default value.
    function Params(a = 15) {
        return a * a;
    }
    console.log(Params());
    console.log(Params(15));
    console.log(Params(5));
    // Create a function that accepts rest parameters and calculates their average.
    const AverageCalc = (...num) => {
        const sum = num.reduce((a, b) => a + b, 0);
        return sum / num.length;
    };
    console.log(AverageCalc(5, 1, 2, 3, 4));
    //function Implement
    function add(a, b) {
        return a + b;
    }
    console.log(add(1, 9));
    console.log(add("prerana", "koirala"));
}
