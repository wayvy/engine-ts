import { GameObjectsList, GameObject } from './GameObjects';

class ScenesList {
    list: Scene[];
    active: number;

    constructor() {
        this.list = [];
        this.active = 0;
    }

    addScene(scene: Scene) {
        this.list.push(scene);
    }

    setActive(sceneNumber: number) {
        this.active = sceneNumber;
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