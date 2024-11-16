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
        this.courseCounter = 1;
    }
    deleteUser() {
        console.log(`User with userId ${this.userId} deleted.`);
    }
    get getEmail() {
        return `email: ${this.email}`;
    }
    set setUserId(id) {
        this.userId = id;
    }
}
class SubUser extends User {
    changeCourseCounter(courseNum) {
        if (courseNum < 1) {
            throw new Error("Course counter must be greater or equal to 1.");
        }
        this.courseCounter = courseNum; /* As it is a protected property, it is accessible in this child class. */
    }
}
let raza = new User("raza", "r@za.com");
// raza.city = "Bundi"; /* Not allowed, private */
// raza.deleteUser();  /* Not allowed, private */
// raza.courseCounter = 3; /* Not allowed, protected */
let raz = new SubUser("raz", "r@z.com");
// raz.courseCounter = 5;  /* Not allowed, protected */
raz.changeCourseCounter(4); /* Allowed */
