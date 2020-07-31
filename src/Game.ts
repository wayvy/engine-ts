import { Canvas2D } from './Canvas2D';
import { ScenesList } from './Scenes';
import { Control } from './Control';
import { Point } from './Geometry2D';

import { demoScene } from './scenes/demo';
import { playerObject } from './scenes/objects/playerObject';

class Game {
    canvas: Canvas2D = new Canvas2D();
    scenes: ScenesList = new ScenesList();
    control: Control;

    constructor() {
        const playerSize = 64;
        const playerPosition = new Point(this.canvas.size.x / 2 - playerSize / 2, this.canvas.size.y - playerObject.figure.size.y);
        // const playerPosition = new Point(0, this.canvas.size.y - playerObject.figure.size.y);
        playerObject.move(playerPosition);
        demoScene.addObject(playerObject);
        this.control = new Control(playerObject, this.canvas.camera);


        this.scenes.addScene(demoScene);
        this.scenes.setActive(0);

        this.loop();
    }

    render(){
        this.scenes.active.objects.list.map(object => {
            const renderPosition = new Point(
                object.position.x + this.canvas.camera.position.x,
                object.position.y + this.canvas.camera.position.y
            );
            this.canvas.renderObject(object, renderPosition);
        });
    }

    loop() {
        this.render();
        requestAnimationFrame(() => this.loop());
        this.control.action();
        this.scenes.active.objects.collider(this.scenes.active.objects.list[this.scenes.active.objects.list.length - 1]);
    }
}

export { Game };