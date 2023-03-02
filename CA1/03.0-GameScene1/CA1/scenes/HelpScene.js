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

        //adding the temp sky image
        this.add.image(this.scaleW / 2, this.scaleH / 2, 'tempSky');

        //asigning platforms to the physics engine as a static object
        this.platforms = this.physics.add.staticGroup();
        //creating static platform for the ground to stand on
        this.platforms.create(this.scaleH * .4, this.scaleW * .73, 'tempPlatform').setScale(5).refreshBody();

        this.platforms.create(this.scaleH, this.scaleW * .5, 'tempPlatform').setScale(.5).refreshBody();

        this.platforms.create(this.scaleH * .5, this.scaleW * .5, 'tempPlatform').setScale(.5).refreshBody();

        this.platforms.create(this.scaleH * .3, this.scaleW * .35, 'tempPlatform').setScale(.5).refreshBody();

        this.platforms.create(this.scaleH * 1.1, this.scaleW * .35, 'tempPlatform').setScale(.5).refreshBody();

        //creating the player sprite
        this.player = this.physics.add.sprite(500, 400, 'tempDude');

        //makes sure the player cant escape the bounds of the screen
        this.player.setCollideWorldBounds(true);

        //will need to change this for our images
        //animation for character just change the tempDude to whatever our character is called. and will prob have a dif number depending on how many frames for our sprite sheet.
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('tempDude', {
                start: 0,
                end: 3
            }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{
                key: 'tempDude',
                frame: 4
            }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('tempDude', {
                start: 5,
                end: 8
            }),
            frameRate: 10,
            repeat: -1
        });

        this.cursors = this.input.keyboard.createCursorKeys();

        //adds collision between the player and platforms
        this.physics.add.collider(this.player, this.platforms);

        // Back to main menu
        this.startOptionsButton = new UiButton(this, this.scaleW * .2, this.scaleH * 0.1, 'orangeButton01', 'orangeButton02', 'Back', this.startScene.bind(this, 'Title'));

        //text to explain controlls
        this.titleText = this.add.text(this.scaleW / 2, this.scaleH * .45, 'Use the arrow keys', {
            fontSize: '50px',
            fill: '#fff'
        });
        this.titleText.setOrigin(0.5);
        this.titleText = this.add.text(this.scaleW / 2, this.scaleH * .55, 'to control your character', {
            fontSize: '50px',
            fill: '#fff'
        });
        this.titleText.setOrigin(0.5);

    }



    update() {


        this.movePlayer();


    }

    //function for moving the player
    movePlayer() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-150);
            this.player.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(150);
            this.player.anims.play('right', true);
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }

    }

    //starts the scene that the user clicks on (targetScene)
    startScene(targetScene) {
        this.scene.start(targetScene);
        //console.log("Starting Title");
    }
}
