"use strict";
// class User {
//   public name: string;
//   public email: string;
//   private readonly city: string;
Object.defineProperty(exports, "__esModule", { value: true });
//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//     this.city = "jaipur";
//   }
// }
class User {
    constructor(name, email, userId = "user123") {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this.city = "Jaipur";
    }
}
let raza = new User("raza", "r@za.com");
// raza.city = "Bundi"; /* Not allowed */
