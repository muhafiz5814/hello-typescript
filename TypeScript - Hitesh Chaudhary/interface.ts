interface User {
  readonly id: number;
  userId: string;
  email: string;
  googleId?: string;
  // startTrial: () => string;
  startTrial(): string;
  getCoupon(couponName: string): number;
  getDetails: (id: number) => {};
}

let user1: User = {
  id: 123,
  userId: "razaBoy",
  email: "r@za.com",
  startTrial() {
    return "Your trial starts now.";
  },
  getCoupon: () => {
    return 1234;
  },
  getDetails: (id: number) => {
    return { userId: "razaBoy", email: "r@za.com" };
  },
}

/**
 * The difference between the Type Alias and Interface is that interface can be reopened to add more values to it while we can not do this with Type Alias.
 */

interface Vehicle {
  wheels: number;
  seatingCapacity: number;
}

// This is reopening of interface, it is allowed.
interface Vehicle {
  fuelType: "deisle" | "petrol"
}


type User1 = {
  name: string;
}

// This is not allowed and will show error.
// type User1 = {
//   email: string;
// }


/** Inheritance in Interface */
interface Car {
  brandName: string;
}

interface Toyota extends Vehicle, Car {
  originCountry: string;
}

let fortuner: Toyota = {
  wheels: 4,
  seatingCapacity: 7,
  fuelType: "petrol",
  brandName: "toyota",
  originCountry: "germany"
}
