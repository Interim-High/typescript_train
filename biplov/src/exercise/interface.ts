const InterfacesExercise=()=>{

//1.Create an interface Person with properties name, age, and address. 
// Write a function that takes a Person object and prints their details.
 interface Person{
    name : string;
    age: number;
    address : string;
 }
 function Persondetails(person: Person): void {
    console.log (person)
 }
  const person: Person={
    name:"biplov",
    age:21,
    address:"jorpati ,  kathmandu"
    
  }
  Persondetails(person);

  //2. Make one property of the Person interface optional and show its use.

  interface person {
    name : string,
    age : number,
    address : string,
    phone? : number,
    email : string
  }
   const user : person ={ name : "aakash", 
    age : 21,
    address : " kathmandu",
    email : "karkibipl@gmail.com"
   }
   console.log(user);

   // different approach
    function Userdetails (User : person): void{
        console.log(User)
    }
    const  obj : person ={
        name : "biplov",
        age : 21,
        address :"kathmandu",
        email: "karkibipl@gmail.com"
    }
    Userdetails(obj)


// 3.Extend the manxey interface with another interface Employee that includes salary and designation.

   interface  manxey {
    name : string,
    age : number,
    address : string,
    email: string
   }
   interface  employee extends manxey{
    salary: number,
    designation : string
   }
     let Employee : employee ={
        name : "prerana",
        age : 21,
        address : " mitrapark",
        email : "preranakoiral2722@gmail.com",
        salary : 20000,
        designation : "intern"
     }
       
      console.log (Employee)

      //4.Create a read-only property in an interface and try modifying it
       interface main {
        readonly id : number,
        name : string,
       }
       const nomain:main={
        id: 21,
        name: " hello wordl"
       }
  // nomain.id = 21----> gives error
  //5.Define an array of objects that follow the Person interface structure

   interface Countries {
     name : string,
     sqft : number,
     isbeingInWar:  boolean
   }
     const country :Countries[]=[{
        name : "nepal",
        sqft : 21303323,
        isbeingInWar:  true
     },{
        name : "england",
        sqft : 132423434,
        isbeingInWar:  false 
     }]
     console.log(country)
}
export default InterfacesExercise;