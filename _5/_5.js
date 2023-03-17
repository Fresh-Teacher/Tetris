/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("perfect clear", "./_5/costumes/perfect clear.svg", {
        x: 80.66551681066667,
        y: 34.16556636946663
      })
    ];

    this.sounds = [new Sound("ポップ", "./_5/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "perfect clear" },
        this.whenIReceivePerfectClear
      )
    ];

    this.vars._1 = 10;
  }

  *whenGreenFlagClicked() {
    this.goto(-60, 60);
    this.size = 45;
    this.visible = false;
  }

  *whenIReceivePerfectClear() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.size = 45;
    this.vars._1 = 10;
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      this.size += this.toNumber(this.vars._1);
      this.vars._1--;
      yield;
    }
    yield* this.wait(1);
    for (let i = 0; i < 10; i++) {
      this.size += -2 * this.toNumber(this.vars._1);
      this.vars._1++;
      yield;
    }
    this.visible = false;
  }
}
