import { colorgatherer, buildkey, addBackground } from './colorgatherer.js';

export class adult1 extends Phaser.Scene {

    constructor() {
        super('adult1');   // <-- this is the scene key
        this.house1 = [];
    }


    preload() {    

        const colorkey = buildkey();
        console.log(colorkey);

        const piclist = [
            'kitchen1.gif',
            'kitchen1piz.gif',
            'kitchen1sand.gif',
            'bedroom.gif'
        ];

        

        piclist.forEach(file => {
            // remove extension for the key
            const key = file.replace('.gif', colorkey); //replace with or,l,gr

            this.load.image(key, `../assets/blueredadult/${colorkey}/${file}`);
            
        });

        this.load.audio('adult', '../assets/music/adultlong3.mp3');
        this.load.text('houseintro', '../assets/txts/adult/homeintro.txt');

    }   

    create() {

        this.music = this.sound.add('adult', {
            volume: 1.0,       // Adjust volume (0.0 to 1.0)
            loop: true         // Set to true to repeat endlessly
        });
        this.music.play();
        this.textIndex = 0;

        this.house1 = this.loadArr('houseintro');

        this.housebg = this.add.image(640, 320, addBackground('bedroom')).setDisplaySize(400, 400);
        

        this.t1 = this.add.text(640, 100, "guess i gotta wake up..", { //leads to scene change
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setOrigin(0.5).setVisible(false);

        this.t2 = this.add.text(640, 100, "it's 9 already..? I have to be quick", {
                fontSize: '24px',
                color: '#f762f7'
        }).setOrigin(0.5).setVisible(false);

        this.c1 = this.add.text(640, 600, "have leftover pizza", {
                fontSize: '24px',
                color: '#ffffff'
        }).setOrigin(0.5).setVisible(false); //on choice, load hometxt
        
        this.c2 = this.add.text(640, 650, "have a sandwitch", {
                fontSize: '24px',
                color: '#ffffff'
        }).setOrigin(0.5).setVisible(false); //on choice, load hometxt


//for now i think i have to just grab this and go, the station to the bus is far away anyways

        this.dialogueText = this.add.text(640, 600, "", {
            fontSize: '24px',
            color: '#ffffff',
            wordWrap: { width: 500 }
        }).setOrigin(0.5).setInteractive();




        this.t1.setVisible(true).setInteractive();
        
        this.t1.on('pointerdown', () => {
            this.t1.destroy();

            this.housebg = this.add.image(640, 320, addBackground('kitchen1')).setDisplaySize(400, 400);
            
            this.t2.setVisible(true).setInteractive();
        });




        this.t2.on('pointerdown', () => {
            this.t2.destroy();

            this.c1.setVisible(true).setInteractive();
            this.c2.setVisible(true).setInteractive();
        
        });
        
        this.c1.on('pointerdown', () => {
            this.c1.destroy();
            this.c2.destroy();

            this.housebg = this.add.image(640, 320, addBackground('kitchen1piz')).setDisplaySize(400, 400);


            //this.scene.start('defaultnone');
            //this.t3.setVisible(true).setInteractive();
            this.showText(this.house1, () => {
                this.scene.start('work1');
            }); 
            
        });

        this.c2.on('pointerdown', () => {
            this.c2.destroy();
            this.c1.destroy();

            this.housebg = this.add.image(640, 320, addBackground('kitchen1sand')).setDisplaySize(400, 400);

            this.showText(this.house1, () => {
                this.scene.start('work1');
            }); 

            //this.scene.start('defaultnone');
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
