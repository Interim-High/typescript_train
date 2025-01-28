"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ObjectExamples() {
    let animal;
    console.log(animal = { species: "homosapien", limbs: 2, canRun: true });
    let car = {
        make: "2020",
        model: "suv",
        name: "tesla cyber truck",
        seats: 6
    };
    console.log(car);
    let student = {
        name: " ashika dd",
        age: "21",
        isEnrolled: false,
    };
    console.log(student);
    let personDetails;
    personDetails = { id: 21, name: "prakriti" };
    //personDetails.id = 21; ---> gives error 
    console.log(personDetails);
}
exports.default = ObjectExamples;
