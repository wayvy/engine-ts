import { GameObject } from "./GameObjects";

class Physics {
    isRectangleObjectsCollide = (object0: GameObject, object1: GameObject) => {
        const collideCondition =    object0.position.x < object1.position.x + object1.figure.size.x &&
                                    object0.position.x + object0.figure.size.x > object1.position.x &&
                                    object0.position.y < object1.position.y + object1.figure.size.y &&
                                    object0.position.y + object0.figure.size.y > object1.position.y;

        if(collideCondition){
            console.log('collide!')
        }
    };
}

export { Physics }