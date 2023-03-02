class GameScene1 extends Phaser.Scene {
    constructor() {
        super('Game1');
    }

    init() {
        console.log("Level 1");

    }

    create() {



    }

    update() {


    }


    startScene(targetScene) {
        this.scene.start(targetScene);
    }
}
