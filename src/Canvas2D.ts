import { Point, Polygon } from './Geometry2D';
import { Camera2D } from './Camera2D';
import { GameObject } from './GameObjects';

class Canvas2D {
    element: any;
    context: any;
    background: Polygon;
    camera: Camera2D;
    
    constructor() {
        const width = 512;
        const height = 480;
        const size = new Point(width, height);

        this.element = document.getElementById('canvas');
        this.element.width = size.x;
        this.element.height = size.y;

        this.context = this.element.getContext("2d");
        this.context.strokeStyle = 'white';

        this.background = new Polygon([
            new Point(0, 0),
            new Point(size.x, 0),
            new Point(size.x, size.y),
            new Point(0, size.y)
        ], true);
        this.background.setColor('black');

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
    
        if (polygon.isFill) {
            this.context.fillStyle = polygon.color;
            this.context.fill();
        }

        if(polygon.sprite !== undefined){
            this.context.drawImage(polygon.sprite.image, position.x, position.y, polygon.size.x, polygon.size.y);
        };

        this.context.stroke();
    }

    renderBackground(){
        this.renderPolygon(this.background);
    }
}

export { Canvas2D };