import { Canvas2D } from './Canvas2D';
import { ScenesList } from './Scenes';
import { Control } from './Control';

import { dummyScene } from './scenes/dummy';

class Game {
    canvas: Canvas2D;
    scenes: ScenesList;
    control: Control;

    constructor() {
        this.canvas = new Canvas2D();
        this.scenes = new ScenesList();
        this.control = new Control();

        this.control.listener();

        this.scenes.addScene(dummyScene);
    }

    loop(){
        this.canvas.renderBackground();


        /* 
        Рендер всех объектов в сцене
        
        TODO: 
            * перенести в метод для ScenesList
            * подумать: в SceneList.active хранить номер сцены или ссылку на сцену
            * метод renderPolygon или renderObject ?
        */
        this.scenes.list[this.scenes.active].objects.list.map(object => {
            this.canvas.renderPolygon(object.polygon, object.position);
        });
    }
}

export { Game };