"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AnyType() {
    let value = "hello, typescrpit devlopers";
    if (typeof value == "string") {
        console.log(value.toUpperCase());
    }
    function AnyPremitiveType() {
        let value = "hello developers";
        console.log(value.toUpperCase());
        value = 42;
        console.log(value + 1);
    }
    AnyPremitiveType();
}
exports.default = AnyType;
