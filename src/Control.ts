import { GameObject } from "./GameObjects";
import { Point } from "./Geometry2D";
import { Camera2D } from "./Camera2D";

class AppGamepad{
    gamepad? : Gamepad;
}

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
    gamepad?: Gamepad | null;
    object: GameObject;
    camera?: Camera2D;
    collideState: boolean = false;
    constructor(object: GameObject) {
        this.object = object;
        this.gamepad = navigator.getGamepads()[0];
        this.listener();
    }

    addCamera(camera: Camera2D){
        this.camera = camera;
    }

    action(){
        let distance = 4;
        if (this.keyboard.left.state) {
            this.object.sprites.active = this.object.sprites.run;
            this.object.move(new Point(-distance,0));
            this.camera?.position.move(new Point(distance, 0));
        }
        if (this.keyboard.right.state) {
            this.object.sprites.active = this.object.sprites.run;
            this.object.move(new Point(distance,0));
            this.camera?.position.move(new Point(-distance, 0));
        }
        if (this.keyboard.arrowUp.state) {
            this.object.sprites.active = this.object.sprites.punch;
        } 
        if(!this.keyboard.left.state && !this.keyboard.right.state && !this.keyboard.arrowUp.state) {
            this.object.sprites.active = this.object.sprites.idle;
        }
    }

    listener() {
        window.addEventListener('keydown', event => this.keyDown(event, true));
        window.addEventListener('keyup', event => this.keyDown(event, false));
        window.addEventListener('gamepadconnected', event => {
            this.gamepad = navigator.getGamepads()[0];
            console.log(this.gamepad);
        });
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

export { Control, AppGamepad };
