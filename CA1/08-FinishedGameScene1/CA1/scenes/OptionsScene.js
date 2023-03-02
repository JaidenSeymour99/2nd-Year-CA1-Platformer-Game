class OptionsScene extends Phaser.Scene {
    constructor() {
        super('Options');
        let bgMusic;
    }
    init() {
        console.log("OptionsScene");
        this.scaleW = this.sys.game.config.width;
        this.scaleH = this.sys.game.config.height;
    }

    create() {
        //background
        this.add.image(0, 0, 'bgCover').setOrigin(0, 0);
        // create title text
        this.titleText = this.add.text(this.scaleW / 2, this.scaleH * .45, 'Options', {
            fontSize: '64px',
            fill: '#fff'
        });

        this.titleText.setOrigin(0.5);

        // Creating the button to mute sound effects
        this.startPlayButton = new UiButton(this, this.scaleW * .3, this.scaleH * 0.75, 'orangeButton01', 'orangeButton02', 'Mute SFX', this.startScene.bind(this, 'Title'));
        // create the help/controls button
        this.startHelpButton = new UiButton(this, this.scaleW * .7, this.scaleH * 0.75, 'orangeButton01', 'orangeButton02', 'Mute Background\n     music', this.startScene.bind(this, 'Title'))
        //button to get back to main menu
        this.startTitleButton = new UiButton(this, this.scaleW * .2, this.scaleH * 0.1, 'orangeButton01', 'orangeButton02', 'Back', this.startScene.bind(this, 'Title'));

        //trying to make a mute button   
        /*        let overButton = this.add.sprite(this.scaleW * .2, this.scaleH * 0.1, 'orangeButton01')
                    .setInteractive({
                        useHandCursor: true
                    })
                    .on('pointerdown', () => {
                        this.bgMusic.stop();
                    }, this);*/

    }
    startScene(targetScene) {
        this.scene.start(targetScene);
    }
}
