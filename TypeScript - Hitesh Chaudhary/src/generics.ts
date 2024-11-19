// Example of array declarations in generic syntax.
let names: Array<string> = [];  //  let names: string[] = [];
let codes: Array<number> = [];  //  let codes: number[] = [];

// A function which accepts an argument of different types and returns value of different types based on the type of argument.
// Problem with this approach is that it doesn't guarantee that type of argument and type of return value will be same. Argument can be of type boolean and return value can be of type number or vice-verca.
const identityOne = (val: boolean | number): boolean | number => {
  return val;
};

// Above function can also be implemented using type "any".
// The problem with this approach is that it doesn't guarantee that the type of the argument and the type of return value will be same. These values can be of any type.
const identityTwo = (val: any): any => {
  return val;
}

// One solution to above problem of types being different is, generic functions.
// This function will accept value of any given type, and will make sure the return type is also of that type.
function identityThree<T>(val: T): T {
  return val;
}

// Below are some different calls to function identityThree with different types of arguments.
// There are two syntaxes for this, both are shown below.
identityThree("raza");
identityThree<string>("raz");

identityThree(4);
identityThree<number>(5);

identityThree(false);
identityThree<boolean>(true);

identityThree(null);
identityThree<null>(null);


// Using a custom type in generic function.
// Create an interface of type Laptop
interface Laptop {
  brand: string;
  model: string;
  price: number;
  purchaseYear: string;
}

const laptop1: Laptop = {
  brand: "hp",
  model: "notebook",
  price: 42000,
  purchaseYear: "2020"
}

identityThree<Laptop>(laptop1); //  This is the correct syntax for calling a generic function for custom type.

identityThree({ brand: "hp", model: "notebook", price: 42000 });  /* X X */  //  This is not the correct syntax in case of custom types.


// Arrays in generics * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
function getLaptops<T>(arg: T[]): T {
  return arg[0];
}

function getLaptops1<T>(arg: Array<T>): T {
  return arg[1];
}


// Arrow functions in generics * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
let getManyLaptops = <T>(arg: T[]): T => {
  return arg[1];
}

// A comma (,) after "T" is just a syntactical sugar and will not cause any error or warning.
// It is good to use this syntax while working with React to differantiate between generic type and JSX HTML Element.
let getManyMoreLaptops = <T,>(arg: T): T => {
  return arg;
}

// We can use as many input types as we want.
let multipleTypeGenericFunction = <T, U>(valOne: T, valTwo: U): {} => {
  return {
    valOne,
    valTwo
  };
};


// Constrains in generic types
interface Random {
  prop1: string,
  prop2: string
}

let constrainBasedGeneric = <Type, Input extends Random>(arg1: Input, arg2: Type): Type => {
  return arg2;
}

constrainBasedGeneric({prop1: "hi", prop2: "bye"}, "hello");

function constrainBasedGeneric2<Input, Key extends keyof Input>(arg1: Input, arg2: Key): Input[Key] {
  return arg1[arg2];
}

// some random object
let obj = {
  p1: "hey",
  num: 4,
  p2: true
};

constrainBasedGeneric2(obj, "p1");
constrainBasedGeneric2(obj, "num");
constrainBasedGeneric2(obj, "p2");
// constrainBaseGeneric2(obj, 4); //  Not allowed, second argument must be a property or key of the object provided in first argument.
// constrainBaseGeneric2(obj, "4"); //  Not allowed

// Generic classes * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

interface Book {
  title: string,
  type: string
}

interface Course {
  name: string,
  price: string
}

class Sellable<T> {
  cart: T[] = [];

  addToCart = (product: T): void => {
    this.cart.push(product);
  };

  deleteFromCart(): T | undefined{
    return this.cart.length > 0 ? this.cart.pop() : undefined;
  }
}