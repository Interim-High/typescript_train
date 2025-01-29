"use strict";
//SYNTAX
//type TypeName = { property: type };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TypeExample;
// Create a type for a Rectangle with width and height properties.
//  Create an interface for a Square with a side property. Create instances of both.
function TypeExample() {
    const rect1 = { width: 32, height: 65 };
    const squ = { side: 6 };
    console.log(rect1);
    console.log(squ);
    function createRectangle(width, height) {
        return width * height;
    }
    const myRectangle2 = createRectangle(10, 20);
    console.log(myRectangle2);
}
