// Generics
let arrNumb = [23, 47, 56, 56, 433, 3333];

function getRandomElementNumber<T>(arr: T[]): T {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
  // const index = 1;
  // return arr[index];
}
console.log(getRandomElementNumber(arrNumb));

let arrString = ["a", "b", "c", "d", "g"];

function getRandomElementString<T>(arr: T[]): T {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
  // const index = 1;
  // return arr[index];
}
console.log(getRandomElementString(arrString));

function getRandomElement<T>(arr: T[]): T {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
let result: string;
console.log(getRandomElement(arrString));
console.log(getRandomElement(arrNumb));
