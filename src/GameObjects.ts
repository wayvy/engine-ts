import { Polygon, Point } from "./Geometry2D";

class GameObjectsList {
    list: GameObject[] = [];
    
    addObject(object: GameObject) {
        this.list.push(object);
    }
}

class GameObject {
    name: string;
    polygon: Polygon;
    position: Point;
    activeSprite ? : Sprite;
    spriteList ? : SpriteList;
    size ? : Point;
    
    constructor(polygon: Polygon, name: string) {
        this.polygon = polygon;
        this.name = name;
        this.position = new Point(0, 0);
    }

    move(position: Point){
        this.position.x = this.position.x + position.x;
        this.position.y = this.position.y + position.y;
    }

    initSprite(sprite: Sprite){
        this.spriteList = new SpriteList(sprite);
        this.setActiveSprite(0);
    }

    setActiveSprite(index: number) {
        this.activeSprite = this.spriteList?.list[index];
    }
}

class Sprite {
    image: HTMLImageElement;
    constructor(image: HTMLImageElement) {
        this.image = image;
    }
}

class SpriteList {
    list: Sprite[] = [];
    constructor(sprite: Sprite) {
        this.list.push(sprite);
    }

    add(sprite: Sprite) {
        this.list.push(sprite);
    }
}

export { GameObject, GameObjectsList, Sprite };