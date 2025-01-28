"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GenericsExample() {
    function identity(value) {
        return value;
    }
    console.log(identity("hello world"));
    console.log(identity(123));
}
exports.default = GenericsExample;
