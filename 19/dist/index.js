"use strict";
// Access Modifier
class Coordinate {
    // private x: number;
    // private y: number;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    // public getX() {
    //   return this.x;
    // }
    abc() { }
}
class MyCoordinate extends Coordinate {
    getX() {
        return this.x;
    }
    setX(value) {
        this.x = value;
    }
}
const point = new MyCoordinate(44, 55);
point.setX(23);
console.log(point.getX());
