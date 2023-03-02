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

        /*var scoreText;
        var score = 0;
        */

    }

    create() {

        //adding the temp sky image
        this.add.image(1500, 330, 'bg');



        //asigning platforms to the physics engine as a static object
        this.platforms = this.physics.add.staticGroup();



        //creating static platform for the ground to stand on
        this.platforms.create(this.scaleH * 1.1, this.scaleH * .98, 'Ground');
        this.platforms.create(2490, this.scaleH * .98, 'Ground');
        this.platforms.create(this.scaleW * 1.9, this.scaleH * .98, 'Ground');

        /* forgot that the sprite is a rectangle and cant put holes in it
        this.platforms.create(1641, this.scaleH * .825, 'Wall');*/
        this.platforms.create(1130, this.scaleH * .825, 'Wall01');
        this.platforms.create(1322, 626, 'Wall02');
        this.platforms.create(1529, this.scaleH * .825, 'Wall03');
        this.platforms.create(1785, 626, 'Wall04');
        this.platforms.create(2090, this.scaleH * .825, 'Wall05');

        //creating different platforms
        this.platforms.create(this.scaleH, this.scaleW * .55, 'Platform').setScale(.05).refreshBody();

        this.platforms.create(this.scaleH * 0.5, this.scaleW * 0.55, 'Platform').setScale(.05).refreshBody();

        this.platforms.create(50, 300, 'Platform').setScale(.05).refreshBody();

        this.platforms.create(this.scaleH * .3, this.scaleW * .42, 'Platform').setScale(.05).refreshBody();

        this.platforms.create(this.scaleH * 1.1, this.scaleW * .42, 'Platform').setScale(.05).refreshBody();

        /*this.create(this.scaleH * 1.1, this.scaleW * .35, 'Flame');*/
        //creating the tent at the start
        /*this.tent = this.physics.add.staticGroup();
        this.tent.create(60, 550, 'tent').setScale(.5).refreshBody();*/

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

        this.cameras.main.setBounds(0, 0, 3000, 720); //720 is the height of screen aprox
        this.cameras.main.startFollow(this.player);

        //if there is overlap between player and stars they are passed to collectStar function.
        /*this.physics.add.overlap(this.player, this.stars, collectStarCoin, null, this);*/
    }



    update() {


        this.movePlayer();


    }

    //function for moving the player
    movePlayer() {
        /*var x = 50;*/
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-150);
            this.player.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(300);
            this.player.anims.play('right', true);
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }
        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-350);
        }

        /*
                //maybe a glide function?
                if (this.cursors.down.isDown) {
                    this.player.setVelocityY(x);
                }
        */


    }

    /*          collectStarCoin(this.player, this.star) {
                  star.disableBody(true, true);

                  score += 1;
                  scoreText.setText('Score: ' + score);
              }*/
    startScene(targetScene) {
        this.scene.start(targetScene);
    }
}
