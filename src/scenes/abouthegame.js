export class abouthegame extends Phaser.Scene {

    constructor() {
        super('abouthegame');   // <-- this is the scene key
    }

    preload() {
        this.load.image('secondBg', '../assets/plainblack.gif');
    }

    create() {
        this.add.image(640, 400, 'secondBg');

        this.t1 = this.add.text(640, 150, "This is a point and click game that makes you go through 3 days of 3 stages of your life. You are the one that gets to choose who they speak to on each stage, and what to do. Some choices are yours, some are not, some matter and some don't. In any case, at the end you get your own personal garden that is based on what you've built throughout the game.", {
            fontSize: '24px',
            color: '#1f66c8',
            wordWrap: { width: 800 }
        }).setOrigin(0.5).setVisible(true);

        this.t2 = this.add.text(640, 350, "Click on the text below to read the idea behind the game, or don't and try to figure it out yourself while playing. (recommended to play first and read after)", {
            fontSize: '24px',
            color: '#625b6d',
            align: "center",
            wordWrap: { width: 800 }
        }).setOrigin(0.5).setVisible(true);

        this.t3 = this.add.text(640, 150, "Each person you talk to carries a different aura, so they are a different unique colour (even if some look alike). Whoever you choose to interact with is a person that influences you enough to be part of your life, regardless of your relationship with them, whether you like them or not.", {
            fontSize: '16px',
            color: '#f762f7',
            wordWrap: { width: 800 }
        }).setOrigin(0.5).setVisible(false);

        this.t4 = this.add.text(670, 250, "If we count each person as a coloured flower, then as you go through life you collect enough flowers to make a garden, the one you get to see at the very end. Not everyone realises/accepts how much everyone else in their life is affecting them, how much of a collage of all the people we meet we really are, even if our relationship with them isn't as good as others.", {
            fontSize: '16px',
            color: '#625b6d',
            align: "center",
            wordWrap: { width: 800 }
        }).setOrigin(0.5).setVisible(false);

        this.t5 = this.add.text(640, 350, "On each stage, your perception of color changes because of additions of perspectives. The color of the world you perceive on each stage is the combination of the colors that have affected you greatly in your life so far.", {
            fontSize: '16px',
            color: '#1f66c8',
            wordWrap: { width: 800 }
        }).setOrigin(0.5).setVisible(false);

        this.t6 = this.add.text(640, 450, "Nobody has the same garden, even if they have the same coloured flowers, they will differ in shapes and sizes.", {
            fontSize: '16px',
            color: '#c7a39d',
            align: "center",
            wordWrap: { width: 800 }
        }).setOrigin(0.5).setVisible(false);

        this.t7 = this.add.text(640, 250, "Click on the text below to read the idea behind the game, or don't and try to figure it out yourself while playing. (recommended to play first and read after)", {
            fontSize: '16px',
            color: '#625b6d',
            align: "9faba8",
            wordWrap: { width: 800 }
        }).setOrigin(0.5).setVisible(false);

        const idea = this.add.text(640,400, "idea behind the game", {
            fontSize: "32px",
            color: "#d5b31e"
        }).setOrigin(0.5).setInteractive();

        const back = this.add.text(640, 500, "back", {
            fontSize: "48px",
            color: "#ff0000"
        }).setOrigin(0.5).setInteractive();

        const back2 = this.add.text(640, 500, "back", {
            fontSize: "48px",
            color: "#ff0000"
        }).setOrigin(0.5).setInteractive().setVisible(false);

        back.on('pointerdown', () => {
            this.scene.start('Start');   // go back!
        });

        back2.on('pointerdown', () => {
            back.setVisible(true).setInteractive(true);
            idea.setVisible(true).setInteractive(true);
            back2.setVisible(false).setInteractive(false);
            
            this.t3.setVisible(false);
            this.t4.setVisible(false);
            this.t5.setVisible(false);
            this.t6.setVisible(false);
            this.t1.setVisible(true);
            this.t2.setVisible(true);
        });

        idea.on('pointerdown', () => {
            idea.setVisible(false).setInteractive(false);
            this.t1.setVisible(false);
            this.t2.setVisible(false);
            this.t3.setVisible(true);
            this.t4.setVisible(true);
            this.t5.setVisible(true);
            this.t6.setVisible(true);
            
            back.setVisible(false).setInteractive(false);
            back2.setVisible(true).setInteractive(true);
        });

    }
}
