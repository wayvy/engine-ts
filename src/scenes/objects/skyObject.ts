import { Point, Polygon, Sprite } from '../../Geometry2D';
import { GameObject } from '../../GameObjects';

import skyImage from '../sprites/sky/sky-00.png';

const squarePoints = (size: number) => [
    [0, 0],
    [0, size],
    [size, size],
    [size, 0]
];

const squareSize = 2048;
const squarePointsGenerator = [
    ...squarePoints(squareSize).map(xy => {
        return new Point(xy[0], xy[1]);
    })
];
const skyPolygon = new Polygon(squarePointsGenerator);
skyPolygon.size = new Point(squareSize, squareSize);
skyPolygon.style.stroke = false;

const skySprite = new Image();
skySprite.src = skyImage;
skySprite.width = squareSize;
skySprite.height = squareSize;
skyPolygon.setSprite(skySprite);

const skyObject = new GameObject(skyPolygon, `sky-0`);

export { skyObject }