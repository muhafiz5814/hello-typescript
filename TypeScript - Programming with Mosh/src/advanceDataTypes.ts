/* -------------------------------------------------------------------------------- */

// 1. - type: 'Type Aliases' * * * * * * * * * *

type Employee = {
  id: number,
  name: string,
  retire: (date: Date) => void
}

let employee1: Employee = {
  id: 1,
  name: "Raza",
  retire: (date: Date) => {console.log(date)}
}

// console.log(employee1);
// employee1.retire(new Date());

/* -------------------------------------------------------------------------------- */

// 2. - type: 'Union Types' * * * * * * * * * *

const feetToInches = (weight: number | string): number => {
  // Narrowing
  return typeof weight === "number"
    ? weight.valueOf() / 12
    : parseInt(weight) / 12;
}

// console.log(feetToInches(12));
// console.log(feetToInches("30"));
// console.log(feetToInches("14"));
// console.log(feetToInches("53"));
// console.log(feetToInches("240 feet"));


/* -------------------------------------------------------------------------------- */

// 3. - type: 'Intersection Types' * * * * * * * * * *

type Draggable = {
  drag: () => void
};

type Resizable = {
  resize: () => void
};

type UIwidget = Draggable & Resizable;

let element: UIwidget = {
  drag: () => { },
  resize: () => { }
};


/* -------------------------------------------------------------------------------- */

// 4. - type: 'Literal Types' * * * * * * * * * *

let number1: 50 = 50;  //  This is correct
// let number: 50 = 51; //  This is wrong
let number2: 45 | 23 = 45;  //  This is correct
// let number2: 45 | 23 = 23;  //  This is correct
number2 = 23; //  This is correct
// number2 = 24; //  This is wrong

type Quantity = 45 | 90;
let quantity: Quantity = 45;  //  This is correct
quantity = 90;  //  This is correct
// quantity = 50;  //  This is wrong

type Metric = "cm" | "in";  //  This is correct


/* -------------------------------------------------------------------------------- */

// 5. - type: 'Nullable Types' * * * * * * * * * *

const greet = (name: string | null | undefined ): void => {
  name ? console.log(`Hi! ${name.toUpperCase()}`) : console.log("Hi! Stranger");
}

// greet("Saif");
// greet(null);
// greet(undefined);


/* -------------------------------------------------------------------------------- */

// 6. - 'Optional  Chaining' * * * * * * * * * *

type Customer = {
  birthday?: Date
};

const getCustomer = (id: number): Customer | null => {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(2);
// Optional Property access operator
console.log(customer?.birthday);
console.log(customer?.birthday?.getFullYear());

// Optional Element access operator
let undefinedOrNullArray: any[] | null | undefined = undefined;
console.log(undefinedOrNullArray?.[0]);

// Optional Call
const func: any = null
func?.("b");