// Generics
let arrNumb = [23, 47, 56, 56, 433, 3333];

function getRandomNumber(arr: number[]) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
  // const index = 1;
  // return arr[index];
}
console.log(getRandomNumber(arrNumb));

let arrString = ["a", "b", "c", "d", "g"];

function getRandomString(arr: string[]) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
  // const index = 1;
  // return arr[index];
}
console.log(getRandomString(arrString));
