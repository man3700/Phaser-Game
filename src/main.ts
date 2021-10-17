import Phaser   = require("phaser");

import { GameConfig, Game } from "./types";

import TitleScene   from "./scenes/titleScene";
import IngameScene  from "./scenes/ingameScene";

const config:GameConfig = {
    width:  900,
    height: 600,
    type:   Phaser.AUTO,
    backgroundColor: 0x778899,
    physics: {
        default: "arcade",
        arcade: {
            gravity: { x: 0, y: 0 },
            debug: true
        }
    }
}

const game:Game = new Phaser.Game(config);

game.scene.add("Title", TitleScene);
game.scene.add("Ingame", IngameScene);

window.onload = function() {
    game.scene.start("Ingame");
}
