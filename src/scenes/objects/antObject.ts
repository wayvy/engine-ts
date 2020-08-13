import { Point, Rectangle } from '../../Geometry2D';
import { GameObject } from '../../GameObjects';

import { rectanglePoints } from '../tools/pointsGenerator';
import { spriteGenerator } from '../tools/spriteGenerator';

import { antIdleSrc } from '../sprites/ant/idle/antIdle';
import { antRunSrc } from '../sprites/ant/run/antRun';
import { antPunchSrc } from '../sprites/ant/punch/antPunch';


const size = new Point(126, 104);
const rectanglePointsGenerator = [ ...rectanglePoints(size).map(xy => {
    return new Point(xy[0], xy[1]);
})];
const antPolygon = new Rectangle(rectanglePointsGenerator);
antPolygon.size = size;
antPolygon.style.fill = false;
antPolygon.style.stroke = true;
antPolygon.style.color = 'brown';

const antObject = new GameObject(antPolygon, `ant`);

for(let i = 0; i < antIdleSrc.length; i++){
    const sprite = spriteGenerator(antIdleSrc[i]);
    antObject.sprites.idle.add(sprite);
    for(let i = 0; i < antIdleSrc.length; i++){
        const sprite = spriteGenerator(antIdleSrc[antIdleSrc.length-1-i]);
        antObject.sprites.idle.add(sprite);
    }
}
for(let i = 0; i < antRunSrc.length; i++){
    const sprite = spriteGenerator(antRunSrc[i]);
    antObject.sprites.run.add(sprite);
    for(let i=0; i<antRunSrc.length; i++){
        const sprite = spriteGenerator(antRunSrc[antRunSrc.length-1-i]);
        antObject.sprites.run.add(sprite);
    }
}
for(let i = 0; i < antPunchSrc.length; i++){
    const sprite = spriteGenerator(antPunchSrc[i]);
    antObject.sprites.punch.add(sprite);
}

export { antObject }
