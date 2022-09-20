// never type

function sum(a: number, b: number): number {
  return a + b;
  // a + b //void
}
function raiseError(message: string): never {
  throw new Error(message);
}
