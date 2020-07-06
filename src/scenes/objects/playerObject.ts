import { Point, Polygon, Sprite } from '../../Geometry2D';
import { GameObject } from '../../GameObjects';

import playerImage from '../sprites/player/player-00.png';

const squarePoints = (size: number) => [
    [0, 0],
    [0, size],
    [size, size],
    [size, 0]
];

const squareSize = 64;
const squarePointsGenerator = [
    ...squarePoints(squareSize).map(xy => {
        return new Point(xy[0], xy[1]);
    })
];
const playerPolygon = new Polygon(squarePointsGenerator);
playerPolygon.size = new Point(squareSize, squareSize);
playerPolygon.style.stroke = false;

const playerSprite = new Image();
playerSprite.src = playerImage;

playerPolygon.setSprite(playerSprite);

const playerObject = new GameObject(playerPolygon, `player-0`);

export { playerObject }