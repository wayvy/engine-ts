import { Scene } from '../Scenes';
import { skyObject } from './objects/skyObject';
import { boxGenerator } from './objects/boxGenerator';
import { Point } from '../Geometry2D';

let demoScene = new Scene('demo');
demoScene.addObject(skyObject);

demoScene = boxGenerator(demoScene, new Point(1, 10), new Point(250, 0));
// demoScene = boxGenerator(demoScene, new Point(1, 10), new Point(400, 0));
// demoScene = boxGenerator(demoScene, new Point(1, 10), new Point(500, 0));
// demoScene = boxGenerator(demoScene, new Point(1, 10), new Point(600, 0));
// demoScene = boxGenerator(demoScene, new Point(1, 10), new Point(700, 0));

export { demoScene };