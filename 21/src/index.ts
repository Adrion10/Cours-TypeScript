interface Fruit {
  name: string;
  price: number;
}

function getFruit(fruit: Fruit) {
  return `${fruit.name} is having price of €${fruit.price}`;
}

console.log(getFruit({ name: "Mango", price: 32 }));
