import { Point } from "./Geometry2D";

class Camera2D {
    name: string;
    position: Point;

    constructor(name: string) {
        this.name = name;
        this.position = new Point(0, 0);
    }

    move(distance: Point){
        this.position.move(distance);
    }
}

export { Camera2D };