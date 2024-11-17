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
