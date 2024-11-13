"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var id = 25;
id = 23; //  Valid
id = "23"; //  Valid
var user1 = { name: "raza", id: 123 };
user1.id = "1234"; //  Valid
user1 = { username: "raza1234", id: "1234a" }; //  Valid
function printId(id) {
    console.log(id);
}
printId(234); //  Valid
printId("124"); //  Valid
function getId(id) {
    return typeof (id) === "string"
        ? id.trim().toUpperCase()
        : id;
}
console.log(getId(23)); //  Valid
console.log(getId("1243")); //  Valid
