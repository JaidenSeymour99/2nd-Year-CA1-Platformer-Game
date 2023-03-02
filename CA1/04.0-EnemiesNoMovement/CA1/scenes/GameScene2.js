class GameScene2 extends Phaser.Scene {
    constructor() {
        super('Game2');
    }

    init() {
        console.log("Level 2");

    }

    create() {



    }

    update() {


    }


    startScene(targetScene) {
        this.scene.start(targetScene);
    }
}
