let age = 24;

const getBirthYear = (age: number): number => {
  let birthYear = new Date().getFullYear() - age;
  return birthYear;
}

let birthYear = getBirthYear(age);
console.log(birthYear);

let user_details = { name: "Muhafiz", age: 15, email: "muh@fiz.com" };

function getUserDetails(userDetails: { name: string, age: number}): {name: string, age: number} {
  return { name: userDetails.name, age: userDetails.age };
}

console.log(getUserDetails({ name: "Raza", age: 14 }));
console.log(getUserDetails(user_details));

function getUserName(userDetails: { name: string, age: number}): string {
  return `${userDetails.name}${userDetails.age}${Math.floor(Math.random() * 1000)}`;
}

console.log(getUserName({ name: "Raza", age: 14 }));
console.log(getUserName(user_details));

export { };