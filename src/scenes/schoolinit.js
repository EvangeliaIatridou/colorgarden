import { colorgatherer } from './colorgatherer.js';

export class schoolinit extends Phaser.Scene {

    constructor() {
        super('schoolinit');   // <-- this is the scene key
        this.scinit = [];
    }

    //potential colours gathered: or, pr, gr

    //if statement: if (colorgatherer.choices.includes("or")){
    //     console.log("HOE");
    // }

    //need to: add text choices, spritesheets instead of photos, do choosing areas (2)

    preload() {    
        
        this.load.image('black', '../assets/plainblack.gif');
        
        this.load.image('gyard','../assets/blueredyoung/pgreen/gschoolyard.gif');

        this.load.image('lyard','../assets/blueredyoung/plilac/pschoolyard.gif');

        this.load.image('oyard','../assets/blueredyoung/porange/oschoolyard.gif');
        //need to reimport as spritesheets, need to define choice spaces, delete useless

        this.load.spritesheet('gyardsprite', '../assets/blueredyoung/pgreen/gschoolyardsprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        }); //

        this.load.spritesheet('lyardsprite', '../assets/blueredyoung/plilac/pschoolyardsprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        }); //

        this.load.spritesheet('oyardsprite', '../assets/blueredyoung/porange/oschoolyardsprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        }); //
        
        
        this.load.text('scinit', '../assets/txts/young/schoolinit.txt');
        
    
         
    }   

    create() {

        this.textIndex = 0;
        this.sccnt = 0;

        //const schoolimg = this.add.image(640, 320, 'lbed').setDisplaySize(400, 400);
        //this.add.image(640, 320, 'lbed');
        // let clickCount = 0;
        // let clickCount2 = 0;

        this.scinit = this.loadArr('scinit');


        this.anims.create({ //for sprite animation
            key: 'spinoyard',
            frames: this.anims.generateFrameNumbers('oyardsprite', {
                start: 0,
                end: 5 
            }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({ //for sprite animation
            key: 'spinlyard',
            frames: this.anims.generateFrameNumbers('lyardsprite', {
                start: 0,
                end: 5 
            }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({ //for sprite animation
            key: 'spingyard',
            frames: this.anims.generateFrameNumbers('gyardsprite', {
                start: 0,
                end: 5 
            }),
            frameRate: 2,
            repeat: -1
        });

    
        if (colorgatherer.choices.includes("or")){
            this.spinner = this.add.sprite(640, 320, 'oyardsprite').setOrigin(0.5).setScale(0.4);
            this.spinner.play('spinoyard');
            //this.schoolimg = this.add.image(640, 320, 'oyard').setDisplaySize(400, 400);
        }else if(colorgatherer.choices.includes("gr")){
            this.spinner = this.add.sprite(640, 320, 'gyardsprite').setOrigin(0.5).setScale(0.4);
            this.spinner.play('spingyard');
            //this.schoolimg = this.add.image(640, 320, 'gyard').setDisplaySize(400, 400);
        }else if(colorgatherer.choices.includes("pr")){
            this.spinner = this.add.sprite(640, 320, 'lyardsprite').setOrigin(0.5).setScale(0.4);
            this.spinner.play('spinlyard');
            //this.schoolimg = this.add.image(640, 320, 'lyard').setDisplaySize(400, 400);
        }

        this.c1 = this.add.text(640, 600, "can't I go back to the playground", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.c2 = this.add.text(640, 650, "what is this new color..", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.t1 = this.add.text(640, 80, "well, there is always a way, it's not like it's closed forever. You'll just do other things than play around with soil or the swing", {
                fontSize: '24px',
                color: '#c63131',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.t2 = this.add.text(640, 80, "it's.. part of growing up. They grow up so fast!! I cannot believe it you were a little kid like a minute ago.. (literally)", {
                fontSize: '24px',
                color: '#3131c6',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.t3 = this.add.text(640, 80, "cmon blue, let's let the kid have its own little adventure, we have to get going finally", {
                fontSize: '24px',
                color: '#c63131',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.t4 = this.add.text(640, 80, "alright! Off you go now, we will miss you but have fun!!", {
                fontSize: '24px',
                color: '#3131c6'
        }).setOrigin(0.5).setVisible(false);

        this.pick = this.add.text(640, 80, "pick who to hang out with!", {
                fontSize: '24px',
                color: '#ffffff'
        }).setOrigin(0.5).setVisible(false);

        this.c1.on('pointerdown', () => {
            //this.ltxt1.destroy();
            //this.ltxt2.destroy();
            this.c1.destroy();
            this.c2.destroy();
            this.t1.setVisible(true).setInteractive();
            
        });

        this.c2.on('pointerdown', () => {
            //this.ltxt1.destroy();
            //this.ltxt2.destroy();
            this.c1.destroy();
            this.c2.destroy();
            this.t2.setVisible(true).setInteractive();
            
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
            this.t4.destroy();
            this.pick.setVisible(true).setInteractive();
            classZone.setInteractive({ useHandCursor: true });
            gangZone.setInteractive({ useHandCursor: true });
            
        });

        
         
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

        // this.t1 = this.add.text(640, 100, "b: wake up! It's your first day at your school today you don't wanna be late!", {
        //         fontSize: '24px',
        //         color: '#3131c6's
        // }).setOrigin(0.5).setVisible(true);

        // this.t2 = this.add.text(640, 100, "r: so, how do you feel about being so grown now?", {
        //         fontSize: '24px',
        //         color: '#c63131'
        // }).setOrigin(0.5).setVisible(false);
        
        const gangZone = this.add.zone(530, 370, 150, 150) //w,h,sw,sh
            .setOrigin(0.5);
        
        const classZone = this.add.zone(760, 410, 90, 140) //w,h,sw,sh
            .setOrigin(0.5);
       
        gangZone.on('pointerdown', () => { //add push
            colorgatherer.choices.push("fbg");
            this.pick.destroy();
            this.scene.start('gang'); //gang scene

        });

        classZone.on('pointerdown', () => { //add push
            colorgatherer.choices.push("ycl");
            this.pick.destroy();
            this.scene.start('yellowcyan'); //yellowcyan scene
        });


        // const graphics = this.add.graphics();
        // graphics.lineStyle(4, 0x00ff00);
        // graphics.strokeRect(
        //     gangZone.x - gangZone.width / 2,
        //     gangZone.y - gangZone.height / 2,
        //     gangZone.width,
        //     gangZone.height
        // ).setDepth(10);
        // graphics.strokeRect(
        //     classZone.x - classZone.width / 2,
        //     classZone.y - classZone.height / 2,
        //     classZone.width,
        //     classZone.height
        // ).setDepth(10);
        

        this.dialogueText = this.add.text(640, 600, "", {
            fontSize: '24px',
            color: '#ffffff',
            wordWrap: { width: 500 }
        }).setOrigin(0.5).setInteractive();

        this.showText(this.scinit, () => {
            //setInteractive zones when the other txts are done with
            this.c1.setVisible(true).setInteractive();
            this.c2.setVisible(true).setInteractive();
            //really is for schoolinit or could add an intermid scene for the road or whatever
        });


        // this.c3.on('pointerdown', () => {
        //     //this.spinner.play('othird');
        //     console.log('hehe');
        //     this.t2.destroy();
        //     this.c3.destroy();
        //     this.c4.destroy();
        //             //speech array
        //     this.showText(this.houseinit, () => {
        //         this.scene.start('defaultnone'); //really is for schoolinit or could add an intermid scene for the road or whatever
        //     });     
            
        // });

        // this.c4.on('pointerdown', () => {
        //     //this.spinner.play('othird');
        //     console.log('hoho');
        //     this.t2.destroy();
        //     this.c3.destroy();
        //     this.c4.destroy();
        //             //speech array
        //     this.showText(this.houseinit, () => {
        //         this.scene.start('defaultnone'); //really is for schoolinit or could add an intermid scene for the road or whatever
        //     });     
            
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
