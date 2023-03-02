var config = {
    type: Phaser.AUTO,
    scale: {
        /*        parent: null,
                mode: Phaser.Scale.FIT,*/
        width: 800,
        height: 600
        /*autoCenter: Phaser.Scale.CENTER_BOTH*/
    },
    /*    autoRound: false,*/
    scene: [
        BootScene,
        TitleScene,
        LevelScene
        /*OptionsScene,
        HelpScene,
        GameScene1,
        GameOverScene */
        //all scenes
  ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                y: 200,
            },
        },
    },
};

var game = new Phaser.Game(config);
