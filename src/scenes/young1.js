import { colorgatherer } from './colorgatherer.js';

export class young1 extends Phaser.Scene {

    constructor() {
        super('young1');   // <-- this is the scene key
        this.houseinit = [];
    }

    //potential colours gathered: or, pr, gr

    //if statement: if (colorgatherer.choices.includes("or")){
    //     console.log("HOE");
    // }

    preload() {    
        
        this.load.image('black', '../assets/plainblack.gif');
        
        this.load.image('gbed','../assets/blueredyoung/pgreen/bed1par.gif');
        this.load.image('gkitchen','../assets/blueredyoung/pgreen/kitchen1both.gif');
        this.load.image('gliv1','../assets/blueredyoung/pgreen/liv1both.gif');
        this.load.image('gliv2','assets/blueredyoung/pgreen/liv1red.gif');

        this.load.image('lbed','../assets/blueredyoung/plilac/bed1par.gif');
        this.load.image('lkitchen','../assets/blueredyoung/plilac/kitchen1both.gif');
        this.load.image('lliv1','../assets/blueredyoung/plilac/liv1both.gif');
        this.load.image('lliv2','../assets/blueredyoung/plilac/liv1red.gif');

        this.load.image('obed','../assets/blueredyoung/porange/bed1par.gif');
        this.load.image('okitchen','../assets/blueredyoung/porange/kitchen1both.gif');
        this.load.image('oliv1','../assets/blueredyoung/porange/liv1both.gif');
        this.load.image('oliv2','../assets/blueredyoung/porange/liv1red.gif');


        // this.load.spritesheet('bg6', '../assets/blueredkiddo/playgroundsprite.png', {
        //     frameWidth: 1024,
        //     frameHeight: 1024
        // }); //
        
        
        this.load.text('houseinit', '../assets/txts/young/houseinit.txt');
        

        // this.load.text('g1', '../assets/txts/kid/green.txt'); 
        // this.load.text('p1', '../assets/txts/kid/purple.txt');
        // this.load.text('o1', '../assets/txts/kid/orange.txt');

        // this.load.text('g2', '../assets/txts/kid/green2.txt'); 
        // this.load.text('p2', '../assets/txts/kid/purple2.txt');
        // this.load.text('o2w', '../assets/txts/kid/orange2.txt');
        // this.load.text('o2l', '../assets/txts/kid/orange2loss.txt');
        
         
    }   

    create() {

        this.textIndex = 0;
        this.sccnt = 0;

        const housebg = this.add.image(640, 320, 'lbed').setDisplaySize(400, 400);
        //this.add.image(640, 320, 'lbed');
        // let clickCount = 0;
        // let clickCount2 = 0;

        this.houseinit = this.loadArr('houseinit');

        if (colorgatherer.choices.includes("or")){
            this.housebg = this.add.image(640, 320, 'obed').setDisplaySize(400, 400);
        }else if(colorgatherer.choices.includes("gr")){
            this.housebg = this.add.image(640, 320, 'gbed').setDisplaySize(400, 400);
        }else if(colorgatherer.choices.includes("pr")){
            this.housebg = this.add.image(640, 320, 'lbed').setDisplaySize(400, 400);
        }
        
         
        // this.anims.create({ //for sprite animation
        //     key: 'spin3',
        //     frames: this.anims.generateFrameNumbers('bg6', {
        //         start: 0,
        //         end: 5 
        //     }),
        //     frameRate: 2,
        //     repeat: -1
        // });
        

        // this.spinner = this.add.sprite(640, 320, 'bg6').setOrigin(0.5).setScale(0.5);

        // this.spinner.play('spin3');

        // this.spinner.setDisplaySize(400, 400);

        this.t1 = this.add.text(640, 100, "b: wake up! It's your first day at your school today you don't wanna be late!", {
                fontSize: '24px',
                color: '#3131c6'
        }).setOrigin(0.5).setVisible(true);

        this.t2 = this.add.text(640, 100, "r: so, how do you feel about being so grown now?", {
                fontSize: '24px',
                color: '#c63131'
        }).setOrigin(0.5).setVisible(false);
        
        this.c1 = this.add.text(640, 600, "ok ok im awake, lets go get breakfast", {
                fontSize: '24px',
                color: '#ffffff'
        }).setOrigin(0.5).setVisible(true).setInteractive();
        this.c2 = this.add.text(640, 650, "ok, it's not like you're giving me much of a choice..", {
                fontSize: '24px',
                color: '#ffffff'
        }).setOrigin(0.5).setVisible(true).setInteractive();
        
        this.c3 = this.add.text(640, 600, ".....not really", {
                fontSize: '24px',
                color: '#ffffff'
        }).setOrigin(0.5).setVisible(false);
        this.c4 = this.add.text(640, 650, "yes im ready to be king", {
                fontSize: '24px',
                color: '#ffffff'
        }).setOrigin(0.5).setVisible(false);

        // greenZone.on('pointerdown', () => { //add push
        //     colorgatherer.choices.push("gr");
        //     this.spinner.play('sping');
        //     this.t.destroy();
        //     greenZone.destroy();
        //     orangeZone.destroy();
        //     purpleZone.destroy();
        //     this.showText(this.array2, () => {
        //         this.spinner.play('spingm1');
        //         this.gmt = this.add.text(640, 100, 'click on screen as many times as you can! (at least 15 times)', { fontSize: '16px', fill: '#ffffff' }).setOrigin(0.5);
        //         greenerZone.setInteractive();
        //     });

        // });


        // const graphics = this.add.graphics();
        // graphics.lineStyle(4, 0x00ff00);
        // graphics.strokeRect(
        //     greenerZone.x - greenerZone.width / 2,
        //     greenerZone.y - greenerZone.height / 2,
        //     greenerZone.width,
        //     greenerZone.height
        // ).setDepth(10);
        // graphics.strokeRect(
        //     rightleafZone.x - rightleafZone.width / 2,
        //     rightleafZone.y - rightleafZone.height / 2,
        //     rightleafZone.width,
        //     rightleafZone.height
        // ).setDepth(10);
        // graphics.strokeRect(
        //     thirdoZone.x - thirdoZone.width / 2,
        //     thirdoZone.y - thirdoZone.height / 2,
        //     thirdoZone.width,
        //     thirdoZone.height
        // );

        this.dialogueText = this.add.text(640, 600, "", {
            fontSize: '24px',
            color: '#ffffff',
            wordWrap: { width: 500 }
        }).setOrigin(0.5).setInteractive();


        this.c3.on('pointerdown', () => {
            //this.spinner.play('othird');
            console.log('hehe');
            this.t2.destroy();
            this.c3.destroy();
            this.c4.destroy();
                    //speech array
            this.showText(this.houseinit, () => {
                this.scene.start('schoolinit'); //really is for schoolinit or could add an intermid scene for the road or whatever
            });     
            
        });

        this.c4.on('pointerdown', () => {
            //this.spinner.play('othird');
            console.log('hoho');
            this.t2.destroy();
            this.c3.destroy();
            this.c4.destroy();
                    //speech array
            this.showText(this.houseinit, () => {
                this.scene.start('defaultnone'); //really is for schoolinit or could add an intermid scene for the road or whatever
            });     
            
        });
            
        this.c1.on('pointerdown', () => {
            //this.ltxt1.destroy();
            //this.ltxt2.destroy();
            this.c1.destroy();
            this.c2.destroy();
            this.t1.destroy();
            this.t2.setVisible(true);
            this.c3.setVisible(true).setInteractive();
            this.c4.setVisible(true).setInteractive();
            if (colorgatherer.choices.includes("or")){
                this.housebg = this.add.image(640, 320, 'okitchen').setDisplaySize(400, 400);
            }else if(colorgatherer.choices.includes("gr")){
                this.housebg = this.add.image(640, 320, 'gkitchen').setDisplaySize(400, 400);
            }else if(colorgatherer.choices.includes("pr")){
                this.housebg = this.add.image(640, 320, 'lkitchen').setDisplaySize(400, 400);
            }
        });

        this.c2.on('pointerdown', () => {
            //this.ltxt1.destroy();
            //this.ltxt2.destroy();
            this.c1.destroy();
            this.c2.destroy();
            this.t1.destroy();
            this.t2.setVisible(true);
            this.c3.setVisible(true).setInteractive();
            this.c4.setVisible(true).setInteractive();
            if (colorgatherer.choices.includes("or")){
                this.housebg = this.add.image(640, 320, 'okitchen').setDisplaySize(400, 400);
            }else if(colorgatherer.choices.includes("gr")){
                this.housebg = this.add.image(640, 320, 'gkitchen').setDisplaySize(400, 400);
            }else if(colorgatherer.choices.includes("pr")){
                this.housebg = this.add.image(640, 320, 'lkitchen').setDisplaySize(400, 400);
            }
            
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


        this.dialogueText.setPosition(640, 80); //
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
