declare type Fruit = {
    name: string;
    taste: string;
    color: string;
    allSeason: boolean;
};
declare type Mango = Fruit & {
    price: number;
};
declare let fruit1: Fruit;
declare let fruit2: Fruit;
