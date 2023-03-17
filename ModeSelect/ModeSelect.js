/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ModeSelect extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("コスチューム1", "./ModeSelect/costumes/コスチューム1.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("ポップ", "./ModeSelect/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "選択" }, this.whenIReceive),
      new Trigger(Trigger.BROADCAST, { name: "選択完了" }, this.whenIReceive2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceive() {
    this.goto(0, 0);
    this.visible = true;
    this.moveBehind();
  }

  *whenIReceive2() {
    this.visible = false;
  }
}
