"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example of array declarations in generic syntax.
let names = []; //  let names: string[] = [];
let codes = []; //  let codes: number[] = [];
// A function which accepts an argument of different types and returns value of different types based on the type of argument.
// Problem with this approach is that it doesn't guarantee that type of argument and type of return value will be same. Argument can be of type boolean and return value can be of type number or vice-verca.
const identityOne = (val) => {
    return val;
};
// Above function can also be implemented using type "any".
// The problem with this approach is that it doesn't guarantee that the type of the argument and the type of return value will be same. These values can be of any type.
const identityTwo = (val) => {
    return val;
};
// One solution to above problem of types being different is, generic functions.
// This function will accept value of any given type, and will make sure the return type is also of that type.
function identityThree(val) {
    return val;
}
// Below are some different calls to function identityThree with different types of arguments.
// There are two syntaxes for this, both are shown below.
identityThree("raza");
identityThree("raz");
identityThree(4);
identityThree(5);
identityThree(false);
identityThree(true);
identityThree(null);
identityThree(null);
const laptop1 = {
    brand: "hp",
    model: "notebook",
    price: 42000,
    purchaseYear: "2020"
};
identityThree(laptop1); //  This is the correct syntax for calling a generic function for custom type.
identityThree({ brand: "hp", model: "notebook", price: 42000 }); /* X X */ //  This is not the correct syntax in case of custom types.
// Arrays in generics * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function getLaptops(arg) {
    return arg[0];
}
function getLaptops1(arg) {
    return arg[1];
}
// Arrow functions in generics * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
let getManyLaptops = (arg) => {
    return arg[1];
};
// A comma (,) after "T" is just a syntactical sugar and will not cause any error or warning.
// It is good to use this syntax while working with React to differantiate between generic type and JSX HTML Element.
let getManyMoreLaptops = (arg) => {
    return arg;
};
