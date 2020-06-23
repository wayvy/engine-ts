import { Scene } from '../Scenes';
import { Point, Polygon, Sprite } from '../Geometry2D';
import { GameObject } from '../GameObjects';

import boxImage from './sprites/boxes/box.png'

const dummyScene = new Scene('street');

const squareArray = (size: number) => [
    [0, 0],
    [0, size],
    [size, size],
    [size, 0]
];

for (let i = 0; i < 4; i++) {
    const squareSize = 64;

    const squarePointsGenerator = [...squareArray(squareSize).map(xy => {
        return new Point(xy[0], xy[1]);
    })];

    const square = new Polygon(squarePointsGenerator);

    const boxSprite = new Image();
    boxSprite.src = boxImage;
    square.setSprite(boxSprite);

    const squareObject = new GameObject(square, `s-${i}`);

    const newSquarePosition = new Point(squareSize * i, 0);
    squareObject.move(newSquarePosition);

    dummyScene.addObject(squareObject);
}

export { dummyScene };