export class pickinitcolors extends Phaser.Scene {

    constructor() {
        super('pickinitcolors');   // <-- this is the scene key
    }

    preload() {
        this.load.spritesheet('colors', '../assets/picksprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });
        this.load.image('bg2', '../assets/poseidwneies.jpg');
    }

    create() {
        
        this.anims.create({ //for sprite animation
            key: 'spin',
            frames: this.anims.generateFrameNumbers('colors', {
                start: 0,
                end: 1   // TEMP: try first 8 frames only
            }),
            frameRate: 2,
            repeat: -1
        });

        this.spinner = this.add.sprite(640, 400, 'colors').setOrigin(0.5).setScale(0.5);

        this.spinner.play('spin');

        this.titletxt = this.add.text(this.spinner.x, this.spinner.y-250, "pick a combination:", {
            fontSize: '24px',
            color: '#ffffff'
        }).setOrigin(0.4);
        
        //combo zones

        const firstZone = this.add.zone(520, 250, 230, 90)
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });
        
        const secZone = this.add.zone(780, 380, 230, 90)
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });
        
        const thirdZone = this.add.zone(520, 480, 230, 90)
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });

        const fourthZone = this.add.zone(780, 550, 230, 90)
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });

        firstZone.on('pointerdown', () => {
            console.log('first picked');
            this.spinner.destroy();
            this.titletxt.destroy();
            this.scene.start('kidscene1');
            //this.bg = this.add.image(640,400,'bg2');
            //change scene

        });

        secZone.on('pointerdown', () => {
            console.log('2 picked');
            this.add.text(780, 380, "nope", {
            fontSize: '32px',
            color: '#ff0000'
            }).setOrigin(0.4);
            //this.bg = this.add.image(640,400,'bg2');
            //change scene

        });

        thirdZone.on('pointerdown', () => {
            console.log('3 picked');
            this.add.text(520, 480, "nope", {
            fontSize: '32px',
            color: '#ff0000'
            }).setOrigin(0.4);
            //this.bg = this.add.image(640,400,'bg2');
            //change scene

        });

        fourthZone.on('pointerdown', () => {
            console.log('4 picked');
            this.add.text(780, 550, "nope", {
            fontSize: '32px',
            color: '#ff0000'
            }).setOrigin(0.4);
            //this.bg = this.add.image(640,400,'bg2');
            //change scene

        });

        const graphics = this.add.graphics();
        graphics.lineStyle(4, 0x00ff00);
        // graphics.strokeRect(
        //     firstZone.x - firstZone.width / 2,
        //     firstZone.y - firstZone.height / 2,
        //     firstZone.width,
        //     firstZone.height
        // );

        // graphics.strokeRect(
        //     secZone.x - secZone.width / 2,
        //     secZone.y - secZone.height / 2,
        //     secZone.width,
        //     secZone.height
        // );

        // graphics.strokeRect(
        //     thirdZone.x - thirdZone.width / 2,
        //     thirdZone.y - thirdZone.height / 2,
        //     thirdZone.width,
        //     thirdZone.height
        // );
        // graphics.strokeRect(
        //     fourthZone.x - fourthZone.width / 2,
        //     fourthZone.y - fourthZone.height / 2,
        //     fourthZone.width,
        //     fourthZone.height
        // );

            // const back = this.add.text(640, 500, "Go Back", {
            //     fontSize: "48px",
            //     color: "#ffffff"
            // }).setOrigin(0.5).setInteractive();

            // const next = this.add.text(640, 400, "choose", {
            //     fontSize: "48px",
            //     color: "#ff3333"
            // }).setOrigin(0.5).setInteractive();

            // back.on('pointerdown', () => {
            //     this.scene.start('Start');   // go back!
            // });

            // next.on('pointerdown', () => {
            //     this.scene.start('pickinitcolors');   // go back!
            // });
        }
}
