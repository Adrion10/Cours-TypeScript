// Access Modifier
class Coordinate {
  //x: number = 2;
  //y: number = 4;
  protected x: number;
  protected y: number;
  // private x: number;
  // private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  // public getX() {
  //   return this.x;
  // }
  protected abc() {}
}
class MyCoordinate extends Coordinate {
  // public getX() {
  //   return this.x;
  // }
  // public setX(value: number) {
  //   this.x = value;
  // }

  // get & set
  get X() {
    return this.x;
  }
  set X(value: number) {
    this.x = value;
  }
}
const point = new MyCoordinate(44, 55);
point.X = 22;
// point.setX(23);
// console.log(point.getX());
console.log(point.X);
