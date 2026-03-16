export class playground extends Phaser.Scene {

    constructor() {
        super('playground');   // <-- this is the scene key
        this.array1 = [];
        this.array2 = [];
        this.array3 = [];
        this.array4 = [];
        this.green2 = [];
        this.orange2 = [];
        this.orange2loss = [];
        this.purple2 = [];
    }

    preload() {    
        
        this.load.image('black', '../assets/plainblack.gif');
        this.load.spritesheet('bg6', '../assets/blueredkiddo/playgroundsprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });
        this.load.spritesheet('green', '../assets/blueredkiddo/playground/green2sprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });
        this.load.spritesheet('orange', '../assets/blueredkiddo/playground/orangesprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });
        this.load.spritesheet('purple', '../assets/blueredkiddo/playground/lilacsprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });



        this.load.spritesheet('gm1', '../assets/blueredkiddo/playground/littlemovesprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });
        this.load.spritesheet('gm2', '../assets/blueredkiddo/playground/midmovesprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });
        this.load.spritesheet('gm3', '../assets/blueredkiddo/playground/winmovesprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });


        this.load.spritesheet('opick', '../assets/blueredkiddo/playground/pickantsprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });
        this.load.spritesheet('ofirst', '../assets/blueredkiddo/playground/firstwinssprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });
        this.load.spritesheet('osec', '../assets/blueredkiddo/playground/secwissprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });
        this.load.spritesheet('othird', '../assets/blueredkiddo/playground/thirdwinssprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });



        this.load.spritesheet('ppick', '../assets/blueredkiddo/playground/pickleaf.gif', {
            frameWidth: 1024,
            frameHeight: 1024
        });
        this.load.spritesheet('prightleaf', '../assets/blueredkiddo/playground/rightleafsprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });
        this.load.spritesheet('pleftleaf', '../assets/blueredkiddo/playground/leftleafsprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });
        
        

        this.load.text('plintro', '../assets/txts/kid/playgroundintro.txt');

        this.load.text('g1', '../assets/txts/kid/green.txt'); 
        this.load.text('p1', '../assets/txts/kid/purple.txt');
        this.load.text('o1', '../assets/txts/kid/orange.txt');

        this.load.text('g2', '../assets/txts/kid/green2.txt'); 
        this.load.text('p2', '../assets/txts/kid/purple2.txt');
        this.load.text('o2w', '../assets/txts/kid/orange2.txt');
        this.load.text('o2l', '../assets/txts/kid/orange2loss.txt');
        
         
    }   

    create() {

        this.textIndex = 0;
        this.sccnt = 0;
        let clickCount = 0;
        let clickCount2 = 0;

        this.array1 = this.loadArr('plintro');
        this.array2 = this.loadArr('g1');
        this.array3 = this.loadArr('o1');
        this.array4 = this.loadArr('p1');
        this.green2 = this.loadArr('g2');
        this.orange2 = this.loadArr('o2w');
        this.orange2loss = this.loadArr('o2l');   
        this.purple2 = this.loadArr('p2');
         
        this.anims.create({ //for sprite animation
            key: 'spin3',
            frames: this.anims.generateFrameNumbers('bg6', {
                start: 0,
                end: 5 
            }),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({ //for sprite animation
            key: 'sping',
            frames: this.anims.generateFrameNumbers('green', {
                start: 0,
                end: 2 
            }),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({ //for sprite animation
            key: 'spino',
            frames: this.anims.generateFrameNumbers('orange', {
                start: 0,
                end: 1 
            }),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({ //for sprite animation
            key: 'spinp',
            frames: this.anims.generateFrameNumbers('purple', {
                start: 0,
                end: 3
            }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({ //for sprite animation
            key: 'spingm1',
            frames: this.anims.generateFrameNumbers('gm1', {
                start: 0,
                end: 1
            }),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({ //for sprite animation
            key: 'spingm2',
            frames: this.anims.generateFrameNumbers('gm2', {
                start: 0,
                end: 3
            }),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({ //for sprite animation
            key: 'spingm3',
            frames: this.anims.generateFrameNumbers('gm3', {
                start: 0,
                end: 10
            }),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({ //for sprite animation
            key: 'spinopick',
            frames: this.anims.generateFrameNumbers('opick', {
                start: 0,
                end: 1
            }),
            frameRate: 2,
            repeat: -1
        });
        this.anims.create({ //for sprite animation
            key: 'spinofirst',
            frames: this.anims.generateFrameNumbers('ofirst', {
                start: 0,
                end: 9
            }),
            frameRate: 2,
            repeat: -1 //
        });
        this.anims.create({ //for sprite animation
            key: 'spinosec',
            frames: this.anims.generateFrameNumbers('osec', {
                start: 0,
                end: 9
            }),
            frameRate: 2,
            repeat: -1 //
        });
        this.anims.create({ //for sprite animation
            key: 'spinothird',
            frames: this.anims.generateFrameNumbers('othird', {
                start: 0,
                end: 9
            }),
            frameRate: 2,
            repeat: -1 //
        });

        this.anims.create({ //for sprite animation
            key: 'spinpright',
            frames: this.anims.generateFrameNumbers('prightleaf', {
                start: 0,
                end: 1
            }),
            frameRate: 2,
            repeat: -1 //
        });
        this.anims.create({ //for sprite animation
            key: 'spinpleft',
            frames: this.anims.generateFrameNumbers('pleftleaf', {
                start: 0,
                end: 1
            }),
            frameRate: 2,
            repeat: -1 //
        });

        this.spinner = this.add.sprite(640, 320, 'bg6').setOrigin(0.5).setScale(0.5);

        this.spinner.play('spin3');

        this.spinner.setDisplaySize(400, 400);

        this.c1 = this.add.text(640, 600, "continue", {
                fontSize: '24px',
                color: '#ffffff'
        }).setOrigin(0.5).setVisible(false);

        this.c2 = this.add.text(640, 600, "continue", {
                fontSize: '24px',
                color: '#ffffff'
        }).setOrigin(0.5).setVisible(false);
        
        this.c3 = this.add.text(640, 600, "continue", {
                fontSize: '24px',
                color: '#ffffff'
        }).setOrigin(0.5).setVisible(false);

        this.r = this.add.text(640, 600, "ready!", {
                fontSize: '24px',
                color: '#ffffff'
        }).setOrigin(0.5).setVisible(false);
        this.r2 = this.add.text(640, 600, "ready!", {
                fontSize: '24px',
                color: '#ffffff'
        }).setOrigin(0.5).setVisible(false);

        

        const greenZone = this.add.zone(600, 250, 70, 90) //w,h,sw,sh
            .setOrigin(0.5);
        const orangeZone = this.add.zone(470, 400, 70, 90) //w,h,sw,sh
            .setOrigin(0.5);
        const purpleZone = this.add.zone(750, 370, 70, 90) //w,h,sw,sh
            .setOrigin(0.5);

        
        const leftleafZone = this.add.zone(530, 330, 130, 160) //w,h,sw,sh
            .setOrigin(0.5);
        const rightleafZone = this.add.zone(730, 330, 130, 160) //w,h,sw,sh
            .setOrigin(0.5);

        const firstoZone = this.add.zone(520, 300, 120, 190) //w,h,sw,sh
            .setOrigin(0.5);
        const secoZone = this.add.zone(635, 410, 80, 160) //w,h,sw,sh
            .setOrigin(0.5);
        const thirdoZone = this.add.zone(750, 300, 120, 190) //w,h,sw,sh
            .setOrigin(0.5); 

        const greenerZone = this.add.zone(640, 300, 400, 400) //w,h,sw,sh
            .setOrigin(0.5);        

        this.gmt = '';
        
        greenZone.on('pointerdown', () => {
            this.spinner.play('sping');
            this.t.destroy();
            greenZone.destroy();
            orangeZone.destroy();
            purpleZone.destroy();
            this.showText(this.array2, () => {
                this.spinner.play('spingm1');
                this.gmt = this.add.text(640, 100, 'click on screen as many times as you can! (at least 15 times)', { fontSize: '16px', fill: '#ffffff' }).setOrigin(0.5);
                greenerZone.setInteractive();
            });

        });

        orangeZone.on('pointerdown', () => {
            this.spinner.play('spino');
            this.t.destroy();
            greenZone.destroy();
            orangeZone.destroy();
            purpleZone.destroy();
            this.showText(this.array3, () => {
                this.spinner.play('spinopick');
                firstoZone.setInteractive(({ useHandCursor: true }));
                secoZone.setInteractive(({ useHandCursor: true }));
                thirdoZone.setInteractive(({ useHandCursor: true }));
            });
            

        });
        purpleZone.on('pointerdown', () => {
            
            this.t.destroy();
            greenZone.destroy();
            orangeZone.destroy();
            purpleZone.destroy();
            this.spinner.play('spinp');
            this.showText(this.array4, () => {
                this.bg = this.add.image(640,320,'ppick').setDisplaySize(400, 400);
                leftleafZone.setInteractive(({ useHandCursor: true }));
                rightleafZone.setInteractive(({ useHandCursor: true }));
                
            });

        });
        this.ltxt1 = "";
        this.ltxt2 = "";
        leftleafZone.on('pointerdown', () => {
            this.spinner.play('spinpleft');
            rightleafZone.destroy();
            this.bg.destroy();
            this.ltxt1 = this.add.text(640, 100, 'you will face a future that is nothing but terror and madness.\n You are going to be scared and feel like no hope is there for anything.', { fontSize: '16px', fill: '#ffffff' }).setOrigin(0.5);
            this.ltxt2 = this.add.text(640, 500,'But something is going to happen that you will never forget, maybe good maybe bad, \n there is no way to tell from now. Sun under behind clouds. \n Also there will be a lot of lettuce', { fontSize: '16px', fill: '#ffffff' }).setOrigin(0.5);
            this.c1.setVisible(true).setInteractive();
        });

        rightleafZone.on('pointerdown', () => {
            this.spinner.play('spinpright');
            leftleafZone.destroy();
            this.bg.destroy();
            this.ltxt1 = this.add.text(640, 100, 'yay everything is going to go so right but you are never going to be able to understand what true joy feels like.', { fontSize: '16px', fill: '#ffffff' }).setOrigin(0.5);
            this.ltxt2 = this.add.text(640, 500,'Moon on a hollow sky. Also there will be a lot of lettuce', { fontSize: '16px', fill: '#ffffff' }).setOrigin(0.5);
            this.c1.setVisible(true).setInteractive();
        });
        this.first = 0;
        this.sec = 0;
        this.first = 0;
        firstoZone.on('pointerdown', () => {
            this.first =1;
            firstoZone.destroy();
            this.add.text(520, 200, "nope, mine", {
            fontSize: '24px',
            color: '#cd780f'
            }).setOrigin(0.5);
        });
        this.ocl = '';
        secoZone.on('pointerdown', () => {
            //this.spinner.play('osec');
            this.sec = 1;
            firstoZone.destroy();
            secoZone.destroy();
            thirdoZone.destroy();
            this.bg = this.add.image(640,320,'black').setDisplaySize(400, 400).setDepth(0);
            this.ocl = this.add.text(640, 80, 'click on the button to root for your ant!!', { fontSize: '16px', fill: '#ffffff' }).setOrigin(0.5);
            button.setInteractive().setVisible(true);
            this.r.setVisible(true).setInteractive();
        });
        thirdoZone.on('pointerdown', () => {
            //this.spinner.play('othird');
            this.third = 1;
            firstoZone.destroy();
            secoZone.destroy();
            thirdoZone.destroy();
            this.bg = this.add.image(640,320,'black').setDisplaySize(400, 400);
            this.add.text(640, 80, 'click on the button to root for your ant!!', { fontSize: '16px', fill: '#ffffff' }).setOrigin(0.5);
            button.setInteractive().setVisible(true);
            this.r.setVisible(true).setInteractive();
            
        });

        thirdoZone.on('pointerdown', () => {
            //this.spinner.play('othird');
            firstoZone.destroy();
            secoZone.destroy();
            thirdoZone.destroy();
            this.bg = this.add.image(640,320,'black').setDisplaySize(400, 400);
            this.add.text(640, 80, 'click on the button to root for your ant!!', { fontSize: '16px', fill: '#ffffff' }).setOrigin(0.5);
            button.setInteractive().setVisible(true);
            if(clickCount>10){
                console.log('he');
            }else{
                console.log('ha');
            }
            this.r.setVisible(true).setInteractive();
            
        });

        greenerZone.on('pointerdown', () => {
            //this.spinner.play('othird');
            clickCount2++;
            console.log('aaaaaaa');
            this.r2.setVisible(true).setInteractive();
        });

        
        

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

        this.t = this.add.text(640, 100, "pick someone!", {
                fontSize: '24px',
                color: '#ffffff'
                }).setOrigin(0.5).setVisible(false);

        this.r.on('pointerdown', () => {
            this.r.destroy()
            this.bg.destroy();
            button.destroy();
            this.ocl.destroy();
            if(clickCount>=10){
                this.r.destroy();
                this.c2.setVisible(true).setInteractive();
                if(this.sec==1){
                    this.spinner.play('spinosec');
                }else{
                    this.spinner.play('spinothird');
                }
                    //speech array
            }else{
                this.spinner.play('spinofirst');
                this.c2.setVisible(true).setInteractive();
                
            }
        });
        this.keep = this.add.text(640, 80, 'not enough! keep trying', { fontSize: '16px', fill: '#88f762' }).setVisible(false);
        this.r2.on('pointerdown', () => {
            //this.spinner.play('othird');
            //while((clickCount2<10)){ // o theos k h psyxh tou
            console.log('???????');
                if(clickCount2>=15){
                    this.r2.destroy();
                    this.gmt.destroy();
                    this.keep.destroy();
                    this.spinner.play('spingm3');
                    //speech array
                    this.showText(this.green2, () => {
                        //change scene to kidscene2
                        this.scene.start('kidscene2');
                    });
                }else{
                    this.spinner.play('spingm2');
                    this.keep.setVisible(true);
                }  
            //}
            
        });
            
        this.c1.on('pointerdown', () => {
            //this.ltxt1.destroy();
            //this.ltxt2.destroy();
            this.ltxt1.setVisible(false);
            this.ltxt2.setVisible(false);
            this.c1.destroy();
            this.spinner.play('spinp');
            this.showText(this.purple2, () => {
                //change scene to kidscene2
                this.scene.start('kidscene2');
            });
        });

        this.c2.on('pointerdown', () => {
            //this.ltxt1.destroy();
            //this.ltxt2.destroy();
            this.c2.destroy();
            this.spinner.play('spino');
            if(this.first==1){
                this.showText(this.orange2loss, () => {
                    //change scene to kidscene2
                    this.scene.start('kidscene2');
                });
            }else{
                this.showText(this.orange2, () => {   
                    //change scene to kidscene2
                    this.scene.start('kidscene2');
                });
            }
            
        });

        this.showText(this.array1, () => {

            this.t.setVisible(true);

            greenZone.setInteractive(({ useHandCursor: true }));
            orangeZone.setInteractive(({ useHandCursor: true }));
            purpleZone.setInteractive(({ useHandCursor: true }));
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

        

        let button = this.add.rectangle(600, 400, 200, 50, 0xf762f7)
            .on('pointerdown', () => {
                clickCount++;
                console.log('cccc:', clickCount);
            }).setVisible(false).setOrigin(0.5).setDepth(10);
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
