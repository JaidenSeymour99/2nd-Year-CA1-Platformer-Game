/*var score = 0;*/
class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOver');
    }
    init() {
        console.log("GameOverScene");
        //setting the game heigth and width to scaleW and scaleH
        this.scaleW = this.sys.game.config.width;
        this.scaleH = this.sys.game.config.height;
    }

    create() {
        // create title text
        this.add.image(this.scaleW / 2, this.scaleH / 2, 'bgCover');
        this.titleText = this.add.text(this.scaleW / 2, this.scaleH * .45, 'You Win!\nWould you like \nto play again?', {
            fontSize: '64px',
            fill: '#fff'
        });
        this.titleText.setOrigin(0.5);

        // button to play again
        this.startPlayButton = new UiButton(this, this.scaleW * .3, this.scaleH * 0.75, 'orangeButton01', 'orangeButton02', 'Yes', this.startScene.bind(this, 'Game1'));
        // button back to title
        this.startTitleButton = new UiButton(this, this.scaleW * .7, this.scaleH * 0.75, 'orangeButton01', 'orangeButton02', 'No', this.startScene.bind(this, 'Title'));

/*
        this.add.text(100, 100, "Score : " +
            this.score);*/

    }
    //starts the scene that the user clicks on (targetScene)
    startScene(targetScene) {
        this.scene.start(targetScene);

    }
}
