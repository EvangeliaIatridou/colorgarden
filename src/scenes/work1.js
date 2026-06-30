import { colorgatherer, buildkey, addBackground } from './colorgatherer.js';

export class work1 extends Phaser.Scene {

    constructor() {
        super('work1');   // <-- this is the scene key
        this.work1 = [];
        this.work2 = [];
        this.clickCount = 0;
        this.docsFinished = 0;
    }

    //potential colours gathered: or, pr, gr

    //if statement: if (colorgatherer.choices.includes("or")){
    //     console.log("HOE");
    // }

    preload() {  
        
        const colorkey = buildkey();
        console.log(colorkey);

        const piclist = [
            'workintro.gif',
            'workintroind.gif',
            'workspace.gif',
            'bossoffice.gif'
        ];

        const tasklist = [
            'c.gif',
            'm.gif',
            'y.gif',
            'k.gif',
            'd.gif',
            'f.gif',
            'g.gif',
            'a.gif',
            
            'cmyk1.gif',
            'cmyk2.gif',
            'dfga1.gif',
            'dgfa2.gif',
            'rbis1.gif',
            'rbis2.gif',
            'rbis3.gif'
            
        ];

        piclist.forEach(file => {
            // remove extension for the key
            const key = file.replace('.gif', colorkey); //replace with or,l,gr

            this.load.image(key, `../assets/blueredadult/${colorkey}/${file}`);
            
        });

        tasklist.forEach(file => {
            // remove extension for the key
            const key = file.replace('.gif', colorkey); //replace with or,l,gr

            this.load.image(key, `../assets/blueredadult/${colorkey}/worktasks/${file}`);
            
        });

        this.load.text('workintro', '../assets/txts/adult/workintro.txt');
        this.load.text('work2', '../assets/txts/adult/work2.txt');


    }   
 
    create() {

        this.textIndex = 0;
        //this.clickCount = 0;
        //var clickCount = 0;

        this.work1 = this.loadArr('workintro');
        this.work2 = this.loadArr('work2');

        //out for testing
        this.workbg = this.add.image(640, 320, addBackground('workintro')).setDisplaySize(400, 400);

        const cZone = this.add.zone(515, 200, 70, 90) //w,h,sw,sh //for placements 370 instead of 200
            .setOrigin(0.5);
        const mZone = this.add.zone(605, 200, 70, 90) //w,h,sw,sh
            .setOrigin(0.5);
        const yZone = this.add.zone(695, 200, 70, 90) //w,h,sw,sh
            .setOrigin(0.5);
        const kZone = this.add.zone(780, 200, 70, 90) //w,h,sw,sh
            .setOrigin(0.5);

        const dZone = this.add.zone(515, 200, 70, 90) //w,h,sw,sh
            .setOrigin(0.5);
        const fZone = this.add.zone(605, 200, 70, 90) //w,h,sw,sh
            .setOrigin(0.5);
        const gZone = this.add.zone(695, 200, 70, 90) //w,h,sw,sh
            .setOrigin(0.5);
        const aZone = this.add.zone(780, 200, 70, 90) //w,h,sw,sh
            .setOrigin(0.5);


        // const graphics = this.add.graphics();
        // graphics.lineStyle(4, 0x00ff00);
        // graphics.strokeRect(
        //     cZone.x - cZone.width / 2,
        //     cZone.y - cZone.height / 2,
        //     cZone.width,
        //     cZone.height
        // ).setDepth(10);
        
        this.t1 = this.add.text(640, 100, "yeah pink just calm down and have a great day ahahahah", {
                fontSize: '24px',
                color: '#726eff',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);
   
        this.t2 = this.add.text(640, 100, "ok let's do this", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.t3 = this.add.text(640, 100, "I have to sort these documents out with alphabetical order", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.t4 = this.add.text(640, 100, "click on the documents by the order you want them sorted, once placed you can't undo", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false).setDepth(10);;

        this.done1 = this.add.text(640, 600, "done, next task", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);
        this.done2 = this.add.text(640, 600, "done, next task", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.r1 = this.add.text(640, 600, "woah wait, I haven't seen these colours on objects before..", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.r2 = this.add.text(640, 600, "It's been a while since I've seen them too..", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        this.r3 = this.add.text(640, 600, "Is everything supposed to be different? What is re-", {
                fontSize: '24px',
                color: '#f762f7',
                wordWrap: { width: 500 }
        }).setOrigin(0.5).setVisible(false);

        

        this.dialogueText = this.add.text(640, 600, "", {
            fontSize: '24px',
            color: '#ffffff',
            wordWrap: { width: 500 }
        }).setOrigin(0.5).setInteractive();


        //out for testing
        this.showText(this.work1, () => {
            this.workbg = this.add.image(640, 320, addBackground('workintroind')).setDisplaySize(400, 400);
            this.t1.setInteractive().setVisible(true);
        });


        this.t1.on('pointerdown', () => {
            this.t1.destroy();
            this.workbg = this.add.image(640, 320, addBackground('workspace')).setDisplaySize(400, 400);
            this.t2.setInteractive().setVisible(true);
        });

        this.t2.on('pointerdown', () => {
            this.t2.destroy();
            this.workbg = this.add.image(640, 320, addBackground('cmyk1')).setDisplaySize(400, 400);
            this.t3.setInteractive().setVisible(true);
        });

        this.t3.on('pointerdown', () => {
            this.t3.destroy();
            this.t4.setInteractive().setVisible(true);
        });

        this.t4.on('pointerdown', () => {
            this.t4.destroy();
            //make interactables
            cZone.setInteractive(({ useHandCursor: true }));
            mZone.setInteractive(({ useHandCursor: true }));
            yZone.setInteractive(({ useHandCursor: true }));
            kZone.setInteractive(({ useHandCursor: true }));

            this.addDoc(cZone,'c');
            this.addDoc(mZone,'m');
            this.addDoc(yZone,'y');
            this.addDoc(kZone,'k');
            this.doneDocs1();
            console.log("here");
            console.log(this.clickCount);

        });

        this.done1.on('pointerdown', () => {

            this.done1.destroy();

            this.workbg = this.add.image(640, 320, addBackground('dfga1')).setDisplaySize(400, 400);
            //same, this time with dfga
            dZone.setInteractive(({ useHandCursor: true }));
            fZone.setInteractive(({ useHandCursor: true }));
            gZone.setInteractive(({ useHandCursor: true }));
            aZone.setInteractive(({ useHandCursor: true }));

            this.addDoc(dZone,'d');
            this.addDoc(fZone,'f');
            this.addDoc(gZone,'g');
            this.addDoc(aZone,'a');
            this.doneDocs2();
            
        });

        this.done2.on('pointerdown', () => {
            this.done2.destroy();
            console.log("HYPE");
            this.workbg = this.add.image(640, 320, addBackground('rbis1')).setDisplaySize(400, 400);
            
            this.r1.setInteractive().setVisible(true);
            
        });


        this.r1.on('pointerdown', () => {
            this.r1.destroy();
            this.workbg = this.add.image(640, 320, addBackground('rbis1')).setDisplaySize(400, 400);
            this.r2.setInteractive().setVisible(true);
            
        });
        
        this.r2.on('pointerdown', () => {
            this.r2.destroy();
            this.workbg = this.add.image(640, 320, addBackground('rbis2')).setDisplaySize(400, 400);
            this.r3.setInteractive().setVisible(true);
            
        });

        this.r3.on('pointerdown', () => {
            this.r3.destroy();
            this.workbg = this.add.image(640, 320, addBackground('rbis3')).setDisplaySize(400, 400);
            
            this.showText(this.work2, () => {
                this.scene.start("work2balcony");
            });
            
        });



    }

    addDoc(someZone, startLetter){
        someZone.on('pointerdown', () => {
            this.clickCount++;
            someZone.destroy();
            //console.log(this.clickCount);
            if(this.clickCount==1){
                this.workbgadd = this.add.image(515, 370, addBackground(startLetter)).setDisplaySize(100, 100);
            }else if(this.clickCount==2){
                this.workbgadd = this.add.image(605, 370, addBackground(startLetter)).setDisplaySize(100, 100);
            }else if(this.clickCount==3){
                this.workbgadd = this.add.image(695, 370, addBackground(startLetter)).setDisplaySize(100, 100);
            }else{
                this.workbgadd = this.add.image(780, 370, addBackground(startLetter)).setDisplaySize(100, 100);
            }
            this.docsFinished++;

            if (this.docsFinished === 4) {
                this.doneDocs1();
            }

            if (this.docsFinished === 8) {
                this.doneDocs2();
            }
        });
    }

    doneDocs1(){
        if(this.clickCount>=4){
            console.log(this.clickCount);
            this.clickCount = 0;
            this.done1.setInteractive().setVisible(true);
        }
    }

    doneDocs2(){
        if(this.clickCount>=4){
            console.log(this.clickCount);
            this.clickCount = 0;
            this.done2.setInteractive().setVisible(true);
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
