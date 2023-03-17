/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GameOver2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("gameclear", "./GameOver2/costumes/gameclear.png", {
        x: 357,
        y: 42
      })
    ];

    this.sounds = [new Sound("ポップ", "./GameOver2/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "game clear" },
        this.whenIReceiveGameClear
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "flag" }, this.whenIReceiveFlag)
    ];
  }

  *whenIReceiveGameClear() {
    this.size = 130;
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.goto(0, 64);
    this.visible = false;
  }

  *whenIReceiveFlag() {
    this.visible = false;
  }
}
