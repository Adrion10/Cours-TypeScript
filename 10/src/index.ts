// null & undefined

// let price: number;
// price = 100;
// console.log(typeof price);
// price = undefined;
// console.log(price);

// let price;
// console.log(typeof price);
// price = null;
// console.log(typeof price);

let price: undefined;
console.log(typeof price, price);

let price1: undefined;
console.log(typeof price1, price1);

// price1 = null;
console.log(typeof price1, price1);

let price2: number | undefined | null;
price2 = null;
console.log(price2);

console.log(price2 == null); //true
console.log(price2 === null); //true

console.log(price2 == undefined); //true
console.log(price2 === undefined); //false
