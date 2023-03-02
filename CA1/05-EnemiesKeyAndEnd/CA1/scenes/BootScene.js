class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        console.log("preloading");
        // load images
        this.loadImages();
        // load spritesheets
        this.loadSpriteSheets();
        // load audio
        //this.loadAudio();
    }
    init() {

        var player;
        var scoreText;
        var score = 0;
        var stars;
    }
    loadImages() {
        // load images
        this.load.image('orangeButton01', '/assets/orange_button01.png');
        this.load.image('orangeButton02', '/assets/orange_button02.png');
        this.load.image('bg', '/assets/background.jpg');
        this.load.image('tempPlatformVert', '/assets/TempPlatformVerticle.png');
        this.load.image('Platform', '/assets/CobbleStonePlatform.png');
        this.load.image('Ground', '/assets/Ground.png');
        this.load.image('Star', '/assets/StarCoin.png');
        this.load.image('bgCover', '/assets/backgroundCover.jpg');
        this.load.image('Wall', '/assets/Wall.png');
        this.load.image('Wall01', '/assets/Wall01.png');
        this.load.image('Wall02', '/assets/Wall02.png');
        this.load.image('Wall03', '/assets/Wall03.png');
        this.load.image('Wall04', '/assets/Wall04.png');
        this.load.image('Wall05', '/assets/Wall05.png');
        this.load.image('Enemy', '/assets/Enemy.png');
        this.load.image('Speach', '/assets/SpeachBub.png');
        this.load.image('Spikes', '/assets/Spikes.png');
        this.load.image('Key', '/assets/Key.png');
        this.load.image('endWall', '/assets/EndWall.png');


    }

    loadSpriteSheets() {
        /*        this.load.spritesheet('Dude', '/assets/DudeSpriteSheet.png', {
                    frameWidth: 32,
                    frameHeight: 32
                });*/
        this.load.spritesheet('Dude2', '/assets/DudeSpriteSheet02.png', {
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet('Enemies', '/assets/OrkSpriteSheet.png', {
            frameWidth: 32,
            frameHeight: 32
        });
        /*        this.load.spritesheet('Flame', '/assets/FlameSpriteSheet.png', {
                    frameWidth: 32,
                    frameHeight: 32
                });*/
    }

    loadAudio() {
        // Adding Sounds
        this.load.audio("", [".mp3", ".ogg"]); //two different types of sound file
    }

    create() {
        this.scene.start('Title');
        console.log("starting TitleScene");
    }
}
