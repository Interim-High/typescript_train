"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AdvancedTypes() {
    //union type
    let value;
    value = 1233;
    value = "Hello";
    console.log(value);
    const obj = { a: "Hello", b: 123 };
    console.log(obj);
    const number = { l: 32, b: 32 };
    console.log(number);
}
exports.default = AdvancedTypes;
