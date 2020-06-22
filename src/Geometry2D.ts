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

class Polygon {
    points: PointsList;
    size: Point;
    color: string = 'red';
    isFill: Boolean;
    sprite ? : Sprite;

    constructor(points: Point[], isFill: Boolean = false) {
        this.isFill = isFill;

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

    setColor(color: string) {
        this.color = color;
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