import { Point, Polygon } from './Geometry2D';
import { Camera2D } from './Camera2D';
import { GameObject } from './GameObjects';

class Canvas2D {
    element: any;
    context: any;
    background: Polygon;
    camera: Camera2D;
    size: Point;
    
    constructor() {
        const width = 650;
        const height = 480;
        this.size = new Point(width, height);

        this.element = document.getElementById('canvas');
        this.element.width = this.size.x;
        this.element.height = this.size.y;

        this.context = this.element.getContext("2d");
        this.context.strokeStyle = 'white';

        this.background = new Polygon([
            new Point(0, 0),
            new Point(this.size.x, 0),
            new Point(this.size.x, this.size.y),
            new Point(0, this.size.y)
        ], true);
        this.background.style.color = 'black';

        this.camera = new Camera2D('main');
    }

    renderPolygon(polygon: Polygon, position: Point = new Point(0, 0)) {
        polygon.points.list.map((point, i) => {
            if (i === 0) {
                this.context.beginPath();
                this.context.moveTo(point.x + position.x, point.y + position.y);
            } else {
                this.context.lineTo(point.x + position.x, point.y + position.y);
            }
        });

        this.context.closePath();
    
        if (polygon.style.fill) {
            this.context.fillStyle = polygon.style.color;
            this.context.fill();
        }

        if(polygon.sprite !== undefined){
            this.context.drawImage(polygon.sprite.image, position.x, position.y, polygon.size.x, polygon.size.y);
        };

        if(polygon.style.stroke){
            this.context.stroke();
        }
    }

    renderBackground(){
        this.renderPolygon(this.background);
    }
}

export { Canvas2D };
