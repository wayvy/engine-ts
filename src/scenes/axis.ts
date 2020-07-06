import { Scene } from '../Scenes';
import { Point, Polygon, Sprite } from '../Geometry2D';
import { GameObject } from '../GameObjects';

const axisScene = new Scene('axis');

const rectangleArray = (size: Point) => [
    [0, 0],
    [0, size.y],
    [size.x, size.y],
    [size.x, 0]
];

const drawAxisY = (canvasSize: Point) => {
    const rectangleSize = new Point(10, canvasSize.y);

    const rectanglePointsGenerator = [...rectangleArray(rectangleSize).map(xy => {
        return new Point(xy[0], xy[1]);
    })];
    
    const rectangle = new Polygon(rectanglePointsGenerator, true);
    rectangle.style.color = '#9EFF4B';
    rectangle.style.stroke = false;

    const rectangleObject = new GameObject(rectangle, `axis-y`);
    
    axisScene.addObject(rectangleObject);
}

const drawAxisX = (canvasSize: Point) => {
    const rectangleSize = new Point(canvasSize.x, 10);

    const rectanglePointsGenerator = [...rectangleArray(rectangleSize).map(xy => {
        return new Point(xy[0], xy[1]);
    })];
    
    const rectangle = new Polygon(rectanglePointsGenerator, true);
    rectangle.style.color = '#FF2136';
    rectangle.style.stroke = false;

    const rectangleObject = new GameObject(rectangle, `axis-x`);
    
    axisScene.addObject(rectangleObject);
}

export { axisScene, drawAxisX, drawAxisY };
