"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function BasicTypes() {
    //1. Declare variables with string, number, and boolean types. Assign values and print their types.
    const name = "kasyab";
    const age = 21;
    const isplaying = true;
    console.log(typeof name, age, isplaying);
    //2.Write a function to return the square of a number with proper type annotations
    const square = (Num) => Num * Num;
    console.log(square(21));
    //3.Create an array of numbers and find their sum.
    const array = [2, 2, 3, 4, 21];
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
    //4.Declare a tuple for storing a person’s name (string) and age (number).
    const person = ["biplov", 21];
    console.log(person);
    //5.What is any type? Write an example where it could be misused.
    const Name = 1234;
    console.log(Name());
}
exports.default = BasicTypes;
