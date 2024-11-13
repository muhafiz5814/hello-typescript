type cardNumber = {
  card_number: number;
}

type cardExpiry = {
  expiry_date: string;
}

type cardDetails = cardNumber & cardExpiry & { cvv: number };

type User = {
  readonly _id: string; //  Cannot be changed
  name: string;
  email: string;
  isActive: boolean;
  readonly badges?: string[];
  creditCardDetails?: cardDetails;  //  Optional property
}

let user1: User = {
  _id: "1234",
  name: "raza",
  email: "r@za.com",
  isActive: true,
  badges: ["champian", "expert"]
}

user1.email = "raz@.com";
// user1._id = "1235"; //  Will show error in typescript

// in case of array, if it is readonly property, pushing new elements and removing elements from array is permissible but assigning it a complete new array is not permissible.
user1.badges?.push("star"); //  Valid
user1.badges?.pop();  //  Valid
// user1.badges = ["hero", "excellent"]; //  Not valid
