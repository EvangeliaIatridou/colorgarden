import { colorgatherer, buildkey, addBackground } from './colorgatherer.js';

export class adult2 extends Phaser.Scene {

    constructor() {
        super('adult2');   // <-- this is the scene key
        this.house1 = [];
        this.dinner = [];
        this.fridge = false;
        this.drawer = false;
        this.drawerZone = "";
        this.fridgeZone = "";
    }

    //potential colours gathered: or, pr, gr

    //if statement: if (colorgatherer.choices.includes("or")){
    //     console.log("HOE");
    // }

    preload() {    

        const colorkey = buildkey();
        console.log(colorkey);

        const kitchenkey = 'kitchen1.gif'.replace('.gif', colorkey);
        this.load.image(kitchenkey, `../assets/blueredadult/${colorkey}/kitchen1.gif`);

        const pnglist = [
            'kittychasesprite.png',
            'kittygreetsprite.png',
            'kittymeowsprite.png',
            'kittynosesprite.png'
        ];

        const giflist = [
            'bowlempty.gif','bowlfull.gif','bowlsemi.gif',
            'dinnercolors.gif','dinnerserved.gif',
            'drawerempty.gif','drawerfull.gif','drawersugar.gif',
            'fridge.gif','fridgecheese.gif','fridgecheesemilk.gif','fridgeempty.gif',
            'kittyeat.gif','kittyundertable.gif'

        ];

        giflist.forEach(file => {
            // remove extension for the key
            const key = file.replace('.gif', colorkey); //replace with or,l,gr

            this.load.image(key, `../assets/blueredadult/${colorkey}/hometasks/${file}`);
            
        });

        pnglist.forEach(file => {
            // remove extension for the key
            const key = file.replace('.png', colorkey); //replace with colorkey (ofbg, etc)

            this.load.spritesheet(key, `../assets/blueredadult/${colorkey}/hometasks/${file}`, {
                frameWidth: 1024,
                frameHeight: 1024
            });

            //console.log(file);
            //console.log(this.textures.exists(key));
        });

        
        this.load.text('intro', '../assets/txts/adult/stayhomeintro.txt');
        this.load.text('dinner', '../assets/txts/adult/dinnerchanges.txt');

    }   

    create() {

        
        this.textIndex = 0;
        this.activityCtr = 0;

        this.house1 = this.loadArr('intro');
        this.dinner = this.loadArr('dinner');

       
        this.anims.create({ //for sprite animation
            key: 'kitgrit',
            frames: this.anims.generateFrameNumbers(addBackground('kittygreetsprite'), {
                start: 0,
                end: 2
            }),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({ //for sprite animation
            key: 'kitmeow',
            frames: this.anims.generateFrameNumbers(addBackground('kittymeowsprite'), {
                start: 0,
                end: 4
            }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({ //for sprite animation
            key: 'kitchase',
            frames: this.anims.generateFrameNumbers(addBackground('kittychasesprite'), {
                start: 0,
                end: 7
            }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({ //for sprite animation
            key: 'kitnose',
            frames: this.anims.generateFrameNumbers(addBackground('kittynosesprite'), {
                start: 0,
                end: 1 
            }),
            frameRate: 2,
            repeat: -1
        });

        this.drawerZone = this.add.zone(650, 270, 140, 70) //w,h,sw,sh
            .setOrigin(0.5);
        this.fridgeZone = this.add.zone(810, 250, 70, 190) //w,h,sw,sh
            .setOrigin(0.5);


        this.t1 = this.add.text(640, 600, "alright found the recipe, now I need to find the ingredients..", { //leads to scene change
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setOrigin(0.5).setVisible(false); //activates fridge and drawer zones, then grabs stuff from each

        this.d1 = this.add.text(640, 600, "take flour", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.d2 = this.add.text(640, 600, "take sugar", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false); //on choice, load hometxt

        this.goback = this.add.text(640, 600, "go back", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.goback2 = this.add.text(640, 600, "go back", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.still = this.add.text(640, 600, "still missing some ingredients...", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);
        
        this.f1 = this.add.text(640, 600, "take eggs", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false); //on choice, load hometxt

        this.f2 = this.add.text(640, 600, "take milk", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.f3 = this.add.text(640, 600, "take cream cheese", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.p1 = this.add.text(640, 600, "ok now it's time to put it all in the bowl I guess", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.p2 = this.add.text(640, 600, "It says put the solid ingredients first..", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);
        
        this.p3 = this.add.text(640, 600, "..and after that put the remaining ingredients..", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.wait1 = this.add.text(640, 600, "Ok now it is ready to mix and put it in the oven", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.wait2 = this.add.text(640, 600, "So now I have to wait for an hour I guess, what to do..", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.k1 = this.add.text(640, 600, "touch fishies nose", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.k2 = this.add.text(640, 650, "give fishie a cream cheese treat", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);
        
        this.k3 = this.add.text(640, 700, "make fishie catch a ball of trash", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.done1 = this.add.text(640, 600, "I think enough time has passed, so I'll take it out and layer it", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);
        
        this.done2 = this.add.text(640, 600, "Fishie we did it! I can't believe it actually turned out so similar!", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);


        this.dialogueText = this.add.text(640, 600, "", {
            fontSize: '24px',
            color: '#ffffff',
            wordWrap: { width: 500 }
        }).setOrigin(0.5).setInteractive();



        this.spinner = this.add.sprite(640, 320, addBackground('kittygreetsprite')).setDisplaySize(400, 400);
        this.spinner.play('kitgrit');
        this.showText(this.house1, () => {
            this.housebg = this.add.image(640, 320, addBackground('kitchen1')).setDisplaySize(400, 400);
            this.t1.setVisible(true).setInteractive();
        }); 

        //this.housebg = this.add.image(640, 320, addBackground('fridge')).setDisplaySize(400, 400);


        this.t1.on('pointerdown', () => {
            this.t1.destroy();
            
            this.fridgeZone.setInteractive(({ useHandCursor: true }));
            this.drawerZone.setInteractive(({ useHandCursor: true }));
            
        });

        this.drawerZone.on('pointerdown', () => {
            
            //drawerZone.destroy();
            this.drawer = true;
            this.fridgeZone.setVisible(false);
            this.drawerZone.setVisible(false);
            this.housebg = this.add.image(640, 320, addBackground('drawerfull')).setDisplaySize(400, 400);
            this.d1.setVisible(true).setInteractive();
            
        });


        this.fridgeZone.on('pointerdown', () => {
            
            //fridgeZone.destroy();
            this.fridge = true;
            this.fridgeZone.setVisible(false);
            this.drawerZone.setVisible(false);
            this.housebg = this.add.image(640, 320, addBackground('fridge')).setDisplaySize(400, 400);
            this.f1.setVisible(true).setInteractive();
            //declare fridge and drawer zones, activate them here
            
        });

        this.f1.on('pointerdown', () => {
            this.f1.destroy();
            this.housebg = this.add.image(640, 320, addBackground('fridgecheesemilk')).setDisplaySize(400, 400);
            this.f2.setVisible(true).setInteractive();
        });

        this.f2.on('pointerdown', () => {
            this.f2.destroy();
            this.housebg = this.add.image(640, 320, addBackground('fridgecheese')).setDisplaySize(400, 400);
            this.f3.setVisible(true).setInteractive();
        });

        this.f3.on('pointerdown', () => {
            this.f3.destroy();
            this.housebg = this.add.image(640, 320, addBackground('fridgeempty')).setDisplaySize(400, 400);
            this.goback.setVisible(true).setInteractive();
            this.drawerZone.setVisible(true);
        });

        this.d1.on('pointerdown', () => {
            this.d1.destroy();
            this.housebg = this.add.image(640, 320, addBackground('drawersugar')).setDisplaySize(400, 400);
            this.d2.setVisible(true).setInteractive();
        });

        this.d2.on('pointerdown', () => {
            this.d2.destroy();
            this.housebg = this.add.image(640, 320, addBackground('drawerempty')).setDisplaySize(400, 400);
            this.goback.setVisible(true).setInteractive();
            this.fridgeZone.setVisible(true);
        });

        this.goback.on('pointerdown', () => {
            this.goback.setVisible(false);
            this.housebg = this.add.image(640, 320, addBackground('kitchen1')).setDisplaySize(400, 400);
            this.checkFinished()
            this.fridgeZone.setInteractive(({ useHandCursor: true }));
            this.drawerZone.setInteractive(({ useHandCursor: true }));
            
            
        });

        this.p1.on('pointerdown', () => {
            this.p1.destroy();
            this.housebg = this.add.image(640, 320, addBackground('bowlsemi')).setDisplaySize(400, 400);
            this.p2.setVisible(true).setInteractive();
            
        });

        this.p2.on('pointerdown', () => {
            this.p2.destroy();
            this.housebg = this.add.image(640, 320, addBackground('bowlfull')).setDisplaySize(400, 400);
            this.p3.setVisible(true).setInteractive();
            
        });

        this.p3.on('pointerdown', () => {
            this.p3.destroy();
            this.wait1.setVisible(true).setInteractive();
            
        });

        this.wait1.on('pointerdown', () => {
            this.wait1.destroy();
            this.wait2.setVisible(true).setInteractive();
            
        });

        this.wait2.on('pointerdown', () => {
            this.wait2.setVisible(false);
            this.spinner = this.add.sprite(640, 320, addBackground('kittymeowsprite')).setDisplaySize(400, 400);
            this.spinner.play('kitmeow');
            this.k1.setVisible(true).setInteractive();
            this.k2.setVisible(true).setInteractive();
            this.k3.setVisible(true).setInteractive();
            
        });

        this.goback2.on('pointerdown', () => {
            this.goback2.setVisible(false);
            this.spinner = this.add.sprite(640, 320, addBackground('kittymeowsprite')).setDisplaySize(400, 400);
            this.spinner.play('kitmeow');
            if(this.checkFinished2()){
                this.done1.setVisible(true).setInteractive();

            }else{
                this.k1.setVisible(true).setInteractive();
                this.k2.setVisible(true).setInteractive();
                this.k3.setVisible(true).setInteractive();
            }
            
            // this.k1.setVisible(true).setInteractive();
            // this.k2.setVisible(true).setInteractive();
            // this.k3.setVisible(true).setInteractive();
            
        });

        this.k1.on('pointerdown', () => {
            this.activityCtr++;
            this.k1.setVisible(false);
            this.k2.setVisible(false);
            this.k3.setVisible(false);
            this.spinner = this.add.sprite(640, 320, addBackground('kittynosesprite')).setDisplaySize(400, 400);
            this.spinner.play('kitnose');
            this.goback2.setVisible(true).setInteractive();
        });

        this.k2.on('pointerdown', () => {
            this.activityCtr++;
            this.k1.setVisible(false);
            this.k2.setVisible(false);
            this.k3.setVisible(false);
            this.housebg = this.add.image(640, 320, addBackground('kittyeat')).setDisplaySize(400, 400);
            this.goback2.setVisible(true).setInteractive();
        });


        this.k3.on('pointerdown', () => {
            this.activityCtr++;
            this.k1.setVisible(false);
            this.k2.setVisible(false);
            this.k3.setVisible(false);
            this.spinner = this.add.sprite(640, 320, addBackground('kittychasesprite')).setDisplaySize(400, 400);
            this.spinner.play('kitchase');
            this.goback2.setVisible(true).setInteractive();
        });

        this.done1.on('pointerdown', () => {
            this.done1.destroy();
            this.housebg = this.add.image(640, 320, addBackground('kittyundertable')).setDisplaySize(400, 400);
            this.done2.setVisible(true).setInteractive();
        });

        this.done2.on('pointerdown', () => {
            this.done2.destroy();
            this.housebg = this.add.image(640, 320, addBackground('dinnercolors')).setDisplaySize(400, 400);
            this.showText(this.dinner, () => {
                this.scene.start('endscene');
            }); 
        });



        // this.spinner = this.add.sprite(640, 320, addBackground('kittygreetsprite')).setDisplaySize(400, 400);
        // this.spinner.play('kitgrit');

        //need to: declare zones for fridge, drawer, flour, sugar, eggs, milk, cheese
        //figure out how to zoom out and still have choices for zone selection (ok if destroy doesnt let interactions after)
        //make the other connections (noted on irl)

    }

    checkFinished() {
        if (this.fridge && this.drawer) {
            console.log("Both zones visited!");
            this.drawerZone.setVisible(false);
            this.fridgeZone.setVisible(false);
            this.p1.setVisible(true).setInteractive();
            this.housebg = this.add.image(640, 320, addBackground('bowlempty')).setDisplaySize(400, 400);
                
        }
    }

    checkFinished2() {
        if (this.activityCtr == 3) {
            console.log("All activities visited!");
            return true;
            //this.done1.setVisible(true).setInteractive();
                
        }else{
            return false;
        }
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
