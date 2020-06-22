import { Point } from "./Geometry2D"

class Camera2D {
    name: string;
    position: Point;
    
    constructor(name: string) {
        this.name = name;
        this.position = new Point(0, 0);
    }
}

export { Camera2D };