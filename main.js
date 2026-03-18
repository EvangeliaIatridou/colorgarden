import { Start } from './scenes/Start.js';
import { defaultnone } from './scenes/defaultnone.js';
import { firstscene } from './scenes/firstscene.js';
import { kidscene1 } from './scenes/kidscene1.js';
import { kidscene2 } from './scenes/kidscene2.js';
import { pickinitcolors } from './scenes/pickinitcolors.js';
import { playground } from './scenes/playground.js'




const config = {
    type: Phaser.AUTO,
    title: 'Overlord Rising',
    description: '',
    parent: 'game-container',
    width: 1280,
    height: 720,
    backgroundColor: '#000000',
    pixelArt: false,
    scene: [
        Start,defaultnone,firstscene,pickinitcolors,kidscene1,playground,kidscene2
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}

// const title = this.add.text(640, 100, "Game Over", {
//     fontSize: '48px',
//     color: '#ffffff'
// }).setOrigin(0.5);

const game = new Phaser.Game(config);
            