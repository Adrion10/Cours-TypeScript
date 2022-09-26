"use strict";
// Readonly Vs Static
class Fruit {
    constructor(price) {
        this.price = price;
        //this.count++;
        Fruit.count++;
    }
}
//count: number = 0;
Fruit.count = 0;
const mango = new Fruit(20);
// mango.price = 2;
console.log(mango.price);
//console.log(mango.count);
console.log(Fruit.count);
const apel = new Fruit(22);
// mango.price = 2;
console.log(apel.price);
//console.log(apel.count);
console.log(Fruit.count);
