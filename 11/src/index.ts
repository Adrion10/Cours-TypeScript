// never type

function sum(a: number, b: number): void {
  // return a + b;
  let c = a + b; //void
}
function raiseError(message: string): never {
  throw new Error(message);
}
function forever(): never {
  while (true) {
    console.log("typescript");
  }
}
