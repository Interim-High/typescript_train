const FunctionQuestions=()=>{
  
    const Factorial=(num : number ):number =>{
      if(num ==0 ) return 1;
      return num * Factorial(num -1)
      
    }
    const numbertofind : number = 3;
    console.log(`the factorial of number ${numbertofind} is ${Factorial(numbertofind)}`)
//Create a function with default parameters and call it with and without the default value
 function  parameters( value : string= "guest"): void{
   console.log("helllo world" + value);
 }
 parameters();
 parameters("biplov");
console.log (`-------------------------------------------------------------------------------------------------------------`);
//Write an arrow function to return the maximum of two numbers.

// const MaximumNumber =(a:number ,b :number): void=>{

//   if (a > b ) console.log (" a is greater than b");
  
//     return console.log (" b is greater than a");
// }
//   MaximumNumber(10,20)


  const MaximumNumber = (a: number, b: number): number => {
    return a > b ? a : b;
  };
  
  // Calling the function
  console.log(MaximumNumber(10, 20)); // Output: 20
  console.log(MaximumNumber(30, 15)); // Output: 30
  

  console.log("-----------------------------------------------------------")
  //Create a function that accepts rest parameters and calculates their average.
  const  average=(...numbers : number[]): number =>{
   
let sum :number=   numbers.reduce((acc : number , curr : number)=> acc + curr,0);
let average = sum / numbers.length;
return  average;
  }
  console.log (average(1,2,3,4,5,5))

  console.log("________________________________________________________")
//5.Implement function overloading for a function that either adds two numbers or concatenates two strings.
 function add (c:number, d: number):number;
 function add ( c:string , d: string) : string ;
 
//  function overriding 
 function add (a: any , b: any): any{
    return a+b;
 }
 console.log(add(11 ,12))
 console.log(add("sweet", "home"))
 
}

export default FunctionQuestions;