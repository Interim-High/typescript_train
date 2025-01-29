/* Write a function processValue that takes a parameter of type string | number. 
If the value is a string, log its length. If it's a number, log its square.  */

//Syntax
// if (typeof variable === "type") {
//     // Narrow down the type
//   }
  

export default function RefiningTypesExample(){

    function processValue(input: string| number): void{
        if(typeof input === "string"){
            console.log("The length of variable is: ", input.length);
        }
        else{
            console.log("The squared number is: ", input*input);
        }
    }

    processValue("Prerana");
    processValue(2);
}