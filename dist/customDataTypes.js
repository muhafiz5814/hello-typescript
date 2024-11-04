"use strict";
let level;
level = 23;
level = "Hi!";
level = true;
function print(document) {
    console.log(document);
}
let numbers = [1, 3, 4];
let sums = [];
sums[0] = 23;
sums[1] = '12';
sums[2] = "100";
sums[3] = true;
sums[2] = 10;
let arr = [];
arr[1] = '12';
arr[2] = "100";
arr.forEach(str => str.length);
let user = [1, "raza"];
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Large;
console.log(mySize);
function calculateAge(birthYear = 2000) {
    return new Date().getFullYear() - birthYear;
}
console.log(calculateAge());
console.log(calculateAge(1997));
//# sourceMappingURL=customDataTypes.js.map