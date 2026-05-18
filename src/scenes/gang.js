import { colorgatherer } from './colorgatherer.js';

export class gang extends Phaser.Scene {

    constructor() {
        super('gang');   // <-- this is the scene key
        this.gang = []; //maybe useles?
    }

    //potential colours gathered: or, pr, gr

    //if statement: if (colorgatherer.choices.includes("or")){
    //     console.log("HOE");
    // }

    //need to: add text choices, spritesheets instead of photos, do choosing areas (2)

    preload() {
        
        this.load.image('black', '../assets/plainblack.gif');
        
        this.load.image('gstore','../assets/blueredyoung/pgreen/gschoolyard.gif');
        
        this.load.image('ostore','../assets/blueredyoung/porange/oschoolyard.gif');

        this.load.image('lstore','../assets/blueredyoung/plilac/pschoolyard.gif');


        this.load.image('ginitgang','../assets/blueredyoung/pgreen/threeintrogr.gif');

        this.load.image('oinitgang','../assets/blueredyoung/porange/threeintroor.gif');

        this.load.image('linitgang','../assets/blueredyoung/plilac/threeintrol.gif');


        this.load.image('ginstore','../assets/blueredyoung/pgreen/storegangg.gif');

        this.load.image('oinstore','../assets/blueredyoung/porange/storegango.gif');

        this.load.image('linstore','../assets/blueredyoung/plilac/storegangl.gif');


        this.load.image('gbrown','../assets/blueredyoung/pgreen/brownalone.gif');

        this.load.image('obrown','../assets/blueredyoung/porange/brownalone.gif');

        this.load.image('lbrown','../assets/blueredyoung/plilac/brownalone.gif');

        this.load.spritesheet('gstoresprite', '../assets/blueredyoung/pgreen/outstore2greensprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        }); //

        this.load.spritesheet('lstoresprite', '../assets/blueredyoung/plilac/outstore2lilacsprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        }); //

        this.load.spritesheet('ostoresprite', '../assets/blueredyoung/porange/outstore2orangsprite.png', {
            frameWidth: 1024,
            frameHeight: 1024
        }); //
        

        this.load.spritesheet('gcat11', '../assets/blueredyoung/pgreen/catpet1g.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });

        this.load.spritesheet('ocat11', '../assets/blueredyoung/porange/catpet1o.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });

        this.load.spritesheet('lcat11', '../assets/blueredyoung/plilac/catpet1l.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });


        this.load.spritesheet('gcat22', '../assets/blueredyoung/pgreen/catpet2g.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });

        this.load.spritesheet('ocat22', '../assets/blueredyoung/porange/catpet2o.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });

        this.load.spritesheet('lcat22', '../assets/blueredyoung/plilac/catpet2l.png', {
            frameWidth: 1024,
            frameHeight: 1024
        });


        this.load.text('gang', '../assets/txts/young/gang.txt');
        this.load.text('gang2', '../assets/txts/young/gang2.txt');
        this.load.text('gang22', '../assets/txts/young/gang22.txt');
    
         
    }   

    create() {

        this.textIndex = 0;
        this.sccnt = 0;
        let clickCount = 0;


        this.gang = this.loadArr('gang');
        this.gang2 = this.loadArr('gang2');
        this.gang22 = this.loadArr('gang22');


        this.anims.create({ //for sprite animation
            key: 'spinoout',
            frames: this.anims.generateFrameNumbers('ostoresprite', {
                start: 0,
                end: 5 
            }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({ //for sprite animation
            key: 'spinlout',
            frames: this.anims.generateFrameNumbers('lstoresprite', {
                start: 0,
                end: 5 
            }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({ //for sprite animation
            key: 'spingout',
            frames: this.anims.generateFrameNumbers('gstoresprite', {
                start: 0,
                end: 5 
            }),
            frameRate: 2,
            repeat: -1
        });


        this.anims.create({ //for sprite animation
            key: 'gcat1',
            frames: this.anims.generateFrameNumbers('gcat11', {
                start: 0,
                end: 6 
            }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({ //for sprite animation
            key: 'ocat1',
            frames: this.anims.generateFrameNumbers('ocat11', {
                start: 0,
                end: 6 
            }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({ //for sprite animation
            key: 'lcat1',
            frames: this.anims.generateFrameNumbers('lcat11', {
                start: 0,
                end: 6 
            }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({ //for sprite animation
            key: 'gcat2',
            frames: this.anims.generateFrameNumbers('gcat22', {
                start: 0,
                end: 6 
            }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({ //for sprite animation
            key: 'ocat2',
            frames: this.anims.generateFrameNumbers('ocat22', {
                start: 0,
                end: 6 
            }),
            frameRate: 2,
            repeat: -1
        });

        this.anims.create({ //for sprite animation
            key: 'lcat2',
            frames: this.anims.generateFrameNumbers('lcat2s2', {
                start: 0,
                end: 6 
            }),
            frameRate: 2,
            repeat: -1
        });
        const catZone = this.add.zone(640, 320, 400, 400) //w,h,sw,sh
            .setOrigin(0.5); 
        // const graphics = this.add.graphics();
        // graphics.lineStyle(4, 0x00ff00);
        // graphics.strokeRect(
        //     catZone.x - catZone.width / 2,
        //     catZone.y - catZone.height / 2,
        //     catZone.width,
        //     catZone.height
        // ).setDepth(10);

        
        if (colorgatherer.choices.includes("or")){
            this.gangimg = this.add.image(640, 320, 'oinitgang').setDisplaySize(400, 400);
        }else if(colorgatherer.choices.includes("gr")){
            this.gangimg = this.add.image(640, 320, 'ginitgang').setDisplaySize(400, 400);
        }else if(colorgatherer.choices.includes("pr")){
            this.gangimg = this.add.image(640, 320, 'linitgang').setDisplaySize(400, 400);
        }

        this.c1 = this.add.text(640, 600, "no", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.c2 = this.add.text(640, 650, "uhh sure why not", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.c3 = this.add.text(640, 600, "yes!!", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false); //maybe add a lil icecream sprite thing on c3

        this.c4 = this.add.text(640, 650, "not really thanks", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.c5 = this.add.text(640, 600, "i am a nerd", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.c6 = this.add.text(640, 650, "no a beer is cool", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.c7 = this.add.text(640, 600, "yea", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.c8 = this.add.text(640, 650, "no", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.ready = this.add.text(640, 650, "stop petting", {
                fontSize: '24px',
                color: '#ffffff'
        }).setOrigin(0.5).setVisible(false);

        this.stop = this.add.text(640, 650, "go back to brown", {
                fontSize: '24px',
                color: '#ffffff'
        }).setOrigin(0.5).setVisible(false);

        //texts
        this.init1 = this.add.text(640, 80, "alright we got the ball! Now what?", {
                fontSize: '24px',
                color: '#d5225e'
        }).setOrigin(0.5).setVisible(false);

        this.init2 = this.add.text(640, 80, "well now it's time to hit the mall", {
                fontSize: '24px',
                color: '#22812f'
        }).setOrigin(0.5).setVisible(false);

        this.t1 = this.add.text(640, 80, "I knew you were cool like us, let's jump through the fence and go", {
                fontSize: '24px',
                color: '#c63131'
        }).setOrigin(0.5).setVisible(false);

        this.t2 = this.add.text(640, 80, "cmon you are the one who wanted to get to know us, now you have to join", {
                fontSize: '24px',
                color: '#22812f'
        }).setOrigin(0.5).setVisible(false);

        this.t3 = this.add.text(640, 80, "I mean people already saw you with us and the ball incident so now you have to come help us get the ball back", {
                fontSize: '24px',
                color: '#c63131'
        }).setOrigin(0.5).setVisible(false);

        this.t4 = this.add.text(640, 80, "you'll get to hang out with us too, cmon let's jump through the fence", {
                fontSize: '24px',
                color: '#22812f'
        }).setOrigin(0.5).setVisible(false);

        this.goto = this.add.text(640, 80, "go to mall", {
                fontSize: '24px',
                color: '#ffffff'
        }).setOrigin(0.5).setVisible(false);

        this.t5 = this.add.text(640, 80, "yo this ice cream looks so cool I think I'm gonna get two of these instead, \n pink do you want ice cream instead?", {
                fontSize: '24px',
                color: '#d5225e'
        }).setOrigin(0.5).setVisible(false);

        this.t6 = this.add.text(640, 80, "so I'm thinking of getting a beer for me, care to join me?\n Or will you get the nerdy strawberry juice? I don't suppose you are a nerd", {
                fontSize: '24px',
                color: '#22812f'
        }).setOrigin(0.5).setVisible(false);

        this.t7 = this.add.text(640, 80, "hey look I managed to catch the cat!! Do you wanna pet it pink?", {
                fontSize: '24px',
                color: '#8a5c23'
        }).setOrigin(0.5).setVisible(false); //this one might need to be added in the next scene, not this one

        this.t8 = this.add.text(640, 80, "did this cat just piss on you", {
                fontSize: '24px',
                color: '#22812f'
        }).setOrigin(0.5).setVisible(false);

        this.t9 = this.add.text(640, 80, "heh. Just kidding. Lets hit the road guys", {
                fontSize: '24px',
                color: '#22812f'
        }).setOrigin(0.5).setVisible(false);

        this.c1.on('pointerdown', () => {
            //this.ltxt1.destroy();
            //this.ltxt2.destroy();
            this.c1.destroy();
            this.c2.destroy();
            this.t2.setVisible(true).setInteractive();
            
        });

        this.c2.on('pointerdown', () => {
            //this.ltxt1.destroy();
            //this.ltxt2.destroy();
            this.c1.destroy();
            this.c2.destroy();
            this.t1.setVisible(true).setInteractive();
            
        });

        this.c3.on('pointerdown', () => {
            //this.ltxt1.destroy();
            //this.ltxt2.destroy();
            this.t5.destroy();
            this.c3.destroy();
            this.c4.destroy();
            this.t6.setVisible(true);//.setInteractive();
            this.c5.setVisible(true).setInteractive();
            this.c6.setVisible(true).setInteractive();
            
        });

        this.c4.on('pointerdown', () => {
            //this.ltxt1.destroy();
            //this.ltxt2.destroy();
            this.t5.destroy();
            this.c3.destroy();
            this.c4.destroy();
            this.t6.setVisible(true);//.setInteractive();
            this.c5.setVisible(true).setInteractive();
            this.c6.setVisible(true).setInteractive();
            
        });

        this.c5.on('pointerdown', () => {
            //this.ltxt1.destroy();
            //this.ltxt2.destroy();
            this.t6.destroy();
            this.c5.destroy();
            this.c6.destroy();
            //this.scene.start('defaultnone');

            if (colorgatherer.choices.includes("or")){
                this.gangimg = this.add.image(640, 340, 'black').setDisplaySize(400, 400).setOrigin(0.5);
                    
            }else if(colorgatherer.choices.includes("gr")){    
                this.gangimg = this.add.image(640, 320, 'black').setDisplaySize(400, 400).setOrigin(0.5);
                    
            }else if(colorgatherer.choices.includes("pr")){
                this.gangimg = this.add.image(640, 320, 'black').setDisplaySize(400, 400).setOrigin(0.5);
                    
            }
            this.t7.setVisible(true);//.setInteractive(); //
            this.c7.setVisible(true).setInteractive();
            this.c8.setVisible(true).setInteractive();
            
        });

        this.c6.on('pointerdown', () => {
            this.t6.destroy();
            this.c5.destroy();
            this.c6.destroy();
            //this.scene.start('defaultnone');

            if (colorgatherer.choices.includes("or")){
                this.gangimg = this.add.image(640, 340, 'black').setDisplaySize(400, 400).setOrigin(0.5);
                    
            }else if(colorgatherer.choices.includes("gr")){    
                this.gangimg = this.add.image(640, 320, 'black').setDisplaySize(400, 400).setOrigin(0.5);
                    
            }else if(colorgatherer.choices.includes("pr")){
                this.gangimg = this.add.image(640, 320, 'black').setDisplaySize(400, 400).setOrigin(0.5);
                    
            }
            this.t7.setVisible(true);//.setInteractive(); //
            this.c7.setVisible(true).setInteractive();
            this.c8.setVisible(true).setInteractive();
            //this.scene.start('defaultnone');
            //this.t7.setVisible(true);//.setInteractive(); //
            
        });

        this.c7.on('pointerdown', () => { //yes pet
            //this.ltxt1.destroy();
            //this.ltxt2.destroy();
            this.t7.destroy();
            this.c7.destroy();
            this.c8.destroy();
            if (colorgatherer.choices.includes("or")){
                    //this.gangimg = this.add.image(640, 320, 'oinitgang').setDisplaySize(400, 400);
                    this.spinner = this.add.sprite(640, 320, 'ocat11').setDisplaySize(400, 400).setOrigin(0.5);
                    //this.spinner.play('spinoout');

                }else if(colorgatherer.choices.includes("gr")){
                    //this.gangimg = this.add.image(640, 320, 'ginitgang').setDisplaySize(400, 400);
                    this.spinner = this.add.sprite(640, 320, 'gcat11').setDisplaySize(400, 400).setOrigin(0.5);
                    //this.spinner.play('spingout');
                }else if(colorgatherer.choices.includes("pr")){
                    //this.gangimg = this.add.image(640, 320, 'linitgang').setDisplaySize(400, 400);
                    this.spinner = this.add.sprite(640, 320, 'lcat11').setDisplaySize(400, 400).setOrigin(0.5);
                    //this.spinner.play('spinlout');
            }
            catZone.setInteractive();
            this.ready.setInteractive().setVisible(true);
            //this.t7.setVisible(true);//.setInteractive(); //
            
        });

        this.c8.on('pointerdown', () => { //no pet
            //this.ltxt1.destroy();
            //this.ltxt2.destroy();
            this.t7.destroy();
            this.c7.destroy();
            this.c8.destroy();
            
            if (colorgatherer.choices.includes("or")){ //change black to the other thing you make for brown only
                    this.gangimg = this.add.image(640, 320, 'obrown').setDisplaySize(400, 400).setOrigin(0.5);
                }else if(colorgatherer.choices.includes("gr")){
                    this.gangimg = this.add.image(640, 320, 'gbrown').setDisplaySize(400, 400).setOrigin(0.5);
                    
                }else if(colorgatherer.choices.includes("pr")){
                    this.gangimg = this.add.image(640, 320, 'lbrown').setDisplaySize(400, 400).setOrigin(0.5);
                    
            }
            this.showText(this.gang22, () => {
                if (colorgatherer.choices.includes("or")){
                    //this.gangimg = this.add.image(640, 320, 'oinitgang').setDisplaySize(400, 400);
                    this.spinner = this.add.sprite(640, 320, 'ostoresprite').setOrigin(0.5).setDisplaySize(400, 400);
                    this.spinner.play('spinoout');

                }else if(colorgatherer.choices.includes("gr")){
                    //this.gangimg = this.add.image(640, 320, 'ginitgang').setDisplaySize(400, 400);
                    this.spinner = this.add.sprite(640, 320, 'gstoresprite').setOrigin(0.5).setDisplaySize(400, 400);
                    this.spinner.play('spingout');
                }else if(colorgatherer.choices.includes("pr")){
                    //this.gangimg = this.add.image(640, 320, 'linitgang').setDisplaySize(400, 400);
                    this.spinner = this.add.sprite(640, 320, 'lstoresprite').setOrigin(0.5).setDisplaySize(400, 400);
                    this.spinner.play('spinlout');
                }
                this.t8.setVisible(true).setInteractive();
            });
            
        });

        catZone.on('pointerdown', () => {
            clickCount++;
        });

        this.ready.on('pointerdown', () => {
            this.ready.destroy();
            if(clickCount%2 == 0){
                if (colorgatherer.choices.includes("or")){
                    //this.gangimg = this.add.image(640, 320, 'oinitgang').setDisplaySize(400, 400);
                    //this.spinner = this.add.sprite(640, 320, 'ocat1').setOrigin(0.5);
                    this.spinner.play('ocat1');

                }else if(colorgatherer.choices.includes("gr")){
                    //this.gangimg = this.add.image(640, 320, 'ginitgang').setDisplaySize(400, 400);
                    //this.spinner = this.add.sprite(640, 320, 'gcat1').setOrigin(0.5);
                    this.spinner.play('gcat1');
                }else if(colorgatherer.choices.includes("pr")){
                    //this.gangimg = this.add.image(640, 320, 'linitgang').setDisplaySize(400, 400);
                    //this.spinner = this.add.sprite(640, 320, 'lcat1').setOrigin(0.5);
                    this.spinner.play('lcat1');
                }
            }else{
                //
                if (colorgatherer.choices.includes("or")){
                    //this.gangimg = this.add.image(640, 320, 'oinitgang').setDisplaySize(400, 400);
                    //this.spinner = this.add.sprite(640, 320, 'ocat2').setOrigin(0.5);
                    this.spinner.play('ocat2');

                }else if(colorgatherer.choices.includes("gr")){
                    //this.gangimg = this.add.image(640, 320, 'ginitgang').setDisplaySize(400, 400);
                    //this.spinner = this.add.sprite(640, 320, 'gcat2').setOrigin(0.5);
                    this.spinner.play('gcat2');
                }else if(colorgatherer.choices.includes("pr")){
                    //this.gangimg = this.add.image(640, 320, 'linitgang').setDisplaySize(400, 400);
                    //this.spinner = this.add.sprite(640, 320, 'lcat2').setOrigin(0.5);
                    this.spinner.play('lcat2');
                }
            }
            this.stop.setVisible(true).setInteractive();
        });

        this.stop.on('pointerdown', () => {
            //
            this.stop.destroy();

            if (colorgatherer.choices.includes("or")){ //change black to the other thing you make for brown only
                    this.gangimg = this.add.image(640, 320, 'obrown').setDisplaySize(400, 400).setOrigin(0.5);
                
                }else if(colorgatherer.choices.includes("gr")){
                    this.gangimg = this.add.image(640, 320, 'gbrown').setDisplaySize(400, 400).setOrigin(0.5);
                    
                }else if(colorgatherer.choices.includes("pr")){
                    this.gangimg = this.add.image(640, 320, 'lbrown').setDisplaySize(400, 400).setOrigin(0.5);
                
            }
            this.showText(this.gang22, () => {
                if (colorgatherer.choices.includes("or")){
                    //this.gangimg = this.add.image(640, 320, 'oinitgang').setDisplaySize(400, 400);
                    this.spinner = this.add.sprite(640, 320, 'ostoresprite').setOrigin(0.5).setDisplaySize(400, 400);
                    this.spinner.play('spinoout');

                }else if(colorgatherer.choices.includes("gr")){
                    //this.gangimg = this.add.image(640, 320, 'ginitgang').setDisplaySize(400, 400);
                    this.spinner = this.add.sprite(640, 320, 'gstoresprite').setOrigin(0.5).setDisplaySize(400, 400);
                    this.spinner.play('spingout');

                }else if(colorgatherer.choices.includes("pr")){
                    //this.gangimg = this.add.image(640, 320, 'linitgang').setDisplaySize(400, 400);
                    this.spinner = this.add.sprite(640, 320, 'lstoresprite').setOrigin(0.5).setDisplaySize(400, 400);
                    this.spinner.play('spinlout');
                }
                this.t8.setVisible(true).setInteractive();
            });
        });

        this.t1.on('pointerdown', () => {
            this.t1.destroy();
            this.t4.setVisible(true).setInteractive();
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
            this.goto.setVisible(true).setInteractive();
            
        });

        this.t8.on('pointerdown', () => {
            this.t8.destroy();
            this.t9.setVisible(true).setInteractive();
            
        });

        this.t9.on('pointerdown', () => {
            this.t9.destroy();
            this.scene.start('playground2'); //will have to be the playground2 one
        });

        this.init1.on('pointerdown', () => {
            this.init1.destroy();
            this.init2.setVisible(true).setInteractive();
            
        });

        this.init2.on('pointerdown', () => {
            this.init2.destroy();

            if (colorgatherer.choices.includes("or")){
                //this.gangimg = this.add.image(640, 320, 'oinitgang').setDisplaySize(400, 400);
                this.spinner = this.add.sprite(640, 320, 'ostoresprite').setOrigin(0.5).setDisplaySize(400, 400);
                this.spinner.play('spinoout');

            }else if(colorgatherer.choices.includes("gr")){
                //this.gangimg = this.add.image(640, 320, 'ginitgang').setDisplaySize(400, 400);
                this.spinner = this.add.sprite(640, 320, 'gstoresprite').setOrigin(0.5).setDisplaySize(400, 400);
                this.spinner.play('spingout');
            }else if(colorgatherer.choices.includes("pr")){
                //this.gangimg = this.add.image(640, 320, 'linitgang').setDisplaySize(400, 400);
                this.spinner = this.add.sprite(640, 320, 'lstoresprite').setOrigin(0.5).setDisplaySize(400, 400);
                this.spinner.play('spinlout');
            }
            this.showText(this.gang2, () => { // here is the third change on the inside of the shop, must add later
                this.t5.setVisible(true);

                if (colorgatherer.choices.includes("or")){
                    this.gangimg = this.add.image(640, 320, 'oinstore').setDisplaySize(400, 400).setOrigin(0.5);
                    

                }else if(colorgatherer.choices.includes("gr")){
                    this.gangimg = this.add.image(640, 320, 'ginstore').setDisplaySize(400, 400).setOrigin(0.5);
                    
                }else if(colorgatherer.choices.includes("pr")){
                    this.gangimg = this.add.image(640, 320, 'linstore').setDisplaySize(400, 400).setOrigin(0.5);
                    
                }

                this.c3.setVisible(true).setInteractive();
                this.c4.setVisible(true).setInteractive();
            });

            
        });

        this.goto.on('pointerdown', () => {
            this.goto.destroy();

            //this.scene.start('defaultnone'); //change into next text and sprite
            this.gangimg = this.add.image(640, 320, 'black').setDisplaySize(400, 400).setOrigin(0.5);

            this.init1.setVisible(true).setInteractive();


        });


        this.dialogueText = this.add.text(640, 600, "", {
            fontSize: '24px',
            color: '#ffffff',
            wordWrap: { width: 500 }
        }).setOrigin(0.5).setInteractive();

        this.showText(this.gang, () => {
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


        this.dialogueText.setPosition(640, 80).setDepth(1000); //
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
