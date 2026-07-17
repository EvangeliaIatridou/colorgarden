import { Start } from './scenes/Start.js';
import { abouthegame } from './scenes/abouthegame.js';
import { defaultnone } from './scenes/defaultnone.js';
import { firstscene } from './scenes/firstscene.js';
import { kidscene1 } from './scenes/kidscene1.js';
import { kidscene2 } from './scenes/kidscene2.js';
import { pickinitcolors } from './scenes/pickinitcolors.js';
import { playground } from './scenes/playground.js';
import { colorgatherer } from './scenes/colorgatherer.js';

import { young1 } from './scenes/young1.js';
import { schoolinit } from './scenes/schoolinit.js';
import { gang } from './scenes/gang.js';
import { yellowcyan } from './scenes/yellowcyan.js';
import { playground2 } from './scenes/playground2.js';
import { classroom } from './scenes/classroom.js';
import { young2 } from './scenes/young2.js';

import { adult1 } from './scenes/adult1.js';
import { adult2 } from './scenes/adult2.js';
import { work1 } from './scenes/work1.js';
import { work2balcony } from './scenes/work2balcony.js';
import { adultout1 } from './scenes/adultout1.js';

import { endscene } from './scenes/endscene.js';
// import { schoolinit } from './scenes/schoolinit.js';
// import { gang } from './scenes/gang.js';
// import { yellowcyan } from './scenes/yellowcyan.js';
// import { playground2 } from './scenes/playground2.js';
// import { classroom } from './scenes/classroom.js';
// import { young2 } from './scenes/young2.js';


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
        Start,defaultnone,firstscene,pickinitcolors,abouthegame,
        kidscene1,playground,kidscene2,colorgatherer,
        young1,schoolinit,gang,yellowcyan,playground2,classroom,young2,
        adult1,adult2,work1,work2balcony,adultout1,
        endscene
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
            