/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GameOver extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("gameover", "./GameOver/costumes/gameover.png", {
        x: 328,
        y: 39
      })
    ];

    this.sounds = [new Sound("ポップ", "./GameOver/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.BROADCAST, { name: "flag" }, this.whenIReceiveFlag)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 64);
    this.visible = false;
  }

  *whenIReceiveGameOver() {
    this.size = 130;
    this.visible = true;
  }

  *whenIReceiveFlag() {
    this.visible = false;
  }
}
