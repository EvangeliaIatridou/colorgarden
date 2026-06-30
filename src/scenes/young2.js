import { colorgatherer } from './colorgatherer.js';

export class young2 extends Phaser.Scene {

    constructor() {
        super('young2');   // <-- this is the scene key
        this.houseinit = [];
    }

    //potential colours gathered: or, pr, gr

    //if statement: if (colorgatherer.choices.includes("or")){
    //     console.log("HOE");
    // }

    preload() {    
        
        this.load.image('black', '../assets/plainblack.gif');
        
        this.load.image('gliv1','../assets/blueredyoung/pgreen/liv1both.gif');
        this.load.image('gliv2','../assets/blueredyoung/pgreen/liv1red.gif');
        
        this.load.image('lliv1','../assets/blueredyoung/plilac/liv1both.gif');
        this.load.image('lliv2','../assets/blueredyoung/plilac/liv1red.gif');

        this.load.image('oliv1','../assets/blueredyoung/porange/liv1both.gif');
        this.load.image('oliv2','../assets/blueredyoung/porange/liv1red.gif');
        

        this.load.text('houseend1', '../assets/txts/young/houseend1.txt');

        this.load.text('likel', '../assets/txts/young/likelilac.txt');
        this.load.text('surel', '../assets/txts/young/surelilac.txt');
        this.load.text('integralsl', '../assets/txts/young/integrals.txt');

    }   

    create() {

        this.textIndex = 0;
        this.timequick = 0;
        this.fpbg = 0;

        this.house1 = this.loadArr('houseend1');
        this.likel = this.loadArr('likel');
        this.surel = this.loadArr('surel');
        this.integr = this.loadArr('integralsl');

        this.events.on('shutdown', () => {
            //this.music.stop(); 
            this.sound.stopAll();
        });

        if (colorgatherer.choices.includes("or")){
            this.housebg = this.add.image(640, 320, 'oliv1').setDisplaySize(400, 400);
        }else if(colorgatherer.choices.includes("gr")){
            this.housebg = this.add.image(640, 320, 'gliv1').setDisplaySize(400, 400);
        }else if(colorgatherer.choices.includes("pr")){
            this.housebg = this.add.image(640, 320, 'lliv1').setDisplaySize(400, 400);
        }
        

        this.t1 = this.add.text(640, 100, "there you are, it wasn't that long afterall", {
                fontSize: '24px',
                color: '#c63131'
        }).setOrigin(0.5).setOrigin(0.5).setVisible(false);

        this.t2 = this.add.text(640, 100, "hey kid, if anything happens that you wanna talk about, we are here for you", {
                fontSize: '24px',
                color: '#c63131'
        }).setOrigin(0.5).setVisible(false);

        this.t3 = this.add.text(640, 100, "so go ahead, do you wanna tell me anything?", {
                fontSize: '24px',
                color: '#c63131'
        }).setOrigin(0.5).setVisible(false);

        this.sh1 = this.add.text(640, 100, "yea that's how it usually goes.. you will have to figure out some way to make it fun", {
                fontSize: '24px',
                color: '#c63131',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false).setDepth(10);;

        this.sh2 = this.add.text(640, 100, "afterall it's only the first day, you can't really know just from this day", {
                fontSize: '24px',
                color: '#c63131',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false).setDepth(10);;

        this.dinner = this.add.text(640, 100, "we can eat in a little bit if you're hungry, i cooked up some pasta", {
                fontSize: '24px',
                color: '#c63131',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false).setDepth(10);;

        this.end1 = this.add.text(640, 100, "and about that time thing, it will pass by faster after a while..", {
                fontSize: '24px',
                color: '#c63131',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false).setDepth(10);;

        this.end2 = this.add.text(640, 100, "and about that time thing, blue is right, it does pass quickly especially when you like what you are doing..", {
                fontSize: '24px',
                color: '#c63131',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false).setDepth(10);;

        this.end = this.add.text(640, 100, "do feel free to tell us anything, and be careful ok?", {
                fontSize: '24px',
                color: '#c63131',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false).setDepth(10);;


        this.g1 = this.add.text(640, 600, "it felt like ages", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.g2 = this.add.text(640, 650, "yes it really was a short while", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);
        
        this.c1 = this.add.text(640, 600, "they were a little strict but i liked them", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.c2 = this.add.text(640, 640, "sure..", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);
        
        this.c3 = this.add.text(640, 680, "yes i loved it when integrals were introduced", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.q1 = this.add.text(640, 600, "i don't think i like school..", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.q2 = this.add.text(640, 640, "when are we gonna have dinner?", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);
        
        this.q3 = this.add.text(640, 680, "i was actually out of school..", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.out = this.add.text(640, 100, "huh I did stuff like this too, but did you like it?", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false).setDepth(10);;

        this.like = this.add.text(640, 100, "well then, you don't have to feel too bad just don't make it a habit", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false).setDepth(10);;

        this.likedislike = this.add.text(640, 100, "don't hang out with people that don't care about what you want or need to do", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false).setDepth(10);;

        this.dislike = this.add.text(640, 100, "then you shouldn't hang out with them next time I don't like them either now", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false).setDepth(10);;

        this.yes = this.add.text(640, 600, "yes", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.no = this.add.text(640, 650, "no", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);


        this.dialogueText = this.add.text(640, 600, "", {
            fontSize: '24px',
            color: '#ffffff',
            wordWrap: { width: 500 }
        }).setOrigin(0.5).setInteractive();

        this.t1.setVisible(true).setInteractive();
        
        this.t1.on('pointerdown', () => {
            this.t1.destroy();
            this.g1.setVisible(true).setInteractive();
            this.g2.setVisible(true).setInteractive();
        });

        this.t2.on('pointerdown', () => {
            this.t2.destroy();
            this.t3.setInteractive().setVisible(true);
        });

        this.t3.on('pointerdown', () => {
            this.t3.destroy();
            this.q1.setVisible(true).setInteractive();
            this.q2.setVisible(true).setInteractive();
            if(colorgatherer.choices.includes("fu")){
                this.q3.setVisible(true).setInteractive();
            }
        });

        this.q1.on('pointerdown', () => {
            this.q1.destroy();
            this.q2.destroy();
            this.q3.destroy();
            this.sh1.setInteractive().setVisible(true);
        });

        this.sh1.on('pointerdown', () => {
            this.sh1.destroy();
            this.sh2.setInteractive().setVisible(true);
        });

        this.sh2.on('pointerdown', () => {
            this.sh2.destroy();
            if(this.timequick>0){
                this.end2.setInteractive().setVisible(true);
            }else{
                this.end1.setInteractive().setVisible(true);
            }
        });

        this.q2.on('pointerdown', () => {
            this.q2.destroy();
            this.q1.destroy();
            this.q3.destroy();
            this.dinner.setInteractive().setVisible(true);
        });

        this.dinner.on('pointerdown', () => {
            this.dinner.destroy();
            if(this.timequick>0){
                this.end2.setInteractive().setVisible(true);
            }else{
                this.end1.setInteractive().setVisible(true);
            }
        });

        this.q3.on('pointerdown', () => {
            this.q3.destroy();
            this.q1.destroy();
            this.q2.destroy();
            this.out.setInteractive().setVisible(true);
        });

        this.out.on('pointerdown', () => {
            this.out.destroy();
            this.yes.setInteractive().setVisible(true);
            this.no.setInteractive().setVisible(true);
        });

        this.yes.on('pointerdown', () => {
            this.yes.destroy();
            this.no.destroy();
            this.like.setInteractive().setVisible(true);
        });

        this.no.on('pointerdown', () => {
            this.yes.destroy();
            this.no.destroy();
            this.dislike.setInteractive().setVisible(true);
        });

        this.like.on('pointerdown', () => {
            this.like.destroy();
            this.likelikedislike.setInteractive().setVisible(true);
        });

        this.dislike.on('pointerdown', () => {
            this.dislike.destroy();
            this.likelikedislike.setInteractive().setVisible(true);
        });

        this.likedislike.on('pointerdown', () => {
            this.likedislike.destroy();
            if(this.timequick>0){
                this.end2.setInteractive().setVisible(true);
            }else{
                this.end1.setInteractive().setVisible(true);
            }
        });

        this.g1.on('pointerdown', () => {
            this.timequick++;
            this.g1.destroy();
            this.g2.destroy();
            this.showText(this.house1, () => {
                this.c1.setVisible(true).setInteractive();
                this.c2.setVisible(true).setInteractive();
                if(colorgatherer.choices.includes("fu")){
                    this.c3.setVisible(true).setInteractive();
                }

            });
        });
        
        this.g2.on('pointerdown', () => {
            this.g1.destroy();
            this.g2.destroy();
            this.showText(this.house1, () => {
                this.c1.setVisible(true).setInteractive();
                this.c2.setVisible(true).setInteractive();
                if(colorgatherer.choices.includes("fu")){
                    this.c3.setVisible(true).setInteractive();
                }

            });
        });

        
        this.c1.on('pointerdown', () => {
            this.c1.destroy();
            this.c2.destroy();
            this.c3.destroy();
            this.showText(this.likel, () => {
                this.t2.setVisible(true).setInteractive();
                if (colorgatherer.choices.includes("or")){
                    this.housebg = this.add.image(640, 320, 'oliv2').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("gr")){
                    this.housebg = this.add.image(640, 320, 'gliv2').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("pr")){
                    this.housebg = this.add.image(640, 320, 'lliv2').setDisplaySize(400, 400);
                }
            });
            
        });

        this.c2.on('pointerdown', () => { 
            this.c1.destroy();
            this.c2.destroy();
            this.c3.destroy(); 
            this.showText(this.surel, () => {
                this.t2.setVisible(true).setInteractive();
                if (colorgatherer.choices.includes("or")){
                    this.housebg = this.add.image(640, 320, 'oliv2').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("gr")){
                    this.housebg = this.add.image(640, 320, 'gliv2').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("pr")){
                    this.housebg = this.add.image(640, 320, 'lliv2').setDisplaySize(400, 400);
                }
            });           
        });

        this.c3.on('pointerdown', () => {
            this.c1.destroy();
            this.c2.destroy();
            this.c3.destroy();
            this.showText(this.integr, () => {
                this.t2.setVisible(true).setInteractive();
                if (colorgatherer.choices.includes("or")){
                    this.housebg = this.add.image(640, 320, 'oliv2').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("gr")){
                    this.housebg = this.add.image(640, 320, 'gliv2').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("pr")){
                    this.housebg = this.add.image(640, 320, 'lliv2').setDisplaySize(400, 400);
                }
            });
        });



        this.end1.on('pointerdown', () => {
            this.end1.destroy();
            this.end2.destroy();
            this.end.setVisible(true).setInteractive();
        });
        this.end2.on('pointerdown', () => {
            this.end1.destroy();
            this.end2.destroy();
            this.end.setVisible(true).setInteractive();
        });
        this.end.on('pointerdown', () => {
            this.end.destroy();
            this.scene.start('adult1'); //change to adult
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
