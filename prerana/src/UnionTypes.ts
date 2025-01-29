//SYNTAX
/* let variable: type1 | type2;

function functionName(param: type1 | type2): returnType {
  // logic
}*/

//Declare a variable status that can hold either a boolean or a string. 
// Write a function updateStatus that takes a parameter of type boolean | string and logs it.

export default function UnionExample(){
  let status: boolean|string = "Prerana";
  function updateStatus(value: boolean|string) :void{
      console.log("value", value);
  }
  updateStatus(true);
  updateStatus(status);
}

export function Example2(){
    function checker(value: string| number) :void{
      if(typeof value === 'string'){
        console.log("The entered value is String",value);
      }
      else{
        console.log("The entered value is number type",value);
      }
    }
    checker(256);
    checker("Hello world, see ya");
}