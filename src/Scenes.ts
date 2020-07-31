import { GameObjectsList, GameObject } from './GameObjects';
import { Point } from './Geometry2D';

class ScenesList {
    list: Scene[] = [];
    activeScene: number = 0;
    active: Scene;

    constructor() {
        this.active = this.list[this.activeScene];
    }

    addScene(scene: Scene) {
        this.list.push(scene);
    }

    setActive(sceneNumber: number) {
        this.activeScene = sceneNumber;
        this.active = this.list[sceneNumber];
    }
}

class Scene {
    name: string;
    objects: GameObjectsList;

    constructor(name: string) {
        this.name = name;
        this.objects = new GameObjectsList();
    }
    
    addObject(object: GameObject) {
        this.objects.addObject(object);
    }
}

export { Scene, ScenesList };