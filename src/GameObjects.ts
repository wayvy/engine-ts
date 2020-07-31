import { Rectangle, Polygon, Point } from "./Geometry2D";
import { Physics } from "./Physics";
import { EventsList } from "./Events";
import { List } from "./List";

const physics = new Physics();

class GameObjectsList extends List<GameObject>{
    // addObject(object: GameObject) {
    //     this.list.push(object);
    // }
    collider(player: GameObject){
        this.list.map(object => {
            if(object.name !== player.name && object.name !== 'sky-0'){
                physics.isRectangleObjectsCollide(player, object);
            }
        });
    }
}


class GameObject {
    name: string;
    figure: Polygon;
    position: Point;
    activeSprite ? : Sprite;
    spriteList ? : SpriteList;
    events: EventsList = new EventsList();
    
    constructor(figure: Polygon | Rectangle, name: string) {
        this.figure = figure;
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