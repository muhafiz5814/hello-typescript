// let arr1 = [];  //  type never[], won't be able to push any value inside it.

let arr1: number[] = [];
// let arr1: Array<number> = [];  //  This is another syntax of declaring array.

arr1.push(12);

let arr2: ReadonlyArray<string> = ["heads", "tails", "draw"];

// arr2.push("none");  //  Not allowed in readonly array
// arr2.pop(); //  Not allowed in readonly array
console.log(arr2[1]);

export { };