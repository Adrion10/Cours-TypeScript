declare class Coordinate {
    protected x: number;
    protected y: number;
    constructor(x: number, y: number);
    protected abc(): void;
}
declare class MyCoordinate extends Coordinate {
    getX(): number;
}
declare const point: MyCoordinate;
