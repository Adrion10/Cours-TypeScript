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
  public getX() {
    return this.x;
  }
}
const point = new MyCoordinate(44, 55);

console.log(point.getX());
