function AdvanceIntefacesQuestions(){

// Create an interface Person with properties name, age, and a nested object address containing street, city, and postalCode. 
// Write a function that accepts a Person object and prints their name, age, and full address (street, city, and postal code).
interface Person {
    name: string ,
    age : number,
    address:{
    street : number,
    city : string,
    postalcode : string,
    }
}
 function personalDetails (person : Person){
    console.log(person);
 }

const person: Person={
    name: "biplov" ,
    age : 21,
    address:{
    street : 13,
    city : "rautahat",
    postalcode : "13B20265",
}


}
 personalDetails(person);

 //Create an interface manxey with properties name, age, address, and phoneNumber.
 //  Make the phoneNumber property optional and address readonly. 
 // Write a function that accepts a Person object and prints their details, ensuring the address cannot be modified inside the function.

 interface manxey {
    name : string,
    age: number,
    readonly address: string,
    phoneNumber?: string,
 }
 function User(person: manxey): void{
    console.log(person)
    // person.address="rautahat" --> readonly 
 }

  const man : manxey ={
    name : "hari",
    age: 30,
    address: "kamalpokhari",
  }
 
User(man)

//Define an interface Person with properties name, age, and contact. 
// The contact property should be a union type, either a string (email) or an object containing phone and address. 
// Write a function that prints the Person details, handling both possible types for contact.

 interface insaan{
    name: string,
    age : number,
    contact: string | {
        phone: string,
        address: string
    },
 }
function manDetails(man : insaan):void{
 console.log("name :", man.name)
 console.log("age :", man.age)
 if(typeof man.contact === "string"){
    console.log("contact:" + man.contact)
 }else{
    console.log(`phone ${man.contact.phone}`)
    console.log(`phone ${man.contact.address}`)
 }
}
const boy : insaan= {
    name: "string",
    age : 32,
    contact:  {
        phone: "982397832",
        address: "kfslkjsfms"
    },
}
const boy2 : insaan= {
    name: "string",
    age : 32,
    contact: "karkibipl@gmail.com" 
}


manDetails(boy)
manDetails(boy2)

//4. Create an interface Person with properties name, age, and address. 
// Add a method introduce that returns a string introducing the person. 
// Write a function that takes a Person object and prints their details using the introduce method.

interface Person1 {
    name: string,
    age :number,
    address:string,
    introduce() :string 
}
 const personkodetails=(p : Person1)=>{
 console.log( p.introduce());
 }
 const exampleperson : Person1={
    name: "string",
    age :31,
    address:"string kjwie",
    introduce() {
   return `welcome ${exampleperson.name} , he is ${exampleperson.age} and he is fron ${exampleperson.address}`
    }

    
 }
 personkodetails(exampleperson)

 //Define an interface Person<T> where T is a generic type for the address (it could be a string, an object, or any other type).
 // Write a function that accepts a Person object and prints their details, including the address based on its type (string, or custom object).
  interface user<T>{
    name : string,
    age : number ,
    address : T
  }

   const  person1 : user<string>={
    name : "biplov",
    age : 21 ,
    address : "123 st mariyas "
   }
   const  person2 : user<{street: string, city: string}>={
    name : "biplov",
    age : 21 ,
    address :{
        street :" 123 street ",
        city : "rautahat"
    }
   }
   const person3 : user <number>={
    name : "biplov",
    age : 21 ,
    address : 12934
   }
   function userkodetails<T>(per: user<T>): void {
       console.log(per)
   }
   userkodetails(person1)
   userkodetails(person2)
   userkodetails(person3)

   //6.Create an interface Employee that extends a base Person interface. 
   // Add properties employeeId and department to the Employee interface. 
   // Write a function that takes an Employee object and prints both personal and
   //  employee-specific details (name, age, address, employee ID, department).
   interface human {
    name: string ,
    age : number,
    address:{
    street : number,
    city : string,
    postalcode : string,
    }
}
interface worker extends human {
 employee_ID: number ;
 department : string;
}

//7.Define an interface Person with properties name, age, and hobbies, where hobbies is an array of strings.
// Write a function that accepts a Person object and prints their details along with the list of hobbies,
//  ensuring to handle the array properly.

interface person90{
    name :string,
    age : number,
    hobbies?:string[]
}
const user22 : person90={
    name :'prerana',
    age : 21,
    hobbies:['play','coding','sleeping']
}
function userwithHobbies(u : person90):void {
    console.log(`${u.hobbies}`)
}
userwithHobbies(user22);
//8.Create an interface Person with properties name, age, and spouse.
// Make the spouse property nullable (spouse?: string). 
// Write a function that prints the person's details and checks if a spouse exists, printing the spouse’s name only if available.

 interface human880 {
    name : string ;
    age : number ;
    spouse: string | null;
 }
 const human : human880= {
    name : "prerana",
    age : 26,
    spouse : "prerana"
 }
 const personwithspouse=(female :human880 ):void=>{
 console.log(`His name is ${female.name},he is ${female.age}`)
 if(typeof female.spouse ==="string" || female.spouse != null){
    console.log (`married to ${female.spouse}`);
 }else {
    console.log("not married")
 }
 }
 personwithspouse(human)

 //9.Define an interface Person with properties name, age, and address.
 //  Add two methods: one for updating the address (updateAddress(newAddress: string)) and another for greeting (greet()). 
 // Write a function that takes a Person object, updates the address, and then prints the greeting.
 interface person60 {
    name : string ,
    age : number ,
    address: string,
   updateAddress(newAddress :string):string ,
    greet() :string
 }

 const user90 : person60= {
    name : "aakash" ,
    age : 29 ,
    address: "jorpati 20,first street",
   updateAddress(newAddress): string {
    return ` updated address: ${newAddress}`;
   },
    greet(){
 return "welcome"+ user90.name +", he is :"+ user90.age+ "and his address is" + user90.updateAddress("mahankal")
    } 


 }
  console.log (user90.greet())

  //10.Create an interface Person with properties name, age, and status. 
  // The status property should accept only specific string literals such as "single", "married", or "divorced".
  // Write a function that takes a Person object and prints their details, making sure to handle the status property properly.
enum status {
    single ="single",
    married ="married",
    divorced ="divorced"
}
  interface Person30{
    name : string ,
    age : number ,
    status: status,
    
  }
  function StatusDetails (human20 : Person30){
    console.log(`she is ${human20.status}`)
  }
   const objperson : Person30={
    name : "prerna ",
    age : 21,
    status: status.married
   }
   StatusDetails(objperson)
}


export default AdvanceIntefacesQuestions;