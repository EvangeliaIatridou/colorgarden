import { colorgatherer, buildkey, addBackground } from './colorgatherer.js';

export class adultout1 extends Phaser.Scene {

    constructor() {
        super('adultout1');   // <-- this is the scene key
        this.meet1 = [];
        this.meet2 = [];
        this.bar1 = [];
        this.green = [];
        this.glitch = [];
        this.order = [];
        this.hometown = [];
        this.curr = [];
        this.after = [];
    }

    //potential colours gathered: or, pr, gr

    //if statement: if (colorgatherer.choices.includes("or")){
    //     console.log("HOE");
    // }

    preload() { 


        const colorkey = buildkey();
        console.log(colorkey);

        const piclist = [
            'barsp.png',
            'bar2sp.png',
            'outwait1sp.png',
            'outwait2sp.png'
        ];


        piclist.forEach(file => {
            // remove extension for the key
            const key = file.replace('.png', colorkey); //replace with colorkey (ofbg, etc)

            this.load.spritesheet(key, `../assets/blueredadult/${colorkey}/${file}`, {
                frameWidth: 1064,
                frameHeight: 1064
            });

            console.log(file);
            console.log(this.textures.exists(key));
        });
        

        this.load.text('meet1', '../assets/txts/adult/outmeet.txt');
        this.load.text('meet2', '../assets/txts/adult/outmeet2.txt');
        this.load.text('bar1', '../assets/txts/adult/bar1.txt');
        this.load.text('green', '../assets/txts/adult/greenbar.txt');
        this.load.text('glitch', '../assets/txts/adult/glitchbar.txt');
        this.load.text('order', '../assets/txts/adult/order.txt');
        this.load.text('hometown', '../assets/txts/adult/hometownstories.txt');
        this.load.text('curr', '../assets/txts/adult/currstories.txt');
        this.load.text('after', '../assets/txts/adult/afterorder.txt');

    }   

    create() {

        this.textIndex = 0;

        this.meet1 = this.loadArr('meet1');
        this.meet2 = this.loadArr('meet2');
        this.bar1 = this.loadArr('bar1');
        this.green = this.loadArr('green');
        this.glitch = this.loadArr('glitch');
        this.hometown = this.loadArr('hometown');
        this.curr = this.loadArr('curr');
        this.order = this.loadArr('order');
        this.after = this.loadArr('after');

        console.log(this.textures.exists('barspofbg'));

        console.log(this.textures.exists('bar2spofbg'));

        this.anims.create({ //for sprite animation
            key: 'bar',
            frames: this.anims.generateFrameNumbers(addBackground('barsp'), {
                start: 0,
                end: 3 
            }),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({ //for sprite animation
            key: 'bar2',
            frames: this.anims.generateFrameNumbers(addBackground('bar2sp'), {
                start: 0,
                end: 3 
            }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({ //for sprite animation
            key: 'outw1',
            frames: this.anims.generateFrameNumbers(addBackground('outwait1sp'), {
                start: 0,
                end: 3 
            }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({ //for sprite animation
            key: 'outw2',
            frames: this.anims.generateFrameNumbers(addBackground('outwait2sp'), {
                start: 0,
                end: 3 
            }),
            frameRate: 2,
            repeat: -1
        });
        

        this.go = this.add.text(640, 100, "go to bar", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setOrigin(0.5).setVisible(false);

        this.orders = this.add.text(640, 100, "ok guys I'm gonna go order, what drinks do you want?", {
                fontSize: '24px',
                color: '#726eff',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setOrigin(0.5).setVisible(false);

        this.order1 = this.add.text(640, 100, "I'll get a beer", {
                fontSize: '24px',
                color: '#726eff',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setOrigin(0.5).setVisible(false);
        
        this.order2 = this.add.text(640, 100, "I'll get lemonade vodka", {
                fontSize: '24px',
                color: '#008384',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setOrigin(0.5).setVisible(false);

        this.oc1 = this.add.text(640, 600, "I'll also have vodka", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setOrigin(0.5).setVisible(false);

        this.oc2 = this.add.text(640, 650, "I'll also have a beer", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setOrigin(0.5).setVisible(false);

        this.homeq = this.add.text(640, 600, "how was your hometown growing up", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setOrigin(0.5).setVisible(false);
        this.currq = this.add.text(640, 650, "so what do you currently do with your lives", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setOrigin(0.5).setVisible(false);

        this.dialogueText = this.add.text(640, 600, "", {
            fontSize: '24px',
            color: '#ffffff',
            wordWrap: { width: 500 }
        }).setOrigin(0.5).setInteractive();

        this.spinner = this.add.sprite(640, 320, addBackground('outwait1sp')).setDisplaySize(400, 400);
        this.spinner.play('outw1');
        
        this.showText(this.meet1, () => {
            this.spinner = this.add.sprite(640, 320, addBackground('outwait2sp')).setDisplaySize(400, 400);
            this.spinner.play('outw2');
            this.showText(this.meet2, () => {
                this.go.setInteractive().setVisible(true);
            });
            
        });

        // this.t1.setVisible(true).setInteractive();
        
        this.go.on('pointerdown', () => {
            this.go.destroy();
            this.spinner = this.add.sprite(640, 320, addBackground('barsp')).setDisplaySize(400, 400);
            this.spinner.play('bar');
            this.showText(this.bar1, () => {
                if(colorgatherer.choices.includes("gr")){
                    this.showText(this.green, () => {
                        this.orders.setInteractive().setVisible(true);
                    });
                }else{
                    this.showText(this.glitch, () => {
                        this.orders.setInteractive().setVisible(true);
                    });
                }
            });
        });

        this.orders.on('pointerdown', () => {
            this.orders.destroy();
            this.order1.setInteractive().setVisible(true);
        });
        this.order1.on('pointerdown', () => {
            this.order1.destroy();
            this.order2.setInteractive().setVisible(true);
        });
        this.order2.on('pointerdown', () => {
            this.order2.destroy();
            this.oc1.setInteractive().setVisible(true);
            this.oc2.setInteractive().setVisible(true);
        });

        this.oc1.on('pointerdown', () => {
            this.oc1.destroy();
            this.oc2.destroy();
            this.spinner = this.add.sprite(640, 320, addBackground('bar2sp')).setDisplaySize(400, 400);
            this.spinner.play('bar2');
            console.log('nogga');
            this.showText(this.order, () => {
                this.spinner = this.add.sprite(640, 320, addBackground('barsp')).setDisplaySize(400, 400);
                this.spinner.play('bar');
                this.showText(this.after, () => {
                    
                    this.homeq.setInteractive().setVisible(true);
                    this.currq.setInteractive().setVisible(true);
                });
            });
        });

        this.oc2.on('pointerdown', () => {
            this.oc1.destroy();
            this.oc2.destroy();
            this.spinner = this.add.sprite(640, 320, addBackground('bar2sp')).setDisplaySize(400, 400);
            this.spinner.play('bar2');
            console.log('nooogga');
            this.showText(this.order, () => {
                this.spinner = this.add.sprite(640, 320, addBackground('barsp')).setDisplaySize(400, 400);
                this.spinner.play('bar');
                this.showText(this.after, () => {
                    
                    this.homeq.setInteractive().setVisible(true);
                    this.currq.setInteractive().setVisible(true);
                });
            });
        });
        
        this.homeq.on('pointerdown', () => {
            this.homeq.destroy();
            this.currq.destroy();
            this.showText(this.hometown, () => {
                this.scene.start('endscene');
            });
        });

        this.currq.on('pointerdown', () => {
            this.homeq.destroy();
            this.currq.destroy();
            this.showText(this.curr, () => {
                this.scene.start('endscene');
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
