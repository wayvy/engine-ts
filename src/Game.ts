import { Canvas2D } from './Canvas2D';
import { ScenesList } from './Scenes';
import { Control, AppGamepad } from './Control';
import { Point } from './Geometry2D';
import { GameObject } from './GameObjects';

import { ant0Scene } from './scenes/ant-0';
import { antObject } from './scenes/objects/antObject';

class Game {
    canvas: Canvas2D = new Canvas2D();
    scenes: ScenesList = new ScenesList();
    control: Control = new Control(antObject);
    lastRender: number = Date.now();
    constructor() {
        this.control.addCamera(this.canvas.camera);
        antObject.move(new Point(0, this.canvas.size.y - antObject.figure.size.y));
        ant0Scene.addControlObject(antObject);
        this.scenes.addScene(ant0Scene);
        this.scenes.setActive(0);
        this.loop();
    }

    renderPosition(object: GameObject): Point{
        return new Point(
            object.position.x + this.canvas.camera.position.x,
            object.position.y + this.canvas.camera.position.y
        );
    }

    render(){
        this.canvas.renderObject(this.scenes.active.background, this.renderPosition(this.scenes.active.background));
        this.canvas.renderObject(this.scenes.active.controlObject, this.renderPosition(this.scenes.active.controlObject));
        this.scenes.active.objects.list.map(object => this.canvas.renderObject(object, this.renderPosition(object)));
    }

    loop() {
        this.render();
        requestAnimationFrame(() => this.loop());
        this.control.action();
        if(Date.now() - this.lastRender > 100){
            this.scenes.active.events.idle(this.control.object);
            this.scenes.active.events.idle(this.scenes.active.objects.list[3]);
            this.lastRender = Date.now();
        }
    }
}

export { Game };
