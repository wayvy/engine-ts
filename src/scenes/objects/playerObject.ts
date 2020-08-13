import { Point, Rectangle } from '../../Geometry2D';
import { GameObject, Sprite } from '../../GameObjects';

import { spriteGenerator } from '../tools/spriteGenerator';

import playerImageIdleSrc0 from '../sprites/player/player-idle-0.png';
import playerImageIdleSrc1 from '../sprites/player/player-idle-1.png';
import playerImageIdleSrc2 from '../sprites/player/player-idle-2.png';

const squarePoints = (size: number) => [
    [0, 0],
    [0, size],
    [size, size],
    [size, 0]
];

const squareSize = 64;
const squarePointsGenerator = [ ...squarePoints(squareSize).map(xy => {
    return new Point(xy[0], xy[1]);
})];
const playerPolygon = new Rectangle(squarePointsGenerator, true);
playerPolygon.size = new Point(squareSize, squareSize);
playerPolygon.style.color = 'green';
playerPolygon.style.stroke = false;
const playerObject = new GameObject(playerPolygon, `player-0`);
playerObject.sprites.idle.add( spriteGenerator(playerImageIdleSrc0) );
playerObject.sprites.idle.add( spriteGenerator(playerImageIdleSrc1) );
playerObject.sprites.idle.add( spriteGenerator(playerImageIdleSrc2) );

export { playerObject }
