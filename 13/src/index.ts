//Object type

type Fruit = {
  name: string;
  taste: string;
  color: string;
  allSeason: boolean;
};

//fruit; //: object;

let fruit1: Fruit = {
  name: "mango",
  taste: "Sweet",
  color: "Yellow",
  allSeason: false,
};
let fruit2: Fruit = {
  name: "orange",
  taste: "Sweet-tart",
  color: "Orange",
  allSeason: false,
};

console.log(typeof fruit1); // object
console.log(fruit1);
console.log(typeof fruit1.name);
