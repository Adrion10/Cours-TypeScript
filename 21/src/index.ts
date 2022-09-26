function getFruit(fruit: { name: string; price: number }) {
  return `${fruit.name} is having price of €${fruit.price}`;
}

console.log(getFruit({ name: "Mango", price: 32 }));
