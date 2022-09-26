// Generics constraint

type Person = {
  firstName: string;
};

const details = { lastName: "Hilaj", firstName: "Lace" };

function getElement<O extends object, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}
console.log(getElement(details, "firstName"));

// function getPerson<T extends Person>(data: T) {
//   return data;
// }
// const details = { lastName: "Hilaj", firstName: "Lace" };
// console.log(getPerson(details));
