import { colorgatherer, buildFinalkey, addFinalBackground } from './colorgatherer.js';

export class endscene extends Phaser.Scene {

    constructor() {
        super('endscene');   // <-- this is the scene key
        
    }

    //potential colours gathered: or, pr, gr

    //if statement: if (colorgatherer.choices.includes("or")){
    //     console.log("HOE");
    // }

    preload() {    

        const colorkey = buildFinalkey();
        console.log(colorkey);

        this.load.image('black', '../assets/plainblack.gif');
 

            // remove extension for the key
        const key = 'garden.png'.replace('.png', colorkey); //replace with colorkey (ofbg, etc)

        this.load.spritesheet(key, `../assets/ending/${colorkey}/garden.png`, {
            frameWidth: 1024,
            frameHeight: 1024
        });

            


    }   

    create() {

        
        
        this.events.on('shutdown', () => {
            this.sound.stopAll();
        });
        this.housebg = this.add.image(640, 320, 'black').setDisplaySize(400, 400);
        

        this.t1 = this.add.text(640, 100, "I have to wake up to water my garden!", { //leads to scene change
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);;

        this.t2 = this.add.text(640, 100, "Thank you for playing!!", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.t3 = this.add.text(640, 600, "<3", {
                fontSize: '24px',
                color: '#ffffff'
        }).setOrigin(0.5).setVisible(false); //on choice, load hometxt

        this.anims.create({ //for sprite animation
            key: 'grd',
            frames: this.anims.generateFrameNumbers(addFinalBackground('garden'), {
                start: 0,
                end: 2
            }),
            frameRate: 2,
            repeat: -1
        });
        



        this.t1.setVisible(true).setInteractive();
        
        this.t1.on('pointerdown', () => {
            this.t1.destroy();

            this.spinner = this.add.sprite(640, 320, addFinalBackground('garden')).setDisplaySize(400, 400);
            this.spinner.play('grd');
            this.t2.setVisible(true).setInteractive();
        });




        this.t2.on('pointerdown', () => {
            this.t2.destroy();
            this.t3.setVisible(true).setInteractive();
        
        });

        this.t3.on('pointerdown', () => {
            this.t3.destroy();
            this.scene.start("Start");
        
        });
        



    }

    
    
    
}
