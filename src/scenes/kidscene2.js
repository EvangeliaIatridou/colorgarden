export class kidscene2 extends Phaser.Scene {

    constructor() {
        super('kidscene2');   // <-- this is the scene key
        this.array = [];
    }

    preload() {
        this.load.image('liv', '../assets/blueredkiddo/liv1both.gif');
        this.load.text('text', '../assets/txts/kid/txt3.txt'); 
    }   

    create() {
        const bg = this.add.image(640, 320, 'liv');

        bg.setDisplaySize(400, 400);

        this.array = this.loadArr('text');
        this.textIndex = 0;
        this.sccnt = 0;

        this.dialogueText = this.add.text(640, 600, "", {
            fontSize: '24px',
            color: '#ffffff',
            wordWrap: { width: 500 }
        }).setOrigin(0.5).setInteractive();
     
        this.t2 = this.add.text(640, 100, "It has been a nice day, but I am glad we are home now.", {
             fontSize: '24px',
             color: '#3131c6'
            }).setOrigin(0.5).setVisible(false);
        this.t3 = this.add.text(640, 100, "did you have a good day?", {
                fontSize: '24px',
                color: '#3131c6'
                }).setOrigin(0.5).setVisible(false);
        
        this.t4 = this.add.text(640, 100, "did you make any friends today?", {
                fontSize: '24px',
                color: '#c63131'
                }).setOrigin(0.5).setVisible(false);

        this.op1 = this.add.text(640, 600, "it was alright..", {
                fontSize: "32px",
                color: "#f762f7"
            }).setOrigin(0.5).setVisible(false);

        this.op2 = this.add.text(640, 650, "yeah it was a great day!", {
                fontSize: "32px",
                color: "#f762f7"
            }).setOrigin(0.5).setVisible(false);

        this.op3 = this.add.text(640, 600, "yes!!", {
                fontSize: "32px",
                color: "#f762f7"
            }).setOrigin(0.5).setVisible(false);

        this.op4 = this.add.text(640, 650, "not really..", {
                fontSize: "32px",
                color: "#f762f7"
            }).setOrigin(0.5).setVisible(false);

        this.op5 = this.add.text(640, 650, "continue", {
                fontSize: "32px",
                color: "#f762f7"
            }).setOrigin(0.5).setVisible(false);
        

        this.t2.setVisible(true).setInteractive();
        this.t2.on('pointerdown', () => {
            this.t2.destroy();
            this.t3.setVisible(true).setInteractive();
            this.op1.setVisible(true).setInteractive();
            this.op2.setVisible(true).setInteractive();
        })
        //this.t3.setVisible(true).setInteractive();

        
        this.op1.on('pointerdown', () => {
            this.t3.destroy(); //destroy prev text
            this.op1.destroy();
            this.op2.destroy();
            this.t4.setVisible(true).setInteractive();
            this.op3.setVisible(true).setInteractive();
            this.op4.setVisible(true).setInteractive();
        });
        this.op2.on('pointerdown', () => {
            this.t3.destroy(); //destroy prev text
            this.op1.destroy();
            this.op2.destroy();
            this.t4.setVisible(true).setInteractive();
            this.op3.setVisible(true).setInteractive();
            this.op4.setVisible(true).setInteractive();
        });

        this.op3.on('pointerdown', () => {
            //this.bg = this.add.image(640,320,'bg5').setDisplaySize(400, 400);
            this.t4.destroy();
            this.op3.destroy();
            this.op4.destroy();
            
            this.showText(this.array, () => {
                this.op5.setVisible(true).setInteractive();
                
            });

            //this.t2.destroy();
            //this.t3.setVisible(true);
        });

        this.op4.on('pointerdown', () => {
            this.t4.destroy();
            this.op3.destroy();
            this.op4.destroy();
            
            this.showText(this.array, () => {
                this.op5.setVisible(true).setInteractive();
                
            });
            
        });

        this.op5.on('pointerdown', () => {

            this.op5.destroy()
            //this.scene.start('young1'); //change scene to young whatever you call it idk 

        });

        // Debug: show array in console
        //console.log('Loaded text array:', this.array1[1]);

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
