import { Polygon, Point } from "./Geometry2D";

class GameObjectsList {
    list: GameObject[];

    constructor() {
        this.list = [];
    }
    
    addObject(object: GameObject) {
        this.list.push(object);
    }
}

class GameObject {
    name: string;
    polygon: Polygon;
    position: Point;
    
    constructor(polygon: Polygon, name: string) {
        this.polygon = polygon;
        this.name = name;
        this.position = new Point(0, 0);
    }

    move(position: Point){
        this.position.x = this.position.x + position.x;
        this.position.y = this.position.y + position.y;
    }
}

export { GameObject, GameObjectsList };