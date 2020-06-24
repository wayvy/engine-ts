import { Canvas2D } from './Canvas2D';
import { ScenesList } from './Scenes';
import { Control } from './Control';
import { Point } from './Geometry2D';

import { dummyScene } from './scenes/dummy';
// import { axisScene, drawAxisX, drawAxisY } from './scenes/axis';

class Game {
    canvas: Canvas2D;
    scenes: ScenesList;
    control: Control;

    constructor() {
        this.canvas = new Canvas2D();
        this.scenes = new ScenesList();
        this.control = new Control();

        this.control.listener();
        // this.scenes.addScene(videoScene);
        this.scenes.addScene(dummyScene);
    
        this.loop();
    }

    loop() {
        this.canvas.renderBackground();

        if (this.control.keyboard.up.state) {
            this.canvas.camera.position.move(new Point(0, 5));
        }

        if (this.control.keyboard.down.state) {
            this.canvas.camera.position.move(new Point(0, -5));
        }

        if (this.control.keyboard.left.state) {
            this.canvas.camera.position.move(new Point(5, 0));
        }

        if (this.control.keyboard.right.state) {
            this.canvas.camera.position.move(new Point(-5, 0));
        }

        /* 
        Рендер всех объектов в сцене
        
        TODO: 
            * перенести в метод для ScenesList
            * подумать: в SceneList.active хранить номер сцены или ссылку на сцену
            * метод renderPolygon или renderObject ?
        */

        this.scenes.list[this.scenes.active].objects.list.map(object => {
            const renderPosition = new Point(
                object.position.x + this.canvas.camera.position.x,
                object.position.y + this.canvas.camera.position.y
            );

            this.canvas.renderPolygon(object.polygon, renderPosition);
        });
        requestAnimationFrame(this.loop.bind(this));

    }
}

export { Game };