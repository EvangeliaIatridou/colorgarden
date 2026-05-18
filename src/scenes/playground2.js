import { colorgatherer } from './colorgatherer.js';

export class playground2 extends Phaser.Scene {

    constructor() {
        super('playground2');   // <-- this is the scene key
    }

    //potential colours gathered: or, pr, gr

    //if statement: if (colorgatherer.choices.includes("or")){
    //     console.log("HOE");
    // }

    //need to: make changes on playground gif, then make it into sprite, then color change then import

    preload() {
        
        this.load.image('black', '../assets/plainblack.gif');
        

        this.load.image('gback','../assets/blueredyoung/pgreen/threeintrogr.gif');

        this.load.image('lback','../assets/blueredyoung/plilac/threeintrol.gif');

        this.load.image('oback','../assets/blueredyoung/porange/threeintroor.gif');


        this.load.spritesheet('gplay', '../assets/blueredyoung/pgreen/playground2g.png', {
            frameWidth: 1024,
            frameHeight: 1024
        }); //

        this.load.spritesheet('lplay', '../assets/blueredyoung/plilac/playground2l.png', {
            frameWidth: 1024,
            frameHeight: 1024
        }); //

        this.load.spritesheet('oplay', '../assets/blueredyoung/porange/playground2o.png', {
            frameWidth: 1024,
            frameHeight: 1024
        }); //
        
        this.load.text('gang3', '../assets/txts/young/gang3.txt');
        this.load.text('win1', '../assets/txts/young/gangbwins.txt');
        this.load.text('win2', '../assets/txts/young/gangpwins.txt');
            
    
    }   

    create() {

        this.textIndex = 0;
        this.buttoncnt = 0;

        //const schoolimg = this.add.image(640, 320, 'lbed').setDisplaySize(400, 400);
        //this.add.image(640, 320, 'lbed');
        // let clickCount = 0;
        // let clickCount2 = 0;

        this.gang = this.loadArr('gang3');
        this.win1 = this.loadArr('win1');
        this.win2 = this.loadArr('win2');


        this.anims.create({ //for sprite animation
            key: 'opl',
            frames: this.anims.generateFrameNumbers('oplay', {
                start: 0,
                end: 5 
            }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({ //for sprite animation
            key: 'lpl',
            frames: this.anims.generateFrameNumbers('lplay', {
                start: 0,
                end: 5 
            }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({ //for sprite animation
            key: 'gpl',
            frames: this.anims.generateFrameNumbers('gplay', {
                start: 0,
                end: 5 
            }),
            frameRate: 2,
            repeat: -1
        });
    

        if (colorgatherer.choices.includes("or")){ //
            this.spinner = this.add.sprite(640, 320, 'oplay').setOrigin(0.5);
            //this.add.rectangle(640, 320, 400, 400).setStrokeStyle(2, 0xff0000);
            //this.spinner.play('opl');
            this.spinner.setDisplaySize(400, 400);
        }else if(colorgatherer.choices.includes("gr")){
            this.spinner = this.add.sprite(640, 320, 'gplay').setOrigin(0.5).setDisplaySize(400, 400);
            //this.spinner.play('gpl');
        }else if(colorgatherer.choices.includes("pr")){
            this.spinner = this.add.sprite(640, 320, 'lplay').setOrigin(0.5).setDisplaySize(400, 400);
            //this.spinner.play('lpl');
        }

        this.run = this.add.text(640, 80, "press the button to run!!", {
                    fontSize: '24px',
                    color: '#ffffff'
        }).setOrigin(0.5).setVisible(false);

        this.ready = this.add.text(640, 600, "ready", {
                    fontSize: '24px',
                    color: '#ffffff'
        }).setOrigin(0.5).setVisible(false);

        // this.c1 = this.add.text(640, 600, "no", {
        //         fontSize: '24px',
        //         color: '#f762f7'
        // }).setOrigin(0.5).setVisible(false);

        // this.c2 = this.add.text(640, 650, "uhh sure why not", {
        //         fontSize: '24px',
        //         color: '#f762f7'
        // }).setOrigin(0.5).setVisible(false);


        // this.t1 = this.add.text(640, 80, "I knew you were cool like us, let's jump through the fence and go", {
        //         fontSize: '24px',
        //         color: '#c63131'
        // }).setOrigin(0.5).setVisible(false);

        // this.t2 = this.add.text(640, 80, "cmon you are the one who wanted to get to know us, now you have to join", {
        //         fontSize: '24px',
        //         color: '#3131c6'
        // }).setOrigin(0.5).setVisible(false);

        
        // this.c1.on('pointerdown', () => {
        //     //this.ltxt1.destroy();
        //     //this.ltxt2.destroy();
        //     this.c1.destroy();
        //     this.c2.destroy();
        //     this.t1.setVisible(true).setInteractive();
            
        // });

        // this.c2.on('pointerdown', () => {
        //     //this.ltxt1.destroy();
        //     //this.ltxt2.destroy();
        //     this.c1.destroy();
        //     this.c2.destroy();
        //     this.t2.setVisible(true).setInteractive();
            
        // });

        // this.t2.on('pointerdown', () => {
        //     this.t2.destroy();
        //     this.t3.setVisible(true).setInteractive();
            
        // });



        this.dialogueText = this.add.text(640, 600, "", {
            fontSize: '24px',
            color: '#ffffff',
            wordWrap: { width: 500 }
        }).setOrigin(0.5).setInteractive();

        let button = this.add.rectangle(650, 350, 200, 50, 0xf762f7)
            .on('pointerdown', () => {
                this.buttoncnt++;
            }).setVisible(false).setOrigin(0.5).setDepth(10);

        this.showText(this.gang, () => {
            //this.scene.start('defaultnone');


            this.gangimg = this.add.image(640, 350, 'black').setDisplaySize(500, 500).setOrigin(0.5);
            button.setInteractive().setVisible(true).setDepth(100);
            this.run.setVisible(true).setInteractive().setDepth(100);
            this.ready.setVisible(true).setInteractive().setDepth(100);
            //setInteractive zones when the other txts are done with
            // this.c1.setVisible(true).setInteractive();
            // this.c2.setVisible(true).setInteractive();

            //really is for schoolinit or could add an intermid scene for the road or whatever
        });

        this.ready.on('pointerdown', () => {
            this.ready.destroy();
            this.run.destroy();
            button.destroy();
            if (colorgatherer.choices.includes("or")){ //
                this.classimg = this.add.image(640, 320, 'oback').setDisplaySize(400, 400);
            }else if(colorgatherer.choices.includes("gr")){
                this.classimg = this.add.image(640, 320, 'gback').setDisplaySize(400, 400);
            }else if(colorgatherer.choices.includes("pr")){
                this.classimg = this.add.image(640, 320, 'lback').setDisplaySize(400, 400);
            }
            if(this.buttoncnt>13){
                this.showText(this.win2, () => {
                    this.scene.start('young2');
                });
            }else{
                this.showText(this.win2, () => {
                    this.scene.start('young2');
                });
            }
            //this.scene.start('defaultnone'); //instead of this should be a lil black screen with text and then go into the outro
        });



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

        if (rawLine.length > 1 && rawLine.charAt(1) === ':') {
            speaker = rawLine.charAt(0);
            console.log('speaker is ',speaker);
            textContent = rawLine.substring(2).trim();
        }

        this.dialogueText.setText(textContent);


        this.dialogueText.setPosition(640, 80).setDepth(1000); //
        if (speaker == null){
            this.dialogueText.setColor('#ffffff');
        }

        if (speaker == 'r') { //format A: sdfsdfkj on txt files
            this.dialogueText.setColor('#c63131'); //
        } 
        else if (speaker == 'b') {
            this.dialogueText.setColor('#3131c6');

        }else if (speaker == 'f') {
            this.dialogueText.setColor('#d5225e');
        }else if (speaker == 'p') {
            this.dialogueText.setColor('#8a5c23');
        }else if (speaker == 'g') {
            this.dialogueText.setColor('#22812f');
         
        }else if (speaker == 'c') {
            this.dialogueText.setColor('#62d3f7');
        }else if (speaker == 'y') {
            this.dialogueText.setColor('#deff65');
        }else if (speaker == 'l') {
            this.dialogueText.setColor('#7e59c6');
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
