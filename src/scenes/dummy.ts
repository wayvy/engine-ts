import { Scene } from '../Scenes';
import { Point, Polygon, Sprite } from '../Geometry2D';
import { GameObject } from '../GameObjects';

import boxImage from './sprites/boxes/box.png'

const dummyScene = new Scene('street');

const rectangleArray = (size: number) => [
    [0, 0],
    [0, size],
    [size, size],
    [size, 0]
];

for (let i = 0; i < 4; i++) {
    const rectangleSize = 64;

    const rectanglePoints = [...rectangleArray(rectangleSize).map(xy => {
        return new Point(xy[0], xy[1]);
    })];

    const rectangle = new Polygon(rectanglePoints);



    const boxSprite = new Image();
    boxSprite.src = boxImage;
    rectangle.setSprite(boxSprite);

    const rectangleObject = new GameObject(rectangle, `r-${i}`);

    const newRectanglePosition = new Point(rectangleSize * i, 0);
    rectangleObject.move(newRectanglePosition);

    dummyScene.addObject(rectangleObject);
}

export { dummyScene };