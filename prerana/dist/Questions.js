"use strict";
// Create an array of numbers and find their sum.
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Questions;
function Questions() {
    let numbers = [1, 2, 3, 4, 5, 6];
    let sum = numbers.reduce((a, b) => {
        return a + b;
    }, 0);
    console.log(sum);
    //Declare a tuple for storing a person’s name (string) and age (number).
    let name = ["Prerana", 21];
    function details(person) {
        console.log(person);
    }
    const type = {
        name: "Prerana",
        age: 21,
        address: "kalopul"
    };
    details(type);
    // function PeopleDetails(people:People) :void{
    //     console.log(people);
    // }
    const obj = {
        name: "Ramita",
        age: 25,
        address: "patan"
    };
    console.log(obj);
    const Worker = {
        name: "Ramesh",
        age: 56,
        address: "ktm",
        salary: 65000,
        designation: "Manager"
    };
    console.log(Worker);
    //Define an array of objects that follow the Person interface structure.
    const man = [{
            name: "kripesh",
            age: 96,
            address: "jajarkot"
        },
        {
            name: "kripesh",
            age: 96,
            address: "jajarkot"
        }];
    console.log(man);
}
