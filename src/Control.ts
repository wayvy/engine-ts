import { GameObject } from "./GameObjects";
import { Point } from "./Geometry2D";
import { Camera2D } from "./Camera2D";

class Key {
    key: string;
    state: boolean;

    constructor(key: string) {
        this.key = key;
        this.state = false;
    }
}

class Keyboard {
    q = new Key('q');
    e = new Key('e');
    up = new Key('w');
    right = new Key('d');
    down = new Key('s');
    left = new Key('a');
    space = new Key(' ');
    arrowUp = new Key('ArrowUp');
    arrowDown = new Key('ArrowDown');
}

class Control {
    keyboard = new Keyboard();
    object?: GameObject;
    camera?: Camera2D;

    constructor(object?: GameObject, camera?: Camera2D) {
        this.object = object;
        this.camera = camera;
        this.listener();
    }

    action(){
        let distance = 5;

        if (this.keyboard.left.state) {
            this.camera?.position.move(new Point(distance, 0));
            this.object?.move(new Point(-distance,0));
        }

        if (this.keyboard.right.state) {
            this.object?.move(new Point(distance,0));
            this.camera?.position.move(new Point(-distance, 0));
        }
    }

    listener() {
        document.addEventListener('keydown', event => this.keyDown(event, true));
        document.addEventListener('keyup', event => this.keyDown(event, false));
    }

    keyDown(event: KeyboardEvent, isDown: boolean) {
        switch (event.key) {
            case this.keyboard.q.key:
                this.keyboard.q.state = isDown;
                break;
            case this.keyboard.e.key:
                this.keyboard.e.state = isDown;
                break;
            case this.keyboard.up.key:
                this.keyboard.up.state = isDown;
                break;
            case this.keyboard.right.key:
                this.keyboard.right.state = isDown;
                break;
            case this.keyboard.down.key:
                this.keyboard.down.state = isDown;
                break;
            case this.keyboard.left.key:
                this.keyboard.left.state = isDown;
                break;
            case this.keyboard.space.key:
                event.preventDefault();
                this.keyboard.space.state = isDown;
                break;
            case this.keyboard.arrowUp.key:
                this.keyboard.arrowUp.state = isDown;
                break;
            case this.keyboard.arrowDown.key:
                this.keyboard.arrowDown.state = isDown;
                break;
            default:
                break;
        }
    }
}

export { Control };