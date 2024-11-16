"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
let user1 = {
    _id: "1234",
    name: "raza",
    email: "r@za.com",
    isActive: true,
    badges: ["champian", "expert"]
};
user1.email = "raz@.com";
// user1._id = "1235"; //  Will show error in typescript
// in case of array, if it is readonly property, pushing new elements and removing elements from array is permissible but assigning it a complete new array is not permissible.
(_a = user1.badges) === null || _a === void 0 ? void 0 : _a.push("star"); //  Valid
(_b = user1.badges) === null || _b === void 0 ? void 0 : _b.pop(); //  Valid
// user1.badges = ["hero", "excellent"]; //  Not valid
