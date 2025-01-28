/*Create an interface called Person with the following properties:
name (string)
age (number)
isEmployed (boolean)
Use the interface to create a person object.*/

export default function interfaceExample (){
    interface person{
        name: string; 
        age: number; 
        isEmployed: boolean;
    };

    let person = {
        name: "Prerana",
        age: 21,
        isEmployed: false,
    }

    console.log(person);
}

