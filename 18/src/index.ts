// class
class Coordinate {
  //x: number = 2;
  //y: number = 4;
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const point = new Coordinate(44, 55);
//point.x = 34;

console.log(point.x);
