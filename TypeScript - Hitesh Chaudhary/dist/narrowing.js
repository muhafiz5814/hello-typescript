"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let function1 = (arg) => {
    if (typeof arg === "number") {
        console.log(arg.toLocaleString());
    }
    else {
        console.log(arg.toUpperCase());
    }
};
function function2(arg) {
    if (typeof arg === "number") {
        return arg + 23;
    }
    return arg.indexOf("oy");
}
