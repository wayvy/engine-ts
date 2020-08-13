import { Scene } from '../Scenes';
import { Point } from '../Geometry2D';

import { backgroundObject } from './objects/background';
import { boxGenerator } from './objects/boxGenerator';

import { enemyObject } from './objects/enemyObject';
import { GameObject } from '../GameObjects';


let ant0Scene = new Scene();
ant0Scene.name = 'ant-0';
ant0Scene.addBackground(backgroundObject);
ant0Scene = boxGenerator(ant0Scene, new Point(1, 3), new Point(250, 500));

enemyObject.move(new Point(360, 400-104));
ant0Scene.addObject(enemyObject);

ant0Scene = boxGenerator(ant0Scene, new Point(2, 5), new Point(350, 400));
ant0Scene = boxGenerator(ant0Scene, new Point(1, 2), new Point(500, 550));
ant0Scene = boxGenerator(ant0Scene, new Point(1, 5), new Point(650, 500));
ant0Scene = boxGenerator(ant0Scene, new Point(1, 7), new Point(1000, 500));

export { ant0Scene };