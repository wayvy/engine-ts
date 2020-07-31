import { List } from './List';

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

class PointsList extends List<Point>{}

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
    style: PolygonStyle;
    angle: number = 0;
    size: Point;

    constructor(points: Point[], isFill: Boolean = false) {
        this.style = new PolygonStyle(isFill);
        points.map(point => this.points.add(point));
        this.size = new Point(0, 0);
    }
}

class Rectangle extends Polygon{
    size: Point;
    constructor(points: Point[], isFill: Boolean = false){
        super(points, isFill);
        this.size = new Point(
            this.points.list[1].x - this.points.list[0].x,
            this.points.list[3].y - this.points.list[0].y
        );
    }
}

export { Point, Polygon, Rectangle }
