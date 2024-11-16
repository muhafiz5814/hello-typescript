"use strict";
// let arr1 = [];  //  type never[], won't be able to push any value inside it.
Object.defineProperty(exports, "__esModule", { value: true });
let arr1 = [];
// let arr1: Array<number> = [];  //  This is another syntax of declaring array.
arr1.push(12);
let arr2 = ["heads", "tails", "draw"];
// arr2.push("none");  //  Not allowed in readonly array
// arr2.pop(); //  Not allowed in readonly array
console.log(arr2[1]);
