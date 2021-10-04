import Phaser   = require("phaser");

import { GameConfig, Game } from "./types";

import TitleScene   from "./scenes/titleScene";
import InGameScene  from "./scenes/inGameScene";

const config:GameConfig = {
    width:  900,
    height: 600,
    type:   Phaser.AUTO,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { x: 0, y: 0 }
        }
    }
}

const game:Game = new Phaser.Game(config);

game.scene.add("titleScene", TitleScene);
game.scene.add("inGameScene", InGameScene);

window.onload = function() {
    game.scene.start("inGameScene");
}
