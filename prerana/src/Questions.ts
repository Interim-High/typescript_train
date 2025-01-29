// Create an array of numbers and find their sum.

export default function Questions(){
    let numbers: number[] = [1,2,3,4,5,6];

    let sum = numbers.reduce((a:number,b:number) =>{
        return a+b;
    },0)

    console.log(sum);

//Declare a tuple for storing a person’s name (string) and age (number).

let name:[name: string, age: number] = ["Prerana", 21];

//Create an interface Person with properties name, age, and address. Write a function that takes a Person object and prints their details

interface Person{
    name: string,
    age : number,
    address: string
}
function details(person : Person) :void{
    console.log(person)
}
const type : Person = {
    name :"Prerana", 
    age : 21, 
    address: "kalopul"
 };
 details(type);

//  Make one property of the Person interface optional and show its use.

interface People {
    name : string,
    age : number,
    address : string,
    phone ?: string 
}

// function PeopleDetails(people:People) :void{
//     console.log(people);
// }

const obj :  People = {
    name : "Ramita",
    age : 25,
    address : "patan"
}

console.log(obj);

//Extend the Person interface with another interface Employee that includes salary and designation.

interface Employee extends People{
    salary : number,
    designation : string,
}

const Worker : Employee ={
    name : "Ramesh",
    age : 56,
    address : "ktm",
    salary : 65000,
    designation : "Manager"
}
 console.log (Worker);

 //Define an array of objects that follow the Person interface structure.

 const man : People[]= [{
        name : "kripesh",
        age : 96,
        address : "jajarkot"
 },
{
    name : "kripesh",
        age : 96,
        address : "jajarkot"

    }]


console.log(man);



































}