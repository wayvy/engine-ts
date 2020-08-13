import { Sprite } from '../../GameObjects';

const spriteGenerator = (src: string) => {
    const image = new Image();
    image.src = src;
    return new Sprite(image);
};

export { spriteGenerator }
