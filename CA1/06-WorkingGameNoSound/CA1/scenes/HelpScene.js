class HelpScene extends Phaser.Scene {
    constructor() {
        super('Help');
    }

    init() {
        console.log("HelpScene");
        //setting the game heigth and width to scaleW and scaleH
        this.scaleW = this.sys.game.config.width;
        this.scaleH = this.sys.game.config.height;

        //var platforms;
        //var player;
        //var cursors
    }
    create() {
        //background
        this.add.image(0, 0, 'bgCover').setOrigin(0, 0);
        //back to title button
        this.startTitleButton = new UiButton(this, this.scaleW * .2, this.scaleH * 0.1, 'orangeButton01', 'orangeButton02', 'Back', this.startScene.bind(this, 'Title'));

        // text about controls
        this.add.text(100, 300, "Use the directional arrows to control\nyour character movement.\nUp arrow to jump.").setScale(2);

        this.add.text(100, 400, "Press the space bar to attack.\nMight not be functional by the time this\nproject is due,\nbut the annimations are there.").setScale(2);
    }

    //starts the scene that the user clicks on (targetScene)
    startScene(targetScene) {
        this.scene.start(targetScene);
        //console.log("Starting Title");
    }
}
