/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("tetris", "./_4/costumes/tetris.svg", {
        x: 95.25,
        y: 39.4375
      }),
      new Costume("t-spin", "./_4/costumes/t-spin.svg", {
        x: 39.397362559421,
        y: 19.016665818124636
      }),
      new Costume("triple", "./_4/costumes/triple.svg", {
        x: 31.87871631471512,
        y: 16.208380104342353
      }),
      new Costume("double", "./_4/costumes/double.svg", {
        x: 41.34815859501916,
        y: 16.47858580269812
      }),
      new Costume("single", "./_4/costumes/single.svg", {
        x: 33.17780015877028,
        y: 16.691216703163832
      }),
      new Costume("mini", "./_4/costumes/mini.svg", {
        x: 25.0853511791656,
        y: 18.897677577756724
      }),
      new Costume("back-to-back", "./_4/costumes/back-to-back.svg", {
        x: 48.64650328350589,
        y: 11.87486320204107
      })
    ];

    this.sounds = [new Sound("ポップ", "./_4/sounds/ポップ.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "tetris" },
        this.whenIReceiveTetris
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "t-spin" },
        this.whenIReceiveTSpin
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "t-spin triple" },
        this.whenIReceiveTSpinTriple
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "t-spin double" },
        this.whenIReceiveTSpinDouble
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "t-spin single" },
        this.whenIReceiveTSpinSingle
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "t-spin mini" },
        this.whenIReceiveTSpinMini
      ),
      new Trigger(Trigger.BROADCAST, { name: "mini" }, this.whenIReceiveMini),
      new Trigger(
        Trigger.BROADCAST,
        { name: "back-to-back" },
        this.whenIReceiveBackToBack
      )
    ];
  }

  *whenIReceiveTetris() {
    this.effects.clear();
    this.costume = "tetris";
    this.createClone();
  }

  *whenGreenFlagClicked() {
    this.effects.clear();
    this.visible = false;
  }

  *startAsClone() {
    if (this.costume.name === "tetris") {
      this.goto(-122, -120);
      this.visible = true;
      yield* this.wait(0.5);
      for (let i = 0; i < 10; i++) {
        this.effects.ghost += 10;
        yield;
      }
      this.deleteThisClone();
    } else {
      if (this.costume.name === "t-spin") {
        this.goto(-193, -81);
        this.visible = true;
        yield* this.wait(0.5);
        for (let i = 0; i < 10; i++) {
          this.effects.ghost += 10;
          yield;
        }
        this.deleteThisClone();
      } else {
        if (this.costume.name === "triple") {
          this.goto(-193, -110);
          this.visible = true;
          yield* this.wait(0.5);
          for (let i = 0; i < 10; i++) {
            this.effects.ghost += 10;
            yield;
          }
          this.deleteThisClone();
        } else {
          if (this.costume.name === "double") {
            this.goto(-193, -110);
            this.visible = true;
            yield* this.wait(0.5);
            for (let i = 0; i < 10; i++) {
              this.effects.ghost += 10;
              yield;
            }
            this.deleteThisClone();
          } else {
            if (this.costume.name === "single") {
              this.goto(-193, -110);
              this.visible = true;
              yield* this.wait(0.5);
              for (let i = 0; i < 10; i++) {
                this.effects.ghost += 10;
                yield;
              }
              this.deleteThisClone();
            } else {
              if (this.costume.name === "mini") {
                this.goto(-193, -110);
                this.visible = true;
                yield* this.wait(0.5);
                for (let i = 0; i < 10; i++) {
                  this.effects.ghost += 10;
                  yield;
                }
                this.deleteThisClone();
              } else {
                if (this.costume.name === "back-to-back") {
                  this.goto(-192, -36);
                  this.visible = true;
                  yield* this.wait(0.5);
                  for (let i = 0; i < 10; i++) {
                    this.effects.ghost += 10;
                    yield;
                  }
                  this.deleteThisClone();
                } else {
                  null;
                }
              }
            }
          }
        }
      }
    }
  }

  *whenIReceiveTSpin() {
    this.effects.clear();
    this.costume = "t-spin";
    this.createClone();
  }

  *whenIReceiveTSpinTriple() {
    this.effects.clear();
    this.costume = "triple";
    this.createClone();
  }

  *whenIReceiveTSpinDouble() {
    this.effects.clear();
    this.costume = "double";
    this.createClone();
  }

  *whenIReceiveTSpinSingle() {
    this.effects.clear();
    this.costume = "single";
    this.createClone();
  }

  *whenIReceiveTSpinMini() {
    this.effects.clear();
    this.costume = "mini";
    this.createClone();
  }

  *whenIReceiveMini() {
    this.effects.clear();
    this.costume = "mini";
    this.createClone();
  }

  *whenIReceiveBackToBack() {
    this.effects.clear();
    this.costume = "back-to-back";
    this.createClone();
  }
}
