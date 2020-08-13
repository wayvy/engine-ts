import { Point, Rectangle } from '../../Geometry2D';
import { GameObject, Sprite } from '../../GameObjects';

import skyImageSrc from '../sprites/sky/sky-00.png';
import { spriteGenerator } from '../tools/spriteGenerator';

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
const skyPolygon = new Rectangle(squarePointsGenerator);
skyPolygon.size = new Point(squareSize, squareSize);
skyPolygon.style.stroke = true;
skyPolygon.style.color = 'blue';
skyPolygon.style.fill = true;

const skyObject = new GameObject(skyPolygon, `sky-0`);

const sprite = spriteGenerator(skyImageSrc);
skyObject.sprites.idle.add(sprite);

export { skyObject }