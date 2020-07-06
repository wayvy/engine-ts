class Point {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    move(distance: Point) {
        this.x += distance.x;
        this.y += distance.y;
    }
}

class PointsList {
    list: Point[] = [];

    constructor() {
        this.list = [];
    }

    add(point: Point) {
        this.list.push(point);
    }
}

class PolygonStyle {
    fill: Boolean;
    stroke: Boolean;
    color: string;
    constructor(isFill: Boolean){
        this.fill = isFill;
        this.stroke = true;
        this.color = 'red';
    }
}

class Polygon {
    points: PointsList;
    size: Point;
    style: PolygonStyle;
    sprite ? : Sprite;
    angle: number = 0;
    constructor(points: Point[], isFill: Boolean = false) {
        this.style = new PolygonStyle(isFill);
        this.points = new PointsList();
        points.map(point => this.points.add(point));

        this.size = this.calculateSize();
    }

    calculateSize(){
        /* 
        TODO: Вычислить ширину && высоту фигуры
        */
        return new Point(64, 64);
    }

    
    
    

    setSprite(image: HTMLImageElement) {
        this.sprite = new Sprite(image);
    }
}

class Sprite {
    image: HTMLImageElement;
    constructor(image: HTMLImageElement) {
        this.image = image;
    }
}

export { Point, Polygon, Sprite }
