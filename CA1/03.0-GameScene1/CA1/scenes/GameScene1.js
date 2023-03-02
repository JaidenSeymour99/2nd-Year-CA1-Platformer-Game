class GameScene1 extends Phaser.Scene {
    constructor() {
        super('Game1');
    }

    init() {
        console.log("Level 1");
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
        this.platforms.create(this.scaleH * .4, this.scaleW * .8, 'Platform').setScale(.98).refreshBody();
        this.platforms.create().setScale(.98).refreshBody();

        //creating different platforms
        this.platforms.create(this.scaleH, this.scaleW * .53, 'Platform').setScale(.05).refreshBody();

        this.platforms.create(this.scaleH * .5, this.scaleW * .53, 'Platform').setScale(.05).refreshBody();

        this.platforms.create(this.scaleH * .3, this.scaleW * .4, 'Platform').setScale(.05).refreshBody();

        this.platforms.create(this.scaleH * 1.1, this.scaleW * .4, 'Platform').setScale(.05).refreshBody();



        //making a border on the left side so the player cant go past the left.
        this.platforms.create(-60, 0, 'tempPlatformVert').setScale(3.5).refreshBody();


        //creating the player sprite
        this.player = this.physics.add.sprite(100, 600, 'Dude');
        this.player.setScale(3);

        //makes sure the player cant escape the bounds of the screen
        /*this.player.setCollideWorldBounds(true)*/


        //animation frames for dude
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('Dude', {
                start: 4,
                end: 6
            }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{
                key: 'Dude',
                frame: 3
            }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('Dude', {
                start: 0,
                end: 2
            }),
            frameRate: 10,
            repeat: -1
        });

        //accepting input from the user.
        this.cursors = this.input.keyboard.createCursorKeys();

        //adds collision between the player and platforms
        this.physics.add.collider(this.player, this.platforms);

        this.cameras.main.setBounds(0, 0, 2000, 720); //720 is the height of screen aprox
        this.cameras.main.startFollow(this.player);

    }



    update() {


        this.movePlayer();


    }

    //function for moving the player
    movePlayer() {
        /*        var x = 300;*/
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
        if ((this.cursors.space.isDown || this.cursors.up.isDown) && this.player.body.touching.down) {
            this.player.setVelocityY(-350);
        }
        /*        if (this.cursors.down.isDown) {
                    this.player.setVelocityY(x);
                }*/

    }
    startScene(targetScene) {
        this.scene.start(targetScene);
    }
}
