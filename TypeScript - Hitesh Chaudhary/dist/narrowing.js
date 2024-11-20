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
;
;
;
function move(animal) {
    var _a, _b;
    if ("swim" in animal) {
        console.log((_a = animal.swim) === null || _a === void 0 ? void 0 : _a.call(animal)); //  This is optional calling
    }
    else {
        console.log((_b = animal.fly) === null || _b === void 0 ? void 0 : _b.call(animal)); //  This is optional calling
    }
}
// type checking using "instance of" * * * * * * * * * * * * * * * * * * * * * * * * * *
// it is usefull for most values that can be constructed using "new" keyword. * * * * *
function printValue(val) {
    if (val instanceof Date)
        console.log(val.toLocaleString());
    else
        console.log(val.toUpperCase());
}
class Example {
    constructor(member1, member2) {
        this.member1 = member1;
        this.member2 = member2;
    }
    get getMember1() {
        return this.member1;
    }
}
function instanceExample(param) {
    if (param instanceof Date)
        return param.getFullYear();
    else if (param instanceof Example)
        return param.getMember1;
    else
        return param.reverse();
}
;
;
// Without using "pet is Fish" in return type of below function will simply return a boolean true or false value.
// It will not be usefull in narrowing as it will not tell the type of parameter, instead it will just return true or false.
// When we write "pet is Fish" in return type of the function, it will narrow down the type of parameter as Fish if it returns true.
function isFish(pet) {
    return pet.swim !== undefined;
}
let getFood = (pet) => {
    if (isFish(pet)) {
        pet.swim();
        pet.waterAnimal();
    }
    else {
        pet.fly();
        pet.landAnimal();
    }
};
// Below function will show error if we add another type to Shape later.
// function getArea(shape: Shape): number {
//   if (shape.kind === "circle") return Math.PI * shape.radius ** 2;
//   else return shape.side ** 2;
// }
// Below function will show any compilation error about return type and can break at runtime if we add extra type to Shape type.
// function getArea1(shape: Shape): number {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.side * shape.side;
//   }
// }
// Exhaustice checkin * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// It will show error when there is new type is added in Shape and will alert to handle that case also in switch statement.
// This check can be implemented using type "never"
// "never" type can be assigned to any other type, but any other type cannot be assigned to "never" type.
function getArea2(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _ExhaustiveCheck = shape;
            return _ExhaustiveCheck;
    }
}
