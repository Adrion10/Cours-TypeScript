//Optional Properties & Non-null Assertions

type Fruit = {
  name: string;
  taste: string;
  color: string;
  allSeason: boolean;
  price?: number;
};

let fruit1: Fruit = {
  name: "mango",
  taste: "Sweet",
  color: "Yellow",
  allSeason: false,
  price: 10,
};
console.log(fruit1.price);

let fruit2: Fruit = {
  name: "orange",
  taste: "Sweet-tart",
  color: "Orange",
  allSeason: false,
};

function getPrice(price: number) {
  return price + 10;
}
console.log(getPrice(10));
console.log(getPrice(fruit1.price!));
console.log(getPrice(fruit2.price!));
