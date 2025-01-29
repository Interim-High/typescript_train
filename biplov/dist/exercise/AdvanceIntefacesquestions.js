"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AdvanceIntefacesQuestions() {
    function personalDetails(person) {
        console.log(person);
    }
    const person = {
        name: "biplov",
        age: 21,
        address: {
            street: 13,
            city: "rautahat",
            postalcode: "13B20265",
        }
    };
    personalDetails(person);
    function User(person) {
        console.log(person);
        // person.address="rautahat" --> readonly 
    }
    const man = {
        name: "hari",
        age: 30,
        address: "kamalpokhari",
    };
    User(man);
    function manDetails(man) {
        console.log("name :", man.name);
        console.log("age :", man.age);
        if (typeof man.contact === "string") {
            console.log("contact:" + man.contact);
        }
        else {
            console.log(`phone ${man.contact.phone}`);
            console.log(`phone ${man.contact.address}`);
        }
    }
    const boy = {
        name: "string",
        age: 32,
        contact: {
            phone: "982397832",
            address: "kfslkjsfms"
        },
    };
    const boy2 = {
        name: "string",
        age: 32,
        contact: "karkibipl@gmail.com"
    };
    manDetails(boy);
    manDetails(boy2);
    const personkodetails = (p) => {
        console.log(p.introduce());
    };
    const exampleperson = {
        name: "string",
        age: 31,
        address: "string kjwie",
        introduce() {
            return `welcome ${exampleperson.name} , he is ${exampleperson.age} and he is fron ${exampleperson.address}`;
        }
    };
    personkodetails(exampleperson);
    const person1 = {
        name: "biplov",
        age: 21,
        address: "123 st mariyas "
    };
    const person2 = {
        name: "biplov",
        age: 21,
        address: {
            street: " 123 street ",
            city: "rautahat"
        }
    };
    const person3 = {
        name: "biplov",
        age: 21,
        address: 12934
    };
    function userkodetails(per) {
        console.log(per);
    }
    userkodetails(person1);
    userkodetails(person2);
    userkodetails(person3);
    const user22 = {
        name: 'prerana',
        age: 21,
        hobbies: ['play', 'coding', 'sleeping']
    };
    function userwithHobbies(u) {
        console.log(`${u.hobbies}`);
    }
    userwithHobbies(user22);
    const human = {
        name: "prerana",
        age: 26,
        spouse: "prerana"
    };
    const personwithspouse = (female) => {
        console.log(`His name is ${female.name},he is ${female.age}`);
        if (typeof female.spouse === "string" || female.spouse != null) {
            console.log(`married to ${female.spouse}`);
        }
        else {
            console.log("not married");
        }
    };
    personwithspouse(human);
    const user90 = {
        name: "aakash",
        age: 29,
        address: "jorpati 20,first street",
        updateAddress(newAddress) {
            return ` updated address: ${newAddress}`;
        },
        greet() {
            return "welcome" + user90.name + ", he is :" + user90.age + "and his address is" + user90.updateAddress("mahankal");
        }
    };
    console.log(user90.greet());
    //10.Create an interface Person with properties name, age, and status. 
    // The status property should accept only specific string literals such as "single", "married", or "divorced".
    // Write a function that takes a Person object and prints their details, making sure to handle the status property properly.
    let status;
    (function (status) {
        status["single"] = "single";
        status["married"] = "married";
        status["divorced"] = "divorced";
    })(status || (status = {}));
    function StatusDetails(human20) {
        console.log(`she is ${human20.status}`);
    }
    const objperson = {
        name: "prerna ",
        age: 21,
        status: status.married
    };
    StatusDetails(objperson);
}
exports.default = AdvanceIntefacesQuestions;
