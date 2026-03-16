export class kidscene1 extends Phaser.Scene {

    constructor() {
        super('kidscene1');   // <-- this is the scene key
        this.array1 = [];
        this.array2 = [];
        this.array3 = [];
    }

    preload() {
        this.load.image('bg', '../assets/blueredkiddo/bed1empty.gif');
        this.load.image('bg3', '../assets/blueredkiddo/bed1par.gif');
        this.load.image('bg4', '../assets/blueredkiddo/kitchen1both.gif');
        this.load.spritesheet('bg5', '../assets/blueredkiddo/roadsprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });
        this.load.text('txt1', '../assets/txts/kid/txt1.txt');
        this.load.text('txt2', '../assets/txts/kid/txt2.txt'); 
        this.load.text('txt3', '../assets/txts/kid/streetthoughts.txt');
    }   

    create() {
        const bg = this.add.image(640, 320, 'bg');

        bg.setDisplaySize(400, 400);

        this.array1 = this.loadArr('txt1');
        this.array2 = this.loadArr('txt2');
        this.array3 = this.loadArr('txt3');
        this.textIndex = 0;
        this.sccnt = 0;

        this.anims.create({ //for sprite animation
            key: 'spin2',
            frames: this.anims.generateFrameNumbers('bg5', {
                start: 0,
                end: 1   // TEMP: try first 8 frames only
            }),
            frameRate: 2,
            repeat: -1
        });

        this.spinner = this.add.sprite(640, 320, 'bg5').setOrigin(0.5).setScale(0.5).setDepth(10);

        //this.spinner.play('spin2');
        this.spinner.setDisplaySize(400, 400).setVisible(false);

        this.dialogueText = this.add.text(640, 600, "", {
            fontSize: '24px',
            color: '#ffffff',
            wordWrap: { width: 500 }
        }).setOrigin(0.5).setInteractive();
     
        this.t2 = this.add.text(640, 100, "Wake up sleepyhead, you need to get breakfast! Come down to eat with us?", {
             fontSize: '24px',
             color: '#3131c6'
            }).setOrigin(0.5).setVisible(false);
        this.t3 = this.add.text(640, 100, "Uhhh ok then, ill let you decide on your own time. \nExcept you have to decide to get breakfast at some point", {
                fontSize: '24px',
                color: '#3131c6'
                }).setOrigin(0.5).setVisible(false);
        

        this.op1 = this.add.text(640, 600, "get breakfast", {
                fontSize: "32px",
                color: "#f762f7"
            }).setOrigin(0.5).setVisible(false);

        this.op2 = this.add.text(640, 650, "stay in bed", {
                fontSize: "32px",
                color: "#f762f7"
            }).setOrigin(0.5).setVisible(false);

        this.op3 = this.add.text(640, 600, "ummm sure ok lets go", {
                fontSize: "32px",
                color: "#f762f7"
            }).setOrigin(0.5).setVisible(false);

        this.op4 = this.add.text(640, 650, "lets go to the playground!!!", {
                fontSize: "32px",
                color: "#f762f7"
            }).setOrigin(0.5).setVisible(false);

        this.op5 = this.add.text(640, 650, "continue", {
                fontSize: "32px",
                color: "#f762f7"
            }).setOrigin(0.5).setVisible(false);
        

        this.showText(this.array1, () => {

            this.sccnt = 1;

            this.bg = this.add.image(640,320,'bg3').setDisplaySize(400, 400);
            this.t2.setVisible(true);
            this.op1.setVisible(true).setInteractive();
            this.op2.setVisible(true).setInteractive();
        });

        
        this.op1.on('pointerdown', () => {
            this.t2.destroy(); //destroy prev text
            this.t3.destroy(); //destroy prev text
            this.op1.destroy();
            this.op2.destroy();
            this.bg = this.add.image(640,320,'bg4').setDisplaySize(400, 400);
            this.sccnt = 2;
            this.showText(this.array2, () => {
                this.sccnt = 2;
                this.op3.setVisible(true).setInteractive();
                this.op4.setVisible(true).setInteractive();

            });
        });
        this.op2.on('pointerdown', () => {

            this.t2.destroy();
            this.t3.setVisible(true);
        });

        this.op3.on('pointerdown', () => {
            //this.bg = this.add.image(640,320,'bg5').setDisplaySize(400, 400);
            this.op3.destroy();
            this.op4.destroy();

            this.spinner.setVisible(true).setDisplaySize(400, 400);
            this.spinner.play('spin2');
            
            this.showText(this.array3, () => {
                this.sccnt = 3;
                this.op5.setVisible(true).setInteractive();
                
            });

            //this.t2.destroy();
            //this.t3.setVisible(true);
        });

        this.op4.on('pointerdown', () => {
            //this.bg = this.add.image(640,320,'bg5').setDisplaySize(400, 400);
            this.op3.destroy();
            this.op4.destroy();

            this.spinner.setVisible(true).setDisplaySize(400, 400);
            this.spinner.play('spin2');

            this.showText(this.array3, () => {
                this.sccnt = 3;
                this.op5.setVisible(true).setInteractive();
                
            });

            //make bg into spritess in order for it to move like u did in pickinitcolors
            //change into new scene (playground scene) and write/art about it
            
        });

        this.op5.on('pointerdown', () => {

            this.op5.destroy()
            this.scene.start('playground');

        });

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

        const textContent = this.currentArray[this.textIndex];

        this.dialogueText.setText(textContent);
        
        if (this.currentArray === this.array2) {
            console.log('shrek is the greatest man that walked on earth');
            this.dialogueText.setPosition(640, 80);

            if (this.textIndex % 2 === 0) {
                this.dialogueText.setColor('#c63131');  
            } else {
                this.dialogueText.setColor('#3131c6');  
            }
        }else if (this.currentArray === this.array1){
            this.dialogueText.setColor('#ffffff'); 
            this.dialogueText.setPosition(640, 600);
        } else{
            this.dialogueText.setColor('#f762f7'); 
            this.dialogueText.setPosition(640, 600);
        }
        
        this.dialogueText.once('pointerdown', () => {

            this.textIndex++;

            if (this.textIndex < this.currentArray.length) {
                this.displayNextLine();
            } else {

                this.dialogueText.setText(""); // clear

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
