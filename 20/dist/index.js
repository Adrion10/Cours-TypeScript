"use strict";
// Readonly Vs Static
class Fruit {
    constructor(price) {
        this.price = price;
    }
}
const mango = new Fruit(20);
// mango.price = 2;
console.log(mango.price);
