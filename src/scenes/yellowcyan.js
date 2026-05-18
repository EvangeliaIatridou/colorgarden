import { colorgatherer } from './colorgatherer.js';

export class yellowcyan extends Phaser.Scene {

    constructor() {
        super('yellowcyan');   // <-- this is the scene key
    }

    //potential colours gathered: or, pr, gr

    //if statement: if (colorgatherer.choices.includes("or")){
    //     console.log("HOE");
    // }

    preload() {
        //change the loadings, first do the gif size conversion
        this.load.image('black', '../assets/plainblack.gif');
        
        this.load.image('gtwointro','../assets/blueredyoung/pgreen/gtwointro.gif');

        this.load.image('ltwointro','../assets/blueredyoung/plilac/ltwointro.gif');

        this.load.image('otwointro','../assets/blueredyoung/porange/otwointro.gif');

        
        this.load.text('yellowcyan', '../assets/txts/young/cyanyellow.txt');
    
         
    }   

    create() {

        this.textIndex = 0;
        this.sccnt = 0;

        //const schoolimg = this.add.image(640, 320, 'lbed').setDisplaySize(400, 400);
        //this.add.image(640, 320, 'lbed');
        // let clickCount = 0;
        // let clickCount2 = 0;

        this.yc = this.loadArr('yellowcyan');


        if (colorgatherer.choices.includes("or")){ //
            this.ycimg = this.add.image(640, 320, 'otwointro').setDisplaySize(400, 400);
        }else if(colorgatherer.choices.includes("gr")){
            this.ycimg = this.add.image(640, 320, 'gtwointro').setDisplaySize(400, 400);
        }else if(colorgatherer.choices.includes("pr")){
            this.ycimg = this.add.image(640, 320, 'ltwointro').setDisplaySize(400, 400);
        }

        this.c1 = this.add.text(640, 600, "pink", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.c2 = this.add.text(640, 650, "i dont know, whatever u want", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);


        this.t1 = this.add.text(640, 80, "you don't know?? Well that's a thinker, we will call you pink either way it suits you", {
                fontSize: '24px',
                color: '#deff65'
        }).setOrigin(0.5).setVisible(false);

        this.t2 = this.add.text(640, 80, "great welcome to the group pink!!", {
                fontSize: '24px',
                color: '#deff65'
        }).setOrigin(0.5).setVisible(false);

        this.t3 = this.add.text(640, 80, "we better hurry, yellow and pink, will you join at last?", {
                fontSize: '24px',
                color: '#62d3f7'
        }).setOrigin(0.5).setVisible(false);

        this.t4 = this.add.text(640, 80, "alright alright, let's go! (we will be the first in class idk why cyan is so worried....)", {
                fontSize: '24px',
                color: '#deff65'
        }).setOrigin(0.5).setVisible(false);

        this.c1.on('pointerdown', () => {
            this.c1.destroy();
            this.c2.destroy();
            this.t2.setVisible(true).setInteractive();
            
        });

        this.c2.on('pointerdown', () => {
            this.c1.destroy();
            this.c2.destroy();
            this.t1.setVisible(true).setInteractive();
            
        });

        this.t1.on('pointerdown', () => {
            this.t1.destroy();
            this.t3.setVisible(true).setInteractive();
        });

        this.t2.on('pointerdown', () => {
            this.t2.destroy();
            this.t3.setVisible(true).setInteractive();
        
        });

        this.t3.on('pointerdown', () => {
            this.t3.destroy();
            this.t4.setVisible(true).setInteractive();
            
        });

        this.t4.on('pointerdown', () => {
            this.scene.start('classroom');
        });


        this.dialogueText = this.add.text(640, 600, "", {
            fontSize: '24px',
            color: '#ffffff',
            wordWrap: { width: 500 }
        }).setOrigin(0.5).setInteractive();

        this.showText(this.yc, () => {
            //setInteractive zones when the other txts are done with
            this.c1.setVisible(true).setInteractive();
            this.c2.setVisible(true).setInteractive();
            //really is for schoolinit or could add an intermid scene for the road or whatever
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
