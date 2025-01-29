"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InterfacesExercise = () => {
    function Persondetails(person) {
        console.log(person);
    }
    const person = {
        name: "biplov",
        age: 21,
        address: "jorpati ,  kathmandu"
    };
    Persondetails(person);
    const user = { name: "aakash",
        age: 21,
        address: " kathmandu",
        email: "karkibipl@gmail.com"
    };
    console.log(user);
    // different approach
    function Userdetails(User) {
        console.log(User);
    }
    const obj = {
        name: "biplov",
        age: 21,
        address: "kathmandu",
        email: "karkibipl@gmail.com"
    };
    Userdetails(obj);
    let Employee = {
        name: "prerana",
        age: 21,
        address: " mitrapark",
        email: "preranakoiral2722@gmail.com",
        salary: 20000,
        designation: "intern"
    };
    console.log(Employee);
    const nomain = {
        id: 21,
        name: " hello wordl"
    };
    const country = [{
            name: "nepal",
            sqft: 21303323,
            isbeingInWar: true
        }, {
            name: "england",
            sqft: 132423434,
            isbeingInWar: false
        }];
    console.log(country);
};
exports.default = InterfacesExercise;
