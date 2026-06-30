import { colorgatherer } from './colorgatherer.js';

export class classroom extends Phaser.Scene {

    constructor() {
        super('classroom');   // <-- this is the scene key
    }

    //potential colours gathered: or, pr, gr

    //if statement: if (colorgatherer.choices.includes("or")){
    //     console.log("HOE");
    // }

    preload() { //check preload, change colors on text, erase parts from text when done, logic

        const drawingList = [
            'house.gif',
            'housecar.gif',
            'housecardino.gif',
            'housechicken.gif',
            'housechickendino.gif',
            'housedino.gif',
            'tree.gif',
            'treebutterfly.gif',
            'treefence.gif',
            'treefencebutterfly.gif',
            'treewolf.gif',
            'treewolfbutterfly.gif'
        ];

        drawingList.forEach(file => {
            // remove extension for the key
            const key = file.replace('.gif', 'gr'); //replace with or,l,gr

            this.load.image(key, `../assets/blueredyoung/pgreen/greendraw/${file}`);
            
        });

        drawingList.forEach(file => {
            // remove extension for the key
            const key = file.replace('.gif', 'l');

            this.load.image(key, `../assets/blueredyoung/plilac/lilacdraw/${file}`);
        });

        drawingList.forEach(file => {
            // remove extension for the key
            const key = file.replace('.gif', 'or');

            this.load.image(key, `../assets/blueredyoung/porange/orangdraw/${file}`);
        });


        //change the loadings, first do the gif size conversion
        this.load.image('black', '../assets/plainblack.gif');
        
        this.load.image('gclass','../assets/blueredyoung/pgreen/classroom1gr.gif');
        
        this.load.image('lclass','../assets/blueredyoung/plilac/classroom1l.gif');

        this.load.image('oclass','../assets/blueredyoung/porange/classroom1or.gif');


        this.load.image('gclasse','../assets/blueredyoung/pgreen/classroom1emptygr.gif');
        
        this.load.image('lclasse','../assets/blueredyoung/plilac/classroom1emptyl.gif');

        this.load.image('oclasse','../assets/blueredyoung/porange/classroom1emptyor.gif');

    
        this.load.text('classroom', '../assets/txts/young/classroom.txt');
        this.load.text('classroom2', '../assets/txts/young/ycending.txt');
        
    
         
    }   

    create() {

        this.textIndex = 0;
        this.agreed = 0;

        //const schoolimg = this.add.image(640, 320, 'lbed').setDisplaySize(400, 400);
        //this.add.image(640, 320, 'lbed');
        // let clickCount = 0;
        // let clickCount2 = 0;

        this.cl = this.loadArr('classroom');
        this.cl2 = this.loadArr('classroom2');
                

        if (colorgatherer.choices.includes("or")){ //
            this.classimg = this.add.image(640, 320, 'oclasse').setDisplaySize(400, 400);
            console.log("heeello");
        }else if(colorgatherer.choices.includes("gr")){
            this.classimg = this.add.image(640, 320, 'gclasse').setDisplaySize(400, 400);
        }else if(colorgatherer.choices.includes("pr")){
            this.classimg = this.add.image(640, 320, 'lclasse').setDisplaySize(400, 400);
        }

        this.ready1 = this.add.text(640, 600, "give back", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.ready2 = this.add.text(640, 600, "give back", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.c1 = this.add.text(640, 600, "yeah right", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.c2 = this.add.text(640, 650, "well we don't have to get nervous about it too..", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);


        this.t1 = this.add.text(640, 80, "there we are finally! Where's the teacher?", {
                fontSize: '24px',
                color: '#62d3f7'
        }).setOrigin(0.5).setVisible(false);

        this.t2 = this.add.text(640, 80, "I told you we are really early! Do you think it's a coincidence that we had so many available seats to choose from?", {
                fontSize: '24px',
                color: '#deff65',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.t3 = this.add.text(640, 80, "... Well it's better to be early than late right pink?", {
                fontSize: '24px',
                color: '#62d3f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.t4 = this.add.text(640, 80, "so you'd rather risk being late? Really? I don't know if that's a good idea there..", {
                fontSize: '24px',
                color: '#62d3f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.t5 = this.add.text(640, 80, "you know, I think it would be best if we just wait for the teacher in silence", {
                fontSize: '24px',
                color: '#deff65',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.t6 = this.add.text(640, 80, "that's right!! I knew we agreed pink", {
                fontSize: '24px',
                color: '#62d3f7'
        }).setOrigin(0.5).setVisible(false);

        this.t7 = this.add.text(640, 80, "well.. however it is i guess it's nice being here instead of being outside so I can't be mad at that", {
                fontSize: '24px',
                color: '#deff65',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.cd1 = this.add.text(640, 600, "draw fence", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.cd2 = this.add.text(640, 650, "draw wolf", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.cd3 = this.add.text(640, 600, "draw chicken", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.cd4 = this.add.text(640, 650, "draw car", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);



        this.a1 = this.add.text(640, 600, "8", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.a2 = this.add.text(640, 630, "15", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.a3 = this.add.text(640, 660, "i dont know..", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.d1 = this.add.text(640, 80, "...x should be y times 3...", {
                fontSize: '24px',
                color: '#7e59c6'
        }).setOrigin(0.5).setVisible(false);

        this.d2 = this.add.text(640, 80, "pink? What do you think the value of x is?", {
                fontSize: '24px',
                color: '#7e59c6'
        }).setOrigin(0.5).setVisible(false);

        this.d3 = this.add.text(640, 80, "good! I thought you weren't paying attention but it looks like you got it so, let's continue..", {
                fontSize: '24px',
                color: '#7e59c6',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.d4 = this.add.text(640, 80, "hmm looks like you have to focus a little more pink, try to do that for the rest of this hour", {
                fontSize: '24px',
                color: '#7e59c6',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.d5 = this.add.text(640, 80, "(ok this is the best drawing ever but let's focus now)", {
                fontSize: '24px',
                color: '#deff65',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.endtxt = this.add.text(640, 300, "after 2 hours of algebra and a questionable hour of grammar red and blue came to pick you up..", {
                fontSize: '24px',
                color: '#ffffff',
                wordWrap: {
                    width: 400
                }
        }).setOrigin(0.5).setVisible(false).setDepth(1000);

        this.gohome = this.add.text(640, 600, "go home", {
                fontSize: '24px',
                color: '#ffffff'
        }).setOrigin(0.5).setVisible(false);

        this.t1.setVisible(true).setInteractive();

        this.c1.on('pointerdown', () => {
            this.agreed++;
            this.c1.destroy();
            this.c2.destroy();
            this.t6.setVisible(true).setInteractive();
            
        });

        this.c2.on('pointerdown', () => {
            this.c1.destroy();
            this.c2.destroy();
            this.t4.setVisible(true).setInteractive();
            
        });

        this.t1.on('pointerdown', () => {
            this.t1.destroy();
            this.t2.setVisible(true).setInteractive();
        });

        this.t2.on('pointerdown', () => {
            this.t2.destroy();
            this.t3.setVisible(true).setInteractive();
        });

        this.t3.on('pointerdown', () => {
            this.t3.destroy();
            this.c1.setVisible(true).setInteractive();
            this.c2.setVisible(true).setInteractive();
        });

        this.t4.on('pointerdown', () => {
            this.t4.destroy();
            this.t5.setVisible(true).setInteractive();
        });

        this.t6.on('pointerdown', () => {
            this.t6.destroy();
            this.t7.setVisible(true).setInteractive();
        });

        this.t5.on('pointerdown', () => {
            this.t5.destroy();
            if (colorgatherer.choices.includes("or")){ //
                this.classimg = this.add.image(640, 320, 'oclass').setDisplaySize(400, 400);
            }else if(colorgatherer.choices.includes("gr")){
                this.classimg = this.add.image(640, 320, 'gclass').setDisplaySize(400, 400);
            }else if(colorgatherer.choices.includes("pr")){
                this.classimg = this.add.image(640, 320, 'lclass').setDisplaySize(400, 400);
            }
            this.showText(this.cl, () => {
                //show drawing and choices -- include if for agreed w cyan or not
                
                if (colorgatherer.choices.includes("or")){ //
                    this.classimg = this.add.image(640, 320, 'treeor').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("gr")){
                    this.classimg = this.add.image(640, 320, 'treegr').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("pr")){
                        this.classimg = this.add.image(640, 320, 'treel').setDisplaySize(400, 400);
                }
                
                this.cd1.setVisible(true).setInteractive();
                this.cd2.setVisible(true).setInteractive();
            });
        });

        this.t7.on('pointerdown', () => {
            this.t7.destroy();
            if (colorgatherer.choices.includes("or")){ //
                this.classimg = this.add.image(640, 320, 'oclass').setDisplaySize(400, 400);
            }else if(colorgatherer.choices.includes("gr")){
                this.classimg = this.add.image(640, 320, 'gclass').setDisplaySize(400, 400);
            }else if(colorgatherer.choices.includes("pr")){
                this.classimg = this.add.image(640, 320, 'lclass').setDisplaySize(400, 400);
            }
            this.showText(this.cl, () => {
                //show drawing and choices -- include if for agreed w cyan or not
                
                if (colorgatherer.choices.includes("or")){ //
                    this.classimg = this.add.image(640, 320, 'treebutterflyor').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("gr")){
                    this.classimg = this.add.image(640, 320, 'treebutterflygr').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("pr")){
                    this.classimg = this.add.image(640, 320, 'treebutterflyl').setDisplaySize(400, 400);
                }
                
                this.cd1.setVisible(true).setInteractive();
                this.cd2.setVisible(true).setInteractive();
            });
        });

        this.d1.on('pointerdown', () => {
            this.d1.destroy();
            this.cd3.setVisible(true).setInteractive();
            this.cd4.setVisible(true).setInteractive();
            if(this.agreed>0){
                if (colorgatherer.choices.includes("or")){ //
                    this.classimg = this.add.image(640, 320, 'housedinoor').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("gr")){
                    this.classimg = this.add.image(640, 320, 'housedinogr').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("pr")){
                    this.classimg = this.add.image(640, 320, 'housedinol').setDisplaySize(400, 400);
                }
                
            }else{
                if (colorgatherer.choices.includes("or")){ //
                    this.classimg = this.add.image(640, 320, 'houseor').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("gr")){
                    this.classimg = this.add.image(640, 320, 'housegr').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("pr")){
                    this.classimg = this.add.image(640, 320, 'housel').setDisplaySize(400, 400);
                }
            }
        });

        this.d3.on('pointerdown', () => {
            this.d3.destroy();
            this.d5.setVisible(true).setInteractive();
            
        });

        this.d4.on('pointerdown', () => {
            this.d4.destroy();
            this.d5.setVisible(true).setInteractive();
            
        });

        this.d5.on('pointerdown', () => {
            this.d5.destroy();
            //this.scene.start('defaultnone');
            this.showText(this.cl2, () => {
                this.endtxt.setVisible(true);
                this.classimg = this.add.image(640, 320, 'black').setDisplaySize(400, 400);
                this.gohome.setVisible(true).setInteractive();
            });

        });

        this.gohome.on('pointerdown', () => {
            this.gohome.destroy();
            this.endtxt.destroy();
            this.scene.start('young2');
            
        });

        this.ready1.on('pointerdown', () => {
            this.ready1.destroy();
            this.classimg = this.add.image(640, 320, 'black').setDisplaySize(400, 400);
            this.d1.setVisible(true).setInteractive();
            
        });

        this.ready2.on('pointerdown', () => {
            this.ready2.destroy();
            this.d2.setVisible(true);
            this.a1.setVisible(true).setInteractive();
            this.a2.setVisible(true).setInteractive();
            this.a3.setVisible(true).setInteractive();
            if (colorgatherer.choices.includes("or")){ //
                this.classimg = this.add.image(640, 320, 'oclass').setDisplaySize(400, 400);
            }else if(colorgatherer.choices.includes("gr")){
                this.classimg = this.add.image(640, 320, 'gclass').setDisplaySize(400, 400);
            }else if(colorgatherer.choices.includes("pr")){
                this.classimg = this.add.image(640, 320, 'lclass').setDisplaySize(400, 400);
            }
        });

        this.a1.on('pointerdown', () => {
            this.a1.destroy();
            this.a2.destroy();
            this.a3.destroy();
            this.d2.destroy();
            this.d4.setVisible(true).setInteractive();
        });
        this.a3.on('pointerdown', () => {
            this.a1.destroy();
            this.a2.destroy();
            this.a3.destroy();
            this.d2.destroy();
            this.d4.setVisible(true).setInteractive();
        });

        this.a2.on('pointerdown', () => {
            this.a1.destroy();
            this.a2.destroy();
            this.a3.destroy();
            this.d2.destroy();
            this.d3.setVisible(true).setInteractive();
        });

        this.cd1.on('pointerdown', () => {
            this.cd1.destroy();
            this.cd2.destroy();
            if(this.agreed>0){
                if (colorgatherer.choices.includes("or")){ //
                    this.classimg = this.add.image(640, 320, 'treefencebutterflyor').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("gr")){
                    this.classimg = this.add.image(640, 320, 'treefencebutterflygr').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("pr")){
                    this.classimg = this.add.image(640, 320, 'treefencebutterflyl').setDisplaySize(400, 400);
                }
            }else{
                if (colorgatherer.choices.includes("or")){ //
                    this.classimg = this.add.image(640, 320, 'treefenceor').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("gr")){
                    this.classimg = this.add.image(640, 320, 'treefencegr').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("pr")){
                    this.classimg = this.add.image(640, 320, 'treefencel').setDisplaySize(400, 400);
                }
            }
            this.ready1.setVisible(true).setInteractive();
        });
        
        this.cd2.on('pointerdown', () => {
            this.cd1.destroy();
            this.cd2.destroy();
            if(this.agreed>0){
                if (colorgatherer.choices.includes("or")){ //
                    this.classimg = this.add.image(640, 320, 'treewolfbutterflyor').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("gr")){
                    this.classimg = this.add.image(640, 320, 'treewolfbutterflygr').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("pr")){
                    this.classimg = this.add.image(640, 320, 'treewolfbutterflyl').setDisplaySize(400, 400);
                }
            }else{
                if (colorgatherer.choices.includes("or")){ //
                    this.classimg = this.add.image(640, 320, 'treewolfor').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("gr")){
                    this.classimg = this.add.image(640, 320, 'treewolfgr').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("pr")){
                    this.classimg = this.add.image(640, 320, 'treewolfl').setDisplaySize(400, 400);
                }
            }
            this.ready1.setVisible(true).setInteractive();
        });

        this.cd3.on('pointerdown', () => {
            this.cd3.destroy();
            this.cd4.destroy();
            if(this.agreed>0){
                if (colorgatherer.choices.includes("or")){ //
                    this.classimg = this.add.image(640, 320, 'housechickendinoor').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("gr")){
                    this.classimg = this.add.image(640, 320, 'housechickendinogr').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("pr")){
                    this.classimg = this.add.image(640, 320, 'housechickendinol').setDisplaySize(400, 400);
                }
            }else{
                if (colorgatherer.choices.includes("or")){ //
                    this.classimg = this.add.image(640, 320, 'housechickenor').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("gr")){
                    this.classimg = this.add.image(640, 320, 'housechickengr').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("pr")){
                    this.classimg = this.add.image(640, 320, 'housechickenl').setDisplaySize(400, 400);
                }
            }
            this.ready2.setVisible(true).setInteractive();
        });

        this.cd4.on('pointerdown', () => {
            this.cd3.destroy();
            this.cd4.destroy();
            if(this.agreed>0){
                if (colorgatherer.choices.includes("or")){ //
                    this.classimg = this.add.image(640, 320, 'housecardinoor').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("gr")){
                    this.classimg = this.add.image(640, 320, 'housecardinogr').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("pr")){
                    this.classimg = this.add.image(640, 320, 'housecardinol').setDisplaySize(400, 400);
                }
            }else{
                if (colorgatherer.choices.includes("or")){ //
                    this.classimg = this.add.image(640, 320, 'housecaror').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("gr")){
                    this.classimg = this.add.image(640, 320, 'housecargr').setDisplaySize(400, 400);
                }else if(colorgatherer.choices.includes("pr")){
                    this.classimg = this.add.image(640, 320, 'housecarl').setDisplaySize(400, 400);
                }
            }
            this.ready2.setVisible(true).setInteractive();
        });

        this.dialogueText = this.add.text(640, 600, "", {
            fontSize: '24px',
            color: '#ffffff',
            wordWrap: { width: 500 }
        }).setOrigin(0.5).setInteractive();

        

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
