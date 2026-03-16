export class Start extends Phaser.Scene {

    constructor() {
        super('Start');
    }

    // const title = this.add.text(640, 100, "Game Over", {
    //     fontSize: '48px',
    //     color: '#ffffff'
    // }).setOrigin(0.5);

    preload() {
        this.load.image('background', '../assets/plainblack.gif');
        //this.load.image('logo', 'assets/phaser.png');
        //this.load.image('shapes','assets/shapes.jpg');

        //  The ship sprite is CC0 from https://ansimuz.itch.io - check out his other work!
        this.load.spritesheet('flower', '../assets/boomerangintro.png', { frameWidth: 1024, frameHeight: 1024 });
        //this.load.image('shapes','assets/shapes.jpg');
    }

    create() {
        
        this.background = this.add.tileSprite(640, 360, 1280, 720, 'background');

        //const logo = this.add.image(640, 200, 'logo');

        const flower = this.add.sprite(640, 240, 'flower').setDisplaySize(400, 400);

        //const sh = this.add.image(640,320, 'shapes');

        // enable click interaction
        // sh.setInteractive();

        // sh.on('pointerdown', () => {
        //     sh.setVisible(false);   // hides it
        // });
        
// learn how to:
// add text // to move it on the display screen --  do the add/sub on width or height params
        // this.add.text(this.scale.width * 0.5, this.scale.height * 0.5 + 200, 'AAAAAA', {
        //     fontFamily: 'Comic Sans MS', fontSize: '64px', color: '#ffffff',
        //     stroke: '#000000', strokeThickness: 8,
        //     align: 'Bottom'
        // }).setOrigin(0.5);


// add choices
const choice1 = this.add.text(640, 450, "play", {
    fontSize: "36px",
    color: "#f762f7"
}).setOrigin(0.5).setDepth(1000);

choice1.setInteractive();

const choice2 = this.add.text(640, 520, "about the game", {
    fontSize: "36px",
    color: "#ffffff"
}).setOrigin(0.5);

choice2.setInteractive();

// pick choices
choice1.on('pointerdown', () => {
    console.log("CHOICE 1 CLICKED");
    this.scene.start('firstscene'); //firstscene
    choice1.setStyle({ color: "#f762f7" });
});
// have something happen when choice is picked (diff picture/scene/if case/whatever)
        this.anims.create({
            key: 'fly',
            frames: this.anims.generateFrameNumbers('flower', { start: 0, end: 19 }),
            frameRate: 3,
            repeat: -1
        });

        flower.play('fly');

        // this.tweens.add({
        //     targets: logo,
        //     y: 400,
        //     duration: 1500,
        //     ease: 'Sine.inOut',
        //     yoyo: true,
        //     loop: -1
        // });
    }

    // update() {
    //     this.background.tilePositionX += 2;
    // }
    
}
