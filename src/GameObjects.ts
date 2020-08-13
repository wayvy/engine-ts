import { Rectangle, Polygon, Point } from "./Geometry2D";
import { Physics } from "./Physics";
import { EventsList } from "./Events";
import { List } from "./List";

const physics = new Physics();

class GameObjectsList extends List<GameObject>{
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
    active: number = 0;
    sprites: Sprites = new Sprites();
    events: EventsList = new EventsList();
    constructor(figure: Polygon | Rectangle, name: string) {
        this.figure = figure;
        this.name = name;
        this.position = new Point(0, 0);
    }

    move(distance: Point){
        this.position.x = this.position.x + distance.x;
        this.position.y = this.position.y + distance.y;
    }

    setActiveSprite(index: number) {
        this.active = index;
    }
}

class Sprites {
    active: SpriteList;
    idle: SpriteList = new SpriteList();
    run: SpriteList = new SpriteList();
    punch: SpriteList = new SpriteList();
    constructor(){
        this.active = this.idle;
    }
}

class Sprite {
    image: HTMLImageElement;
    constructor(image: HTMLImageElement) {
        this.image = image;
    }
}

class SpriteList extends List<Sprite> {
    active: number = 0;
}

export { GameObject, GameObjectsList, Sprite, SpriteList };
