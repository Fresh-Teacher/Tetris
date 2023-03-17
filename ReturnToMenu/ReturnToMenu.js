/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ReturnToMenu extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "コスチューム1",
        "./ReturnToMenu/costumes/コスチューム1.svg",
        { x: 0, y: 0 }
      ),
      new Costume("Button3-b", "./ReturnToMenu/costumes/Button3-b.svg", {
        x: 102.83100000000002,
        y: 26.67999999999998
      })
    ];

    this.sounds = [new Sound("ポップ", "./ReturnToMenu/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "flag" }, this.whenIReceiveFlag),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game clear" },
        this.whenIReceiveGameClear
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game over" },
        this.whenIReceiveGameOver2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game clear" },
        this.whenIReceiveGameClear2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, -81);
    this.visible = false;
  }

  *whenIReceiveGameOver() {
    this.visible = true;
    while (true) {
      if (this.touching("mouse")) {
        this.effects.brightness = 5;
      } else {
        this.effects.brightness = -20;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.broadcast("flag");
  }

  *whenIReceiveFlag() {
    this.visible = false;
  }

  *whenIReceiveGameClear() {
    this.visible = true;
    while (true) {
      if (this.touching("mouse")) {
        this.effects.brightness = 5;
      } else {
        this.effects.brightness = -20;
      }
      yield;
    }
  }

  *whenIReceiveGameOver2() {
    if (this.toNumber(this.stage.vars.replay) === 0) {
      if (this.toString(this.stage.vars._40) === "m") {
        if (this.compare(this.stage.vars.M, this.stage.vars.score) < 0) {
          this.stage.vars.M = this.stage.vars.score;
        }
      }
      if (this.toString(this.stage.vars._40) === "i") {
        if (this.compare(this.stage.vars.I, this.stage.vars.score) < 0) {
          this.stage.vars.I = this.stage.vars.score;
        }
      }
      if (this.toString(this.stage.vars._40) === "u") {
        if (this.compare(this.stage.vars.U, this.stage.vars.score) < 0) {
          this.stage.vars.U = this.stage.vars.score;
        }
      }
    }
  }

  *whenIReceiveGameClear2() {
    if (this.toNumber(this.stage.vars.replay) === 0) {
      if (this.toString(this.stage.vars._40) === "m") {
        if (this.compare(this.stage.vars.M, this.stage.vars.score) < 0) {
          this.stage.vars.M = this.stage.vars.score;
        }
      }
      if (this.toString(this.stage.vars._40) === "i") {
        if (this.compare(this.stage.vars.I, this.stage.vars.score) < 0) {
          this.stage.vars.I = this.stage.vars.score;
        }
      }
      if (this.toString(this.stage.vars._40) === "u") {
        if (this.compare(this.stage.vars.U, this.stage.vars.score) < 0) {
          this.stage.vars.U = this.stage.vars.score;
        }
      }
      if (this.toString(this.stage.vars._40) === "t") {
        if (
          this.compare(0, this.timer) < 0 &&
          this.compare(this.timer, this.stage.vars.T) < 0
        ) {
          this.stage.vars.T = this.timer;
          this.stage.vars.TimeRecord =
            this.toString(
              this.itemOf(
                this.stage.vars.numbers,
                Math.floor(this.toNumber(this.stage.vars.T) / 3600)
              )
            ) +
            " : " +
            (this.toString(
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
              ));
        }
      }
    }
  }
}
