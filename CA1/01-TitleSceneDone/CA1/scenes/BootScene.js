class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        console.log("preloading");
        // load images
        this.loadImages();
        // load spritesheets
        //this.loadSpriteSheets();
        // load audio
        //this.loadAudio();
    }

    loadImages() {
        // load images
        this.load.image('orangeButton01', '/assets/orange_button01.jpg');
        this.load.image('orangeButton02', '/assets/orange_button02.png');


        /*       this.load.image('', '.png');
             this.load.image('', '.png');*/

    }

    loadSpriteSheets() {
        this.load.spritesheet('', '.png', {
            frameWidth: 32,
            frameHeight: 48
        });
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
