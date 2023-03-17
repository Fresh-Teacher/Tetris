/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class TimeAttack extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("infinite", "./TimeAttack/costumes/infinite.svg", {
        x: 158.25,
        y: 36.204690000000056
      }),
      new Costume("timeattack", "./TimeAttack/costumes/timeattack.png", {
        x: 299,
        y: 42
      })
    ];

    this.sounds = [new Sound("ポップ", "./TimeAttack/sounds/ポップ.wav")];

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
    this.goto(-44, -29);
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
    this.stage.vars._40 = "t";
    this.stage.vars.time = "00 : 00 . 00";
    this.stage.watchers.level.visible = true;
    this.stage.watchers.lines.visible = true;
    this.stage.watchers.score.visible = true;
    this.stage.watchers.time.visible = true;
    this.stage.watchers.timeRecord.visible = true;
    this.stage.vars.TimeRecord =
      this.toString(
        this.itemOf(
          this.stage.vars.numbers,
          Math.floor((this.toNumber(this.stage.vars.T) % 3600) / 60)
        )
      ) +
      " : " +
      this.toString(
        this.itemOf(
          this.stage.vars.numbers,
          Math.floor(this.toNumber(this.stage.vars.T) % 60)
        )
      ) +
      (" . " +
        this.toString(
          this.itemOf(
            this.stage.vars.numbers,
            Math.round(this.toNumber(this.stage.vars.T) * 100) % 100
          )
        ));
    this.broadcast("選択完了");
  }
}
