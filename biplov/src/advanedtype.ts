function  AdvancedTypes(){
    //union type
  let value : String  | number ;
  value = 1233
  value = "Hello"
   console.log(value)
// intersection type
   interface A {a: String}
interface B {b: number}
const obj : A & B = {a:"Hello", b:123}
console.log(obj)

// another example 
 type  length = {l : number };
 type breadth ={b : number}

 type square = length&breadth;
 const number :square ={l:32,b:32}
 console.log(number)
}


export default AdvancedTypes;