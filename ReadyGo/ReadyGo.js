/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ReadyGo extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ready...", "./ReadyGo/costumes/ready....svg", {
        x: 81.75758396533041,
        y: 43.250880281690144
      }),
      new Costume("go!", "./ReadyGo/costumes/go!.svg", {
        x: 39.58586396533042,
        y: 39.25076028169016
      })
    ];

    this.sounds = [new Sound("ポップ", "./ReadyGo/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "選択完了" }, this.whenIReceive)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceive() {
    if (this.toString(this.stage.vars._40) === "m") {
      this.stage.vars.highscore = this.stage.vars.M;
    }
    if (this.toString(this.stage.vars._40) === "i") {
      this.stage.vars.highscore = this.stage.vars.I;
    }
    if (this.toString(this.stage.vars._40) === "u") {
      this.stage.vars.highscore = this.stage.vars.U;
    }
    if (this.toString(this.stage.vars._40) === "t") {
      this.stage.vars.timeRecord = this.stage.vars.TimeRecord;
    }
    this.goto(-300, 0);
    this.costume = "ready...";
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      this.goto(this.x / 2, 0);
      yield;
    }
    this.goto(Math.abs(this.x), 0);
    yield* this.wait(0.5);
    this.costume = "go!";
    this.stage.vars._39 = 1;
    this.stage.vars._17 = this.itemOf(this.stage.vars._4, 0);
    this.stage.vars._4.splice(0, 1);
    this.restartTimer();
    this.broadcast("スタート");
    yield* this.wait(0.2);
    for (let i = 0; i < 7; i++) {
      this.goto(this.x * 3, 0);
      yield;
    }
    this.visible = false;
  }
}
