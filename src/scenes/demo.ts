import { Scene } from '../Scenes';
import { Point } from '../Geometry2D';

import { skyObject } from './objects/skyObject';
import { boxGenerator } from './objects/boxGenerator';

let demoScene = new Scene();
demoScene.setName('demo')
demoScene.addObject(skyObject);
demoScene = boxGenerator(demoScene, new Point(1, 10), new Point(250, 0));
demoScene = boxGenerator(demoScene, new Point(1, 10), new Point(400, 0));
demoScene = boxGenerator(demoScene, new Point(1, 10), new Point(500, 0));
demoScene = boxGenerator(demoScene, new Point(1, 10), new Point(600, 0));

export { demoScene };
