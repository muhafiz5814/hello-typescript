let user: [number, string, boolean];
user = [12, "raza", true];  //  Valid
// user = ["raza", 12, true];  //  Not valid
// user = ["raza", true, 12];  //  Not valid
// user = [12, "raz", false, 32];  //  Not valid, can't add extra elements.

let rgb: [number, number, number] = [234, 255, 35];

type User = [number, string];

let newUser: User = [132, "raz@g.com"];

newUser[0] = 123; //  Valid
newUser[1] = "r@z.com"; //  Valid

// newUser[0] = "r@z.com";  //  Not valid
// newUser[1] = 123;  //  Not valid

newUser.push(23); //  Valid but not supposed to.



export { };