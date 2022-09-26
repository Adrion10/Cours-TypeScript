"use strict";
// Readonly Vs Static
class Fruit {
    constructor(price) {
        this.price = price;
        //this.count++;
        Fruit.count++;
    }
    static getCount() {
        return Fruit.count;
    }
}
//count: number = 0;
// static count: number = 0;
Fruit.count = 0;
const mango = new Fruit(20);
// mango.price = 2;
console.log(mango.price);
//console.log(mango.count);
console.log(Fruit.getCount());
const appel = new Fruit(22);
// mango.price = 2;
console.log(appel.price);
//console.log(apel.count);
console.log(Fruit.getCount());
