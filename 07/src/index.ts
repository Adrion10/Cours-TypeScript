function calTotalPrice(price:number) {
  return price + (price * 0.18)
  
}
const priceOfToy = calTotalPrice(100)
const discountedPrice = priceOfToy / 2

console.log(priceOfToy)
console.log(discountedPrice)