"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var age = 24;
var getBirthYear = function (age) {
    var birthYear = new Date().getFullYear() - age;
    return birthYear;
};
var birthYear = getBirthYear(age);
console.log(birthYear);
var user_details = { name: "Muhafiz", age: 15, email: "muh@fiz.com" };
function getUserDetails(userDetails) {
    return { name: userDetails.name, age: userDetails.age };
}
console.log(getUserDetails({ name: "Raza", age: 14 }));
console.log(getUserDetails(user_details));
function getUserName(userDetails) {
    return "".concat(userDetails.name).concat(userDetails.age).concat(Math.floor(Math.random() * 1000));
}
console.log(getUserName({ name: "Raza", age: 14 }));
console.log(getUserName(user_details));
