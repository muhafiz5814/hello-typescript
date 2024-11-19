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