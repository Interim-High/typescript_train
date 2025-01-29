//SYNTAX
// function functionName<T>(param: T): T {
//     return param;
//   }

//   Write a generic function getFirstElement that takes an array of type T and returns the first element of the array.

export default function genericExample(){
    function getElement<T>(value: T):T{
        return value;
    }
    console.log(getElement("Ram"));
    console.log(getElement(true));


function getFirstElement<T>(value: T[]):T{
    return value[0];
}
console.log(getFirstElement([2,5,8,7,9]));

}

console.log("hey there!!!");