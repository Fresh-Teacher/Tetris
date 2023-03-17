/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ReplayData extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Button3-b", "./ReplayData/costumes/Button3-b.svg", {
        x: 82.31998500000003,
        y: 10.675414999999987
      })
    ];

    this.sounds = [new Sound("ポップ", "./ReplayData/sounds/ポップ.wav")];

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
        { name: "game clear" },
        this.whenIReceiveGameClear2
      )
    ];

    this.vars._ = 1776;
    this.vars._2 =
      "盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛百百百盛盛盛盛盛盛盛先先先盛盛侍診診診大盛盛先先先侍侍侍侍侍侍侍侍盛盛先先先盛盛盛盛盛盛盛先先盛盛盛盛盛盛盛盛盛許許許許許許許許盛先先先盛盛先先先盛盛盛盛盛盛盛百百百侍侍侍侍侍侍侍侍侍盛盛先先先渦渦許盛盛盛盛先先先盛大診診盛盛盛盛盛盛盛進進進盛盛先先先盛盛百百盛盛診診診盛盛盛先先先盛許許許偵偵偵許許盛盛先先盛侍侍侍侍侍侍侍侍許許許落先先盛診診診侍侍侍侍侍先先先盛盛盛盛盛百百許許許許偵偵偵綱綱煙煙煙煙煙煙煙煙煙煙煙煙煙縮縮縮煙煙煙縮縮縮煙煙煙煙煙煙煙煙縮縮縮縮盛盛盛盛盛盛盛先先先盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛進進進進盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛先先盛盛盛盛盛盛百百百盛盛盛盛盛盛盛盛侍侍侍侍侍侍侍侍盛盛盛盛進進進盛盛許許盛盛盛盛盛盛盛先先瘍瘍憂診診診侍侍侍侍侍盛盛盛盛盛先先先先盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛侍侍盛盛盛侍侍侍盛盛盛盛盛盛盛盛盛先先先許許許偵偵偵偵許許綱煙煙煙煙煙煙煙煙煙煙煙煙煙煙煙煙煙煙縮縮縮煙煙煙縮縮縮縮縮煙煙煙煙煙盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛許許許許盛盛許許許許盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛許許許許許許許許許盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛侍侍侍盛盛盛侍侍侍侍盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛許盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛侍侍侍盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛許許許盛盛盛盛盛盛盛盛盛盛侍侍侍侍盛盛盛許許許盛盛侍侍侍侍盛許許許盛盛侍侍侍侍許許許侍侍侍侍許許侍侍侍侍盛許許許侍侍侍侍許許許侍侍侍侍許許許侍侍侍盛許許許許侍侍盛盛許許侍侍侍侍許許許侍侍侍侍許許許許侍侍侍侍許許許侍侍侍侍許許許侍侍侍侍盛許許許侍侍侍侍許許許侍侍侍侍盛許許盛盛侍侍侍侍盛許許侍侍侍侍許許許盛侍侍盛盛許許侍侍侍侍許許許侍侍侍盛許許許侍侍侍侍盛盛盛侍侍侍侍侍侍侍侍侍許許許許侍侍侍侍侍侍侍侍許許許許侍侍侍侍侍盛許許許許侍侍侍侍盛許許許侍侍侍許許許侍侍侍侍許許許侍侍侍殿許許許許許許許侍侍侍侍侍侍侍盛許許許許許許許許盛盛侍侍侍侍侍侍侍侍侍侍盛許許許許許許許許許許許許盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛侍侍侍侍侍侍侍侍盛盛盛盛盛盛盛盛先先先盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛許許許許許許許許許偵偵偵偵許許許許許盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛侍侍侍盛盛盛侍侍盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛百百百百偵偵偵偵許許許偵偵偵偵許許許許盛盛盛盛盛盛先先先先盛盛盛盛盛盛盛盛許渦渦進進盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛先先先盛盛盛盛盛盛盛盛許許許許許許許許盛盛盛盛盛侍侍侍侍盛盛盛盛盛盛先先先盛盛盛侍侍侍侍侍侍侍盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛大大大大盛煙煙煙煙煙煙煙煙煙煙煙煙煙煙煙煙煙煙漢大大盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛盛先先盛盛盛盛盛盛盛盛盛進漆漆侍侍侍漆漆漆盛盛盛盛盛盛許許許盛盛許許許盛盛先先先盛盛先先盛盛盛先先盛盛先先盛盛先先盛盛先先盛盛先盛盛盛先盛盛盛先先盛盛先先盛盛先";
    this.vars._3 = 0;
    this.vars._4 =
      "盛41百3盛7先3盛2侍1診3大1盛2先3侍8盛2先3盛7先2盛9許8盛1先3盛2先3盛7百3侍9盛2先3渦2許1盛4先3盛1大1診2盛7進3盛2先3盛2百2盛2診3盛3先3盛1許3偵3許2盛2先2盛1侍8許3落1先2盛1診3侍5先3盛5百2許4偵3綱2煙13縮3煙3縮3煙8縮4盛7先3盛77進4盛20先2盛6百3盛8侍8盛4進3盛2許2盛7先2瘍2憂1診3侍5盛5先4盛27侍2盛3侍3盛9先3許3偵4許2綱1煙18縮3煙3縮5煙5盛16許4盛2許4盛49許9盛168侍3盛3侍4盛15許1盛76侍3盛16許3盛10侍4盛3許3盛2侍4盛1許3盛2侍4許3侍4許2侍4盛1許3侍4許3侍4許3侍3盛1許4侍2盛2許2侍4許3侍4許4侍4許3侍4許3侍4盛1許3侍4許3侍4盛1許2盛2侍4盛1許2侍4許3盛1侍2盛2許2侍4許3侍3盛1許3侍4盛3侍9許4侍8許4侍5盛1許4侍4盛1許3侍3許3侍4許3侍3殿1許7侍7盛1許8盛2侍10盛1許12盛22侍8盛8先3盛18許9偵4許5盛170侍3盛3侍2盛57百4偵4許3偵4許4盛6先4盛8許1渦2進2盛24先3盛8許8盛5侍4盛6先3盛3侍7盛27大4盛1煙18漢1大2盛17先2盛9進1漆2侍3漆3盛6許3盛2許3盛2先3盛2先2盛3先2盛2先2盛2先2盛2先2盛2先1盛3先1盛3先2盛2先2盛2先1";
    this.vars._5 = 1;
  }

  *whenGreenFlagClicked() {
    this.goto(120, -120);
    this.visible = false;
  }

  *whenIReceiveGameOver() {
    if (
      /* no username */ "" === "horiir22" &&
      this.toNumber(this.stage.vars.replay) === 0
    ) {
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
  }

  *whenthisspriteclicked() {
    yield* this._();
    this.stage.watchers.replayData2.visible = true;
  }

  *whenIReceiveFlag() {
    this.visible = false;
  }

  *whenIReceiveGameClear() {
    if (
      /* no username */ "" === "horiir22" &&
      this.toNumber(this.stage.vars.replay) === 0
    ) {
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
  }

  *whenIReceiveGameClear2() {
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
      if (this.compare(this.timer, this.stage.vars.T) < 0) {
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

  *_() {
    this.vars._ = 0;
    this.stage.vars.replayData2 = [];
    this.vars._2 = "";
    for (let i = 0; i < this.stage.vars.replayData.length; i++) {
      this.vars._++;
      this.vars._2 =
        this.toString(this.vars._2) +
        this.letterOf(
          this.stage.vars._49,
          this.toNumber(
            this.letterOf(
              this.itemOf(this.stage.vars.replayData, this.vars._ - 1),
              0
            )
          ) *
            64 +
            (this.toNumber(
              this.letterOf(
                this.itemOf(this.stage.vars.replayData, this.vars._ - 1),
                1
              )
            ) *
              32 +
              (this.toNumber(
                this.letterOf(
                  this.itemOf(this.stage.vars.replayData, this.vars._ - 1),
                  2
                )
              ) *
                16 +
                (this.toNumber(
                  this.letterOf(
                    this.itemOf(this.stage.vars.replayData, this.vars._ - 1),
                    3
                  )
                ) *
                  8 +
                  (this.toNumber(
                    this.letterOf(
                      this.itemOf(this.stage.vars.replayData, this.vars._ - 1),
                      4
                    )
                  ) *
                    4 +
                    (this.toNumber(
                      this.letterOf(
                        this.itemOf(
                          this.stage.vars.replayData,
                          this.vars._ - 1
                        ),
                        5
                      )
                    ) *
                      2 +
                      this.toNumber(
                        this.letterOf(
                          this.itemOf(
                            this.stage.vars.replayData,
                            this.vars._ - 1
                          ),
                          6
                        )
                      ) *
                        1)))))
        );
    }
    this.vars._ = 1;
    this.vars._5 = 1;
    this.vars._3 = this.letterOf(this.vars._2, this.vars._ - 1);
    this.vars._5 = 1;
    this.vars._4 = "";
    for (let i = 0; i < this.stage.vars.replayData.length; i++) {
      this.vars._++;
      if (
        this.compare(
          this.vars._3,
          this.letterOf(this.vars._2, this.vars._ - 1)
        ) === 0
      ) {
        this.vars._5++;
      } else {
        this.vars._4 =
          this.toString(this.vars._4) +
          (this.toString(this.vars._3) + this.toString(this.vars._5));
        this.vars._5 = 1;
      }
      this.vars._3 = this.letterOf(this.vars._2, this.vars._ - 1);
    }
    this.stage.vars.replayData2.push(
      this.toString(this.stage.vars._40) +
        (this.stage.vars._13.join(" ") + this.toString(this.vars._4))
    );
  }
}
