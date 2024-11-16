"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = 24;
const getBirthYear = (age) => {
    let birthYear = new Date().getFullYear() - age;
    return birthYear;
};
let birthYear = getBirthYear(age);
console.log(birthYear);
let user_details = { name: "Muhafiz", age: 15, email: "muh@fiz.com" };
function getUserDetails(userDetails) {
    return { name: userDetails.name, age: userDetails.age };
}
console.log(getUserDetails({ name: "Raza", age: 14 }));
console.log(getUserDetails(user_details));
function getUserName(userDetails) {
    return `${userDetails.name}${userDetails.age}${Math.floor(Math.random() * 1000)}`;
}
console.log(getUserName({ name: "Raza", age: 14 }));
console.log(getUserName(user_details));
