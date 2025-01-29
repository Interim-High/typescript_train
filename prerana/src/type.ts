
//SYNTAX
//type TypeName = { property: type };

// Create a type for a Rectangle with width and height properties.
//  Create an interface for a Square with a side property. Create instances of both.

export default function TypeExample(){
type Rectangle = {width: number, height : number} 

interface Square {
    side: number,
}

const rect1: Rectangle={width: 32, height:65};
const squ: Square={side:6};
console.log(rect1);
console.log(squ)


// type Rectangle1 = { width: number; height: number };

// function calculateArea(width: number, height: number): number {
//     return width * height;
// }
// const myRectangle: Rectangle1 = { width: 5, height: 10 };
// console.log(calculateArea(myRectangle));



interface Rectangle2 {
    width: number;
    height: number;
}

function createRectangle(width: number, height: number): number {
    return width * height ;
}

const myRectangle2 = createRectangle(10, 20);
console.log(myRectangle2); 


}