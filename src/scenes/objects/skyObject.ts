import { Point, Polygon } from '../../Geometry2D';
import { GameObject, Sprite } from '../../GameObjects';

import skyImageSrc from '../sprites/sky/sky-00.png';

const squarePoints = (size: number) => [
    [0, 0],
    [0, size],
    [size, size],
    [size, 0]
];

const squareSize = 2048;
const squarePointsGenerator = [ ...squarePoints(squareSize).map(xy => {
    return new Point(xy[0], xy[1]);
})];
const skyPolygon = new Polygon(squarePointsGenerator);
skyPolygon.size = new Point(squareSize, squareSize);
skyPolygon.style.stroke = false;

const skyImage = new Image();
skyImage.src = skyImageSrc;
skyImage.width = squareSize;
skyImage.height = squareSize;

const skySprite = new Sprite(skyImage);

const skyObject = new GameObject(skyPolygon, `sky-0`);
skyObject.initSprite(skySprite);

export { skyObject }