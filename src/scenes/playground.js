export class playground extends Phaser.Scene {

    constructor() {
        super('playground');   // <-- this is the scene key
        this.array1 = [];
        this.array2 = [];
        this.array3 = [];
        this.array4 = [];
    }

    preload() {
        //this.load.image('bg6', 'assets/blueredkiddo/playground.gif');
        this.load.spritesheet('bg6', 'assets/blueredkiddo/playgroundsprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });
        this.load.spritesheet('green', 'assets/blueredkiddo/playground/green2sprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });
        this.load.spritesheet('orange', 'assets/blueredkiddo/playground/orangesprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });
        this.load.spritesheet('purple', 'assets/blueredkiddo/playground/lilacsprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });

        this.load.text('plintro', 'assets/txts/kid/playgroundintro.txt');
        this.load.text('g1', 'assets/txts/kid/green.txt'); 
        this.load.text('p1', 'assets/txts/kid/purple.txt');
        this.load.text('o1', 'assets/txts/kid/orange.txt');
    }   

    create() {
         
        this.anims.create({ //for sprite animation
            key: 'spin3',
            frames: this.anims.generateFrameNumbers('bg6', {
                start: 0,
                end: 5 
            }),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({ //for sprite animation
            key: 'sping',
            frames: this.anims.generateFrameNumbers('green', {
                start: 0,
                end: 2 
            }),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({ //for sprite animation
            key: 'spino',
            frames: this.anims.generateFrameNumbers('orange', {
                start: 0,
                end: 1 
            }),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({ //for sprite animation
            key: 'spinp',
            frames: this.anims.generateFrameNumbers('purple', {
                start: 0,
                end: 3
            }),
            frameRate: 2,
            repeat: -1
        });

        this.spinner = this.add.sprite(640, 320, 'bg6').setOrigin(0.5).setScale(0.5);

        this.spinner.play('spin3');

        this.spinner.setDisplaySize(400, 400);

        this.array1 = this.loadArr('plintro');
        this.array2 = this.loadArr('g1');
        this.array3 = this.loadArr('o1');
        this.array4 = this.loadArr('p1');
        this.textIndex = 0;
        this.sccnt = 0;

        const greenZone = this.add.zone(600, 250, 70, 90) //w,h,sw,sh
            .setOrigin(0.5);

        const orangeZone = this.add.zone(470, 400, 70, 90) //w,h,sw,sh
            .setOrigin(0.5);

        const purpleZone = this.add.zone(750, 370, 70, 90) //w,h,sw,sh
            .setOrigin(0.5);

        greenZone.on('pointerdown', () => {
            this.spinner.play('sping');
            greenZone.destroy();
            orangeZone.destroy();
            purpleZone.destroy();
            this.showText(this.array2, () => {

                
            });
            //this.bg = this.add.image(640,400,'bg2');
            //change scene

        });
        orangeZone.on('pointerdown', () => {
            this.spinner.play('spino');
            greenZone.destroy();
            orangeZone.destroy();
            purpleZone.destroy();
            this.showText(this.array3, () => {

                
            });
            //this.bg = this.add.image(640,400,'bg2');
            //change scene

        });
        purpleZone.on('pointerdown', () => {
            this.spinner.play('spinp');
            greenZone.destroy();
            orangeZone.destroy();
            purpleZone.destroy();
            this.showText(this.array4, () => {

                
            });
            //this.bg = this.add.image(640,400,'bg2');
            //change scene

        });


        // const graphics = this.add.graphics();
        // graphics.lineStyle(4, 0x00ff00);
        // graphics.strokeRect(
        //     orangeZone.x - orangeZone.width / 2,
        //     orangeZone.y - orangeZone.height / 2,
        //     orangeZone.width,
        //     orangeZone.height
        // );
        // graphics.strokeRect(
        //     greenZone.x - greenZone.width / 2,
        //     greenZone.y - greenZone.height / 2,
        //     greenZone.width,
        //     greenZone.height
        // );
        // graphics.strokeRect(
        //     purpleZone.x - purpleZone.width / 2,
        //     purpleZone.y - purpleZone.height / 2,
        //     purpleZone.width,
        //     purpleZone.height
        // );

        this.dialogueText = this.add.text(640, 600, "", {
            fontSize: '24px',
            color: '#ffffff',
            wordWrap: { width: 500 }
        }).setOrigin(0.5).setInteractive();
     
        this.t2 = this.add.text(640, 100, "", {
             fontSize: '24px',
             color: '#3131c6'
            }).setOrigin(0.5).setVisible(false);
        this.t3 = this.add.text(640, 100, "", {
                fontSize: '24px',
                color: '#3131c6'
                }).setOrigin(0.5).setVisible(false);
        

        


        this.showText(this.array1, () => {

            this.sccnt = 1;

            greenZone.setInteractive(({ useHandCursor: true }));
            orangeZone.setInteractive(({ useHandCursor: true }));
            purpleZone.setInteractive(({ useHandCursor: true }));
        });

        
        // this.op1.on('pointerdown', () => {
        //     this.t2.destroy(); //destroy prev text
        //     this.t3.destroy(); //destroy prev text
        //     this.op1.destroy();
        //     this.op2.destroy();
        //     this.bg = this.add.image(640,320,'bg4').setDisplaySize(400, 400);
        //     this.sccnt = 2;
        //     this.showText(this.array2, () => {
        //         this.sccnt = 2;
        //         this.op3.setVisible(true).setInteractive();
        //         this.op4.setVisible(true).setInteractive();

        //     });
        // });
        // this.op2.on('pointerdown', () => {
        //     //this.bg = this.add.image(640,320,'bg5').setDisplaySize(400, 400);
        //     this.t2.destroy();
        //     this.t3.setVisible(true);
        //     // this.showText(this.array3, () => {
        //     //     this.sccnt = 3;

        //     // });
        // });


        // Debug: show array in console
        console.log('Loaded text array:', this.array1[1]);

    }

    showText(array, onComplete = null) {

        this.currentArray = array;
        this.onComplete = onComplete;
        this.textIndex = 0;

        this.displayNextLine();
    }
    

    displayNextLine() {

    const rawLine = this.currentArray[this.textIndex];

    let speaker = null;
    let textContent = rawLine;

    if (rawLine.includes(':')) {
        speaker = rawLine.charAt(0);
        console.log('speaker is ',speaker);
        textContent = rawLine.substring(2).trim();
    }

    this.dialogueText.setText(textContent);


    this.dialogueText.setPosition(640, 80); //

    if (speaker == 'r') { //format A: sdfsdfkj on txt files
        this.dialogueText.setColor('#c63131'); //
    } 
    else if (speaker == 'b') {
        this.dialogueText.setColor('#3131c6');
    }else if (speaker == 'g') {
        this.dialogueText.setColor('#88f762');
    }else if (speaker == 'p') {
        this.dialogueText.setColor('#622fc2');
    }else if (speaker == 'o') {
        this.dialogueText.setColor('#cd780f');
    }  
    else {
        this.dialogueText.setPosition(640, 600)
        this.dialogueText.setColor('#f762f7');
    }


    this.dialogueText.once('pointerdown', () => {

        this.textIndex++;

        if (this.textIndex < this.currentArray.length) {
            this.displayNextLine();
        } 
        else {
            this.dialogueText.setText("");

            if (this.onComplete) {
                this.onComplete();
            }
        }
    });
}

    loadArr(file) {
        // Get text from cache
        const cachedText = this.cache.text.get(file);

        if (!cachedText) {
            console.error('Text not found in cache!');
            return [];
        }

        return cachedText.split('-').map(line => line.trim());
    }
    
    
}
