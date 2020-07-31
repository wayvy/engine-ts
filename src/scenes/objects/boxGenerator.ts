import { Point, Rectangle } from "../../Geometry2D";
import { Sprite, GameObject } from "../../GameObjects";
import { Scene } from "../../Scenes";

import boxImageSrc0 from '../sprites/boxes/box.png';

const boxGenerator = (scene: Scene, size: Point, position: Point) => {
    const squarePoints = (size: number) => [
        [0, 0],
        [0, size],
        [size, size],
        [size, 0]
    ];
    
    const rowBox = (position: Point, size: number, n: number) => {
        for (let i = 0; i < n; i++) {
            const squarePointsGenerator = [
                ...squarePoints(size).map(xy => {
                    return new Point(xy[0], xy[1]);
                })
            ];
        
            const square = new Rectangle(squarePointsGenerator, true);
            square.size = new Point(size, size);
            square.style.stroke = false;
        
            const boxImage = new Image();
            boxImage.src = boxImageSrc0;
            const boxSprite = new Sprite(boxImage);
            
            const squareObject = new GameObject(square, `n-${n}--${size}--${i}`);
            squareObject.initSprite(boxSprite);
            
            const newSquarePosition = new Point(position.x + size * i, position.y);
            squareObject.move(newSquarePosition);
            scene.addObject(squareObject);
        };
    };
    let boxSize = 64;
    let boxNumberX = size.x;
    let boxNumberY = size.y;
    for (let i = 0; i < boxNumberY; i++) {
        rowBox(position, boxSize, boxNumberX);
        position.move(new Point(0, boxSize));
    };
    position.move(new Point(boxSize, 0));
    return scene;
}

export { boxGenerator };