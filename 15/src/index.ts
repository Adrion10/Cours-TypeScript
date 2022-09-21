//Union Type

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else console.log(id);
}
// printId(123);
printId("hello");

// let ID: string | number | boolean;
// ID = 123;
// ID = "123";
// ID = true;
