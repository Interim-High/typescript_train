"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FunctionQuestions = () => {
    const Factorial = (num) => {
        if (num == 0)
            return 1;
        return num * Factorial(num - 1);
    };
    const numbertofind = 3;
    console.log(`the factorial of number ${numbertofind} is ${Factorial(numbertofind)}`);
    //Create a function with default parameters and call it with and without the default value
    function parameters(value = "guest") {
        console.log("helllo world" + value);
    }
    parameters();
    parameters("biplov");
    console.log(`-------------------------------------------------------------------------------------------------------------`);
    //Write an arrow function to return the maximum of two numbers.
    // const MaximumNumber =(a:number ,b :number): void=>{
    //   if (a > b ) console.log (" a is greater than b");
    //     return console.log (" b is greater than a");
    // }
    //   MaximumNumber(10,20)
    const MaximumNumber = (a, b) => {
        return a > b ? a : b;
    };
    // Calling the function
    console.log(MaximumNumber(10, 20)); // Output: 20
    console.log(MaximumNumber(30, 15)); // Output: 30
    console.log("-----------------------------------------------------------");
    //Create a function that accepts rest parameters and calculates their average.
    const average = (...numbers) => {
        let sum = numbers.reduce((acc, curr) => acc + curr, 0);
        let average = sum / numbers.length;
        return average;
    };
    console.log(average(1, 2, 3, 4, 5, 5));
    console.log("________________________________________________________");
    //  function overriding 
    function add(a, b) {
        return a + b;
    }
    console.log(add(11, 12));
    console.log(add("sweet", "home"));
};
exports.default = FunctionQuestions;
