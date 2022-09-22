//Type Alias & Interface
//Alias
//interface
type Fruit = {
  name: string;
  taste: string;
  color: string;
  allSeason: boolean;
};
//interface
type Mango = Fruit & {
  price: number;
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
