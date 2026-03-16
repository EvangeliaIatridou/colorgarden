export class firstscene extends Phaser.Scene {

    constructor() {
        super('firstscene');   // <-- this is the scene key
    }

    preload() {
        this.load.image('secondBg', '../assets/plainblack.gif');
    }

    create() {
        this.add.image(640, 400, 'secondBg');

        this.add.text(640, 150, "Welcome!", {
            fontSize: '48px',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.add.text(640, 250, "You need to pick a color combo as a starter! \n The colors you pick determine the colors you'll be able to see. \n Take your time picking, it's pretty important (sometimes). \n Below theres a button that displays your choices, \n so you can click on that, \n or you can go back to the menu and chill there a little bit.", {
            fontSize: '24px',
            color: '#ffffff',
            align: "center"
        }).setOrigin(0.5);

        const back = this.add.text(640, 500, "Go Back", {
            fontSize: "48px",
            color: "#ffffff"
        }).setOrigin(0.5).setInteractive();

        const next = this.add.text(640, 400, "choose", {
            fontSize: "48px",
            color: "#ff3333"
        }).setOrigin(0.5).setInteractive();

        back.on('pointerdown', () => {
            this.scene.start('Start');   // go back!
        });

        next.on('pointerdown', () => {
            this.scene.start('pickinitcolors');   // kidscene1
        });
    }
}
