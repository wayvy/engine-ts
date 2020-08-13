import { Point, Rectangle } from '../../Geometry2D';
import { GameObject } from '../../GameObjects';

import { rectanglePoints } from '../tools/pointsGenerator';
import { spriteGenerator } from '../tools/spriteGenerator';

import { enemyIdleSrc } from '../sprites/enemy/idle/enemyIdle';

const size = new Point(96, 104);
const rectanglePointsGenerator = [ ...rectanglePoints(size).map(xy => {
    return new Point(xy[0], xy[1]);
})];
const enemyPolygon = new Rectangle(rectanglePointsGenerator);
enemyPolygon.size = size;
enemyPolygon.style.fill = false;
enemyPolygon.style.stroke = true;
enemyPolygon.style.color = 'brown';

const enemyObject = new GameObject(enemyPolygon, `enemy`);

for(let i = 0; i < enemyIdleSrc.length; i++){
    const sprite = spriteGenerator(enemyIdleSrc[i]);
    enemyObject.sprites.idle.add(sprite);
    for(let i = 0; i < enemyIdleSrc.length; i++){
        const sprite = spriteGenerator(enemyIdleSrc[enemyIdleSrc.length-1-i]);
        enemyObject.sprites.idle.add(sprite);
    }
}

export { enemyObject }
