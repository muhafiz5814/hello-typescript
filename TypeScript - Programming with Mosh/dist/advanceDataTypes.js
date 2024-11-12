"use strict";
var _a;
let employee1 = {
    id: 1,
    name: "Raza",
    retire: (date) => { console.log(date); }
};
const feetToInches = (weight) => {
    return typeof weight === "number"
        ? weight.valueOf() / 12
        : parseInt(weight) / 12;
};
let element = {
    drag: () => { },
    resize: () => { }
};
let number1 = 50;
let number2 = 45;
number2 = 23;
let quantity = 45;
quantity = 90;
const greet = (name) => {
    name ? console.log(`Hi! ${name.toUpperCase()}`) : console.log("Hi! Stranger");
};
const getCustomer = (id) => {
    return id === 0 ? null : { birthday: new Date() };
};
let customer = getCustomer(2);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let undefinedOrNullArray = undefined;
console.log(undefinedOrNullArray === null || undefinedOrNullArray === void 0 ? void 0 : undefinedOrNullArray[0]);
const func = null;
func === null || func === void 0 ? void 0 : func("b");
//# sourceMappingURL=advanceDataTypes.js.map