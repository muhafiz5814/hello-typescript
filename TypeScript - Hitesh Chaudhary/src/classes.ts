// class User {
//   public name: string;
//   public email: string;
//   private readonly city: string;

//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//     this.city = "jaipur";
//   }
// }

class User {
  private readonly city: string = "Jaipur";
  protected courseCounter: number = 1;
  constructor(
    public name: string,
    public email: string,
    private userId: string = "user123"
  ){
  }

  private deleteUser(): void {
    console.log(`User with userId ${this.userId} deleted.`);
  }

  get getEmail(): string {
    return `email: ${this.email}`;
  }

  set setUserId(id: string) {
    this.userId = id;
  }
}

class SubUser extends User {
  changeCourseCounter(courseNum: number) {
    if (courseNum < 1) {
      throw new Error("Course counter must be greater or equal to 1.")
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