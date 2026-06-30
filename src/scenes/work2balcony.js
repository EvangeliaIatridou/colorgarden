import { colorgatherer, buildkey, addBackground } from './colorgatherer.js';

export class work2balcony extends Phaser.Scene {

    constructor() {
        super('work2balcony');   // <-- this is the scene key
        this.office = [];
        this.balcony = [];
        this.admit = [];
        this.stayhome = [];
        this.join = [];
        this.outintro = [];
        this.homeintro = [];
        //this.colorkey = buildkey(); //kinda useless?
    }

    //potential colours gathered: or, pr, gr

    //if statement: if (colorgatherer.choices.includes("or")){
    //     console.log("HOE");
    // }

    preload() {    
        
        const colorkey = buildkey();
        //console.log(colorkey); 

        const giflist = [
            'bossofficesp.png',
            'balconysp.png',
            
        ];


        giflist.forEach(file => {
            // remove extension for the key
            const key = file.replace('.png', colorkey); //replace with colorkey (ofbg, etc)

            this.load.spritesheet(key, `../assets/blueredadult/${colorkey}/${file}`, {
                frameWidth: 1064,
                frameHeight: 1064
            });
        });
           

        //const key1 = 'workoutside.gif'.replace('.gif', colorkey);
        this.load.image('workout', `../assets/blueredadult/${colorkey}/workoutside.gif`);

        this.load.text('crisis', '../assets/txts/adult/crisis.txt');
        this.load.text('balcony', '../assets/txts/adult/balcony.txt');
        this.load.text('admit', '../assets/txts/adult/admitcrisis.txt');
        this.load.text('stayhom', '../assets/txts/adult/homechoice.txt');
        this.load.text('outintro', '../assets/txts/adult/outintro.txt');
        this.load.text('homeintro', '../assets/txts/adult/workdayend.txt');


    }   

    create() {

        console.log(this.colorkey);

        this.textIndex = 0;

        this.office = this.loadArr('crisis');
        this.balcony = this.loadArr('balcony');
        this.admit = this.loadArr('admit');
        this.stayhome = this.loadArr('stayhom');
        this.join = this.loadArr('outintro');
        this.homeintro = this.loadArr('homeintro');

        this.anims.create({ //for sprite animation
            key: 'office',
            frames: this.anims.generateFrameNumbers(addBackground('bossofficesp'), {
                start: 0,
                end: 2 
            }),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({ //for sprite animation
            key: 'balc',
            frames: this.anims.generateFrameNumbers(addBackground('balconysp'), {
                start: 0,
                end: 3 
            }),
            frameRate: 2,
            repeat: -1
        });
        

        

        this.c1 = this.add.text(640, 600, "I had this breakdown before..", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setOrigin(0.5).setVisible(false);

        this.c2 = this.add.text(640, 650, "it's nothing really I think I'm just tired", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setOrigin(0.5).setVisible(false);

        this.c3 = this.add.text(640, 600, "alright, I will join you a drink is always nice", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setOrigin(0.5).setVisible(false);

        this.c4 = this.add.text(640, 650, "actually I wanted to stay home", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setOrigin(0.5).setVisible(false);

        this.t1 = this.add.text(640, 100, "huh, alright then you'll tell me when you feel like it, I'll listen", {
                fontSize: '24px',
                color: '#726eff',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setOrigin(0.5).setVisible(false);

        this.t2 = this.add.text(640, 100, "so, will you sacrifice your evening to join us?", {
                fontSize: '24px',
                color: '#726eff'
        }).setOrigin(0.5).setOrigin(0.5).setVisible(false);

        this.t3 = this.add.text(640, 100, "I'll see you after work then!", {
                fontSize: '24px',
                color: '#726eff'
        }).setOrigin(0.5).setOrigin(0.5).setVisible(false);

        
        this.dialogueText = this.add.text(640, 600, "", {
            fontSize: '24px',
            color: '#ffffff',
            wordWrap: { width: 500 }
        }).setOrigin(0.5).setInteractive();

        this.spinner = this.add.sprite(640, 320, addBackground('bossofficesp')).setDisplaySize(400, 400);
        this.spinner.play('office');

        this.showText(this.office, () => {
            this.spinner = this.add.sprite(640, 320, addBackground('balconysp')).setDisplaySize(400, 400);
            this.spinner.play('balc');
            this.showText(this.balcony, () => {
                //some choice becomes visible
                this.c1.setVisible(true).setInteractive();
                this.c2.setVisible(true).setInteractive();
            });
            //this.t1.setInteractive().setVisible(true);
        });

        //this.t1.setVisible(true).setInteractive();
        //
        this.c1.on('pointerdown', () => {
            this.c1.destroy();
            this.c2.destroy();
            this.showText(this.admit, () => {
                //some choice becomes visible
                this.t2.setVisible(true).setInteractive();
            });
        });

        this.c2.on('pointerdown', () => {
            this.c1.destroy();
            this.c2.destroy();
            this.t1.setInteractive().setVisible(true);
        });

        this.t1.on('pointerdown', () => {
            this.t1.destroy();
            this.t2.setInteractive().setVisible(true);
        });
        
        this.t2.on('pointerdown', () => {
            this.t2.destroy();
            this.c3.setInteractive().setVisible(true);
            this.c4.setInteractive().setVisible(true);
        });

        this.c3.on('pointerdown', () => {
            colorgatherer.choices.push("siet");
            this.c3.destroy();
            this.c4.destroy();
            this.t3.setInteractive().setVisible(true);
        });

        this.c4.on('pointerdown', () => {
            colorgatherer.choices.push("si");
            this.c3.destroy();
            this.c4.destroy();
            this.showText(this.stayhome, () => {
                //some choice becomes visible
                //this.scene.start('defaultnone');
                this.bg = this.add.image(640, 320, 'workout').setDisplaySize(400, 400);
                this.showText(this.homeintro, () => {

                //some choice becomes visible
                    this.scene.start('adult2');
                });
            });
        });

        this.t3.on('pointerdown', () => {
            this.t3.destroy();
            this.bg = this.add.image(640, 320, 'workout').setDisplaySize(400, 400);
            this.showText(this.join, () => {
                //some choice becomes visible
                this.scene.start('adultout1');
            });
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


        this.dialogueText.setPosition(640, 80).setDepth(1000);
        if (speaker == null){
            this.dialogueText.setColor('#ffffff');
        }

        
        if (speaker == 'i') {
            this.dialogueText.setColor('#726eff');
        }else if (speaker == 's') {
            this.dialogueText.setColor('#778ba5');
        }else if (speaker == 't') {
            this.dialogueText.setColor('#008384');
        }else if (speaker == 'e') {
            this.dialogueText.setColor('#c7a39d');
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
