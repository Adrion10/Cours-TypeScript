interface Fruit {
  name: string;
  readonly price: number;
  color?: string;
}

function getFruit(fruit: Fruit) {
  return `${fruit.name} is having price of €${fruit.price}`;
}
let mango: Fruit = { name: "Mango", price: 10 };
// mango.price = 9;
console.log(getFruit(mango));
