let function1 = (arg: string | number): void => {
  if (typeof arg === "number") {
    console.log(arg.toLocaleString());
  } else {
    console.log(arg.toUpperCase());
  }
}

function function2(arg: number | string): number | string {
  if (typeof arg === "number") {
    return arg + 23;
  }
  return arg.indexOf("oy");
}

// "in" narrowing
interface Fish { swim: () => void };
interface Bird { fly: () => void };
interface Human { swim?: () => void, fly?: () => void };

function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    console.log(animal.swim?.()); //  This is optional calling
  } else {
    console.log(animal.fly?.());  //  This is optional calling
  }
}

// type checking using "instance of" * * * * * * * * * * * * * * * * * * * * * * * * * *
// it is usefull for most values that can be constructed using "new" keyword. * * * * *

function printValue(val: Date | string) {
  if (val instanceof Date) console.log(val.toLocaleString());
  else console.log(val.toUpperCase());
}

class Example {
  constructor(
    private member1: number,
    private member2: string
  ) { }
  
  get getMember1(): number {
    return this.member1;
  }
}

function instanceExample(param: Example | Array<Example> | Date) {
  if (param instanceof Date) return param.getFullYear();
  else if (param instanceof Example) return param.getMember1;
  else return param.reverse();
}

// narrowing using type pradicates * * * * * * * * * * * * * * * * * * * * * * * * * * *

// Let's Re-open the above defined Fish and Bird interfaces and add new properties to them.
interface Fish { waterAnimal(): void };
interface Bird { landAnimal: () => void };

// Without using "pet is Fish" in return type of below function will simply return a boolean true or false value.
// It will not be usefull in narrowing as it will not tell the type of parameter, instead it will just return true or false.
// When we write "pet is Fish" in return type of the function, it will narrow down the type of parameter as Fish if it returns true.
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

let getFood = (pet: Bird | Fish) => {
  if (isFish(pet)) {
    pet.swim();
    pet.waterAnimal();
  } else {
    pet.fly();
    pet.landAnimal();
  }
}


// Discriminated Union

interface Circle {
  kind: "circle",
  radius: number
}

interface Square {
  kind: "square",
  side: number
}

interface Rectangle {
  kind: "rectangle",
  length: number,
  width: number,
}

type Shape = Circle | Square | Rectangle;

// Below function will show error if we add another type to Shape later.
// function getArea(shape: Shape): number {
//   if (shape.kind === "circle") return Math.PI * shape.radius ** 2;
//   else return shape.side ** 2;
// }

// Below function will show any compilation error about return type and can break at runtime if we add extra type to Shape type.
// function getArea1(shape: Shape): number {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
    
//     case "square":
//       return shape.side * shape.side;
//   }
// }

// Exhaustice checkin * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// It will show error when there is new type is added in Shape and will alert to handle that case also in switch statement.
// This check can be implemented using type "never"
// "never" type can be assigned to any other type, but any other type cannot be assigned to "never" type.

function getArea2(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    
    case "square":
      return shape.side * shape.side;
    
    case "rectangle":
      return shape.length * shape.width;
    
    default:
      const _ExhaustiveCheck: never = shape;
      return _ExhaustiveCheck;
  }
}
