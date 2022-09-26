"use strict";
// Generics constraint
const details = { lastName: "Hilaj", firstName: "Lace" };
function getElement(obj, key) {
    return obj[key];
}
console.log(getElement(details, "firstName"));
// function getPerson<T extends Person>(data: T) {
//   return data;
// }
// const details = { lastName: "Hilaj", firstName: "Lace" };
// console.log(getPerson(details));
