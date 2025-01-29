"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InterfaceQuestions;
function InterfaceQuestions() {
    // Create an interface Person with properties name, age, and a nested object address containing street, city, and postalCode. 
    // Write a function that accepts a Person object and prints their name, age, and full address (street, city, and postal code).
    function Userdetails(PersonObject) {
        console.log(PersonObject);
    }
    const user = {
        name: "Kasish",
        age: 25,
        address: "ktm",
        phoneNumber: "9865231569"
    };
    Userdetails(user);
    const Human = {
        name: "Kasish",
        age: 25,
        contact: {
            address: "ktm",
            phone: "9865231569"
        }
    };
    const Human2 = {
        name: "Kasish",
        age: 25,
        contact: "Kasish@gmail.com"
    };
    // function HumanDetails (a : Man) {
    //     console.log(a);
    // }
    function HumanDetails(a) {
        console.log(`Name: ${a.name}`);
        console.log(`Age: ${a.age}`);
        // Check if contact is a string or an object
        if (typeof a.contact === "string") {
            console.log(`Contact (Email): ${a.contact}`);
        }
        else {
            console.log(`Contact (Phone): ${a.contact.phone}`);
            console.log(`Contact (Address): ${a.contact.address}`);
        }
    }
    HumanDetails(Human);
    HumanDetails(Human2);
    const bb = {
        name: "Kasish",
        age: 25,
        address: "ktm",
        introduce() {
            return `I am ${bb.name}. I am ${bb.age} years old. I live in ${bb.address}`;
        }
    };
    console.log(bb.introduce());
    // Define the function to print details
    function printPersonDetails(person) {
        console.log(`Name: ${person.name}`);
        console.log(`Age: ${person.age}`);
        if (typeof person.address === "string") {
            console.log(`Address: ${person.address}`);
        }
        else if (typeof person.address === "object" && person.address !== null) {
            console.log("Address:");
            for (const key in person.address) {
                if (person.address.hasOwnProperty(key)) {
                    console.log(`  ${key}: ${person.address[key]}`);
                }
            }
        }
        else {
            console.log(`Address: ${person.address}`);
        }
    }
    // Example usage:
    // Case 1: Address as a string
    const person1 = {
        name: "Alice",
        age: 30,
        address: "123 Main Street, Wonderland",
    };
    // Case 2: Address as an object
    const person2 = {
        name: "Bob",
        age: 25,
        address: { street: "456 Elm St", city: "Metropolis", zipCode: 12345 },
    };
    // Case 3: Address as a custom type (number for example)
    const person3 = {
        name: "Charlie",
        age: 40,
        address: 101,
    };
    printPersonDetails(person1);
    printPersonDetails(person2);
    printPersonDetails(person3);
    const girly = {
        name: "Prerana",
        age: 21,
        hobbies: ["Sleeping", "Music", "Reading"]
    };
    function printInformation(a) {
        console.log(`Name : ${girly.name}`);
        console.log(`age : ${girly.age}`);
        console.log(`hobbies : ${girly.hobbies[0]}`);
    }
    printInformation(girly);
    const women = {
        name: "Pepe",
        age: 85,
        spouse: null
    };
    const women2 = {
        name: "Pepe",
        age: 85,
        spouse: "Pipi"
    };
    function Print(b) {
        console.log(`Name : ${b.name}`);
        console.log(`Age : ${b.age}`);
        if (typeof b.spouse === "string") {
            console.log(`Spouse : ${b.spouse}`);
        }
        else {
            console.log("has no spouse. RIP");
        }
    }
    Print(women);
    Print(women2);
    ;
    const qq = {
        name: "Harihar",
        age: 45,
        address: "harisiddhi",
        updateAddress(newAddress) {
            return `${newAddress} `;
        },
        greet() {
            return `Hello ${qq.name}. My age is ${qq.age}. The address is ${qq.address}.The updated address is ${(qq.updateAddress("Kapilvastu"))}.`;
        },
    };
    console.log(qq.greet());
    //Create an interface Person with properties name, age, and status.
    //The status property should accept only specific string literals such as "single", "married", or "divorced". 
    //Write a function that takes a Person object and prints their details, making sure to handle the status property properly.
    let Status;
    (function (Status) {
        Status["Single"] = "single";
        Status["Married"] = "married";
        Status["Divorced"] = "divorced";
    })(Status || (Status = {}));
    const person = {
        name: "Khagendra",
        age: 36,
        status: Status.Married // Use enum value
    };
    function printDetails(personObj) {
        console.log(`Name: ${personObj.name}`);
        console.log(`Age: ${personObj.age}`);
        console.log(`Status: ${personObj.status}`);
    }
    printDetails(person);
}
