// Generics constraint

type Person = {
  firstName: string;
};
function getPerson<T extends Person>(data: T) {
  return data;
}
const details = { lastName: "Hilaj", firstName: "Lace" };
console.log(getPerson(details));
