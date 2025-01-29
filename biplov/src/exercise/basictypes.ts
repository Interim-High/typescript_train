function BasicTypes(){
     //1. Declare variables with string, number, and boolean types. Assign values and print their types.
      const name : string = "kasyab";
      const age : number =21;
      const isplaying: boolean = true;

      console.log (typeof name,age,isplaying)

//2.Write a function to return the square of a number with proper type annotations
    
    const square =(Num: number):number => Num * Num;
    console.log(square(21));

//3.Create an array of numbers and find their sum.
 const array:number[]=[2,2,3,4,21]
 const sum:number= array.reduce((acc:number, curr : number)=> acc + curr,0)
 console.log(sum)


 //4.Declare a tuple for storing a person’s name (string) and age (number).
 const person:[string, number]= ["biplov",21];
 console.log(person)

 //5.What is any type? Write an example where it could be misused.

  const Name : any =  1234;
  console.log(Name())
}

export default BasicTypes;