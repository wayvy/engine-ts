import { Game } from './Game';

const main = () => {
    const game = new Game();


    /* 
    Основной цикл
    
    TODO: 
        * разобраться с requestAnimationFrame
        https://html5.by/blog/what-is-requestanimationframe/
    */
    const mainLoop = setInterval(() => {
        game.loop();
    }, 10);
}

export default main;