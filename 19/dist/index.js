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
}
const point = new MyCoordinate(44, 55);
console.log(point.getX());
