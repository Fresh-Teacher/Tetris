/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ren extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Ren/costumes/1.svg", {
        x: 21.73658143508439,
        y: 28.275203603630985
      }),
      new Costume("2", "./Ren/costumes/2.svg", {
        x: 24.104870000000005,
        y: 27.775184999999965
      }),
      new Costume("3", "./Ren/costumes/3.svg", {
        x: 24.986580000000004,
        y: 27.025184999999937
      }),
      new Costume("4", "./Ren/costumes/4.svg", {
        x: 25.118290000000002,
        y: 27.025184999999908
      }),
      new Costume("5", "./Ren/costumes/5.svg", {
        x: 25.854870000000005,
        y: 27.02518499999988
      }),
      new Costume("6", "./Ren/costumes/6.svg", {
        x: 25.118290000000002,
        y: 27.02518499999985
      }),
      new Costume("7", "./Ren/costumes/7.svg", {
        x: 25.236580000000004,
        y: 27.525184999999823
      }),
      new Costume("8", "./Ren/costumes/8.svg", {
        x: 24.868290000000002,
        y: 27.525184999999794
      }),
      new Costume("9", "./Ren/costumes/9.svg", {
        x: 24.868290000000002,
        y: 27.525184999999766
      }),
      new Costume("10", "./Ren/costumes/10.svg", {
        x: 35.986580000000004,
        y: 27.275184999999738
      }),
      new Costume("11", "./Ren/costumes/11.svg", {
        x: 30.486580000000004,
        y: 28.52518499999971
      }),
      new Costume("12", "./Ren/costumes/12.svg", {
        x: 34.736580000000004,
        y: 27.52518499999968
      }),
      new Costume("13", "./Ren/costumes/13.svg", {
        x: 35.986580000000004,
        y: 27.525184999999652
      }),
      new Costume("14", "./Ren/costumes/14.svg", {
        x: 35.986580000000004,
        y: 27.525184999999624
      }),
      new Costume("15", "./Ren/costumes/15.svg", {
        x: 36.986580000000004,
        y: 27.275184999999595
      }),
      new Costume("16", "./Ren/costumes/16.svg", {
        x: 36.986580000000004,
        y: 27.275184999999567
      }),
      new Costume("17", "./Ren/costumes/17.svg", {
        x: 36.986580000000004,
        y: 27.27518499999954
      }),
      new Costume("18", "./Ren/costumes/18.svg", {
        x: 36.986580000000004,
        y: 27.27518499999951
      }),
      new Costume("19", "./Ren/costumes/19.svg", {
        x: 36.986580000000004,
        y: 27.27518499999948
      }),
      new Costume("20", "./Ren/costumes/20.svg", {
        x: 41.854870000000005,
        y: 26.775184999999453
      }),
      new Costume("21", "./Ren/costumes/21.svg", {
        x: 35.104870000000005,
        y: 27.525184999999993
      }),
      new Costume("22", "./Ren/costumes/22.svg", {
        x: 38.604870000000005,
        y: 27.77517499999996
      }),
      new Costume("23", "./Ren/costumes/23.svg", {
        x: 40.354870000000005,
        y: 27.77517499999996
      }),
      new Costume("24", "./Ren/costumes/24.svg", {
        x: 40.354870000000005,
        y: 27.77517499999996
      }),
      new Costume("25", "./Ren/costumes/25.svg", {
        x: 40.354870000000005,
        y: 27.77517499999996
      })
    ];

    this.sounds = [new Sound("ポップ", "./Ren/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "ren" }, this.whenIReceiveRen)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveRen() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.costume = this.stage.vars.ren;
    this.effects.clear();
    this.goto(-197, 56);
    this.visible = true;
    yield* this.wait(0.5);
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }
}
