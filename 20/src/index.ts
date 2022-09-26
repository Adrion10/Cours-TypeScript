// Readonly Vs Static

class Fruit {
  price: number;

  constructor(price: number) {
    this.price = price;
  }
}
const mango = new Fruit(20);
mango.price = 2;
console.log(mango.price);
