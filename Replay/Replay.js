/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Replay extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("infinite", "./Replay/costumes/infinite.svg", {
        x: 88.2493852187499,
        y: 23.188857902809787
      }),
      new Costume("replay", "./Replay/costumes/replay.png", { x: 164, y: 52 }),
      new Costume("costume1", "./Replay/costumes/costume1.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("ポップ", "./Replay/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "選択" }, this.whenIReceive),
      new Trigger(Trigger.BROADCAST, { name: "選択完了" }, this.whenIReceive2),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];

    this.vars.decoding = 200;
    this.vars._ = [
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "進",
      "先",
      "大",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "進",
      "先",
      "大",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "進",
      "先",
      "大",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "進",
      "先",
      "大",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "進",
      "先",
      "大",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "進",
      "先",
      "大",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "進",
      "先",
      "大",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "進",
      "先",
      "大",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "進",
      "先",
      "大",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "侍",
      "先",
      "許",
      "先",
      "進",
      "先",
      "大",
      "先"
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceive() {
    this.goto(130, -115);
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
    yield* this.askAndWait("Replay data?");
    this.say("loading...");
    yield* this.wait(0.1);
    this.stage.vars.rawReplayData = this.answer;
    yield* this._();
  }

  *_() {
    this.vars._ = [];
    this.stage.vars._12 = [];
    this.stage.vars._40 = this.letterOf(this.stage.vars.rawReplayData, 0);
    this.stage.vars._4 = [];
    this.vars.decoding = 1;
    while (
      !this.stringIncludes(
        this.toString(this.stage.vars._49),
        this.letterOf(
          this.stage.vars.rawReplayData,
          this.toNumber(this.vars.decoding)
        )
      )
    ) {
      this.vars.decoding++;
      this.stage.vars._4.push(
        this.letterOf(this.stage.vars.rawReplayData, this.vars.decoding - 1)
      );
    }
    while (
      !(
        this.compare(
          this.vars.decoding,
          this.toString(this.stage.vars.rawReplayData).length
        ) === 0
      )
    ) {
      this.vars.decoding++;
      if (
        this.arrayIncludes(
          this.stage.vars.numberlist,
          this.letterOf(this.stage.vars.rawReplayData, this.vars.decoding - 1)
        )
      ) {
        this.stage.vars._12.splice(
          this.stage.vars._12.length - 1,
          1,
          this.toString(
            this.itemOf(this.stage.vars._12, this.stage.vars._12.length - 1)
          ) +
            this.letterOf(this.stage.vars.rawReplayData, this.vars.decoding - 1)
        );
      } else {
        if (
          this.stringIncludes(
            this.toString(this.stage.vars._49),
            this.letterOf(this.stage.vars.rawReplayData, this.vars.decoding - 1)
          )
        ) {
          this.vars._.push(
            this.letterOf(this.stage.vars.rawReplayData, this.vars.decoding - 1)
          );
          this.stage.vars._12.push("");
        } else {
          yield* this.sayAndWait("WRONG DATA", 2);
          return;
        }
      }
    }
    this.vars.decoding = 0;
    while (!(this.compare(this.vars.decoding, this.vars._.length) === 0)) {
      this.vars.decoding++;
      this.stage.vars.decoding2 = 0;
      this.stage.vars._50 = "";
      while (
        !(
          this.compare(
            this.letterOf(this.stage.vars._49, this.stage.vars.decoding2 - 1),
            this.itemOf(this.vars._, this.vars.decoding - 1)
          ) === 0
        )
      ) {
        this.stage.vars.decoding2++;
      }
      this.stage.vars.decoding2--;
      for (let i = 0; i < 7; i++) {
        this.stage.vars._50 =
          this.toString(this.toNumber(this.stage.vars.decoding2) % 2) +
          this.toString(this.stage.vars._50);
        this.stage.vars.decoding2 =
          (this.toNumber(this.stage.vars.decoding2) -
            (this.toNumber(this.stage.vars.decoding2) % 2)) /
          2;
      }
      this.stage.vars.replayData2.push(this.stage.vars._50);
    }
    this.say("");
    if (this.toString(this.stage.vars._40) === "m") {
      this.stage.watchers.level.visible = true;
      this.stage.watchers.lines.visible = true;
      this.stage.watchers.score.visible = true;
      this.stage.watchers.time.visible = true;
      this.stage.watchers.highscore.visible = true;
      this.broadcast("選択完了");
    } else {
      if (this.toString(this.stage.vars._40) === "i") {
        this.stage.watchers.level.visible = true;
        this.stage.watchers.lines.visible = true;
        this.stage.watchers.score.visible = true;
        this.stage.watchers.time.visible = true;
        this.stage.watchers.highscore.visible = true;
        this.broadcast("選択完了");
      } else {
        if (this.toString(this.stage.vars._40) === "t") {
          this.stage.vars._40 = "t";
          this.stage.watchers.level.visible = true;
          this.stage.watchers.lines.visible = true;
          this.stage.watchers.score.visible = true;
          this.stage.watchers.time.visible = true;
          this.stage.watchers.timeRecord.visible = true;
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
          this.broadcast("選択完了");
        } else {
          if (this.toString(this.stage.vars._40) === "u") {
            this.stage.vars._40 = "u";
            this.stage.watchers.level.visible = true;
            this.stage.watchers.lines.visible = true;
            this.stage.watchers.score.visible = true;
            this.stage.watchers.time.visible = true;
            this.stage.watchers.highscore.visible = true;
            this.broadcast("選択完了");
          }
        }
      }
    }
    this.stage.vars.replay = 1;
    this.stage.vars._52 = 1;
    this.stage.vars._51 = 0;
  }
}
