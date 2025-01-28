import interfaceExample from "./interface";
import ObjectExample from "./object";

let a: number = 10
console.log(" hello",a)

let b : number = 25;
console.log(a+b);
console.log(typeof a);


const uniquekey: Symbol =  Symbol("key");
console.log(uniquekey);

//Declare an array called colors that holds the names of three colors as strings.

const colors: String[] = ["red", "green", "blue"];
console.log(colors);

/* Define a tuple named student to hold:
A string for the student's name.
A number for the student's age.
A boolean indicating whether the student is enrolled. */

let student:[String, number, boolean] = ["Prerana" , 21, true];
console.log(student[0]);
console.log(typeof student);

// Write a function multiply that takes two number parameters and returns their product.

function multiply(a: number, b: number): number {
    return a*b;
}

console.log("The multiplication:",multiply(5,9));

// Write a function greet that takes a string parameter (name) and returns a greeting message.

function greet(name: String) : String {
    return `Hello, ${name}`
}

console.log(greet("Prerana"));

ObjectExample();
interfaceExample();
