import { Point } from "../../Geometry2D";

const squarePoints = (size: number) => [
    [0, 0],
    [0, size],
    [size, size],
    [size, 0]
];

const rectanglePoints = (size: Point) => [
    [0, 0],
    [0, size.y],
    [size.x, size.y],
    [size.x, 0]
];

export { squarePoints, rectanglePoints }