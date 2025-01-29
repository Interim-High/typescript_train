export default function InterfaceQuestions(){
    // Create an interface Person with properties name, age, and a nested object address containing street, city, and postalCode. 
    // Write a function that accepts a Person object and prints their name, age, and full address (street, city, and postal code).

//  interface Person {
//         name : string,
//         age : number,
//         address : {
//             street : string,
//             city : string,
//             postalCode : string
//         }
//     }

    // function Persondetails(PersonObject : Person){
    //     console.log(PersonObject);
    // }

    // const Man :Person = {
    //     name:"Harihar",
    //     age : 96,
    //     address : {
    //         street : "Kasmeer",
    //         city : "Kas",
    //         postalCode : "02, khubs" 
    //     }
    // }

    // Persondetails (Man);



    //Create an interface Person with properties name, age, address, and phoneNumber. Make the phoneNumber property optional and address readonly.
    // Write a function that accepts a Person object and prints their details, ensuring the address cannot be modified inside the function.

    interface User {
        name : string,
        age : number,
        readonly address: string,
        phoneNumber ?: string
    }

    function Userdetails(PersonObject : User) :void{
        console.log(PersonObject);
    }

    const user : User={
        name : "Kasish",
        age : 25,
        address : "ktm",
        phoneNumber : "9865231569"
    }
    Userdetails (user);


    // Define an interface Person with properties name, age, and contact. 
    // The contact property should be a union type, either a string (email) or an object containing phone and address.
    //  Write a function that prints the Person details, handling both possible types for contact.

interface Man {
    name : string,
    age : number,
    contact : string| {
        phone : string,
        address : string
    };   
}

const Human : Man={
    name : "Kasish",
    age : 25,
    contact :{
        address : "ktm",
        phone : "9865231569"
    }
}

const Human2 : Man={
    name : "Kasish",
    age : 25,
    contact :"Kasish@gmail.com"
}

// function HumanDetails (a : Man) {
//     console.log(a);

// }

function HumanDetails(a: Man) {
    console.log(`Name: ${a.name}`);
    console.log(`Age: ${a.age}`);
    
    // Check if contact is a string or an object
    if (typeof a.contact === "string") {
      console.log(`Contact (Email): ${a.contact}`);
    } else {
      console.log(`Contact (Phone): ${a.contact.phone}`);
      console.log(`Contact (Address): ${a.contact.address}`);
    }
  }
HumanDetails(Human);
HumanDetails(Human2);


// Create an interface Person with properties name, age, and address. 
// Add a method introduce that returns a string introducing the person.
// Write a function that takes a Person object and prints their details using the introduce method.


interface Baby {
    name : string,
    age : number,
    address: string,
    introduce(): string
}

const bb : Baby ={
    name : "Kasish",
    age : 25,
    address : "ktm",
    introduce(){
            return `I am ${bb.name}. I am ${bb.age} years old. I live in ${bb.address}`
    }
}

console.log(bb.introduce());


//Define an interface Person<T> where T is a generic type for the address (it could be a string, an object, or any other type). 
//Write a function that accepts a Person object and prints their details, including the address based on its type (string, or custom object).

// Define a generic interface Person<T>
interface Person<T> {
    name: string;
    age: number;
    address: T;
  }
  
  // Define the function to print details
  function printPersonDetails<T>(person: Person<T>): void {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
  
    if (typeof person.address === "string") {
      console.log(`Address: ${person.address}`);
    } else if (typeof person.address === "object" && person.address !== null) {
      console.log("Address:");
      for (const key in person.address) {
        if (person.address.hasOwnProperty(key)) {
          console.log(`  ${key}: ${person.address[key as keyof T]}`);
        }
      }
    } else {
      console.log(`Address: ${person.address}`);
    }
  }
  
  // Example usage:
  
  // Case 1: Address as a string
  const person1: Person<string> = {
    name: "Alice",
    age: 30,
    address: "123 Main Street, Wonderland",
  };
  
  // Case 2: Address as an object
  const person2: Person<{ street: string; city: string; zipCode: number }> = {
    name: "Bob",
    age: 25,
    address: { street: "456 Elm St", city: "Metropolis", zipCode: 12345 },
  };
  
  // Case 3: Address as a custom type (number for example)
  const person3: Person<number> = {
    name: "Charlie",
    age: 40,
    address: 101,
  };

  printPersonDetails(person1); 
  printPersonDetails(person2);
  printPersonDetails(person3);
 
  

// Define an interface Person with properties name, age, and hobbies, where hobbies is an array of strings.
//Write a function that accepts a Person object and prints their details along with the list of hobbies, ensuring to handle the array properly. 

interface girl{
    name : string,
    age : number,
    hobbies : string[],
}

const girly : girl = {
    name : "Prerana",
    age : 21,
    hobbies : ["Sleeping", "Music", "Reading"]
}

function printInformation (a : girl){
    console.log(`Name : ${girly.name}`);
    console.log (`age : ${girly.age}`);
    console.log(`hobbies : ${girly.hobbies[0]}`);

}
printInformation(girly);

//Create an interface Person with properties name, age, and spouse. Make the spouse property nullable (spouse?: string). 
//Write a function that prints the person's details and checks if a spouse exists, printing the spouse’s name only if available.

interface Woman{
    name :string,
    age : number,
    spouse : string | null
}

const women: Woman = {
    name : "Pepe",
    age : 85,
    spouse : null
};


const women2: Woman = {
    name : "Pepe",
    age : 85,
    spouse : "Pipi"
};
function Print(b: Woman){
    console.log(`Name : ${b.name}`);
    console.log(`Age : ${b.age}`);
    if(typeof b.spouse === "string"){
        console.log(`Spouse : ${b.spouse}`);
    }else{
        console.log("has no spouse. RIP");
    }
}
Print(women);
Print(women2);

// Define an interface Person with properties name, age, and address.
// Add two methods: one for updating the address (updateAddress(newAddress: string)) and another for greeting (greet()).
// Write a function that takes a Person object, updates the address, and then prints the greeting.

interface pp{
    name : string,
    age : number,
    address : string,
    updateAddress(newAddress: string): string,
    greet() : string,
};

const qq : pp ={
    name : "Harihar",
    age : 45,
    address : "harisiddhi",
    updateAddress (newAddress): string{
        return `${newAddress} `
    },
    greet() {
        return `Hello ${qq.name}. My age is ${qq.age}. The address is ${qq.address}.The updated address is ${(qq.updateAddress("Kapilvastu"))}.`;
    },
}
console.log(qq.greet());


//Create an interface Person with properties name, age, and status.
//The status property should accept only specific string literals such as "single", "married", or "divorced". 
//Write a function that takes a Person object and prints their details, making sure to handle the status property properly.
enum Status {
    Single = "single",
    Married = "married",
    Divorced = "divorced"
}

interface ss {
    name: string;
    age: number;
    status: Status; 
}

const person: ss = {
    name: "Khagendra",
    age: 36,
    status: Status.Married // Use enum value
};

function printDetails(personObj: ss): void {
    console.log(`Name: ${personObj.name}`);
    console.log(`Age: ${personObj.age}`);
    console.log(`Status: ${personObj.status}`);
}

printDetails(person);





























































































}