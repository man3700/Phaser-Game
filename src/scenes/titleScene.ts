import Phaser = require("phaser");

import { Text } from "../types";

class TitleScene extends Phaser.Scene {

    preload() {

    }

    create() {
        var text:Text = this.add.text(450, 100, "Title Scene");
        text.setOrigin(0.5, 0.5);
    }
}

export default TitleScene;
