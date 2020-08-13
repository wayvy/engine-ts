import { GameObjectsList, GameObject } from './GameObjects';
import { List } from './List';
import { EventsList } from './Events';

import { antObject } from './scenes/objects/antObject';
import { backgroundObject } from './scenes/objects/background';

class ScenesList extends List <Scene>{
    activeScene: number = 0;
    active: Scene = this.list[this.activeScene];

    addScene(scene: Scene) {
        this.list.push(scene);
    }

    setActive(sceneNumber: number) {
        this.activeScene = sceneNumber;
        this.active = this.list[sceneNumber];
    }
}

class Scene {
    name: string = 'scene-null';
    events: EventsList = new EventsList();
    objects: GameObjectsList = new GameObjectsList();
    controlObject: GameObject = antObject;
    background: GameObject = backgroundObject;
    setName(name: string){
        this.name = `scene-${name}`;
    }

    addObject(object: GameObject) {
        this.objects.add(object);
    }

    addControlObject(object: GameObject){
        this.controlObject = object;
    }

    addBackground(object: GameObject){
        this.background = object;
    }
}

export { Scene, ScenesList };
