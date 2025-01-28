"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NestedObject = () => {
    let animal = {
        species: "Tiger",
        age: 5,
        details: {
            color: "Orange with Black Stripes",
            habitat: "Forest",
        },
    };
    console.log(animal); // Use the value to avoid 'never read' warnings.
};
exports.default = NestedObject;
