import { Body, Vector } from "matter";
import Phaser = require("phaser");

import { Arc, PhysicsBody, CursorKeys, Rectangle, PhysicsStaticBody, Vector2 } from "../types";

class IngameScene extends Phaser.Scene {

    //  cursor
    cursors:CursorKeys;

    //  objects
    circle:Arc;
    leftPaddle:Rectangle;
    rightPaddle:Rectangle;

    //  values
    paddleRightVelocity:Vector2;

    init() {
        this.paddleRightVelocity = new Phaser.Math.Vector2(0, 0);
    }

    preload() {

    }

    create() {
        //  circle
        this.circle = this.add.circle(450, 300, 10, 0xffffff);
        this.physics.add.existing(this.circle);

        const circleBody = this.circle.body as PhysicsBody;
        circleBody.setVelocity(-300, 300);
        circleBody.setBounce(1, 1);
        circleBody.setCollideWorldBounds(true, 1, 1);
        circleBody.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(-200, 200));

        
        //  left paddle
        this.leftPaddle = this.add.rectangle(60, 300, 30, 90, 0xff0000, 1);
        this.physics.add.existing(this.leftPaddle, true);


        //  right paddle
        this.rightPaddle = this.add.rectangle(840, 300, 30, 90, 0x0000ff, 1);
        this.physics.add.existing(this.rightPaddle, true);


        //  add collider to objects
        this.physics.add.collider(this.leftPaddle, this.circle);
        this.physics.add.collider(this.rightPaddle, this.circle);


        //  create cursor
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        //  left paddle movements
        const LPaddleBody = this.leftPaddle.body as PhysicsStaticBody;
        
        if (this.cursors.up.isDown)
        {
            this.leftPaddle.y -= 5;
            LPaddleBody.updateFromGameObject();
        }
        else if (this.cursors.down.isDown)
        {
            this.leftPaddle.y += 5;
            LPaddleBody.updateFromGameObject();
        }

        

        //  right paddle movements
        const RPaddleBody = this.rightPaddle.body as PhysicsStaticBody;
        const difference = this.circle.y - this.rightPaddle.y;
        
        if (Math.abs(difference) >= 30)
        {
            if (difference < 0)
            {
                //  ball is above the paddle
                this.paddleRightVelocity.y -= 0.5;
                if (this.paddleRightVelocity.y < -20)
                    this.paddleRightVelocity.y = -20;
            }
            else if (difference > 0)
            {
                //  ball is below the paddle
                this.paddleRightVelocity.y += 0.5;
                if (this.paddleRightVelocity.y > 20)
                    this.paddleRightVelocity.y = 20;
            }
        }
        else {
            //  ball is 
            this.paddleRightVelocity.y = 0;
        }

        this.rightPaddle.y += this.paddleRightVelocity.y;
        RPaddleBody.updateFromGameObject();
    }
}

export default IngameScene;
