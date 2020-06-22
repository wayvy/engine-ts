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

    listener() {
        document.addEventListener('keydown', event => this.keyDown(event.key, true));
        document.addEventListener('keyup', event => this.keyDown(event.key, false));
    }
    
    keyDown(key: string, isDown: boolean) {
        switch (key) {
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