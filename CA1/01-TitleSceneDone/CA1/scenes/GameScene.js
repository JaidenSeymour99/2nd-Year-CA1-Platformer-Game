class GameScene extends Phaser.Scene {
    constructor() {
        super('Game');
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
