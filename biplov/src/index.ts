import AdvancedTypes from "./advanedtype";
import AnyType from "./any";
import ArrayofObject from "./arrayofobject";
import Arrays from "./arrays";
import ClassesExample from "./classes";
import EnumExample from "./enum";
import AdvanceIntefacesQuestions from "./exercise/AdvanceIntefacesquestions";
import FunctionQuestions from "./exercise/function";
import InterfacesExercise from "./exercise/interface";
import FunctionExample from "./function";
import GenericsExample from "./generics";
import Interfaces from "./Interfaces";
import { AddFunction, SubFunction } from "./module";
import ObjectExamples from "./object";
import Tuple from "./tuple";

let a : number = 1;
let b:number = 2;

let sum = a+b;
console.log(sum);

//data types
// premitive data types

let Name: string = "biplov karki";
let std_roll: number = 7843;
let isRight: boolean = true;

console.log(Name)
console.log(std_roll)
console.log(isRight)


console.log(typeof Name)
console.log(typeof std_roll)
console.log(typeof isRight)

AnyType();
Arrays();
Tuple();
Interfaces();
ObjectExamples();
ArrayofObject();
FunctionExample();
AdvancedTypes();
ClassesExample();
GenericsExample();
EnumExample();
console.log('the sum is',AddFunction(2,3));
console.log('the sub is',SubFunction(3,1));
InterfacesExercise();
AdvanceIntefacesQuestions();
FunctionQuestions();
