export class defaultnone extends Phaser.Scene {

    constructor() {
        super('defaultnone');   // <-- this is the scene key
    }

    preload() {
        this.load.image('secondBg', '../assets/plainblack.gif');
    }

    create() {
        this.add.image(640, 400, 'secondBg');

        this.add.text(640, 150, "under construction", {
            fontSize: '48px',
            color: '#ffffff'
        }).setOrigin(0.5);

        this.add.text(640, 250, "if you are reading this message it means that \nyou've reached a part of the game that I haven't worked on just yet. \n You can go back to the start if you want, or just exit the game for now \n Hopefully this screen wont be here for too long. \nCome back in a while to find out", {
            fontSize: '24px',
            color: '#ffffff',
            align: "center"
        }).setOrigin(0.5);

        const back = this.add.text(640, 500, "go back to start", {
            fontSize: "48px",
            color: "#ff0000"
        }).setOrigin(0.5).setInteractive();

        back.on('pointerdown', () => {
            this.scene.start('Start');   // go back!
        });

    }
}
