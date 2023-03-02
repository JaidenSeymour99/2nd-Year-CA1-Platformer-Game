const config = {
    type: Phaser.AUTO,

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1024,
        height: 720

    },

    scene: [
        BootScene,
        TitleScene,
        LevelScene,
        GameScene1,
        GameScene2,
        HelpScene,
        OptionsScene,
        GameOverScene

  ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                y: 400,
            },
        },
    },
};

const game = new Phaser.Game(config);
