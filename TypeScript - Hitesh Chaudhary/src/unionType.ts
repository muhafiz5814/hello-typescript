let id: string | number = 25;
id = 23;  //  Valid
id = "23";  //  Valid

type User = {
  name: string;
  id: number | string;
}

type Admin = {
  username: string;
  id: number | string;
}

let user1: User | Admin = { name: "raza", id: 123 };
user1.id = "1234";  //  Valid
user1 = {username: "raza1234", id: "1234a"} //  Valid


function printId(id: number | string) {
  console.log(id);
}

printId(234); //  Valid
printId("124"); //  Valid

function getId(id: number | string): number | string {
  return typeof (id) === "string"
    ? id.trim().toUpperCase()
    : id;
}

console.log(getId(23)); //  Valid
console.log(getId("1243")); //  Valid

// Union in arrays
let arr1: number[] = [1, 4, 5]; //  Valid untill all values are numbers.
let arr2: string[] = ["raj", "abhi", "amit"]; //  Valid untill all values are strings.
let arr3: number[] | string[] = [1, 23, 456, 7890]; //  Either all values can be number or all values can be string.
arr3.push(5); //  Valid for now as arr3 is array of numbers.
// arr3.push("gautam"); //  Not valid for now as arr3 is array of numbers.

arr3 = ["sharma", "roy", "shukla"]; //  Re-assign arr3 to a string array.
arr3.push("rai"); //  Valid now as arr3 became array of strings.
// arr3.push(4);  //  Not valid now as arr3 became array of strings.

// Below defined array can have element of either boolean type or value 1 or value 0.
let arr4: (1 | 0 | boolean)[] = [1, true, true, false, 0, 1];

// Below defined variable arr5 is different from above defined array arr4.
// arr5 can hold value 1, 0 or array of booleans.
// arr5 is not an array untill we assign it to a boolean array.
// If it is assigned to 1 or 0, it 
let arr5: 1 | 0 | boolean[] = [false];
// arr5.push(1);  //  Not valid as we can push only boolean value in array.
// arr5.push(0);  //  Not valid as we can push only boolean value in array.
arr5.push(true);  //  Valid

arr5 = 1; //  Valid according to definition.
// arr5 = 4;  //  Not valid as we can not assign value other than 0 or 1 or boolean[]->(array of boolean).


let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "middle"; //  Valid
// seatAllotment = "crew"; //  Not valid

export { };