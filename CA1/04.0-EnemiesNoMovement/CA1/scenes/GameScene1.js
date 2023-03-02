class GameScene1 extends Phaser.Scene {
    constructor() {
        super('Game1');
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
        this.score = 0;
        this.scoreTextX = 100;
        //adding the temp sky image
        this.add.image(1500, 330, 'bg');
        this.add.image(3100, 330, 'bg');

        //spikes
        this.spikes00 = this.add.image(1785, 546, 'Spikes');
        this.spikes01 = this.add.image(1322, 546, 'Spikes');

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

        this.speach = this.add.image(1150, 415, 'Speach');
        this.speach.setScale(2);
        this.add.text(1100, 400, "Watch out\nfor spikes!");

        this.speach = this.add.image(150, 580, 'Speach');
        this.speach.setScale(3);
        this.add.text(70, 560, "Collect as many\ncoins as you can!")






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
        this.Enemies = this.add.group({
            key: 'Enemies',
            repeat: 4,
            setXY: {
                x: 2500,
                y: 500,
                stepX: 200,
                stepY: 0
            }
        })
        this.Enemies.children.iterate((child) => {
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
        this.physics.add.collider(this.star00, this.platforms);
        this.physics.add.collider(this.star01, this.platforms);
        this.physics.add.collider(this.star02, this.platforms);
        this.physics.add.collider(this.star03, this.platforms);
        this.physics.add.collider(this.star04, this.platforms);
        this.physics.add.collider(this.bigStar, this.platforms);
        this.physics.add.collider(this.Enemies, this.platforms);

        //adding the overlap to allow the player to pick up the stars
        this.physics.add.overlap(this.player, this.star00, this.collectStar, null, this);
        this.physics.add.overlap(this.player, this.star01, this.collectStar, null, this);
        this.physics.add.overlap(this.player, this.star02, this.collectStar, null, this);
        this.physics.add.overlap(this.player, this.star03, this.collectStar, null, this);
        this.physics.add.overlap(this.player, this.star04, this.collectStar, null, this);
        this.physics.add.overlap(this.player, this.bigStar, this.collectBigStar, null, this);

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

        /*
        ///////////not working      ////Solved////
                this.collectStar(player, stars) {
                    this.stars.disableBody(true, true);

                    score += 1;
                    this.scoreText.setText('Score: ' + score);
                }*/

        this.movePlayer();
        /*this.moveEnemies();*/
        /*  
        ////////////also not working trying to make the score text stay on the screen
        this.scoreText.children.iterate(function (child) {
                    child.setScrollFactor(0);
                });*/

        // death camera shakes etc 
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.spikes00.getBounds())) {
            console.log("You died");
            this.cameras.main.shake(500, .02);

            this.time.delayedCall(500, function () {
                this.cameras.main.fade(500);
            }, [], this);

            this.isPlayerAlive = false;
            this.time.delayedCall(1000, function () {
                this.scene.restart();

            }, [], this);

            /*   this.startScene('GameOver');*/
        }

        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.spikes01.getBounds())) {
            console.log("You died");
            this.cameras.main.shake(500, .02);

            this.time.delayedCall(500, function () {
                this.cameras.main.fade(500);
            }, [], this);
            this.isPlayerAlive = false;
            this.time.delayedCall(1000, function () {
                this.scene.restart();

            }, [], this);

            /*   this.startScene('GameOver');*/
        }
        /*        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), enemies[i].getBounds())) {
                    console.log("You died");
                    this.cameras.main.shake(500, .02);

                    this.time.delayedCall(500, function () {
                        this.cameras.main.fade(500);
                    }, [], this);
                    this.isPlayerAlive = false;
                    this.time.delayedCall(1000, function () {
                        this.scene.restart();

                    }, [], this);
                }*/
    }

    moveEnemies() {
        this.enemyMaxY = 300;
        this.enemyMinY = 600;
        this.speed = 10;

        let enemies = Enemies.getChildren();
        let numEnemies = enemies.length;
        for (let i = 0; i < numEnemies; i++) {
            // move enemies
            enemies[i].y += this.enemies[i].speed;
            // reverse movement if reached the edges
            if (enemies[i].y >= this.enemyMaxY && tenemies[i].speed > 0) {
                enemies[i].speed *= -1;
            } else if (enemies[i].y <= this.enemyMinY && enemies[i].speed < 0) {
                enemies[i].speed *= -1;
            }

        }
    }

    //function for moving the player added extra else if's for comfort.
    movePlayer() {
        /*     var x = 50;*/
        if (this.cursors.space.isDown && this.cursors.left.isDown) {
            this.player.setVelocityX(-150);
            this.player.anims.play('leftAttack', true);
        } else if (this.cursors.left.isDown && this.cursors.up.isDown & this.player.body.touching.down) {
            this.player.setVelocityY(-350);
            this.player.setVelocityX(-150);
            this.player.anims.play('left', true);
        } else if (this.cursors.left.isDown) {
            this.player.setVelocityX(-150);
            this.player.anims.play('left', true);
        } else if (this.cursors.space.isDown && this.cursors.right.isDown) {
            this.player.setVelocityX(150);
            this.player.anims.play('rightAttack', true);
        } else if (this.cursors.right.isDown && this.cursors.up.isDown & this.player.body.touching.down) {
            this.player.setVelocityY(-350);
            this.player.setVelocityX(150);
            this.player.anims.play('right', true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(500);
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

    collectStar(player, star00, score) {

        star00.disableBody(true, true);
        this.score += 10;
        this.scoreText01.setText('Score: ' + this.score);
        //work around for the score text not moving
        this.scoreText02.setText('Score: ' + this.score);
        this.scoreText03.setText('Score: ' + this.score);
    }
    /*    collectStar(player, star01, score) {
            star01.disableBody(true, true);
            this.score += 10;
            this.scoreText.setText('Score: ' + this.score);
        }
        collectStar(player, star02, score) {
            star02.disableBody(true, true);
            this.score += 10;
            this.scoreText.setText('Score: ' + this.score);
        }
        collectStar(player, star03, score) {
            star03.disableBody(true, true);
            this.score += 10;
            this.scoreText.setText('Score: ' + this.score);

        }*/
    collectBigStar(player, bigStar, score) {
        bigStar.disableBody(true, true);
        this.score += 50;
        this.scoreText01.setText('Score: ' + this.score);
        this.scoreText02.setText('Score: ' + this.score);
        this.scoreText03.setText('Score: ' + this.score);
    }



    startScene(targetScene) {
        this.scene.start(targetScene);
    }
}
