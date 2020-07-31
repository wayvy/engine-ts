import { Point, Polygon } from './Geometry2D';
import { Camera2D } from './Camera2D';
import { GameObject } from './GameObjects';

class Canvas2D {
    element: any;
    context: any;
    // background: Polygon;
    camera: Camera2D;
    size: Point;
    
    constructor() {
        const width = 650;
        const height = 480;
        this.size = new Point(width, height);

        const canvasContainer: HTMLElement | null = document.getElementById('canvas-container');
        if(canvasContainer != null){
            this.size = new Point(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
        }

        this.element = document.getElementById('canvas');
        this.element.width = this.size.x;
        this.element.height = this.size.y;

        this.context = this.element.getContext("2d");
        this.context.strokeStyle = 'white';

       
        this.camera = new Camera2D('main');
    }

    renderObject(object: GameObject, position: Point = new Point(0, 0)) {
        object.polygon.points.list.map((point, i) => {
            if (i === 0) {
                this.context.beginPath();
                this.context.moveTo(point.x + position.x, point.y + position.y);
            } else {
                this.context.lineTo(point.x + position.x, point.y + position.y);
            }
        });
        this.context.closePath();
    
        if (object.polygon.style.fill) {
            this.context.fillStyle = object.polygon.style.color;
            this.context.fill();
        }

        this.context.drawImage(object.activeSprite?.image, position.x, position.y, object.polygon.size.x, object.polygon.size.y);

        if(object.polygon.style.stroke){
            this.context.stroke();
        }
    }
}

export { Canvas2D };
