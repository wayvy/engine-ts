import { Point, Rectangle } from '../../Geometry2D';
import { GameObject } from '../../GameObjects';

import { rectanglePoints } from '../tools/pointsGenerator';
import { spriteGenerator } from '../tools/spriteGenerator';

import backgroundImageSrc from '../sprites/background/placeholder.png';

const backgroundSize = new Point(2000, 2000);
const squarePointsGenerator = [ ...rectanglePoints(backgroundSize).map(xy => {
    return new Point(xy[0], xy[1]);
})];
const backgroundPolygon = new Rectangle(squarePointsGenerator);
backgroundPolygon.size = backgroundSize;
backgroundPolygon.style.stroke = true;
backgroundPolygon.style.color = 'pink';
backgroundPolygon.style.fill = true;

const backgroundObject = new GameObject(backgroundPolygon, `background`);

const sprite = spriteGenerator(backgroundImageSrc);
backgroundObject.sprites.idle.add(sprite);

export { backgroundObject }