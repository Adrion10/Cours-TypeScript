"use strict";
function calTotalPrice(price) {
    return +(price + (price * 0.18)).toFixed(1);
}
const priceOfToy = calTotalPrice(2333);
const discountedPrice = (priceOfToy / 2).toFixed(1);
console.log(priceOfToy);
console.log(discountedPrice);
