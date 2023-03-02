class LevelScene extends Phaser.Scene {
    constructor() {
        super('Level');
    }

    init() {
        console.log("LevelScene");
        //setting the game heigth and width to scaleW and scaleH
        this.scaleW = this.sys.game.config.width;
        this.scaleH = this.sys.game.config.height;
    }

    create() {
        // create title text
        this.add.image(this.scaleW / 2, this.scaleH / 2, 'bgCover');
        this.titleText = this.add.text(this.scaleW / 2, this.scaleH * .45, 'Choose a level', {
            fontSize: '64px',
            fill: '#fff'
        });
        this.titleText.setOrigin(0.5);

        // create the Play game button
        this.startPlayButton = new UiButton(this, this.scaleW * .3, this.scaleH * 0.75, 'orangeButton01', 'orangeButton02', 'Level 1', this.startScene.bind(this, 'Game1'));
        // create the help/controls button
        this.startHelpButton = new UiButton(this, this.scaleW * .7, this.scaleH * 0.75, 'orangeButton01', 'orangeButton02', 'Level 2', this.startScene.bind(this, 'Game2'));
        // create the Options/mute sound etc button
        this.startOptionsButton = new UiButton(this, this.scaleW * .2, this.scaleH * 0.1, 'orangeButton01', 'orangeButton02', 'Back', this.startScene.bind(this, 'Title'));
    }
    //starts the scene that the user clicks on (targetScene)
    startScene(targetScene) {
        this.scene.start(targetScene);
        //console.log("Starting PlayScene");
        //console.log("Starting HelpScene");
        //console.log("Starting OptionsScene");
    }
}
