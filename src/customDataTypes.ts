// 1. - type: 'any' * * * * * * * * * *

// If we do not initialize a variable at the time of declaration, then it can behave as any type. This variable can then hold value of any type without showing error.
// But this is not much recommended in TypeScript as it eliminates the whole purpose of using TypeScript.
let level;
level = 23;
level = "Hi!";
level = true;

// Below decalaration in TypeScript will show error on parameter `document` as any type.
// function print(document) {
//   console.log(document);
// }

// We need to explicitely declare the type as `any` to remove the error.
function print(document: any) {
  console.log(document);
}

/* -------------------------------------------------------------------------------- */

// 2. - type: 'Array' * * * * * * * * * *

// Below is the normal array we use in JavaScript with different type of values in array. It will not show any error.
// let numbers = [1, 3, '5'];

// Below is the number array in TypeScript, which will allow only numbers in array.
// If we try to insert value other than numbers then it will throw error.
let numbers: number[] = [1, 3, 4];
// numbers[2] = '5';  /* It is not allowed in TypeScript and will show error. */

// We can also declare an empty array.
// If we do not specify the type of array then it will be of 'any' type.
let sums = [];
sums[0] = 23; /* Allowed */
sums[1] = '12'; /* Allowed */
sums[2] = "100";  /* Allowed */
sums[3] = true; /* Allowed */
sums[2] = 10; /* Allowed */


// As best practice we should always specify the type of array when we declare an empty array in TypeScript.
let arr: string[] = [];
// arr[0] = 23; /* Not Allowed */
arr[1] = '12'; /* Allowed */
arr[2] = "100";  /* Allowed */
// arr[3] = true; /* Not Allowed */
// arr[2] = 10; /* Not Allowed */


// Code Completion is also one of the best feature of TypeScript.
arr.forEach(str => str.length);

/* -------------------------------------------------------------------------------- */

// 2. - type: 'Tuple' * * * * * * * * * *

// A tuple is a fixed length array, where each element has a specific type.

let user: [number, string] = [1, "raza"];
// console.log(user[0].toString());
// console.log(user[1].indexOf("za"));

/* -------------------------------------------------------------------------------- */

// 2. - type: 'Enum' * * * * * * * * * *

// Enum is a list of related constants.

// Normal way of declaring constants.
// const small = 1;
// const medium = 2;
// const large = 3;

// Declaration of above constatns using enum (variable name in PascalCase)
enum Size { Small = 1, Medium, Large };
// const enum Size { Small = 1, Medium, Large };  /* It will create less complicated javascript code. */
let mySize: Size = Size.Large;
console.log(mySize);
