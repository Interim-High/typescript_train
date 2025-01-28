"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayofObject = () => {
    let house;
    house = [{
            floor: 3,
            rooms: 4,
            details: {
                color: "red",
                cost: 20000
            }
        }, {
            floor: 6,
            rooms: 4,
            details: {
                color: "black",
                cost: 30000
            }
        }];
    console.log(house);
};
exports.default = ArrayofObject;
