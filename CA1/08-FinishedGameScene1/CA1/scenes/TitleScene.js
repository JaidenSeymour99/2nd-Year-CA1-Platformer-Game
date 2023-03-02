class TitleScene extends Phaser.Scene {
    constructor() {
        super('Title');


    }

    init() {
        console.log("TitleScene");
        //setting the game heigth and width to scaleW and scaleH
        this.scaleW = this.sys.game.config.width;
        this.scaleH = this.sys.game.config.height;
    }

    create() {


        //background image
        this.add.image(0, 0, 'bgCover').setOrigin(0, 0);
        // create title text
        this.titleText = this.add.text(this.scaleW / 2, this.scaleH * .45, 'Battleheart', {
            fontSize: '64px',
            fill: '#fff'
        });
        this.titleText.setOrigin(0.5);

        // create the Play game button
        this.startPlayButton = new UiButton(this, this.scaleW * .3, this.scaleH * 0.75, 'orangeButton01', 'orangeButton02', 'Play', this.startScene.bind(this, 'Level'));
        // create the help/controls button
        this.startHelpButton = new UiButton(this, this.scaleW * .7, this.scaleH * 0.75, 'orangeButton01', 'orangeButton02', 'Controls', this.startScene.bind(this, 'Help'));
        // create the Options/mute sound etc button
        this.startOptionsButton = new UiButton(this, this.scaleW * .2, this.scaleH * 0.1, 'orangeButton01', 'orangeButton02', 'Options', this.startScene.bind(this, 'Options'));
    }
    //starts the scene that the user clicks on (targetScene)
    startScene(targetScene) {
        this.scene.start(targetScene);
    }
}
