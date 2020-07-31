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

    add(point: Point) {
        this.list.push(point);
    }
}

class PolygonStyle {
    fill: Boolean;
    stroke: Boolean = true;
    color: string = 'red';

    constructor(isFill: Boolean){
        this.fill = isFill;
    }
}

class Polygon {
    points: PointsList = new PointsList();
    size: Point;
    style: PolygonStyle;
    angle: number = 0;

    constructor(points: Point[], isFill: Boolean = false) {
        this.style = new PolygonStyle(isFill);
        points.map(point => this.points.add(point)); // ?
        this.size = this.calculateSize();
    }

    calculateSize(){
        /* TODO */
        return new Point(64, 64);
    }
}

export { Point, Polygon }
