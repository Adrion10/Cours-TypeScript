// Readonly Vs Static

class Fruit {
  readonly price: number; //=20;
  //count: number = 0;
  // static count: number = 0;
  protected static count: number = 0;
  constructor(price: number) {
    this.price = price;
    //this.count++;
    Fruit.count++;
  }
  static getCount() {
    return Fruit.count;
  }
}
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
