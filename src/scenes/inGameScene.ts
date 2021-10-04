import Phaser = require("phaser");

import { Arc, PhysicsBody, Text } from "../types";

class InGameScene extends Phaser.Scene {
    preload() {

    }

    create() {
        //  text
        const text:Text = this.add.text(450, 100, "InGame Scene");
        text.setOrigin(0.5, 0.5);


        //  circle
        const circle:Arc = this.add.circle(450, 300, 10, 0xffffff);
        this.physics.add.existing(circle);

        const circleBody = circle.body as PhysicsBody;
        circleBody.setVelocity(-200, 200);
        circleBody.setBounce(1, 1);
        circleBody.setCollideWorldBounds(true, 1, 1);


        //  left paddle
        const leftPaddle = this.add.rectangle(60, 300, 30, 90, 0xffffff);
        this.physics.add.existing(leftPaddle, true);

        const LPaddleBody = leftPaddle.body as PhysicsBody;

        this.physics.add.collider(leftPaddle, circle);
    }
}

export default InGameScene;
