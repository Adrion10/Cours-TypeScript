// Readonly Vs Static

class Fruit {
  readonly price: number; //=20;

  constructor(price: number) {
    this.price = price;
  }
}
const mango = new Fruit(20);
// mango.price = 2;
console.log(mango.price);
