"use strict";
function getFruit(fruit) {
    return `${fruit.name} is having price of €${fruit.price}`;
}
let mango = { name: "Mango", price: 10 };
// mango.price = 9;
console.log(getFruit(mango));
class MyFruit {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
