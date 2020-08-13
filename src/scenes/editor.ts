import { Scene } from '../Scenes';
import { backgroundObject } from './objects/background';

let editor = new Scene();
editor.setName('editor')
editor.addObject(backgroundObject);

export { editor };
