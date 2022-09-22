"use strict";
//Optional Properties & Non-null Assertions
let fruit1 = {
    name: "mango",
    taste: "Sweet",
    color: "Yellow",
    allSeason: false,
    price: 10,
};
console.log(fruit1.price);
let fruit2 = {
    name: "orange",
    taste: "Sweet-tart",
    color: "Orange",
    allSeason: false,
};
function getPrice(price) {
    return price + 10;
}
console.log(getPrice(10));
console.log(getPrice(fruit1.price));
console.log(getPrice(fruit2.price));
