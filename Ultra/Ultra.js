/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ultra extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("infinite", "./Ultra/costumes/infinite.svg", {
        x: 71.25,
        y: 38.204687500000034
      }),
      new Costume("ultra", "./Ultra/costumes/ultra.png", { x: 122, y: 42 })
    ];

    this.sounds = [new Sound("ポップ", "./Ultra/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "選択" }, this.whenIReceive),
      new Trigger(Trigger.BROADCAST, { name: "選択完了" }, this.whenIReceive2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceive() {
    this.goto(-131, -115);
    this.visible = true;
    while (true) {
      if (this.touching("mouse")) {
        this.effects.brightness = 0;
      } else {
        this.effects.brightness = -30;
      }
      yield;
    }
  }

  *whenIReceive2() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    return;
  }

  *whenthisspriteclicked() {
    this.stage.vars._40 = "u";
    this.stage.vars.time = "00 : 00 : 00";
    this.stage.watchers.level.visible = true;
    this.stage.watchers.lines.visible = true;
    this.stage.watchers.score.visible = true;
    this.stage.watchers.time.visible = true;
    this.stage.watchers.highscore.visible = true;
    this.broadcast("選択完了");
  }
}
