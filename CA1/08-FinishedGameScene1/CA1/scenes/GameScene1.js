class GameScene1 extends Phaser.Scene {
    constructor() {
        super('Game1');

        let oof;
        let coin;
        let bgMusic;
    }

    

    init() {
        console.log("Level 1");
        //setting the game heigth and width to scaleW and scaleH
        this.scaleW = this.sys.game.config.width;
        this.scaleH = this.sys.game.config.height;

        

        /*var score = 0;*/

    }

    create() {

        this.isPlayerAlive = true;


        //adding sound
        //let bgMusic = this.sound.add('bgMusic');
        //bgMusic.play();


        this.oof = this.sound.add('oof');
        this.coin = this.sound.add('coin');

        /*this.bgMusic = this.sound.add('bgMusic');
        this.bgMusic.play();*/



        this.score = 0;
        this.scoreTextX = 100;
        //adding the temp sky image
        this.add.image(1500, 330, 'bg');
        this.add.image(3100, 330, 'bg');

        //spikes
        this.spikes00 = this.add.image(1785, 546, 'Spikes');
        this.spikes01 = this.add.image(1322, 546, 'Spikes');

        //creating the wall  at the end of the level to finish
        this.endWall = this.add.image(3600, this.scaleH * .825, 'endWall');

        //asigning platforms to the physics engine as a static object
        this.platforms = this.physics.add.staticGroup();



        //creating static platform for the ground to stand on
        this.platforms.create(this.scaleH * 1.1, this.scaleH * .98, 'Ground');
        this.platforms.create(2490, this.scaleH * .98, 'Ground');
        this.platforms.create(this.scaleW * 1.9, this.scaleH * .98, 'Ground');
        this.platforms.create(4000, this.scaleH * .98, 'Ground');

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


        //making a border on the left and right side so the player cant go past the left.
        this.platforms.create(-60, 0, 'tempPlatformVert').setScale(3.5).refreshBody();
        this.platforms.create(3770, 0, 'tempPlatformVert').setScale(3.5).refreshBody();



        //creating ally
        this.enemy = this.physics.add.sprite(1050, 400, 'Enemy');
        this.enemy.setScale(2);
        this.enemy01 = this.physics.add.sprite(40, 600, 'Enemy');
        this.enemy01.setScale(2);
        this.enemy02 = this.physics.add.sprite(2200, 400, 'Enemy');
        this.enemy02.setScale(2);

        this.speach = this.add.image(1150, 415, 'Speach');
        this.speach.setScale(2);
        this.add.text(1100, 400, "Watch out\nfor spikes!");

        this.speach = this.add.image(150, 580, 'Speach');
        this.speach.setScale(3);
        this.add.text(70, 560, "Collect as many\ncoins as you can!")

        this.speach = this.add.image(2350, 400, 'Speach');
        this.speach.setScale(3);
        this.add.text(2300, 385, "Jump past\nthe enemies")





        //makes sure the player cant escape the bounds of the screen dont need this anymore as ive changed what i want the game to be like.
        /*this.player.setCollideWorldBounds(true)*/



        //adding stars to collect.
        this.star00 = this.physics.add.group({
            key: 'Star',
            repeat: 5,
            setXY: {
                x: 240,
                y: 650,
                stepX: 130
            }
        });
        this.star01 = this.physics.add.group({
            key: 'Star',
            repeat: 1,
            setXY: {
                x: 215,
                y: 400,
                stepX: 145,
                stepY: 130
            }
        });
        this.star02 = this.physics.add.group({
            key: 'Star',
            repeat: 1,
            setXY: {
                x: 720,
                y: 530,
                stepX: 75,
                stepY: -130
            }
        });

        this.star03 = this.physics.add.group({
            key: 'Star',
            repeat: 1,
            setXY: {
                x: 1150,
                y: 300,
                stepX: 50,
                stepY: 0
            }
        });
        this.star04 = this.physics.add.group({
            key: 'Star',
            repeat: 3,
            setXY: {
                x: 2000,
                y: 300,
                stepX: 75,
                stepY: 0
            }
        });
        //adding a big star for extra points.
        this.bigStar = this.physics.add.group({
            key: 'Star',
            repeat: 2,
            setXY: {
                x: 50,
                y: 100,
                stepX: 1475,
                stepY: 0
            }
        });
        //making the star double the size 
        this.bigStar.children.iterate((child) => {
            child.setScale(2, 2);
        });

        //adding a group of enemies
        this.enemies = this.physics.add.group({
            key: 'Enemies',
            repeat: 2,
            setXY: {
                x: 2500,
                y: 550,
                stepX: 300,
                stepY: 0
            }
        })
        this.enemies.children.iterate((child) => {
            child.setScale(2, 2);
        })
        //animations for enemies will only be using one frame as i ran out of time to use all of them.
        this.anims.create({
            key: 'turnOrk',
            frames: [{
                key: 'Enemies',
                frame: 1
            }],
            frameRate: 20
        });

        //making the key to end the game
        this.key = this.physics.add.sprite(3350, 500, 'Key')
        this.key.setScale(2);

        //creating the player sprite
        this.player = this.physics.add.sprite(90, 570, 'Dude2');
        this.player.setScale(3);

        //animation frames for dude
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('Dude2', {
                start: 7,
                end: 9
            }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'leftAttack',
            frames: this.anims.generateFrameNumbers('Dude2', {
                start: 12,
                end: 10
            }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{
                key: 'Dude2',
                frame: 6
            }],
            frameRate: 20
        });

        this.anims.create({
            key: 'turnAttack',
            frames: [{
                key: 'Dude2',
                start: 0,
                end: 3
            }],
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('Dude2', {
                start: 3,
                end: 5
            }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'rightAttack',
            frames: this.anims.generateFrameNumbers('Dude2', {
                start: 0,
                end: 3
            }),
            frameRate: 10,
            repeat: -1
        });
        this.scoreText01 = this.add.text(this.scoreTextX, 100, 'Score: ' + this.score, {
            fontSize: '32px',
            fill: '#FFFF'
        });
        this.scoreText02 = this.add.text(this.scoreTextX + 1200, 100, 'Score: ' + this.score, {
            fontSize: '32px',
            fill: '#FFFF'
        });
        this.scoreText03 = this.add.text(this.scoreTextX + 2700, 100, 'Score: ' + this.score, {
            fontSize: '32px',
            fill: '#FFFF'
        });


        //accepting input from the user.
        this.cursors = this.input.keyboard.createCursorKeys();

        //adds collision between the player and platforms, stars and platform, enemy's and platforms and ally and platforms.
        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.enemy, this.platforms);
        this.physics.add.collider(this.enemy01, this.platforms);
        this.physics.add.collider(this.enemy02, this.platforms);
        this.physics.add.collider(this.star00, this.platforms);
        this.physics.add.collider(this.star01, this.platforms);
        this.physics.add.collider(this.star02, this.platforms);
        this.physics.add.collider(this.star03, this.platforms);
        this.physics.add.collider(this.star04, this.platforms);
        this.physics.add.collider(this.bigStar, this.platforms);
        this.physics.add.collider(this.enemies, this.platforms);
        this.physics.add.collider(this.key, this.platforms);


        //adding the overlap to allow the player to pick up the stars
        this.physics.add.overlap(this.player, this.star00, this.collectStar, null, this);
        this.physics.add.overlap(this.player, this.star01, this.collectStar, null, this);
        this.physics.add.overlap(this.player, this.star02, this.collectStar, null, this);
        this.physics.add.overlap(this.player, this.star03, this.collectStar, null, this);
        this.physics.add.overlap(this.player, this.star04, this.collectStar, null, this);
        this.physics.add.overlap(this.player, this.bigStar, this.collectBigStar, null, this);
        this.physics.add.overlap(this.player, this.key, this.collectKey, null, this);

        this.physics.add.overlap(this.player, this.enemies, this.hitEnemies, null, this);

        //setting the bounds for the camera to go to
        this.cameras.main.setBounds(0, 0, 3700, 720); //720 is the height of screen aprox
        //camera follows the player
        this.cameras.main.startFollow(this.player);


    }


    update() {

        if (!this.isPlayerAlive) {
            return;
        }
        /*

        
        //trying to make the score  text follow the player..
        // Failed
                if (this.cursors.right.isDown) {
                    console.log("following");
                    this.scoreTextX = +20;

                }*/
        this.movePlayer();
        /*
                //dont have time to do this
                this.moveEnemies();*/
        /*  
        ////////////also not working trying to make the score text stay on the screen
        this.scoreText.children.iterate(function (child) {
                    child.setScrollFactor(0);
                });*/

        // spikes death camera shakes etc 
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.spikes00.getBounds())) {
            console.log("You died");
            this.oof.play();
            /*this.bgMusic.stop();*/
            this.cameras.main.shake(500, .02);

            this.time.delayedCall(500, function () {
                this.cameras.main.fade(500);
            }, [], this);

            this.isPlayerAlive = false;
            this.time.delayedCall(1000, function () {
                this.scene.restart();
                this.restart += 1;
            }, [], this);

            /*   this.startScene('GameOver');*/
        }
        //spikes death
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.spikes01.getBounds())) {
            console.log("You died");
            this.oof.play();
            /*this.bgMusic.stop();*/
            this.cameras.main.shake(500, .02);

            this.time.delayedCall(500, function () {
                this.cameras.main.fade(500);
            }, [], this);
            this.isPlayerAlive = false;
            this.time.delayedCall(1000, function () {
                this.scene.restart();
                this.restart += 1;
            }, [], this);

            /*   this.startScene('GameOver');*/
        }
        //end win
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.endWall.getBounds())) {
            console.log("You Win!");

            /*this.bgMusic.stop();*/
            this.time.delayedCall(500, function () {
                this.cameras.main.fade(500);
            }, [], this);

            this.isPlayerAlive = false;
            this.time.delayedCall(500, function () {
                this.startScene('GameOver');

            }, [], this);

            /*   this.startScene('GameOver');*/
        }

    }


    //function for moving the player added extra else if's for comfort.
    movePlayer() {
        /*     var x = 50;*/
        if (this.cursors.space.isDown && this.cursors.left.isDown) {
            this.player.setVelocityX(-200);
            this.player.anims.play('leftAttack', true);
        } else if (this.cursors.left.isDown && this.cursors.up.isDown & this.player.body.touching.down) {
            this.player.setVelocityY(-350);
            this.player.setVelocityX(-200);
            this.player.anims.play('left', true);
        } else if (this.cursors.left.isDown) {
            this.player.setVelocityX(-200);
            this.player.anims.play('left', true);
        } else if (this.cursors.space.isDown && this.cursors.right.isDown) {
            this.player.setVelocityX(200);
            this.player.anims.play('rightAttack', true);
        } else if (this.cursors.right.isDown && this.cursors.up.isDown & this.player.body.touching.down) {
            this.player.setVelocityY(-350);
            this.player.setVelocityX(200);
            this.player.anims.play('right', true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(200);
            this.player.anims.play('right', true);
        } else if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-350);
        } else if (this.cursors.space.isDown) {
            this.player.setVelocityX(0);
            this.player.anims.play('turnAttack');
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('turn');
        }


        /*                //maybe a glide function?
                        if (this.cursors.down.isDown) {
                            this.player.setVelocityY(x);
                        }
                */
    }

    //collecting star / big star / key
    collectStar(player, star00, score) {
        star00.disableBody(true, true);
        this.coin.play();
        this.score += 10;
        this.scoreText01.setText('Score: ' + this.score);
        //work around for the score text not moving
        this.scoreText02.setText('Score: ' + this.score);
        this.scoreText03.setText('Score: ' + this.score);
    }
    collectBigStar(player, bigStar, score) {
        bigStar.disableBody(true, true);
        this.coin.play();
        this.score += 50;
        this.scoreText01.setText('Score: ' + this.score);
        this.scoreText02.setText('Score: ' + this.score);
        this.scoreText03.setText('Score: ' + this.score);
    }
    collectKey(player, key, score) {
        key.disableBody(true, true);
        this.coin.play();
        this.score += 200;
        this.scoreText01.setText('Score: ' + this.score);
        this.scoreText02.setText('Score: ' + this.score);
        this.scoreText03.setText('Score: ' + this.score);
    }
    //if you hit the enemies you die and it resets the level.
    hitEnemies(player, enemies) {
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.enemies)) {
            console.log("You died");
            // a small bug here the sound doesn't play straight away think it's because of the amount of assets being loaded.
            this.oof.play();
            /*this.bgMusic.stop();*/
            this.cameras.main.shake(500, .02);

            this.time.delayedCall(500, function () {
                this.cameras.main.fade(500);
            }, [], this);
            this.isPlayerAlive = false;
            this.time.delayedCall(1000, function () {
                this.scene.restart();

            }, [], this);
        }
    }

    startScene(targetScene) {
        this.scene.start(targetScene);
    }
}
