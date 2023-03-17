/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Infinite extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("infinite", "./Infinite/costumes/infinite.svg", {
        x: 149.25,
        y: 109.2046875
      }),
      new Costume("a", "./Infinite/costumes/a.svg", {
        x: 44.5,
        y: 22.174999999999955
      })
    ];

    this.sounds = [new Sound("ポップ", "./Infinite/sounds/ポップ.wav")];

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
    this.goto(222, -19);
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
    this.stage.vars._40 = "i";
    this.stage.vars.time = "00 : 00 : 00";
    this.stage.watchers.level.visible = true;
    this.stage.watchers.lines.visible = true;
    this.stage.watchers.score.visible = true;
    this.stage.watchers.time.visible = true;
    this.stage.watchers.highscore.visible = true;
    this.broadcast("選択完了");
  }
}
