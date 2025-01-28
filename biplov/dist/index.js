"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const advanedtype_1 = __importDefault(require("./advanedtype"));
const any_1 = __importDefault(require("./any"));
const arrayofobject_1 = __importDefault(require("./arrayofobject"));
const arrays_1 = __importDefault(require("./arrays"));
const function_1 = __importDefault(require("./function"));
const Interfaces_1 = __importDefault(require("./Interfaces"));
const object_1 = __importDefault(require("./object"));
const tuple_1 = __importDefault(require("./tuple"));
let a = 1;
let b = 2;
let sum = a + b;
console.log(sum);
//data types
// premitive data types
let Name = "biplov karki";
let std_roll = 7843;
let isRight = true;
console.log(Name);
console.log(std_roll);
console.log(isRight);
console.log(typeof Name);
console.log(typeof std_roll);
console.log(typeof isRight);
(0, any_1.default)();
(0, arrays_1.default)();
(0, tuple_1.default)();
(0, Interfaces_1.default)();
(0, object_1.default)();
(0, arrayofobject_1.default)();
(0, function_1.default)();
(0, advanedtype_1.default)();
