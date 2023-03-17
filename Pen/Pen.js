/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("コスチューム1", "./Pen/costumes/コスチューム1.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "スタート" }, this.whenIReceive),
      new Trigger(Trigger.BROADCAST, { name: "選択完了" }, this.whenIReceive2)
    ];
  }

  *whenIReceive() {
    this.stage.vars.replayData = [];
    this.visible = false;
    while (true) {
      yield* this._();
      yield;
    }
  }

  *_() {
    this.clearPen();
    this.warp(this._2)();
    this.warp(this._1p)();
    if (this.toNumber(this.stage.vars._39) === 1) {
      this.warp(this._9)();
      this.warp(this._1p2)();
    }
    this.warp(this._3)();
    this.warp(this._7)();
    this.warp(this._8)();
  }

  *_2() {
    this.penColor = Color.rgb(193, 193, 193);
    this.penSize = 1;
    this.goto(-140, 160);
    for (let i = 0; i < 9; i++) {
      this.x += 16;
      this.penDown = true;
      this.y -= 325;
      this.penDown = false;
      this.y += 325;
    }
    this.penDown = false;
    this.goto(-140, 171);
    for (let i = 0; i < 20; i++) {
      this.y -= 16;
      this.penDown = true;
      this.x += 160;
      this.penDown = false;
      this.x -= 160;
    }
    this.penDown = false;
  }

  *_1p() {
    this.stage.vars._14 = 0;
    for (let i = 0; i < 12 * 22; i++) {
      this.stage.vars._14++;
      if (
        this.arrayIncludes(
          this.stage.vars._2,
          this.itemOf(this.stage.vars._, this.stage.vars._14 - 1)
        )
      ) {
        this.warp(this.XY)(
          this.toNumber(this.stage.vars._14) % 12,
          Math.ceil(this.toNumber(this.stage.vars._14) / 12),
          this.itemOf(this.stage.vars._, this.stage.vars._14 - 1),
          0
        );
      }
    }
  }

  *XY(x, y, _, _2) {
    if (this.toNumber(_2) === 0) {
      this.goto(
        -140 + (8 + (this.toNumber(x) - 2) * 16),
        -165 + (8 + (this.toNumber(y) - 2) * 16)
      );
      this.stage.vars._15 = 0;
      while (
        !(
          this.compare(
            _,
            this.itemOf(this.stage.vars._2, this.stage.vars._15 - 1)
          ) === 0 || this.toNumber(this.stage.vars._15) === 7
        )
      ) {
        this.stage.vars._15++;
      }
      this.penColor.h = this.toNumber(
        this.itemOf(this.stage.vars._3, this.stage.vars._15 - 1)
      );
      this.penColor.s = 100;
      this.penColor.v = 100;
      this.penSize = 14;
      this.penDown = true;
      this.penDown = false;
      this.penColor.v = 80;
      this.penSize = 2;
      this.x -= 6;
      this.y -= 6;
      this.penDown = true;
      this.x += 12;
      this.y += 12;
      this.x -= 12;
      this.y -= 12;
      this.penDown = false;
      this.penSize = 2;
      this.x -= 1;
      this.y -= 1;
      this.penDown = true;
      this.x += 14;
      this.y += 14;
      this.x -= 14;
      this.y -= 14;
      this.penDown = false;
    } else {
      this.goto(this.toNumber(x), this.toNumber(y));
      this.stage.vars._15 = 0;
      while (
        !(
          this.compare(
            _,
            this.itemOf(this.stage.vars._2, this.stage.vars._15 - 1)
          ) === 0 || this.toNumber(this.stage.vars._15) === 7
        )
      ) {
        this.stage.vars._15++;
      }
      this.penColor.h = this.toNumber(
        this.itemOf(this.stage.vars._3, this.stage.vars._15 - 1)
      );
      this.penColor.s = 100;
      this.penColor.v = 100;
      this.penSize = 12;
      this.penDown = true;
      this.penDown = false;
      this.penColor.v = 80;
      this.penSize = 2;
      this.x -= 5;
      this.y -= 5;
      this.penDown = true;
      this.x += 10;
      this.y += 10;
      this.x -= 10;
      this.y -= 10;
      this.penDown = false;
      this.penSize = 1;
    }
  }

  *_3() {
    this.goto(0, 0);
    this.stamp();
    this.penColor = Color.rgb(0, 0, 0);
    this.penSize = 4;
    this.goto(-142, 162);
    this.penDown = true;
    this.goto(22, 162);
    this.goto(22, -167);
    this.goto(-142, -167);
    this.goto(-142, 162);
    this.penDown = false;
  }

  *_1p2() {
    this.stage.vars._19 = 0;
    if (this.toString(this.stage.vars._17) === "I") {
      for (let i = 0; i < 4; i++) {
        this.stage.vars._19++;
        this.stage.vars._6.splice(
          this.stage.vars._19 - 1,
          1,
          (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
            this.toNumber(this.stage.vars.X) +
            this.toNumber(
              this.itemOf(
                this.stage.vars.i,
                this.toNumber(this.stage.vars._19) +
                  this.toNumber(this.stage.vars._18) * 4 -
                  1
              )
            )
        );
        this.warp(this.XY)(
          this.toNumber(
            this.itemOf(this.stage.vars._6, this.stage.vars._19 - 1)
          ) % 12,
          Math.ceil(
            this.toNumber(
              this.itemOf(this.stage.vars._6, this.stage.vars._19 - 1)
            ) / 12
          ),
          this.stage.vars._17,
          0
        );
      }
    } else {
      if (this.toString(this.stage.vars._17) === "J") {
        for (let i = 0; i < 4; i++) {
          this.stage.vars._19++;
          this.stage.vars._6.splice(
            this.stage.vars._19 - 1,
            1,
            (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
              this.toNumber(this.stage.vars.X) +
              this.toNumber(
                this.itemOf(
                  this.stage.vars.j,
                  this.toNumber(this.stage.vars._19) +
                    this.toNumber(this.stage.vars._18) * 4 -
                    1
                )
              )
          );
          this.warp(this.XY)(
            this.toNumber(
              this.itemOf(this.stage.vars._6, this.stage.vars._19 - 1)
            ) % 12,
            Math.ceil(
              this.toNumber(
                this.itemOf(this.stage.vars._6, this.stage.vars._19 - 1)
              ) / 12
            ),
            this.stage.vars._17,
            0
          );
        }
      } else {
        if (this.toString(this.stage.vars._17) === "L") {
          for (let i = 0; i < 4; i++) {
            this.stage.vars._19++;
            this.stage.vars._6.splice(
              this.stage.vars._19 - 1,
              1,
              (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
                this.toNumber(this.stage.vars.X) +
                this.toNumber(
                  this.itemOf(
                    this.stage.vars.l,
                    this.toNumber(this.stage.vars._19) +
                      this.toNumber(this.stage.vars._18) * 4 -
                      1
                  )
                )
            );
            this.warp(this.XY)(
              this.toNumber(
                this.itemOf(this.stage.vars._6, this.stage.vars._19 - 1)
              ) % 12,
              Math.ceil(
                this.toNumber(
                  this.itemOf(this.stage.vars._6, this.stage.vars._19 - 1)
                ) / 12
              ),
              this.stage.vars._17,
              0
            );
          }
        } else {
          if (this.toString(this.stage.vars._17) === "O") {
            for (let i = 0; i < 4; i++) {
              this.stage.vars._19++;
              this.stage.vars._6.splice(
                this.stage.vars._19 - 1,
                1,
                (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
                  this.toNumber(this.stage.vars.X) +
                  this.toNumber(
                    this.itemOf(
                      this.stage.vars.o,
                      this.toNumber(this.stage.vars._19) +
                        this.toNumber(this.stage.vars._18) * 4 -
                        1
                    )
                  )
              );
              this.warp(this.XY)(
                this.toNumber(
                  this.itemOf(this.stage.vars._6, this.stage.vars._19 - 1)
                ) % 12,
                Math.ceil(
                  this.toNumber(
                    this.itemOf(this.stage.vars._6, this.stage.vars._19 - 1)
                  ) / 12
                ),
                this.stage.vars._17,
                0
              );
            }
          } else {
            if (this.toString(this.stage.vars._17) === "S") {
              for (let i = 0; i < 4; i++) {
                this.stage.vars._19++;
                this.stage.vars._6.splice(
                  this.stage.vars._19 - 1,
                  1,
                  (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
                    this.toNumber(this.stage.vars.X) +
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars.s,
                        this.toNumber(this.stage.vars._19) +
                          this.toNumber(this.stage.vars._18) * 4 -
                          1
                      )
                    )
                );
                this.warp(this.XY)(
                  this.toNumber(
                    this.itemOf(this.stage.vars._6, this.stage.vars._19 - 1)
                  ) % 12,
                  Math.ceil(
                    this.toNumber(
                      this.itemOf(this.stage.vars._6, this.stage.vars._19 - 1)
                    ) / 12
                  ),
                  this.stage.vars._17,
                  0
                );
              }
            } else {
              if (this.toString(this.stage.vars._17) === "T") {
                for (let i = 0; i < 4; i++) {
                  this.stage.vars._19++;
                  this.stage.vars._6.splice(
                    this.stage.vars._19 - 1,
                    1,
                    (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
                      this.toNumber(this.stage.vars.X) +
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars.t,
                          this.toNumber(this.stage.vars._19) +
                            this.toNumber(this.stage.vars._18) * 4 -
                            1
                        )
                      )
                  );
                  this.warp(this.XY)(
                    this.toNumber(
                      this.itemOf(this.stage.vars._6, this.stage.vars._19 - 1)
                    ) % 12,
                    Math.ceil(
                      this.toNumber(
                        this.itemOf(this.stage.vars._6, this.stage.vars._19 - 1)
                      ) / 12
                    ),
                    this.stage.vars._17,
                    0
                  );
                }
              } else {
                if (this.toString(this.stage.vars._17) === "Z") {
                  for (let i = 0; i < 4; i++) {
                    this.stage.vars._19++;
                    this.stage.vars._6.splice(
                      this.stage.vars._19 - 1,
                      1,
                      (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
                        this.toNumber(this.stage.vars.X) +
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars.z,
                            this.toNumber(this.stage.vars._19) +
                              this.toNumber(this.stage.vars._18) * 4 -
                              1
                          )
                        )
                    );
                    this.warp(this.XY)(
                      this.toNumber(
                        this.itemOf(this.stage.vars._6, this.stage.vars._19 - 1)
                      ) % 12,
                      Math.ceil(
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._6,
                            this.stage.vars._19 - 1
                          )
                        ) / 12
                      ),
                      this.stage.vars._17,
                      0
                    );
                  }
                } else {
                  null;
                }
              }
            }
          }
        }
      }
    }
    if (
      !(
        this.toNumber(
          this.itemOf(this.stage.vars._, this.itemOf(this.stage.vars._6, 0) - 1)
        ) === 0 &&
        this.toNumber(
          this.itemOf(this.stage.vars._, this.itemOf(this.stage.vars._6, 1) - 1)
        ) === 0 &&
        this.toNumber(
          this.itemOf(this.stage.vars._, this.itemOf(this.stage.vars._6, 2) - 1)
        ) === 0 &&
        this.toNumber(
          this.itemOf(this.stage.vars._, this.itemOf(this.stage.vars._6, 3) - 1)
        ) === 0
      )
    ) {
      this.stage.vars._39 = 0;
      this.broadcast("game over");
    }
    this.stage.vars._53 = 0;
    if (
      this.toNumber(this.letterOf(this.stage.vars._48, 6)) === 1 &&
      this.toNumber(this.stage.vars._37) === 0
    ) {
      this.stage.vars._53 = 1;
      this.stage.vars._37 = 1;
      this.stage.vars.X = 6;
      this.stage.vars.Y2 = 22;
      this.stage.vars._18 = 0;
      this.stage.vars._21 = 0;
      this.stage.vars._20 = 0 - this.toNumber(this.stage.vars.g);
      if (this.toNumber(this.stage.vars._36) === 0) {
        this.stage.vars._36 = this.stage.vars._17;
        this.stage.vars._17 = this.itemOf(this.stage.vars._4, 0);
        this.stage.vars._4.splice(0, 1);
        if (this.compare(this.stage.vars._4.length, 15) < 0) {
          this.warp(this._4)();
        }
      } else {
        this.stage.vars._38 = this.stage.vars._36;
        this.stage.vars._36 = this.stage.vars._17;
        this.stage.vars._17 = this.stage.vars._38;
      }
    }
    if (this.toNumber(this.stage.vars._53) === 0) {
      this.warp(this._5)();
      if (
        this.toNumber(this.stage.vars._26) === 0 &&
        this.toNumber(this.letterOf(this.stage.vars._48, 5)) === 1
      ) {
        if (
          this.toNumber(this.stage.vars._26) === 0 &&
          !(
            this.compare(this.stage.vars.g, 0) < 0 &&
            this.toNumber(this.stage.vars._20) === 0 &&
            !(
              this.toNumber(
                this.itemOf(
                  this.stage.vars._,
                  this.toNumber(this.itemOf(this.stage.vars._6, 0)) - 13
                )
              ) === 0 &&
              this.toNumber(
                this.itemOf(
                  this.stage.vars._,
                  this.toNumber(this.itemOf(this.stage.vars._6, 1)) - 13
                )
              ) === 0 &&
                this.toNumber(
                  this.itemOf(
                    this.stage.vars._,
                    this.toNumber(this.itemOf(this.stage.vars._6, 2)) - 13
                  )
                ) === 0 &&
                  this.toNumber(
                    this.itemOf(
                      this.stage.vars._,
                      this.toNumber(this.itemOf(this.stage.vars._6, 3)) - 13
                    )
                  ) === 0
            )
          )
        ) {
          this.sprites["_3"].createClone();
          this.stage.vars.score += this.toNumber(this.stage.vars._45);
          if (this.toNumber(this.stage.vars.t5) === 0) {
            this.stage.vars.t3 = 0;
          }
          this.stage.vars._37 = 0;
          if (
            this.compare(this.itemOf(this.stage.vars._7, 0), 252) > 0 &&
            this.compare(this.itemOf(this.stage.vars._7, 1), 252) > 0 &&
              this.compare(this.itemOf(this.stage.vars._7, 2), 252) > 0 &&
                this.compare(this.itemOf(this.stage.vars._7, 3), 252) > 0
          ) {
            this.broadcast("game over");
            this.stage.vars._39 = 0;
            this.stage.vars._22 = 0;
            for (let i = 0; i < 4; i++) {
              this.stage.vars._22++;
              this.stage.vars._.splice(
                this.itemOf(this.stage.vars._7, this.stage.vars._22 - 1) - 1,
                1,
                this.stage.vars._17
              );
            }
            this.warp(this._6)();
          } else {
            this.stage.vars._22 = 0;
            for (let i = 0; i < 4; i++) {
              this.stage.vars._22++;
              this.stage.vars._.splice(
                this.itemOf(this.stage.vars._7, this.stage.vars._22 - 1) - 1,
                1,
                this.stage.vars._17
              );
            }
            this.warp(this._6)();
            this.stage.vars._21 = 0;
            this.stage.vars.X = 6;
            this.stage.vars.Y2 = 22;
            this.stage.vars._18 = 0;
            this.stage.vars._17 = this.itemOf(this.stage.vars._4, 0);
            this.stage.vars._20 = 0 - this.toNumber(this.stage.vars.g);
            this.stage.vars._4.splice(0, 1);
            if (this.compare(this.stage.vars._4.length, 15) < 0) {
              this.warp(this._4)();
            }
          }
        }
        this.stage.vars._26 = 1;
      } else {
        if (!(this.toNumber(this.letterOf(this.stage.vars._48, 5)) === 1)) {
          this.stage.vars._26 = 0;
        }
        this.stage.vars._20--;
        if (
          this.toNumber(
            this.itemOf(
              this.stage.vars._,
              this.toNumber(this.itemOf(this.stage.vars._6, 0)) - 13
            )
          ) === 0 &&
          this.toNumber(
            this.itemOf(
              this.stage.vars._,
              this.toNumber(this.itemOf(this.stage.vars._6, 1)) - 13
            )
          ) === 0 &&
            this.toNumber(
              this.itemOf(
                this.stage.vars._,
                this.toNumber(this.itemOf(this.stage.vars._6, 2)) - 13
              )
            ) === 0 &&
              this.toNumber(
                this.itemOf(
                  this.stage.vars._,
                  this.toNumber(this.itemOf(this.stage.vars._6, 3)) - 13
                )
              ) === 0
        ) {
          if (this.toNumber(this.letterOf(this.stage.vars._48, 4)) === 1) {
            if (this.compare(this.stage.vars.g, 0) < 0) {
              this.stage.vars._42 = 0;
              while (
                !(
                  this.compare(
                    this.itemOf(this.stage.vars._9, this.stage.vars.level - 1),
                    this.stage.vars._42
                  ) === 0 ||
                  !(
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._6, 0)) -
                          (this.toNumber(this.stage.vars._42) + 1) * 12 -
                          1
                      )
                    ) === 0 &&
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._6, 1)) -
                          (this.toNumber(this.stage.vars._42) + 1) * 12 -
                          1
                      )
                    ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._6, 2)) -
                            (this.toNumber(this.stage.vars._42) + 1) * 12 -
                            1
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._6, 3)) -
                              (this.toNumber(this.stage.vars._42) + 1) * 12 -
                              1
                          )
                        ) === 0
                  )
                )
              ) {
                this.stage.vars.score++;
                this.stage.vars._42++;
              }
              this.stage.vars.t3 = 0;
              this.stage.vars._20 = -1 * this.toNumber(this.stage.vars.g);
              this.stage.vars._21 = 0;
              this.stage.vars.Y2 += 0 - this.toNumber(this.stage.vars._42);
              this.stage.vars._22 = 0;
              for (let i = 0; i < 4; i++) {
                this.stage.vars._22++;
                this.stage.vars._6.splice(
                  this.stage.vars._22 - 1,
                  1,
                  this.toNumber(
                    this.itemOf(this.stage.vars._6, this.stage.vars._22 - 1)
                  ) -
                    this.toNumber(this.stage.vars._42) * 12
                );
              }
            } else {
              this.stage.vars._42 = 0;
              while (
                !(
                  this.compare(
                    this.itemOf(this.stage.vars._9, this.stage.vars.level - 1),
                    this.stage.vars._42
                  ) === 0 ||
                  !(
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._6, 0)) -
                          (this.toNumber(this.stage.vars._42) + 1) * 12 -
                          1
                      )
                    ) === 0 &&
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._6, 1)) -
                          (this.toNumber(this.stage.vars._42) + 1) * 12 -
                          1
                      )
                    ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._6, 2)) -
                            (this.toNumber(this.stage.vars._42) + 1) * 12 -
                            1
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._6, 3)) -
                              (this.toNumber(this.stage.vars._42) + 1) * 12 -
                              1
                          )
                        ) === 0
                  )
                )
              ) {
                this.stage.vars.score++;
                this.stage.vars._42++;
              }
              this.stage.vars.t3 = 0;
              this.stage.vars._20 = -1 * this.toNumber(this.stage.vars.g);
              this.stage.vars._21 = 0;
              this.stage.vars.Y2 += 0 - this.toNumber(this.stage.vars._42);
              this.stage.vars._22 = 0;
              for (let i = 0; i < 4; i++) {
                this.stage.vars._22++;
                this.stage.vars._6.splice(
                  this.stage.vars._22 - 1,
                  1,
                  this.toNumber(
                    this.itemOf(this.stage.vars._6, this.stage.vars._22 - 1)
                  ) -
                    this.toNumber(this.stage.vars._42) * 12
                );
              }
            }
          } else {
            if (this.compare(this.stage.vars.g, 0) < 0) {
              if (this.toNumber(this.stage.vars._46) === 1) {
                this.stage.vars._20 = -1 * this.toNumber(this.stage.vars.g);
                this.stage.vars._46 = 0;
              } else {
                null;
              }
              if (this.toNumber(this.stage.vars._20) === 0) {
                this.stage.vars.t3 = 0;
                this.stage.vars._20 = -1 * this.toNumber(this.stage.vars.g);
                this.stage.vars._21 = 0;
                this.stage.vars.Y2--;
                this.stage.vars._22 = 0;
                for (let i = 0; i < 4; i++) {
                  this.stage.vars._22++;
                  this.stage.vars._6.splice(
                    this.stage.vars._22 - 1,
                    1,
                    this.toNumber(
                      this.itemOf(this.stage.vars._6, this.stage.vars._22 - 1)
                    ) - 12
                  );
                }
              }
            } else {
              this.stage.vars._42 = 0;
              while (
                !(
                  this.compare(this.stage.vars.g, this.stage.vars._42) === 0 ||
                  !(
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._6, 0)) -
                          (this.toNumber(this.stage.vars._42) + 1) * 12 -
                          1
                      )
                    ) === 0 &&
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._6, 1)) -
                          (this.toNumber(this.stage.vars._42) + 1) * 12 -
                          1
                      )
                    ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._6, 2)) -
                            (this.toNumber(this.stage.vars._42) + 1) * 12 -
                            1
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._6, 3)) -
                              (this.toNumber(this.stage.vars._42) + 1) * 12 -
                              1
                          )
                        ) === 0
                  )
                )
              ) {
                this.stage.vars._42++;
              }
              this.stage.vars.t3 = 0;
              this.stage.vars._20 = 0;
              this.stage.vars._21 = 0;
              this.stage.vars.Y2 += 0 - this.toNumber(this.stage.vars._42);
              this.stage.vars._22 = 0;
              for (let i = 0; i < 4; i++) {
                this.stage.vars._22++;
                this.stage.vars._6.splice(
                  this.stage.vars._22 - 1,
                  1,
                  this.toNumber(
                    this.itemOf(this.stage.vars._6, this.stage.vars._22 - 1)
                  ) -
                    this.toNumber(this.stage.vars._42) * 12
                );
              }
            }
          }
        } else {
          this.stage.vars._20 = 1;
          if (this.toNumber(this.letterOf(this.stage.vars._48, 4)) === 1) {
            this.stage.vars._21 += 2;
          } else {
            this.stage.vars._21++;
          }
          this.stage.vars._22 = 0;
          if (
            this.toNumber(this.stage.vars._53) === 0 &&
            this.compare(
              this.stage.vars._21,
              this.itemOf(this.stage.vars._10, this.stage.vars.level - 1)
            ) > 0
          ) {
            this.sprites["_2"].createClone();
            if (
              this.compare(this.itemOf(this.stage.vars._6, 0), 252) > 0 &&
              this.compare(this.itemOf(this.stage.vars._6, 1), 252) > 0 &&
                this.compare(this.itemOf(this.stage.vars._6, 2), 252) > 0 &&
                  this.compare(this.itemOf(this.stage.vars._6, 3), 252) > 0
            ) {
              this.broadcast("game over");
              this.stage.vars._39 = 0;
              this.stage.vars._37 = 0;
              for (let i = 0; i < 4; i++) {
                this.stage.vars._22++;
                this.stage.vars._.splice(
                  this.itemOf(this.stage.vars._6, this.stage.vars._22 - 1) - 1,
                  1,
                  this.stage.vars._17
                );
              }
              this.warp(this._6)();
            } else {
              this.stage.vars._37 = 0;
              for (let i = 0; i < 4; i++) {
                this.stage.vars._22++;
                this.stage.vars._.splice(
                  this.itemOf(this.stage.vars._6, this.stage.vars._22 - 1) - 1,
                  1,
                  this.stage.vars._17
                );
              }
              this.warp(this._6)();
              this.stage.vars._21 = 0;
              this.stage.vars.X = 6;
              this.stage.vars.Y2 = 22;
              this.stage.vars._18 = 0;
              this.stage.vars._17 = this.itemOf(this.stage.vars._4, 0);
              this.stage.vars._20 = -1 * this.toNumber(this.stage.vars.g);
              this.stage.vars._4.splice(0, 1);
              if (this.compare(this.stage.vars._4.length, 15) < 0) {
                this.warp(this._4)();
              }
            }
          } else {
            this.stage.vars._46 = 1;
          }
        }
        if (
          !(this.toNumber(this.letterOf(this.stage.vars._48, 0)) === 1) &&
          this.toNumber(this.letterOf(this.stage.vars._48, 1)) === 1
        ) {
          if (
            this.toNumber(this.stage.vars._23) === 0 ||
            this.compare(3, this.stage.vars._23) < 0
          ) {
            if (
              this.toNumber(
                this.itemOf(
                  this.stage.vars._,
                  this.toNumber(this.itemOf(this.stage.vars._6, 0))
                )
              ) === 0 &&
              this.toNumber(
                this.itemOf(
                  this.stage.vars._,
                  this.toNumber(this.itemOf(this.stage.vars._6, 1))
                )
              ) === 0 &&
                this.toNumber(
                  this.itemOf(
                    this.stage.vars._,
                    this.toNumber(this.itemOf(this.stage.vars._6, 2))
                  )
                ) === 0 &&
                  this.toNumber(
                    this.itemOf(
                      this.stage.vars._,
                      this.toNumber(this.itemOf(this.stage.vars._6, 3))
                    )
                  ) === 0
            ) {
              this.stage.vars.X++;
              this.stage.vars._22 = 0;
              for (let i = 0; i < 4; i++) {
                this.stage.vars._22++;
                this.stage.vars._6.splice(
                  this.stage.vars._22 - 1,
                  1,
                  this.toNumber(
                    this.itemOf(this.stage.vars._6, this.stage.vars._22 - 1)
                  ) + 1
                );
              }
              this.stage.vars._21 = 0;
            }
          }
          this.stage.vars._23++;
        } else {
          this.stage.vars._23 = 0;
        }
        if (
          !(this.toNumber(this.letterOf(this.stage.vars._48, 1)) === 1) &&
          this.toNumber(this.letterOf(this.stage.vars._48, 0)) === 1
        ) {
          if (
            this.toNumber(this.stage.vars._24) === 0 ||
            this.compare(3, this.stage.vars._24) < 0
          ) {
            if (
              this.toNumber(
                this.itemOf(
                  this.stage.vars._,
                  this.toNumber(this.itemOf(this.stage.vars._6, 0)) + -2
                )
              ) === 0 &&
              this.toNumber(
                this.itemOf(
                  this.stage.vars._,
                  this.toNumber(this.itemOf(this.stage.vars._6, 1)) + -2
                )
              ) === 0 &&
                this.toNumber(
                  this.itemOf(
                    this.stage.vars._,
                    this.toNumber(this.itemOf(this.stage.vars._6, 2)) + -2
                  )
                ) === 0 &&
                  this.toNumber(
                    this.itemOf(
                      this.stage.vars._,
                      this.toNumber(this.itemOf(this.stage.vars._6, 3)) + -2
                    )
                  ) === 0
            ) {
              this.stage.vars.X--;
              this.stage.vars._22 = 0;
              for (let i = 0; i < 4; i++) {
                this.stage.vars._22++;
                this.stage.vars._6.splice(
                  this.stage.vars._22 - 1,
                  1,
                  this.toNumber(
                    this.itemOf(this.stage.vars._6, this.stage.vars._22 - 1)
                  ) + -1
                );
              }
              this.stage.vars._21 = 0;
            }
          }
          this.stage.vars._24++;
        } else {
          this.stage.vars._24 = 0;
        }
        this.stage.vars.t6 = 0;
        if (
          !(this.toNumber(this.letterOf(this.stage.vars._48, 2)) === 1) &&
          this.toNumber(this.letterOf(this.stage.vars._48, 3)) === 1
        ) {
          if (this.toNumber(this.stage.vars._25) === 0) {
            this.stage.vars._25 = 1;
            this.stage.vars._28 = (this.toNumber(this.stage.vars._18) + 1) % 4;
            this.stage.vars._29 = 0;
            if (this.toString(this.stage.vars._17) === "I") {
              for (let i = 0; i < 4; i++) {
                this.stage.vars._29++;
                this.stage.vars._8.splice(
                  this.stage.vars._29 - 1,
                  1,
                  this.toNumber(this.stage.vars.X) +
                    (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars.i,
                        this.toNumber(this.stage.vars._28) * 4 +
                          this.toNumber(this.stage.vars._29) -
                          1
                      )
                    )
                );
              }
              if (this.toNumber(this.stage.vars._18) === 0) {
                if (
                  this.toNumber(
                    this.itemOf(
                      this.stage.vars._,
                      this.toNumber(this.itemOf(this.stage.vars._8, 0)) + -1
                    )
                  ) === 0 &&
                  this.toNumber(
                    this.itemOf(
                      this.stage.vars._,
                      this.toNumber(this.itemOf(this.stage.vars._8, 1)) + -1
                    )
                  ) === 0 &&
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 2)) + -1
                      )
                    ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 3)) + -1
                        )
                      ) === 0
                ) {
                  this.stage.vars._29 = 0;
                  for (let i = 0; i < 4; i++) {
                    this.stage.vars._29++;
                    this.stage.vars._6.splice(
                      this.stage.vars._29 - 1,
                      1,
                      this.toNumber(
                        this.itemOf(this.stage.vars._8, this.stage.vars._29 - 1)
                      ) + 0
                    );
                  }
                  this.stage.vars._18 = 1;
                } else {
                  if (
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 0)) + -3
                      )
                    ) === 0 &&
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 1)) + -3
                      )
                    ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 2)) + -3
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 3)) +
                              -3
                          )
                        ) === 0
                  ) {
                    this.stage.vars._29 = 0;
                    for (let i = 0; i < 4; i++) {
                      this.stage.vars._29++;
                      this.stage.vars._6.splice(
                        this.stage.vars._29 - 1,
                        1,
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._8,
                            this.stage.vars._29 - 1
                          )
                        ) + -2
                      );
                    }
                    this.stage.vars._18 = 1;
                    this.stage.vars.X -= 2;
                  } else {
                    if (
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 0))
                        )
                      ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 1))
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 2))
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(this.itemOf(this.stage.vars._8, 3))
                            )
                          ) === 0
                    ) {
                      this.stage.vars._29 = 0;
                      for (let i = 0; i < 4; i++) {
                        this.stage.vars._29++;
                        this.stage.vars._6.splice(
                          this.stage.vars._29 - 1,
                          1,
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._8,
                              this.stage.vars._29 - 1
                            )
                          ) + 1
                        );
                      }
                      this.stage.vars._18 = 1;
                      this.stage.vars.X++;
                    } else {
                      if (
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 0)) +
                              -15
                          )
                        ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 1)) +
                              -15
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 2)
                              ) + -15
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 3)
                                ) + -15
                              )
                            ) === 0
                      ) {
                        this.stage.vars._29 = 0;
                        for (let i = 0; i < 4; i++) {
                          this.stage.vars._29++;
                          this.stage.vars._6.splice(
                            this.stage.vars._29 - 1,
                            1,
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._8,
                                this.stage.vars._29 - 1
                              )
                            ) + -14
                          );
                        }
                        this.stage.vars._18 = 1;
                        this.stage.vars.X -= 2;
                        this.stage.vars.Y2--;
                      } else {
                        if (
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 0)
                              ) + 24
                            )
                          ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 1)
                              ) + 24
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 2)
                                ) + 24
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 3)
                                  ) + 24
                                )
                              ) === 0
                        ) {
                          this.stage.vars._29 = 0;
                          for (let i = 0; i < 4; i++) {
                            this.stage.vars._29++;
                            this.stage.vars._6.splice(
                              this.stage.vars._29 - 1,
                              1,
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._8,
                                  this.stage.vars._29 - 1
                                )
                              ) + 25
                            );
                          }
                          this.stage.vars._18 = 1;
                          this.stage.vars.X++;
                          this.stage.vars.Y2 += 2;
                        } else {
                          null;
                        }
                      }
                    }
                  }
                }
                if (this.toNumber(this.stage.vars._18) === 1) {
                  this.stage.vars._21 = 0;
                }
              } else {
                if (this.toNumber(this.stage.vars._18) === 1) {
                  if (
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 0)) + -1
                      )
                    ) === 0 &&
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 1)) + -1
                      )
                    ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 2)) + -1
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 3)) +
                              -1
                          )
                        ) === 0
                  ) {
                    this.stage.vars._29 = 0;
                    for (let i = 0; i < 4; i++) {
                      this.stage.vars._29++;
                      this.stage.vars._6.splice(
                        this.stage.vars._29 - 1,
                        1,
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._8,
                            this.stage.vars._29 - 1
                          )
                        ) + 0
                      );
                    }
                    this.stage.vars._18 = 2;
                  } else {
                    if (
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 0)) + -2
                        )
                      ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 1)) + -2
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 2)) +
                              -2
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 3)
                              ) + -2
                            )
                          ) === 0
                    ) {
                      this.stage.vars._29 = 0;
                      for (let i = 0; i < 4; i++) {
                        this.stage.vars._29++;
                        this.stage.vars._6.splice(
                          this.stage.vars._29 - 1,
                          1,
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._8,
                              this.stage.vars._29 - 1
                            )
                          ) + -1
                        );
                      }
                      this.stage.vars._18 = 2;
                      this.stage.vars.X--;
                    } else {
                      if (
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 0)) +
                              1
                          )
                        ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 1)) +
                              1
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 2)
                              ) + 1
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 3)
                                ) + 1
                              )
                            ) === 0
                      ) {
                        this.stage.vars._29 = 0;
                        for (let i = 0; i < 4; i++) {
                          this.stage.vars._29++;
                          this.stage.vars._6.splice(
                            this.stage.vars._29 - 1,
                            1,
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._8,
                                this.stage.vars._29 - 1
                              )
                            ) + 2
                          );
                        }
                        this.stage.vars._18 = 2;
                        this.stage.vars.X += 2;
                      } else {
                        if (
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 0)
                              ) + 22
                            )
                          ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 1)
                              ) + 22
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 2)
                                ) + 22
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 3)
                                  ) + 22
                                )
                              ) === 0
                        ) {
                          this.stage.vars._29 = 0;
                          for (let i = 0; i < 4; i++) {
                            this.stage.vars._29++;
                            this.stage.vars._6.splice(
                              this.stage.vars._29 - 1,
                              1,
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._8,
                                  this.stage.vars._29 - 1
                                )
                              ) + 23
                            );
                          }
                          this.stage.vars._18 = 2;
                          this.stage.vars.X--;
                          this.stage.vars.Y2 += 2;
                        } else {
                          if (
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 0)
                                ) + -11
                              )
                            ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 1)
                                ) + -11
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 2)
                                  ) + -11
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 3)
                                    ) + -11
                                  )
                                ) === 0
                          ) {
                            this.stage.vars._29 = 0;
                            for (let i = 0; i < 4; i++) {
                              this.stage.vars._29++;
                              this.stage.vars._6.splice(
                                this.stage.vars._29 - 1,
                                1,
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._8,
                                    this.stage.vars._29 - 1
                                  )
                                ) + -10
                              );
                            }
                            this.stage.vars._18 = 2;
                            this.stage.vars.X += 2;
                            this.stage.vars.Y2--;
                          } else {
                            null;
                          }
                        }
                      }
                    }
                  }
                  if (this.toNumber(this.stage.vars._18) === 2) {
                    this.stage.vars._21 = 0;
                  }
                } else {
                  if (this.toNumber(this.stage.vars._18) === 2) {
                    if (
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 0)) + -1
                        )
                      ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 1)) + -1
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 2)) +
                              -1
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 3)
                              ) + -1
                            )
                          ) === 0
                    ) {
                      this.stage.vars._29 = 0;
                      for (let i = 0; i < 4; i++) {
                        this.stage.vars._29++;
                        this.stage.vars._6.splice(
                          this.stage.vars._29 - 1,
                          1,
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._8,
                              this.stage.vars._29 - 1
                            )
                          ) + 0
                        );
                      }
                      this.stage.vars._18 = 3;
                    } else {
                      if (
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 0)) +
                              1
                          )
                        ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 1)) +
                              1
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 2)
                              ) + 1
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 3)
                                ) + 1
                              )
                            ) === 0
                      ) {
                        this.stage.vars._29 = 0;
                        for (let i = 0; i < 4; i++) {
                          this.stage.vars._29++;
                          this.stage.vars._6.splice(
                            this.stage.vars._29 - 1,
                            1,
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._8,
                                this.stage.vars._29 - 1
                              )
                            ) + 2
                          );
                        }
                        this.stage.vars._18 = 3;
                        this.stage.vars.X += 2;
                      } else {
                        if (
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 0)
                              ) + -2
                            )
                          ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 1)
                              ) + -2
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 2)
                                ) + -2
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 3)
                                  ) + -2
                                )
                              ) === 0
                        ) {
                          this.stage.vars._29 = 0;
                          for (let i = 0; i < 4; i++) {
                            this.stage.vars._29++;
                            this.stage.vars._6.splice(
                              this.stage.vars._29 - 1,
                              1,
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._8,
                                  this.stage.vars._29 - 1
                                )
                              ) + -1
                            );
                          }
                          this.stage.vars._18 = 3;
                          this.stage.vars.X--;
                        } else {
                          if (
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 0)
                                ) + 13
                              )
                            ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 1)
                                ) + 13
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 2)
                                  ) + 13
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 3)
                                    ) + 13
                                  )
                                ) === 0
                          ) {
                            this.stage.vars._29 = 0;
                            for (let i = 0; i < 4; i++) {
                              this.stage.vars._29++;
                              this.stage.vars._6.splice(
                                this.stage.vars._29 - 1,
                                1,
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._8,
                                    this.stage.vars._29 - 1
                                  )
                                ) + 14
                              );
                            }
                            this.stage.vars._18 = 3;
                            this.stage.vars.X += 2;
                            this.stage.vars.Y2++;
                          } else {
                            if (
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 0)
                                  ) + -26
                                )
                              ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 1)
                                  ) + -26
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 2)
                                    ) + -26
                                  )
                                ) === 0 &&
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._,
                                      this.toNumber(
                                        this.itemOf(this.stage.vars._8, 3)
                                      ) + -26
                                    )
                                  ) === 0
                            ) {
                              this.stage.vars._29 = 0;
                              for (let i = 0; i < 4; i++) {
                                this.stage.vars._29++;
                                this.stage.vars._6.splice(
                                  this.stage.vars._29 - 1,
                                  1,
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._8,
                                      this.stage.vars._29 - 1
                                    )
                                  ) + -25
                                );
                              }
                              this.stage.vars._18 = 3;
                              this.stage.vars.X--;
                              this.stage.vars.Y2 -= 2;
                            } else {
                              null;
                            }
                          }
                        }
                      }
                    }
                    if (this.toNumber(this.stage.vars._18) === 3) {
                      this.stage.vars._21 = 0;
                    }
                  } else {
                    if (this.toNumber(this.stage.vars._18) === 3) {
                      if (
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 0)) +
                              -1
                          )
                        ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 1)) +
                              -1
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 2)
                              ) + -1
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 3)
                                ) + -1
                              )
                            ) === 0
                      ) {
                        this.stage.vars._29 = 0;
                        for (let i = 0; i < 4; i++) {
                          this.stage.vars._29++;
                          this.stage.vars._6.splice(
                            this.stage.vars._29 - 1,
                            1,
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._8,
                                this.stage.vars._29 - 1
                              )
                            ) + 0
                          );
                        }
                        this.stage.vars._18 = 0;
                      } else {
                        if (
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 0)
                              ) + -3
                            )
                          ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 1)
                              ) + -3
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 2)
                                ) + -3
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 3)
                                  ) + -3
                                )
                              ) === 0
                        ) {
                          this.stage.vars._29 = 0;
                          for (let i = 0; i < 4; i++) {
                            this.stage.vars._29++;
                            this.stage.vars._6.splice(
                              this.stage.vars._29 - 1,
                              1,
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._8,
                                  this.stage.vars._29 - 1
                                )
                              ) + -2
                            );
                          }
                          this.stage.vars._18 = 0;
                          this.stage.vars.X -= 2;
                        } else {
                          if (
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 0)
                                )
                              )
                            ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 1)
                                )
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 2)
                                  )
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 3)
                                    )
                                  )
                                ) === 0
                          ) {
                            this.stage.vars._29 = 0;
                            for (let i = 0; i < 4; i++) {
                              this.stage.vars._29++;
                              this.stage.vars._6.splice(
                                this.stage.vars._29 - 1,
                                1,
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._8,
                                    this.stage.vars._29 - 1
                                  )
                                ) + 1
                              );
                            }
                            this.stage.vars._18 = 0;
                            this.stage.vars.X++;
                          } else {
                            if (
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 0)
                                  ) + -24
                                )
                              ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 1)
                                  ) + -24
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 2)
                                    ) + -24
                                  )
                                ) === 0 &&
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._,
                                      this.toNumber(
                                        this.itemOf(this.stage.vars._8, 3)
                                      ) + -24
                                    )
                                  ) === 0
                            ) {
                              this.stage.vars._29 = 0;
                              for (let i = 0; i < 4; i++) {
                                this.stage.vars._29++;
                                this.stage.vars._6.splice(
                                  this.stage.vars._29 - 1,
                                  1,
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._8,
                                      this.stage.vars._29 - 1
                                    )
                                  ) + -23
                                );
                              }
                              this.stage.vars._18 = 0;
                              this.stage.vars.X++;
                              this.stage.vars.Y2 -= 2;
                            } else {
                              if (
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 0)
                                    ) + 9
                                  )
                                ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 1)
                                    ) + 9
                                  )
                                ) === 0 &&
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._,
                                      this.toNumber(
                                        this.itemOf(this.stage.vars._8, 2)
                                      ) + 9
                                    )
                                  ) === 0 &&
                                    this.toNumber(
                                      this.itemOf(
                                        this.stage.vars._,
                                        this.toNumber(
                                          this.itemOf(this.stage.vars._8, 3)
                                        ) + 9
                                      )
                                    ) === 0
                              ) {
                                this.stage.vars._29 = 0;
                                for (let i = 0; i < 4; i++) {
                                  this.stage.vars._29++;
                                  this.stage.vars._6.splice(
                                    this.stage.vars._29 - 1,
                                    1,
                                    this.toNumber(
                                      this.itemOf(
                                        this.stage.vars._8,
                                        this.stage.vars._29 - 1
                                      )
                                    ) + 10
                                  );
                                }
                                this.stage.vars._18 = 0;
                                this.stage.vars.X -= 2;
                                this.stage.vars.Y2++;
                              } else {
                                null;
                              }
                            }
                          }
                        }
                      }
                      if (this.toNumber(this.stage.vars._18) === 0) {
                        this.stage.vars._21 = 0;
                      }
                    } else {
                      null;
                    }
                  }
                }
              }
            } else {
              if (this.toString(this.stage.vars._17) === "J") {
                for (let i = 0; i < 4; i++) {
                  this.stage.vars._29++;
                  this.stage.vars._8.splice(
                    this.stage.vars._29 - 1,
                    1,
                    this.toNumber(this.stage.vars.X) +
                      (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars.j,
                          this.toNumber(this.stage.vars._28) * 4 +
                            this.toNumber(this.stage.vars._29) -
                            1
                        )
                      )
                  );
                }
              } else {
                if (this.toString(this.stage.vars._17) === "L") {
                  for (let i = 0; i < 4; i++) {
                    this.stage.vars._29++;
                    this.stage.vars._8.splice(
                      this.stage.vars._29 - 1,
                      1,
                      this.toNumber(this.stage.vars.X) +
                        (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars.l,
                            this.toNumber(this.stage.vars._28) * 4 +
                              this.toNumber(this.stage.vars._29) -
                              1
                          )
                        )
                    );
                  }
                } else {
                  if (this.toString(this.stage.vars._17) === "O") {
                    for (let i = 0; i < 4; i++) {
                      this.stage.vars._29++;
                      this.stage.vars._8.splice(
                        this.stage.vars._29 - 1,
                        1,
                        this.toNumber(this.stage.vars.X) +
                          (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars.o,
                              this.toNumber(this.stage.vars._28) * 4 +
                                this.toNumber(this.stage.vars._29) -
                                1
                            )
                          )
                      );
                    }
                  } else {
                    if (this.toString(this.stage.vars._17) === "S") {
                      for (let i = 0; i < 4; i++) {
                        this.stage.vars._29++;
                        this.stage.vars._8.splice(
                          this.stage.vars._29 - 1,
                          1,
                          this.toNumber(this.stage.vars.X) +
                            (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars.s,
                                this.toNumber(this.stage.vars._28) * 4 +
                                  this.toNumber(this.stage.vars._29) -
                                  1
                              )
                            )
                        );
                      }
                    } else {
                      if (this.toString(this.stage.vars._17) === "T") {
                        for (let i = 0; i < 4; i++) {
                          this.stage.vars._29++;
                          this.stage.vars._8.splice(
                            this.stage.vars._29 - 1,
                            1,
                            this.toNumber(this.stage.vars.X) +
                              (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars.t,
                                  this.toNumber(this.stage.vars._28) * 4 +
                                    this.toNumber(this.stage.vars._29) -
                                    1
                                )
                              )
                          );
                        }
                        this.stage.vars.t6 = 1;
                      } else {
                        if (this.toString(this.stage.vars._17) === "Z") {
                          for (let i = 0; i < 4; i++) {
                            this.stage.vars._29++;
                            this.stage.vars._8.splice(
                              this.stage.vars._29 - 1,
                              1,
                              this.toNumber(this.stage.vars.X) +
                                (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars.z,
                                    this.toNumber(this.stage.vars._28) * 4 +
                                      this.toNumber(this.stage.vars._29) -
                                      1
                                  )
                                )
                            );
                          }
                        } else {
                          null;
                        }
                      }
                    }
                  }
                }
              }
              if (this.toNumber(this.stage.vars._18) === 0) {
                if (
                  this.toNumber(
                    this.itemOf(
                      this.stage.vars._,
                      this.toNumber(this.itemOf(this.stage.vars._8, 0)) + -1
                    )
                  ) === 0 &&
                  this.toNumber(
                    this.itemOf(
                      this.stage.vars._,
                      this.toNumber(this.itemOf(this.stage.vars._8, 1)) + -1
                    )
                  ) === 0 &&
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 2)) + -1
                      )
                    ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 3)) + -1
                        )
                      ) === 0
                ) {
                  this.stage.vars._29 = 0;
                  for (let i = 0; i < 4; i++) {
                    this.stage.vars._29++;
                    this.stage.vars._6.splice(
                      this.stage.vars._29 - 1,
                      1,
                      this.toNumber(
                        this.itemOf(this.stage.vars._8, this.stage.vars._29 - 1)
                      ) + 0
                    );
                  }
                  this.stage.vars._18 = 1;
                } else {
                  if (
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 0)) + -2
                      )
                    ) === 0 &&
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 1)) + -2
                      )
                    ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 2)) + -2
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 3)) +
                              -2
                          )
                        ) === 0
                  ) {
                    this.stage.vars._29 = 0;
                    for (let i = 0; i < 4; i++) {
                      this.stage.vars._29++;
                      this.stage.vars._6.splice(
                        this.stage.vars._29 - 1,
                        1,
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._8,
                            this.stage.vars._29 - 1
                          )
                        ) + -1
                      );
                    }
                    this.stage.vars._18 = 1;
                    this.stage.vars.X--;
                  } else {
                    if (
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 0)) + 10
                        )
                      ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 1)) + 10
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 2)) +
                              10
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 3)
                              ) + 10
                            )
                          ) === 0
                    ) {
                      this.stage.vars._29 = 0;
                      for (let i = 0; i < 4; i++) {
                        this.stage.vars._29++;
                        this.stage.vars._6.splice(
                          this.stage.vars._29 - 1,
                          1,
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._8,
                              this.stage.vars._29 - 1
                            )
                          ) + 11
                        );
                      }
                      this.stage.vars._18 = 1;
                      this.stage.vars.X--;
                      this.stage.vars.Y2++;
                    } else {
                      if (
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 0)) +
                              -25
                          )
                        ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 1)) +
                              -25
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 2)
                              ) + -25
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 3)
                                ) + -25
                              )
                            ) === 0
                      ) {
                        this.stage.vars._29 = 0;
                        for (let i = 0; i < 4; i++) {
                          this.stage.vars._29++;
                          this.stage.vars._6.splice(
                            this.stage.vars._29 - 1,
                            1,
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._8,
                                this.stage.vars._29 - 1
                              )
                            ) + -24
                          );
                        }
                        this.stage.vars._18 = 1;
                        this.stage.vars.Y2 -= 2;
                      } else {
                        if (
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 0)
                              ) + -26
                            )
                          ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 1)
                              ) + -26
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 2)
                                ) + -26
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 3)
                                  ) + -26
                                )
                              ) === 0
                        ) {
                          this.stage.vars._29 = 0;
                          for (let i = 0; i < 4; i++) {
                            this.stage.vars._29++;
                            this.stage.vars._6.splice(
                              this.stage.vars._29 - 1,
                              1,
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._8,
                                  this.stage.vars._29 - 1
                                )
                              ) + -25
                            );
                          }
                          this.stage.vars._18 = 1;
                          this.stage.vars.X--;
                          this.stage.vars.Y2 -= 2;
                        } else {
                          this.stage.vars.t6 = 0;
                        }
                      }
                    }
                  }
                }
                if (this.toNumber(this.stage.vars._18) === 1) {
                  this.stage.vars._21 = 0;
                }
              } else {
                if (this.toNumber(this.stage.vars._18) === 1) {
                  if (
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 0)) + -1
                      )
                    ) === 0 &&
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 1)) + -1
                      )
                    ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 2)) + -1
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 3)) +
                              -1
                          )
                        ) === 0
                  ) {
                    this.stage.vars._29 = 0;
                    for (let i = 0; i < 4; i++) {
                      this.stage.vars._29++;
                      this.stage.vars._6.splice(
                        this.stage.vars._29 - 1,
                        1,
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._8,
                            this.stage.vars._29 - 1
                          )
                        ) + 0
                      );
                    }
                    this.stage.vars._18 = 2;
                  } else {
                    if (
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 0))
                        )
                      ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 1))
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 2))
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(this.itemOf(this.stage.vars._8, 3))
                            )
                          ) === 0
                    ) {
                      this.stage.vars._29 = 0;
                      for (let i = 0; i < 4; i++) {
                        this.stage.vars._29++;
                        this.stage.vars._6.splice(
                          this.stage.vars._29 - 1,
                          1,
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._8,
                              this.stage.vars._29 - 1
                            )
                          ) + 1
                        );
                      }
                      this.stage.vars._18 = 2;
                      this.stage.vars.X++;
                    } else {
                      if (
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 0)) +
                              -12
                          )
                        ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 1)) +
                              -12
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 2)
                              ) + -12
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 3)
                                ) + -12
                              )
                            ) === 0
                      ) {
                        this.stage.vars._29 = 0;
                        for (let i = 0; i < 4; i++) {
                          this.stage.vars._29++;
                          this.stage.vars._6.splice(
                            this.stage.vars._29 - 1,
                            1,
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._8,
                                this.stage.vars._29 - 1
                              )
                            ) + -11
                          );
                        }
                        this.stage.vars._18 = 2;
                        this.stage.vars.X++;
                        this.stage.vars.Y2--;
                      } else {
                        if (
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 0)
                              ) + 23
                            )
                          ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 1)
                              ) + 23
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 2)
                                ) + 23
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 3)
                                  ) + 23
                                )
                              ) === 0
                        ) {
                          this.stage.vars._29 = 0;
                          for (let i = 0; i < 4; i++) {
                            this.stage.vars._29++;
                            this.stage.vars._6.splice(
                              this.stage.vars._29 - 1,
                              1,
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._8,
                                  this.stage.vars._29 - 1
                                )
                              ) + 24
                            );
                          }
                          this.stage.vars._18 = 2;
                          this.stage.vars.Y2 += 2;
                        } else {
                          if (
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 0)
                                ) + 24
                              )
                            ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 1)
                                ) + 24
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 2)
                                  ) + 24
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 3)
                                    ) + 24
                                  )
                                ) === 0
                          ) {
                            this.stage.vars._29 = 0;
                            for (let i = 0; i < 4; i++) {
                              this.stage.vars._29++;
                              this.stage.vars._6.splice(
                                this.stage.vars._29 - 1,
                                1,
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._8,
                                    this.stage.vars._29 - 1
                                  )
                                ) + 25
                              );
                            }
                            this.stage.vars._18 = 2;
                            this.stage.vars.X++;
                            this.stage.vars.Y2 += 2;
                          } else {
                            this.stage.vars.t6 = 0;
                          }
                        }
                      }
                    }
                  }
                  if (this.toNumber(this.stage.vars._18) === 2) {
                    this.stage.vars._21 = 0;
                  }
                } else {
                  if (this.toNumber(this.stage.vars._18) === 2) {
                    if (
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 0)) + -1
                        )
                      ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 1)) + -1
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 2)) +
                              -1
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 3)
                              ) + -1
                            )
                          ) === 0
                    ) {
                      this.stage.vars._29 = 0;
                      for (let i = 0; i < 4; i++) {
                        this.stage.vars._29++;
                        this.stage.vars._6.splice(
                          this.stage.vars._29 - 1,
                          1,
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._8,
                              this.stage.vars._29 - 1
                            )
                          ) + 0
                        );
                      }
                      this.stage.vars._18 = 3;
                    } else {
                      if (
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 0))
                          )
                        ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 1))
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(this.itemOf(this.stage.vars._8, 2))
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 3)
                                )
                              )
                            ) === 0
                      ) {
                        this.stage.vars._29 = 0;
                        for (let i = 0; i < 4; i++) {
                          this.stage.vars._29++;
                          this.stage.vars._6.splice(
                            this.stage.vars._29 - 1,
                            1,
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._8,
                                this.stage.vars._29 - 1
                              )
                            ) + 1
                          );
                        }
                        this.stage.vars._18 = 3;
                        this.stage.vars.X++;
                      } else {
                        if (
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 0)
                              ) + 12
                            )
                          ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 1)
                              ) + 12
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 2)
                                ) + 12
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 3)
                                  ) + 12
                                )
                              ) === 0
                        ) {
                          this.stage.vars._29 = 0;
                          for (let i = 0; i < 4; i++) {
                            this.stage.vars._29++;
                            this.stage.vars._6.splice(
                              this.stage.vars._29 - 1,
                              1,
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._8,
                                  this.stage.vars._29 - 1
                                )
                              ) + 13
                            );
                          }
                          this.stage.vars._18 = 3;
                          this.stage.vars.X++;
                          this.stage.vars.Y2++;
                        } else {
                          if (
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 0)
                                ) + -25
                              )
                            ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 1)
                                ) + -25
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 2)
                                  ) + -25
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 3)
                                    ) + -25
                                  )
                                ) === 0
                          ) {
                            this.stage.vars._29 = 0;
                            for (let i = 0; i < 4; i++) {
                              this.stage.vars._29++;
                              this.stage.vars._6.splice(
                                this.stage.vars._29 - 1,
                                1,
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._8,
                                    this.stage.vars._29 - 1
                                  )
                                ) + -24
                              );
                            }
                            this.stage.vars._18 = 3;
                            this.stage.vars.Y2 -= 2;
                          } else {
                            if (
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 0)
                                  ) + -24
                                )
                              ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 1)
                                  ) + -24
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 2)
                                    ) + -24
                                  )
                                ) === 0 &&
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._,
                                      this.toNumber(
                                        this.itemOf(this.stage.vars._8, 3)
                                      ) + -24
                                    )
                                  ) === 0
                            ) {
                              this.stage.vars._29 = 0;
                              for (let i = 0; i < 4; i++) {
                                this.stage.vars._29++;
                                this.stage.vars._6.splice(
                                  this.stage.vars._29 - 1,
                                  1,
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._8,
                                      this.stage.vars._29 - 1
                                    )
                                  ) + -23
                                );
                              }
                              this.stage.vars._18 = 3;
                              this.stage.vars.X++;
                              this.stage.vars.Y2 -= 2;
                            } else {
                              this.stage.vars.t6 = 0;
                            }
                          }
                        }
                      }
                    }
                    if (this.toNumber(this.stage.vars._18) === 3) {
                      this.stage.vars._21 = 0;
                    }
                  } else {
                    if (this.toNumber(this.stage.vars._18) === 3) {
                      if (
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 0)) +
                              -1
                          )
                        ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 1)) +
                              -1
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 2)
                              ) + -1
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 3)
                                ) + -1
                              )
                            ) === 0
                      ) {
                        this.stage.vars._29 = 0;
                        for (let i = 0; i < 4; i++) {
                          this.stage.vars._29++;
                          this.stage.vars._6.splice(
                            this.stage.vars._29 - 1,
                            1,
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._8,
                                this.stage.vars._29 - 1
                              )
                            ) + 0
                          );
                        }
                        this.stage.vars._18 = 0;
                      } else {
                        if (
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 0)
                              ) + -2
                            )
                          ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 1)
                              ) + -2
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 2)
                                ) + -2
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 3)
                                  ) + -2
                                )
                              ) === 0
                        ) {
                          this.stage.vars._29 = 0;
                          for (let i = 0; i < 4; i++) {
                            this.stage.vars._29++;
                            this.stage.vars._6.splice(
                              this.stage.vars._29 - 1,
                              1,
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._8,
                                  this.stage.vars._29 - 1
                                )
                              ) + -1
                            );
                          }
                          this.stage.vars._18 = 0;
                          this.stage.vars.X--;
                        } else {
                          if (
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 0)
                                ) + -14
                              )
                            ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 1)
                                ) + -14
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 2)
                                  ) + -14
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 3)
                                    ) + -14
                                  )
                                ) === 0
                          ) {
                            this.stage.vars._29 = 0;
                            for (let i = 0; i < 4; i++) {
                              this.stage.vars._29++;
                              this.stage.vars._6.splice(
                                this.stage.vars._29 - 1,
                                1,
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._8,
                                    this.stage.vars._29 - 1
                                  )
                                ) + -13
                              );
                            }
                            this.stage.vars._18 = 0;
                            this.stage.vars.X--;
                            this.stage.vars.Y2--;
                          } else {
                            if (
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 0)
                                  ) + 23
                                )
                              ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 1)
                                  ) + 23
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 2)
                                    ) + 23
                                  )
                                ) === 0 &&
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._,
                                      this.toNumber(
                                        this.itemOf(this.stage.vars._8, 3)
                                      ) + 23
                                    )
                                  ) === 0
                            ) {
                              this.stage.vars._29 = 0;
                              for (let i = 0; i < 4; i++) {
                                this.stage.vars._29++;
                                this.stage.vars._6.splice(
                                  this.stage.vars._29 - 1,
                                  1,
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._8,
                                      this.stage.vars._29 - 1
                                    )
                                  ) + 24
                                );
                              }
                              this.stage.vars._18 = 0;
                              this.stage.vars.Y2 += 2;
                            } else {
                              if (
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 0)
                                    ) + 22
                                  )
                                ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 1)
                                    ) + 22
                                  )
                                ) === 0 &&
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._,
                                      this.toNumber(
                                        this.itemOf(this.stage.vars._8, 2)
                                      ) + 22
                                    )
                                  ) === 0 &&
                                    this.toNumber(
                                      this.itemOf(
                                        this.stage.vars._,
                                        this.toNumber(
                                          this.itemOf(this.stage.vars._8, 3)
                                        ) + 22
                                      )
                                    ) === 0
                              ) {
                                this.stage.vars._29 = 0;
                                for (let i = 0; i < 4; i++) {
                                  this.stage.vars._29++;
                                  this.stage.vars._6.splice(
                                    this.stage.vars._29 - 1,
                                    1,
                                    this.toNumber(
                                      this.itemOf(
                                        this.stage.vars._8,
                                        this.stage.vars._29 - 1
                                      )
                                    ) + 23
                                  );
                                }
                                this.stage.vars._18 = 0;
                                this.stage.vars.X--;
                                this.stage.vars.Y2 += 2;
                              } else {
                                this.stage.vars.t6 = 0;
                              }
                            }
                          }
                        }
                      }
                      if (this.toNumber(this.stage.vars._18) === 0) {
                        this.stage.vars._21 = 0;
                      }
                    } else {
                      null;
                    }
                  }
                }
              }
            }
          } else {
            this.stage.vars._25 = 1;
          }
        } else {
          this.stage.vars._25 = 0;
        }
        if (
          !(this.toNumber(this.letterOf(this.stage.vars._48, 3)) === 1) &&
          this.toNumber(this.letterOf(this.stage.vars._48, 2)) === 1
        ) {
          if (this.toNumber(this.stage.vars._30) === 0) {
            this.stage.vars._30 = 1;
            this.stage.vars._28 = (this.toNumber(this.stage.vars._18) + -1) % 4;
            this.stage.vars._29 = 0;
            if (this.toString(this.stage.vars._17) === "I") {
              for (let i = 0; i < 4; i++) {
                this.stage.vars._29++;
                this.stage.vars._8.splice(
                  this.stage.vars._29 - 1,
                  1,
                  this.toNumber(this.stage.vars.X) +
                    (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars.i,
                        this.toNumber(this.stage.vars._28) * 4 +
                          this.toNumber(this.stage.vars._29) -
                          1
                      )
                    )
                );
              }
              if (this.toNumber(this.stage.vars._18) === 0) {
                if (
                  this.toNumber(
                    this.itemOf(
                      this.stage.vars._,
                      this.toNumber(this.itemOf(this.stage.vars._8, 0)) + -1
                    )
                  ) === 0 &&
                  this.toNumber(
                    this.itemOf(
                      this.stage.vars._,
                      this.toNumber(this.itemOf(this.stage.vars._8, 1)) + -1
                    )
                  ) === 0 &&
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 2)) + -1
                      )
                    ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 3)) + -1
                        )
                      ) === 0
                ) {
                  this.stage.vars._29 = 0;
                  for (let i = 0; i < 4; i++) {
                    this.stage.vars._29++;
                    this.stage.vars._6.splice(
                      this.stage.vars._29 - 1,
                      1,
                      this.toNumber(
                        this.itemOf(this.stage.vars._8, this.stage.vars._29 - 1)
                      ) + 0
                    );
                  }
                  this.stage.vars._18 = 3;
                } else {
                  if (
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 0)) + -2
                      )
                    ) === 0 &&
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 1)) + -2
                      )
                    ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 2)) + -2
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 3)) +
                              -2
                          )
                        ) === 0
                  ) {
                    this.stage.vars._29 = 0;
                    for (let i = 0; i < 4; i++) {
                      this.stage.vars._29++;
                      this.stage.vars._6.splice(
                        this.stage.vars._29 - 1,
                        1,
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._8,
                            this.stage.vars._29 - 1
                          )
                        ) + -1
                      );
                    }
                    this.stage.vars._18 = 3;
                    this.stage.vars.X--;
                  } else {
                    if (
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 0)) + 1
                        )
                      ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 1)) + 1
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 2)) +
                              1
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 3)
                              ) + 1
                            )
                          ) === 0
                    ) {
                      this.stage.vars._29 = 0;
                      for (let i = 0; i < 4; i++) {
                        this.stage.vars._29++;
                        this.stage.vars._6.splice(
                          this.stage.vars._29 - 1,
                          1,
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._8,
                              this.stage.vars._29 - 1
                            )
                          ) + 2
                        );
                      }
                      this.stage.vars._18 = 3;
                      this.stage.vars.X += 2;
                    } else {
                      if (
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 0)) +
                              22
                          )
                        ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 1)) +
                              22
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 2)
                              ) + 22
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 3)
                                ) + 22
                              )
                            ) === 0
                      ) {
                        this.stage.vars._29 = 0;
                        for (let i = 0; i < 4; i++) {
                          this.stage.vars._29++;
                          this.stage.vars._6.splice(
                            this.stage.vars._29 - 1,
                            1,
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._8,
                                this.stage.vars._29 - 1
                              )
                            ) + 23
                          );
                        }
                        this.stage.vars._18 = 3;
                        this.stage.vars.X--;
                        this.stage.vars.Y2 += 2;
                      } else {
                        if (
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 0)
                              ) + -11
                            )
                          ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 1)
                              ) + -11
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 2)
                                ) + -11
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 3)
                                  ) + -11
                                )
                              ) === 0
                        ) {
                          this.stage.vars._29 = 0;
                          for (let i = 0; i < 4; i++) {
                            this.stage.vars._29++;
                            this.stage.vars._6.splice(
                              this.stage.vars._29 - 1,
                              1,
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._8,
                                  this.stage.vars._29 - 1
                                )
                              ) + -10
                            );
                          }
                          this.stage.vars._18 = 3;
                          this.stage.vars.X += 2;
                          this.stage.vars.Y2--;
                        } else {
                          null;
                        }
                      }
                    }
                  }
                }
                if (this.toNumber(this.stage.vars._18) === 3) {
                  this.stage.vars._21 = 0;
                }
              } else {
                if (this.toNumber(this.stage.vars._18) === 1) {
                  if (
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 0)) + -1
                      )
                    ) === 0 &&
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 1)) + -1
                      )
                    ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 2)) + -1
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 3)) +
                              -1
                          )
                        ) === 0
                  ) {
                    this.stage.vars._29 = 0;
                    for (let i = 0; i < 4; i++) {
                      this.stage.vars._29++;
                      this.stage.vars._6.splice(
                        this.stage.vars._29 - 1,
                        1,
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._8,
                            this.stage.vars._29 - 1
                          )
                        ) + 0
                      );
                    }
                    this.stage.vars._18 = 0;
                  } else {
                    if (
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 0)) + 1
                        )
                      ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 1)) + 1
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 2)) +
                              1
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 3)
                              ) + 1
                            )
                          ) === 0
                    ) {
                      this.stage.vars._29 = 0;
                      for (let i = 0; i < 4; i++) {
                        this.stage.vars._29++;
                        this.stage.vars._6.splice(
                          this.stage.vars._29 - 1,
                          1,
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._8,
                              this.stage.vars._29 - 1
                            )
                          ) + 2
                        );
                      }
                      this.stage.vars._18 = 0;
                      this.stage.vars.X += 2;
                    } else {
                      if (
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 0)) +
                              -2
                          )
                        ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 1)) +
                              -2
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 2)
                              ) + -2
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 3)
                                ) + -2
                              )
                            ) === 0
                      ) {
                        this.stage.vars._29 = 0;
                        for (let i = 0; i < 4; i++) {
                          this.stage.vars._29++;
                          this.stage.vars._6.splice(
                            this.stage.vars._29 - 1,
                            1,
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._8,
                                this.stage.vars._29 - 1
                              )
                            ) + -1
                          );
                        }
                        this.stage.vars._18 = 0;
                        this.stage.vars.X--;
                      } else {
                        if (
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 0)
                              ) + 13
                            )
                          ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 1)
                              ) + 13
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 2)
                                ) + 13
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 3)
                                  ) + 13
                                )
                              ) === 0
                        ) {
                          this.stage.vars._29 = 0;
                          for (let i = 0; i < 4; i++) {
                            this.stage.vars._29++;
                            this.stage.vars._6.splice(
                              this.stage.vars._29 - 1,
                              1,
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._8,
                                  this.stage.vars._29 - 1
                                )
                              ) + 14
                            );
                          }
                          this.stage.vars._18 = 0;
                          this.stage.vars.X += 2;
                          this.stage.vars.Y2++;
                        } else {
                          if (
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 0)
                                ) + -26
                              )
                            ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 1)
                                ) + -26
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 2)
                                  ) + -26
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 3)
                                    ) + -26
                                  )
                                ) === 0
                          ) {
                            this.stage.vars._29 = 0;
                            for (let i = 0; i < 4; i++) {
                              this.stage.vars._29++;
                              this.stage.vars._6.splice(
                                this.stage.vars._29 - 1,
                                1,
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._8,
                                    this.stage.vars._29 - 1
                                  )
                                ) + -25
                              );
                            }
                            this.stage.vars._18 = 0;
                            this.stage.vars.X--;
                            this.stage.vars.Y2 -= 2;
                          } else {
                            null;
                          }
                        }
                      }
                    }
                  }
                  if (this.toNumber(this.stage.vars._18) === 0) {
                    this.stage.vars._21 = 0;
                  }
                } else {
                  if (this.toNumber(this.stage.vars._18) === 2) {
                    if (
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 0)) + -1
                        )
                      ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 1)) + -1
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 2)) +
                              -1
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 3)
                              ) + -1
                            )
                          ) === 0
                    ) {
                      this.stage.vars._29 = 0;
                      for (let i = 0; i < 4; i++) {
                        this.stage.vars._29++;
                        this.stage.vars._6.splice(
                          this.stage.vars._29 - 1,
                          1,
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._8,
                              this.stage.vars._29 - 1
                            )
                          ) + 0
                        );
                      }
                      this.stage.vars._18 = 1;
                    } else {
                      if (
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 0))
                          )
                        ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 1))
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(this.itemOf(this.stage.vars._8, 2))
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 3)
                                )
                              )
                            ) === 0
                      ) {
                        this.stage.vars._29 = 0;
                        for (let i = 0; i < 4; i++) {
                          this.stage.vars._29++;
                          this.stage.vars._6.splice(
                            this.stage.vars._29 - 1,
                            1,
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._8,
                                this.stage.vars._29 - 1
                              )
                            ) + 1
                          );
                        }
                        this.stage.vars._18 = 1;
                        this.stage.vars.X++;
                      } else {
                        if (
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 0)
                              ) + -3
                            )
                          ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 1)
                              ) + -3
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 2)
                                ) + -3
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 3)
                                  ) + -3
                                )
                              ) === 0
                        ) {
                          this.stage.vars._29 = 0;
                          for (let i = 0; i < 4; i++) {
                            this.stage.vars._29++;
                            this.stage.vars._6.splice(
                              this.stage.vars._29 - 1,
                              1,
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._8,
                                  this.stage.vars._29 - 1
                                )
                              ) + -2
                            );
                          }
                          this.stage.vars._18 = 1;
                          this.stage.vars.X -= 2;
                        } else {
                          if (
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 0)
                                ) + -24
                              )
                            ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 1)
                                ) + -24
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 2)
                                  ) + -24
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 3)
                                    ) + -24
                                  )
                                ) === 0
                          ) {
                            this.stage.vars._29 = 0;
                            for (let i = 0; i < 4; i++) {
                              this.stage.vars._29++;
                              this.stage.vars._6.splice(
                                this.stage.vars._29 - 1,
                                1,
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._8,
                                    this.stage.vars._29 - 1
                                  )
                                ) + -23
                              );
                            }
                            this.stage.vars._18 = 1;
                            this.stage.vars.X++;
                            this.stage.vars.Y2 -= 2;
                          } else {
                            if (
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 0)
                                  ) + 9
                                )
                              ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 1)
                                  ) + 9
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 2)
                                    ) + 9
                                  )
                                ) === 0 &&
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._,
                                      this.toNumber(
                                        this.itemOf(this.stage.vars._8, 3)
                                      ) + 9
                                    )
                                  ) === 0
                            ) {
                              this.stage.vars._29 = 0;
                              for (let i = 0; i < 4; i++) {
                                this.stage.vars._29++;
                                this.stage.vars._6.splice(
                                  this.stage.vars._29 - 1,
                                  1,
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._8,
                                      this.stage.vars._29 - 1
                                    )
                                  ) + 10
                                );
                              }
                              this.stage.vars._18 = 1;
                              this.stage.vars.X -= 2;
                              this.stage.vars.Y2++;
                            } else {
                              null;
                            }
                          }
                        }
                      }
                    }
                    if (this.toNumber(this.stage.vars._18) === 1) {
                      this.stage.vars._21 = 0;
                    }
                  } else {
                    if (this.toNumber(this.stage.vars._18) === 3) {
                      if (
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 0)) +
                              -1
                          )
                        ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 1)) +
                              -1
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 2)
                              ) + -1
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 3)
                                ) + -1
                              )
                            ) === 0
                      ) {
                        this.stage.vars._29 = 0;
                        for (let i = 0; i < 4; i++) {
                          this.stage.vars._29++;
                          this.stage.vars._6.splice(
                            this.stage.vars._29 - 1,
                            1,
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._8,
                                this.stage.vars._29 - 1
                              )
                            ) + 0
                          );
                        }
                        this.stage.vars._18 = 2;
                      } else {
                        if (
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(this.itemOf(this.stage.vars._8, 0))
                            )
                          ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(this.itemOf(this.stage.vars._8, 1))
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 2)
                                )
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 3)
                                  )
                                )
                              ) === 0
                        ) {
                          this.stage.vars._29 = 0;
                          for (let i = 0; i < 4; i++) {
                            this.stage.vars._29++;
                            this.stage.vars._6.splice(
                              this.stage.vars._29 - 1,
                              1,
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._8,
                                  this.stage.vars._29 - 1
                                )
                              ) + 1
                            );
                          }
                          this.stage.vars._18 = 2;
                          this.stage.vars.X++;
                        } else {
                          if (
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 0)
                                ) + -3
                              )
                            ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 1)
                                ) + -3
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 2)
                                  ) + -3
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 3)
                                    ) + -3
                                  )
                                ) === 0
                          ) {
                            this.stage.vars._29 = 0;
                            for (let i = 0; i < 4; i++) {
                              this.stage.vars._29++;
                              this.stage.vars._6.splice(
                                this.stage.vars._29 - 1,
                                1,
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._8,
                                    this.stage.vars._29 - 1
                                  )
                                ) + -2
                              );
                            }
                            this.stage.vars._18 = 2;
                            this.stage.vars.X -= 2;
                          } else {
                            if (
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 0)
                                  ) + -15
                                )
                              ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 1)
                                  ) + -15
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 2)
                                    ) + -15
                                  )
                                ) === 0 &&
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._,
                                      this.toNumber(
                                        this.itemOf(this.stage.vars._8, 3)
                                      ) + -15
                                    )
                                  ) === 0
                            ) {
                              this.stage.vars._29 = 0;
                              for (let i = 0; i < 4; i++) {
                                this.stage.vars._29++;
                                this.stage.vars._6.splice(
                                  this.stage.vars._29 - 1,
                                  1,
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._8,
                                      this.stage.vars._29 - 1
                                    )
                                  ) + -14
                                );
                              }
                              this.stage.vars._18 = 2;
                              this.stage.vars.X -= 2;
                              this.stage.vars.Y2--;
                            } else {
                              if (
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 0)
                                    ) + 24
                                  )
                                ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 1)
                                    ) + 24
                                  )
                                ) === 0 &&
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._,
                                      this.toNumber(
                                        this.itemOf(this.stage.vars._8, 2)
                                      ) + 24
                                    )
                                  ) === 0 &&
                                    this.toNumber(
                                      this.itemOf(
                                        this.stage.vars._,
                                        this.toNumber(
                                          this.itemOf(this.stage.vars._8, 3)
                                        ) + 24
                                      )
                                    ) === 0
                              ) {
                                this.stage.vars._29 = 0;
                                for (let i = 0; i < 4; i++) {
                                  this.stage.vars._29++;
                                  this.stage.vars._6.splice(
                                    this.stage.vars._29 - 1,
                                    1,
                                    this.toNumber(
                                      this.itemOf(
                                        this.stage.vars._8,
                                        this.stage.vars._29 - 1
                                      )
                                    ) + 25
                                  );
                                }
                                this.stage.vars._18 = 2;
                                this.stage.vars.X++;
                                this.stage.vars.Y2 += 2;
                              } else {
                                null;
                              }
                            }
                          }
                        }
                      }
                    } else {
                      null;
                    }
                  }
                }
              }
              if (this.toNumber(this.stage.vars._18) === 2) {
                this.stage.vars._21 = 0;
              }
            } else {
              if (this.toString(this.stage.vars._17) === "J") {
                for (let i = 0; i < 4; i++) {
                  this.stage.vars._29++;
                  this.stage.vars._8.splice(
                    this.stage.vars._29 - 1,
                    1,
                    this.toNumber(this.stage.vars.X) +
                      (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars.j,
                          this.toNumber(this.stage.vars._28) * 4 +
                            this.toNumber(this.stage.vars._29) -
                            1
                        )
                      )
                  );
                }
              } else {
                if (this.toString(this.stage.vars._17) === "L") {
                  for (let i = 0; i < 4; i++) {
                    this.stage.vars._29++;
                    this.stage.vars._8.splice(
                      this.stage.vars._29 - 1,
                      1,
                      this.toNumber(this.stage.vars.X) +
                        (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars.l,
                            this.toNumber(this.stage.vars._28) * 4 +
                              this.toNumber(this.stage.vars._29) -
                              1
                          )
                        )
                    );
                  }
                } else {
                  if (this.toString(this.stage.vars._17) === "O") {
                    for (let i = 0; i < 4; i++) {
                      this.stage.vars._29++;
                      this.stage.vars._8.splice(
                        this.stage.vars._29 - 1,
                        1,
                        this.toNumber(this.stage.vars.X) +
                          (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars.o,
                              this.toNumber(this.stage.vars._28) * 4 +
                                this.toNumber(this.stage.vars._29) -
                                1
                            )
                          )
                      );
                    }
                  } else {
                    if (this.toString(this.stage.vars._17) === "S") {
                      for (let i = 0; i < 4; i++) {
                        this.stage.vars._29++;
                        this.stage.vars._8.splice(
                          this.stage.vars._29 - 1,
                          1,
                          this.toNumber(this.stage.vars.X) +
                            (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars.s,
                                this.toNumber(this.stage.vars._28) * 4 +
                                  this.toNumber(this.stage.vars._29) -
                                  1
                              )
                            )
                        );
                      }
                    } else {
                      if (this.toString(this.stage.vars._17) === "T") {
                        for (let i = 0; i < 4; i++) {
                          this.stage.vars._29++;
                          this.stage.vars._8.splice(
                            this.stage.vars._29 - 1,
                            1,
                            this.toNumber(this.stage.vars.X) +
                              (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars.t,
                                  this.toNumber(this.stage.vars._28) * 4 +
                                    this.toNumber(this.stage.vars._29) -
                                    1
                                )
                              )
                          );
                        }
                        this.stage.vars.t6 = 1;
                      } else {
                        if (this.toString(this.stage.vars._17) === "Z") {
                          for (let i = 0; i < 4; i++) {
                            this.stage.vars._29++;
                            this.stage.vars._8.splice(
                              this.stage.vars._29 - 1,
                              1,
                              this.toNumber(this.stage.vars.X) +
                                (this.toNumber(this.stage.vars.Y2) - 1) * 12 +
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars.z,
                                    this.toNumber(this.stage.vars._28) * 4 +
                                      this.toNumber(this.stage.vars._29) -
                                      1
                                  )
                                )
                            );
                          }
                        } else {
                          null;
                        }
                      }
                    }
                  }
                }
              }
              if (this.toNumber(this.stage.vars._18) === 0) {
                if (
                  this.toNumber(
                    this.itemOf(
                      this.stage.vars._,
                      this.toNumber(this.itemOf(this.stage.vars._8, 0)) + -1
                    )
                  ) === 0 &&
                  this.toNumber(
                    this.itemOf(
                      this.stage.vars._,
                      this.toNumber(this.itemOf(this.stage.vars._8, 1)) + -1
                    )
                  ) === 0 &&
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 2)) + -1
                      )
                    ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 3)) + -1
                        )
                      ) === 0
                ) {
                  this.stage.vars._29 = 0;
                  for (let i = 0; i < 4; i++) {
                    this.stage.vars._29++;
                    this.stage.vars._6.splice(
                      this.stage.vars._29 - 1,
                      1,
                      this.toNumber(
                        this.itemOf(this.stage.vars._8, this.stage.vars._29 - 1)
                      ) + 0
                    );
                  }
                  this.stage.vars._18 = 3;
                } else {
                  if (
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 0))
                      )
                    ) === 0 &&
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 1))
                      )
                    ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 2))
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 3))
                          )
                        ) === 0
                  ) {
                    this.stage.vars._29 = 0;
                    for (let i = 0; i < 4; i++) {
                      this.stage.vars._29++;
                      this.stage.vars._6.splice(
                        this.stage.vars._29 - 1,
                        1,
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._8,
                            this.stage.vars._29 - 1
                          )
                        ) + 1
                      );
                    }
                    this.stage.vars._18 = 3;
                    this.stage.vars.X++;
                  } else {
                    if (
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 0)) + 12
                        )
                      ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 1)) + 12
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 2)) +
                              12
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 3)
                              ) + 12
                            )
                          ) === 0
                    ) {
                      this.stage.vars._29 = 0;
                      for (let i = 0; i < 4; i++) {
                        this.stage.vars._29++;
                        this.stage.vars._6.splice(
                          this.stage.vars._29 - 1,
                          1,
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._8,
                              this.stage.vars._29 - 1
                            )
                          ) + 13
                        );
                      }
                      this.stage.vars._18 = 3;
                      this.stage.vars.X++;
                      this.stage.vars.Y2++;
                    } else {
                      if (
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 0)) +
                              -25
                          )
                        ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 1)) +
                              -25
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 2)
                              ) + -25
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 3)
                                ) + -25
                              )
                            ) === 0
                      ) {
                        this.stage.vars._29 = 0;
                        for (let i = 0; i < 4; i++) {
                          this.stage.vars._29++;
                          this.stage.vars._6.splice(
                            this.stage.vars._29 - 1,
                            1,
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._8,
                                this.stage.vars._29 - 1
                              )
                            ) + -24
                          );
                        }
                        this.stage.vars._18 = 3;
                        this.stage.vars.Y2 -= 2;
                      } else {
                        if (
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 0)
                              ) + -24
                            )
                          ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 1)
                              ) + -24
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 2)
                                ) + -24
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 3)
                                  ) + -24
                                )
                              ) === 0
                        ) {
                          this.stage.vars._29 = 0;
                          for (let i = 0; i < 4; i++) {
                            this.stage.vars._29++;
                            this.stage.vars._6.splice(
                              this.stage.vars._29 - 1,
                              1,
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._8,
                                  this.stage.vars._29 - 1
                                )
                              ) + -23
                            );
                          }
                          this.stage.vars._18 = 3;
                          this.stage.vars.X++;
                          this.stage.vars.Y2 -= 2;
                        } else {
                          this.stage.vars.t6 = 0;
                        }
                      }
                    }
                  }
                }
                if (this.toNumber(this.stage.vars._18) === 3) {
                  this.stage.vars._21 = 0;
                }
              } else {
                if (this.toNumber(this.stage.vars._18) === 1) {
                  if (
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 0)) + -1
                      )
                    ) === 0 &&
                    this.toNumber(
                      this.itemOf(
                        this.stage.vars._,
                        this.toNumber(this.itemOf(this.stage.vars._8, 1)) + -1
                      )
                    ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 2)) + -1
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 3)) +
                              -1
                          )
                        ) === 0
                  ) {
                    this.stage.vars._29 = 0;
                    for (let i = 0; i < 4; i++) {
                      this.stage.vars._29++;
                      this.stage.vars._6.splice(
                        this.stage.vars._29 - 1,
                        1,
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._8,
                            this.stage.vars._29 - 1
                          )
                        ) + 0
                      );
                    }
                    this.stage.vars._18 = 0;
                  } else {
                    if (
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 0))
                        )
                      ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 1))
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 2))
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(this.itemOf(this.stage.vars._8, 3))
                            )
                          ) === 0
                    ) {
                      this.stage.vars._29 = 0;
                      for (let i = 0; i < 4; i++) {
                        this.stage.vars._29++;
                        this.stage.vars._6.splice(
                          this.stage.vars._29 - 1,
                          1,
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._8,
                              this.stage.vars._29 - 1
                            )
                          ) + 1
                        );
                      }
                      this.stage.vars._18 = 0;
                      this.stage.vars.X++;
                    } else {
                      if (
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 0)) +
                              -12
                          )
                        ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 1)) +
                              -12
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 2)
                              ) + -12
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 3)
                                ) + -12
                              )
                            ) === 0
                      ) {
                        this.stage.vars._29 = 0;
                        for (let i = 0; i < 4; i++) {
                          this.stage.vars._29++;
                          this.stage.vars._6.splice(
                            this.stage.vars._29 - 1,
                            1,
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._8,
                                this.stage.vars._29 - 1
                              )
                            ) + -11
                          );
                        }
                        this.stage.vars._18 = 0;
                        this.stage.vars.X++;
                        this.stage.vars.Y2--;
                      } else {
                        if (
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 0)
                              ) + 23
                            )
                          ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 1)
                              ) + 23
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 2)
                                ) + 23
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 3)
                                  ) + 23
                                )
                              ) === 0
                        ) {
                          this.stage.vars._29 = 0;
                          for (let i = 0; i < 4; i++) {
                            this.stage.vars._29++;
                            this.stage.vars._6.splice(
                              this.stage.vars._29 - 1,
                              1,
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._8,
                                  this.stage.vars._29 - 1
                                )
                              ) + 24
                            );
                          }
                          this.stage.vars._18 = 0;
                          this.stage.vars.Y2 += 2;
                        } else {
                          if (
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 0)
                                ) + 24
                              )
                            ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 1)
                                ) + 24
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 2)
                                  ) + 24
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 3)
                                    ) + 24
                                  )
                                ) === 0
                          ) {
                            this.stage.vars._29 = 0;
                            for (let i = 0; i < 4; i++) {
                              this.stage.vars._29++;
                              this.stage.vars._6.splice(
                                this.stage.vars._29 - 1,
                                1,
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._8,
                                    this.stage.vars._29 - 1
                                  )
                                ) + 25
                              );
                            }
                            this.stage.vars._18 = 0;
                            this.stage.vars.X++;
                            this.stage.vars.Y2 += 2;
                          } else {
                            this.stage.vars.t6 = 0;
                          }
                        }
                      }
                    }
                  }
                  if (this.toNumber(this.stage.vars._18) === 0) {
                    this.stage.vars._21 = 0;
                  }
                } else {
                  if (this.toNumber(this.stage.vars._18) === 2) {
                    if (
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 0)) + -1
                        )
                      ) === 0 &&
                      this.toNumber(
                        this.itemOf(
                          this.stage.vars._,
                          this.toNumber(this.itemOf(this.stage.vars._8, 1)) + -1
                        )
                      ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 2)) +
                              -1
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 3)
                              ) + -1
                            )
                          ) === 0
                    ) {
                      this.stage.vars._29 = 0;
                      for (let i = 0; i < 4; i++) {
                        this.stage.vars._29++;
                        this.stage.vars._6.splice(
                          this.stage.vars._29 - 1,
                          1,
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._8,
                              this.stage.vars._29 - 1
                            )
                          ) + 0
                        );
                      }
                      this.stage.vars._18 = 1;
                    } else {
                      if (
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 0)) +
                              -2
                          )
                        ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 1)) +
                              -2
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 2)
                              ) + -2
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 3)
                                ) + -2
                              )
                            ) === 0
                      ) {
                        this.stage.vars._29 = 0;
                        for (let i = 0; i < 4; i++) {
                          this.stage.vars._29++;
                          this.stage.vars._6.splice(
                            this.stage.vars._29 - 1,
                            1,
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._8,
                                this.stage.vars._29 - 1
                              )
                            ) + -1
                          );
                        }
                        this.stage.vars._18 = 1;
                        this.stage.vars.X--;
                      } else {
                        if (
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 0)
                              ) + 10
                            )
                          ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 1)
                              ) + 10
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 2)
                                ) + 10
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 3)
                                  ) + 10
                                )
                              ) === 0
                        ) {
                          this.stage.vars._29 = 0;
                          for (let i = 0; i < 4; i++) {
                            this.stage.vars._29++;
                            this.stage.vars._6.splice(
                              this.stage.vars._29 - 1,
                              1,
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._8,
                                  this.stage.vars._29 - 1
                                )
                              ) + 11
                            );
                          }
                          this.stage.vars._18 = 1;
                          this.stage.vars.X--;
                          this.stage.vars.Y2++;
                        } else {
                          if (
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 0)
                                ) + -25
                              )
                            ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 1)
                                ) + -25
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 2)
                                  ) + -25
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 3)
                                    ) + -25
                                  )
                                ) === 0
                          ) {
                            this.stage.vars._29 = 0;
                            for (let i = 0; i < 4; i++) {
                              this.stage.vars._29++;
                              this.stage.vars._6.splice(
                                this.stage.vars._29 - 1,
                                1,
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._8,
                                    this.stage.vars._29 - 1
                                  )
                                ) + -24
                              );
                            }
                            this.stage.vars._18 = 1;
                            this.stage.vars.Y2 -= 2;
                          } else {
                            if (
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 0)
                                  ) + -26
                                )
                              ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 1)
                                  ) + -26
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 2)
                                    ) + -26
                                  )
                                ) === 0 &&
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._,
                                      this.toNumber(
                                        this.itemOf(this.stage.vars._8, 3)
                                      ) + -26
                                    )
                                  ) === 0
                            ) {
                              this.stage.vars._29 = 0;
                              for (let i = 0; i < 4; i++) {
                                this.stage.vars._29++;
                                this.stage.vars._6.splice(
                                  this.stage.vars._29 - 1,
                                  1,
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._8,
                                      this.stage.vars._29 - 1
                                    )
                                  ) + -25
                                );
                              }
                              this.stage.vars._18 = 1;
                              this.stage.vars.X--;
                              this.stage.vars.Y2 -= 2;
                            } else {
                              this.stage.vars.t6 = 0;
                            }
                          }
                        }
                      }
                    }
                    if (this.toNumber(this.stage.vars._18) === 1) {
                      this.stage.vars._21 = 0;
                    }
                  } else {
                    if (this.toNumber(this.stage.vars._18) === 3) {
                      if (
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 0)) +
                              -1
                          )
                        ) === 0 &&
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars._,
                            this.toNumber(this.itemOf(this.stage.vars._8, 1)) +
                              -1
                          )
                        ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 2)
                              ) + -1
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 3)
                                ) + -1
                              )
                            ) === 0
                      ) {
                        this.stage.vars._29 = 0;
                        for (let i = 0; i < 4; i++) {
                          this.stage.vars._29++;
                          this.stage.vars._6.splice(
                            this.stage.vars._29 - 1,
                            1,
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._8,
                                this.stage.vars._29 - 1
                              )
                            ) + 0
                          );
                        }
                        this.stage.vars._18 = 2;
                      } else {
                        if (
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 0)
                              ) + -2
                            )
                          ) === 0 &&
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars._,
                              this.toNumber(
                                this.itemOf(this.stage.vars._8, 1)
                              ) + -2
                            )
                          ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 2)
                                ) + -2
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 3)
                                  ) + -2
                                )
                              ) === 0
                        ) {
                          this.stage.vars._29 = 0;
                          for (let i = 0; i < 4; i++) {
                            this.stage.vars._29++;
                            this.stage.vars._6.splice(
                              this.stage.vars._29 - 1,
                              1,
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._8,
                                  this.stage.vars._29 - 1
                                )
                              ) + -1
                            );
                          }
                          this.stage.vars._18 = 2;
                          this.stage.vars.X--;
                        } else {
                          if (
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 0)
                                ) + -14
                              )
                            ) === 0 &&
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars._,
                                this.toNumber(
                                  this.itemOf(this.stage.vars._8, 1)
                                ) + -14
                              )
                            ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 2)
                                  ) + -14
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 3)
                                    ) + -14
                                  )
                                ) === 0
                          ) {
                            this.stage.vars._29 = 0;
                            for (let i = 0; i < 4; i++) {
                              this.stage.vars._29++;
                              this.stage.vars._6.splice(
                                this.stage.vars._29 - 1,
                                1,
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._8,
                                    this.stage.vars._29 - 1
                                  )
                                ) + -13
                              );
                            }
                            this.stage.vars._18 = 2;
                            this.stage.vars.X--;
                            this.stage.vars.Y2--;
                          } else {
                            if (
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 0)
                                  ) + 23
                                )
                              ) === 0 &&
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars._,
                                  this.toNumber(
                                    this.itemOf(this.stage.vars._8, 1)
                                  ) + 23
                                )
                              ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 2)
                                    ) + 23
                                  )
                                ) === 0 &&
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._,
                                      this.toNumber(
                                        this.itemOf(this.stage.vars._8, 3)
                                      ) + 23
                                    )
                                  ) === 0
                            ) {
                              this.stage.vars._29 = 0;
                              for (let i = 0; i < 4; i++) {
                                this.stage.vars._29++;
                                this.stage.vars._6.splice(
                                  this.stage.vars._29 - 1,
                                  1,
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._8,
                                      this.stage.vars._29 - 1
                                    )
                                  ) + 24
                                );
                              }
                              this.stage.vars._18 = 2;
                              this.stage.vars.Y2 += 2;
                            } else {
                              if (
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 0)
                                    ) + 22
                                  )
                                ) === 0 &&
                                this.toNumber(
                                  this.itemOf(
                                    this.stage.vars._,
                                    this.toNumber(
                                      this.itemOf(this.stage.vars._8, 1)
                                    ) + 22
                                  )
                                ) === 0 &&
                                  this.toNumber(
                                    this.itemOf(
                                      this.stage.vars._,
                                      this.toNumber(
                                        this.itemOf(this.stage.vars._8, 2)
                                      ) + 22
                                    )
                                  ) === 0 &&
                                    this.toNumber(
                                      this.itemOf(
                                        this.stage.vars._,
                                        this.toNumber(
                                          this.itemOf(this.stage.vars._8, 3)
                                        ) + 22
                                      )
                                    ) === 0
                              ) {
                                this.stage.vars._29 = 0;
                                for (let i = 0; i < 4; i++) {
                                  this.stage.vars._29++;
                                  this.stage.vars._6.splice(
                                    this.stage.vars._29 - 1,
                                    1,
                                    this.toNumber(
                                      this.itemOf(
                                        this.stage.vars._8,
                                        this.stage.vars._29 - 1
                                      )
                                    ) + 23
                                  );
                                }
                                this.stage.vars._18 = 2;
                                this.stage.vars.X--;
                                this.stage.vars.Y2 += 2;
                              } else {
                                this.stage.vars.t6 = 0;
                              }
                            }
                          }
                        }
                      }
                      if (this.toNumber(this.stage.vars._18) === 2) {
                        this.stage.vars._21 = 0;
                      }
                    } else {
                      null;
                    }
                  }
                }
              }
            }
          } else {
            this.stage.vars._30 = 1;
          }
        } else {
          this.stage.vars._30 = 0;
        }
        if (
          this.toNumber(this.stage.vars.t3) === 0 &&
          this.toNumber(this.stage.vars.t6) === 1
        ) {
          this.stage.vars.t3 = 1;
        }
      }
    }
  }

  *_4() {
    this.stage.vars._16 = 0;
    for (let i = 0; i < 7; i++) {
      this.stage.vars._16++;
      this.stage.vars._5.push(
        this.itemOf(this.stage.vars._2, this.stage.vars._16 - 1)
      );
    }
    for (let i = 0; i < 7; i++) {
      this.stage.vars._16 = this.random(1, this.stage.vars._5.length);
      this.stage.vars._4.push(
        this.itemOf(this.stage.vars._5, this.stage.vars._16 - 1)
      );
      this.stage.vars._13.push(
        this.itemOf(this.stage.vars._5, this.stage.vars._16 - 1)
      );
      this.stage.vars._5.splice(this.stage.vars._16 - 1, 1);
    }
  }

  *_5() {
    this.stage.vars._45 = 0;
    this.stage.vars._27 = 0;
    for (let i = 0; i < 4; i++) {
      this.stage.vars._27++;
      this.stage.vars._7.splice(
        this.stage.vars._27 - 1,
        1,
        this.itemOf(this.stage.vars._6, this.stage.vars._27 - 1)
      );
    }
    this.stage.vars._27 = 0;
    this.stage.vars.t5 = 1;
    while (
      !!(
        this.toNumber(
          this.itemOf(
            this.stage.vars._,
            this.toNumber(this.itemOf(this.stage.vars._7, 0)) - 13
          )
        ) === 0 &&
        this.toNumber(
          this.itemOf(
            this.stage.vars._,
            this.toNumber(this.itemOf(this.stage.vars._7, 1)) - 13
          )
        ) === 0 &&
          this.toNumber(
            this.itemOf(
              this.stage.vars._,
              this.toNumber(this.itemOf(this.stage.vars._7, 2)) - 13
            )
          ) === 0 &&
            this.toNumber(
              this.itemOf(
                this.stage.vars._,
                this.toNumber(this.itemOf(this.stage.vars._7, 3)) - 13
              )
            ) === 0
      )
    ) {
      this.stage.vars._45 += 2;
      this.stage.vars.t5 = 0;
      this.stage.vars._27 = 0;
      for (let i = 0; i < 4; i++) {
        this.stage.vars._27++;
        this.stage.vars._7.splice(
          this.stage.vars._27 - 1,
          1,
          this.toNumber(
            this.itemOf(this.stage.vars._7, this.stage.vars._27 - 1)
          ) - 12
        );
      }
    }
    if (
      this.compare(this.stage.vars._21, 1) < 0 ||
      (this.toNumber(this.stage.vars.Y2) === 22 &&
        this.compare(this.stage.vars._20, 15) < 0)
    ) {
      this.penColor.a = 1 - 60 / 100;
      this.stage.vars._27 = 0;
      for (let i = 0; i < 4; i++) {
        this.stage.vars._27++;
        this.warp(this.XY)(
          this.toNumber(
            this.itemOf(this.stage.vars._7, this.stage.vars._27 - 1)
          ) % 12,
          Math.ceil(
            this.toNumber(
              this.itemOf(this.stage.vars._7, this.stage.vars._27 - 1)
            ) / 12
          ),
          this.stage.vars._17,
          0
        );
      }
      this.penColor.a = 1 - 0 / 100;
    }
  }

  *_6() {
    this.stage.vars._43 = this.stage.vars.score;
    this.stage.vars._44 = 0;
    this.stage.vars.tSpin = 0;
    if (this.toNumber(this.stage.vars.t3) === 1) {
      this.stage.vars.t4 =
        this.toNumber(this.stage.vars.X) +
        12 * (this.toNumber(this.stage.vars.Y2) - 1);
      this.stage.vars.t2.splice(
        0,
        1,
        this.itemOf(this.stage.vars._, this.toNumber(this.stage.vars.t4) + 10)
      );
      this.stage.vars.t2.splice(
        1,
        1,
        this.itemOf(this.stage.vars._, this.toNumber(this.stage.vars.t4) + 12)
      );
      this.stage.vars.t2.splice(
        2,
        1,
        this.itemOf(this.stage.vars._, this.toNumber(this.stage.vars.t4) + -12)
      );
      this.stage.vars.t2.splice(
        3,
        1,
        this.itemOf(this.stage.vars._, this.toNumber(this.stage.vars.t4) + -14)
      );
      if (
        this.compare(
          2,
          this.toNumber(
            this.toNumber(this.itemOf(this.stage.vars.t2, 0)) === 0
          ) +
            this.toNumber(
              this.toNumber(this.itemOf(this.stage.vars.t2, 1)) === 0
            ) +
            this.toNumber(
              this.toNumber(this.itemOf(this.stage.vars.t2, 2)) === 0
            ) +
            this.toNumber(
              this.toNumber(this.itemOf(this.stage.vars.t2, 3)) === 0
            )
        ) > 0
      ) {
        this.broadcast("t-spin");
        if (this.toNumber(this.stage.vars._18) === 0) {
          if (
            0 ===
            this.toNumber(
              this.itemOf(
                this.stage.vars._,
                this.toNumber(this.stage.vars.t4) + -13
              )
            )
          ) {
            this.stage.vars.tSpin = 2;
          } else {
            this.stage.vars.tSpin = 1;
          }
        } else {
          if (this.toNumber(this.stage.vars._18) === 1) {
            if (
              0 ===
              this.toNumber(
                this.itemOf(
                  this.stage.vars._,
                  this.toNumber(this.stage.vars.t4) + -2
                )
              )
            ) {
              this.stage.vars.tSpin = 2;
            } else {
              this.stage.vars.tSpin = 1;
            }
          } else {
            if (this.toNumber(this.stage.vars._18) === 2) {
              if (
                0 ===
                this.toNumber(
                  this.itemOf(
                    this.stage.vars._,
                    this.toNumber(this.stage.vars.t4) + 11
                  )
                )
              ) {
                this.stage.vars.tSpin = 2;
              } else {
                this.stage.vars.tSpin = 1;
              }
            } else {
              if (this.toNumber(this.stage.vars._18) === 3) {
                if (
                  0 ===
                  this.toNumber(
                    this.itemOf(
                      this.stage.vars._,
                      this.toNumber(this.stage.vars.t4)
                    )
                  )
                ) {
                  this.stage.vars.tSpin = 2;
                } else {
                  this.stage.vars.tSpin = 1;
                }
              } else {
                null;
              }
            }
          }
        }
      }
    }
    this.stage.vars._31 = 12;
    this.stage.vars._32 = 0;
    for (let i = 0; i < 22; i++) {
      this.stage.vars._33 = 0;
      while (
        !(
          this.toNumber(
            this.itemOf(
              this.stage.vars._,
              this.toNumber(this.stage.vars._31) +
                this.toNumber(this.stage.vars._33) -
                1
            )
          ) === 0 || this.toNumber(this.stage.vars._33) === 12
        )
      ) {
        this.stage.vars._33++;
      }
      if (this.toNumber(this.stage.vars._33) === 12) {
        this.stage.vars._32++;
        for (let i = 0; i < 12; i++) {
          this.stage.vars._.splice(this.toNumber(this.stage.vars._31), 1);
        }
        this.stage.vars._.push(1);
        for (let i = 0; i < 10; i++) {
          this.stage.vars._.push(0);
        }
        this.stage.vars._.push(1);
      } else {
        this.stage.vars._31 += 12;
      }
    }
    if (this.compare(this.stage.vars._32, 0) > 0) {
      if (
        this.compare(this.stage.vars._.join(" "), this.stage.vars._41) === 0
      ) {
        this.stage.vars.score += 3000;
        this.broadcast("perfect clear");
      }
      this.stage.vars.ren++;
      if (this.compare(this.stage.vars.ren, 0) > 0) {
        this.broadcast("ren");
        this.stage.vars.score +=
          50 *
          (this.toNumber(this.stage.vars.ren) *
            this.toNumber(this.stage.vars.level));
      }
      this.sprites["_"].createClone();
      this.stage.vars.lines += this.toNumber(this.stage.vars._32);
      if (this.toNumber(this.stage.vars._32) === 4) {
        if (this.toNumber(this.stage.vars.backToBack) === 1) {
          this.broadcast("back-to-back");
          this.stage.vars._44 = 1;
        }
        this.broadcast("tetris");
        this.stage.vars.backToBack = 1;
      } else {
        if (this.toNumber(this.stage.vars.tSpin) === 0) {
          this.stage.vars.backToBack = 0;
        }
      }
      this.stage.vars.level =
        1 + Math.floor(this.toNumber(this.stage.vars.lines) / 10);
      this.stage.vars.g = this.itemOf(
        this.stage.vars._11,
        this.stage.vars.level - 1
      );
    } else {
      this.stage.vars.ren = -1;
    }
    if (this.toNumber(this.stage.vars.tSpin) === 0) {
      if (this.toNumber(this.stage.vars._32) === 1) {
        this.stage.vars.score += 100 * this.toNumber(this.stage.vars.level);
      } else {
        if (this.toNumber(this.stage.vars._32) === 2) {
          this.stage.vars.score += 300 * this.toNumber(this.stage.vars.level);
        } else {
          if (this.toNumber(this.stage.vars._32) === 3) {
            this.stage.vars.score += 500 * this.toNumber(this.stage.vars.level);
          } else {
            if (this.toNumber(this.stage.vars._32) === 4) {
              this.stage.vars.score +=
                800 * this.toNumber(this.stage.vars.level);
            } else {
              null;
            }
          }
        }
      }
    } else {
      if (
        this.toNumber(this.stage.vars.backToBack) === 1 &&
        this.compare(this.stage.vars._32, 0) > 0
      ) {
        this.broadcast("back-to-back");
        this.stage.vars._44 = 1;
      }
      if (this.toNumber(this.stage.vars._32) === 3) {
        this.stage.vars.score += 1600 * this.toNumber(this.stage.vars.level);
        this.broadcast("t-spin triple");
        this.stage.vars.backToBack = 1;
      } else {
        if (this.toNumber(this.stage.vars._32) === 2) {
          this.stage.vars.score += 1200 * this.toNumber(this.stage.vars.level);
          this.broadcast("t-spin double");
          this.stage.vars.backToBack = 1;
        } else {
          if (this.toNumber(this.stage.vars._32) === 1) {
            if (this.toNumber(this.stage.vars.tSpin) === 2) {
              this.stage.vars.score +=
                800 * this.toNumber(this.stage.vars.level);
              this.broadcast("t-spin single");
              this.stage.vars.backToBack = 1;
            } else {
              this.stage.vars.score +=
                200 * this.toNumber(this.stage.vars.level);
              this.broadcast("t-spin mini");
              this.stage.vars.backToBack = 1;
            }
          } else {
            if (this.toNumber(this.stage.vars.tSpin) === 2) {
              this.stage.vars.score +=
                400 * this.toNumber(this.stage.vars.level);
            } else {
              this.stage.vars.score +=
                100 * this.toNumber(this.stage.vars.level);
              this.broadcast("mini");
            }
          }
        }
      }
    }
    if (this.toNumber(this.stage.vars._44) === 1) {
      this.stage.vars.score += Math.round(
        0.5 *
          (this.toNumber(this.stage.vars.score) -
            this.toNumber(this.stage.vars._43))
      );
    }
    if (this.toString(this.stage.vars._40) === "m") {
      if (this.compare(this.stage.vars.lines, 149) > 0) {
        this.broadcast("game clear");
        this.stage.vars._39 = 0;
      }
    }
    if (this.toString(this.stage.vars._40) === "t") {
      if (this.compare(this.stage.vars.lines, 39) > 0) {
        this.broadcast("game clear");
        this.stage.vars._39 = 0;
      }
    }
  }

  *_7() {
    this.penColor = Color.rgb(0, 0, 0);
    this.penSize = 2;
    this.goto(30, 145);
    this.penDown = true;
    this.goto(30, 160);
    this.goto(40, 145);
    this.goto(40, 160);
    this.penDown = false;
    this.goto(58, 160);
    this.penDown = true;
    this.goto(48, 160);
    this.goto(48, 145);
    this.goto(58, 145);
    this.penDown = false;
    this.goto(58, 153);
    this.penDown = true;
    this.goto(48, 153);
    this.penDown = false;
    this.goto(66, 160);
    this.penDown = true;
    this.goto(76, 145);
    this.penDown = false;
    this.goto(66, 145);
    this.penDown = true;
    this.goto(76, 160);
    this.penDown = false;
    this.goto(84, 160);
    this.penDown = true;
    this.goto(94, 160);
    this.penDown = false;
    this.goto(89, 145);
    this.penDown = true;
    this.goto(89, 160);
    this.penDown = false;
    this.stage.vars._34 = 0;
    for (let i = 0; i < 6; i++) {
      this.stage.vars._34++;
      if (
        this.toString(
          this.itemOf(this.stage.vars._4, this.stage.vars._34 - 1)
        ) === "I"
      ) {
        this.stage.vars._35 = 0;
        for (let i = 0; i < 4; i++) {
          this.stage.vars._35++;
          this.warp(this.XY)(
            58 +
              12 *
                (((this.toNumber(
                  this.itemOf(this.stage.vars.i, this.stage.vars._35 - 1)
                ) +
                  6) %
                  12) -
                  6),
            146 +
              -36 * this.toNumber(this.stage.vars._34) +
              12 *
                Math.round(
                  this.toNumber(
                    this.itemOf(this.stage.vars.i, this.stage.vars._35 - 1)
                  ) / 12
                ),
            this.itemOf(this.stage.vars._4, this.stage.vars._34 - 1),
            1
          );
        }
      } else {
        if (
          this.toString(
            this.itemOf(this.stage.vars._4, this.stage.vars._34 - 1)
          ) === "O"
        ) {
          this.stage.vars._35 = 0;
          for (let i = 0; i < 4; i++) {
            this.stage.vars._35++;
            this.warp(this.XY)(
              58 +
                12 *
                  (((this.toNumber(
                    this.itemOf(this.stage.vars.o, this.stage.vars._35 - 1)
                  ) +
                    6) %
                    12) -
                    6),
              146 +
                -36 * this.toNumber(this.stage.vars._34) +
                12 *
                  Math.round(
                    this.toNumber(
                      this.itemOf(this.stage.vars.o, this.stage.vars._35 - 1)
                    ) / 12
                  ),
              this.itemOf(this.stage.vars._4, this.stage.vars._34 - 1),
              1
            );
          }
        } else {
          if (
            this.toString(
              this.itemOf(this.stage.vars._4, this.stage.vars._34 - 1)
            ) === "J"
          ) {
            this.stage.vars._35 = 0;
            for (let i = 0; i < 4; i++) {
              this.stage.vars._35++;
              this.warp(this.XY)(
                58 +
                  12 *
                    (((this.toNumber(
                      this.itemOf(this.stage.vars.j, this.stage.vars._35 - 1)
                    ) +
                      6) %
                      12) -
                      6),
                146 +
                  -36 * this.toNumber(this.stage.vars._34) +
                  12 *
                    Math.round(
                      this.toNumber(
                        this.itemOf(this.stage.vars.j, this.stage.vars._35 - 1)
                      ) / 12
                    ),
                this.itemOf(this.stage.vars._4, this.stage.vars._34 - 1),
                1
              );
            }
          } else {
            if (
              this.toString(
                this.itemOf(this.stage.vars._4, this.stage.vars._34 - 1)
              ) === "L"
            ) {
              this.stage.vars._35 = 0;
              for (let i = 0; i < 4; i++) {
                this.stage.vars._35++;
                this.warp(this.XY)(
                  58 +
                    12 *
                      (((this.toNumber(
                        this.itemOf(this.stage.vars.l, this.stage.vars._35 - 1)
                      ) +
                        6) %
                        12) -
                        6),
                  146 +
                    -36 * this.toNumber(this.stage.vars._34) +
                    12 *
                      Math.round(
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars.l,
                            this.stage.vars._35 - 1
                          )
                        ) / 12
                      ),
                  this.itemOf(this.stage.vars._4, this.stage.vars._34 - 1),
                  1
                );
              }
            } else {
              if (
                this.toString(
                  this.itemOf(this.stage.vars._4, this.stage.vars._34 - 1)
                ) === "S"
              ) {
                this.stage.vars._35 = 0;
                for (let i = 0; i < 4; i++) {
                  this.stage.vars._35++;
                  this.warp(this.XY)(
                    58 +
                      12 *
                        (((this.toNumber(
                          this.itemOf(
                            this.stage.vars.s,
                            this.stage.vars._35 - 1
                          )
                        ) +
                          6) %
                          12) -
                          6),
                    146 +
                      -36 * this.toNumber(this.stage.vars._34) +
                      12 *
                        Math.round(
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars.s,
                              this.stage.vars._35 - 1
                            )
                          ) / 12
                        ),
                    this.itemOf(this.stage.vars._4, this.stage.vars._34 - 1),
                    1
                  );
                }
              } else {
                if (
                  this.toString(
                    this.itemOf(this.stage.vars._4, this.stage.vars._34 - 1)
                  ) === "Z"
                ) {
                  this.stage.vars._35 = 0;
                  for (let i = 0; i < 4; i++) {
                    this.stage.vars._35++;
                    this.warp(this.XY)(
                      58 +
                        12 *
                          (((this.toNumber(
                            this.itemOf(
                              this.stage.vars.z,
                              this.stage.vars._35 - 1
                            )
                          ) +
                            6) %
                            12) -
                            6),
                      146 +
                        -36 * this.toNumber(this.stage.vars._34) +
                        12 *
                          Math.round(
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars.z,
                                this.stage.vars._35 - 1
                              )
                            ) / 12
                          ),
                      this.itemOf(this.stage.vars._4, this.stage.vars._34 - 1),
                      1
                    );
                  }
                } else {
                  if (
                    this.toString(
                      this.itemOf(this.stage.vars._4, this.stage.vars._34 - 1)
                    ) === "T"
                  ) {
                    this.stage.vars._35 = 0;
                    for (let i = 0; i < 4; i++) {
                      this.stage.vars._35++;
                      this.warp(this.XY)(
                        58 +
                          12 *
                            (((this.toNumber(
                              this.itemOf(
                                this.stage.vars.t,
                                this.stage.vars._35 - 1
                              )
                            ) +
                              6) %
                              12) -
                              6),
                        146 +
                          -36 * this.toNumber(this.stage.vars._34) +
                          12 *
                            Math.round(
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars.t,
                                  this.stage.vars._35 - 1
                                )
                              ) / 12
                            ),
                        this.itemOf(
                          this.stage.vars._4,
                          this.stage.vars._34 - 1
                        ),
                        1
                      );
                    }
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
    this.penSize = 2;
    this.penColor = Color.rgb(0, 0, 0);
    this.goto(-214, 160);
    this.penDown = true;
    this.goto(-214, 145);
    this.penDown = false;
    this.goto(-214, 152);
    this.penDown = true;
    this.goto(-204, 152);
    this.penDown = false;
    this.goto(-204, 160);
    this.penDown = true;
    this.goto(-204, 145);
    this.penDown = false;
    this.goto(-196, 160);
    this.penDown = true;
    this.goto(-196, 145);
    this.goto(-186, 145);
    this.goto(-186, 160);
    this.goto(-196, 160);
    this.penDown = false;
    this.goto(-178, 160);
    this.penDown = true;
    this.goto(-178, 145);
    this.goto(-168, 145);
    this.penDown = false;
    this.goto(-160, 160);
    this.penDown = true;
    this.goto(-155, 160);
    this.goto(-150, 155);
    this.goto(-150, 150);
    this.goto(-155, 145);
    this.goto(-160, 145);
    this.goto(-160, 160);
    this.penDown = false;
    if (!(this.toNumber(this.stage.vars._36) === 0)) {
      if (this.toString(this.stage.vars._36) === "I") {
        this.stage.vars._35 = 0;
        for (let i = 0; i < 4; i++) {
          this.stage.vars._35++;
          this.warp(this.XY)(
            -190 +
              12 *
                (((this.toNumber(
                  this.itemOf(this.stage.vars.i, this.stage.vars._35 - 1)
                ) +
                  6) %
                  12) -
                  6),
            110 +
              12 *
                Math.round(
                  this.toNumber(
                    this.itemOf(this.stage.vars.i, this.stage.vars._35 - 1)
                  ) / 12
                ),
            this.stage.vars._36,
            1
          );
        }
      } else {
        if (this.toString(this.stage.vars._36) === "O") {
          this.stage.vars._35 = 0;
          for (let i = 0; i < 4; i++) {
            this.stage.vars._35++;
            this.warp(this.XY)(
              -190 +
                12 *
                  (((this.toNumber(
                    this.itemOf(this.stage.vars.o, this.stage.vars._35 - 1)
                  ) +
                    6) %
                    12) -
                    6),
              110 +
                12 *
                  Math.round(
                    this.toNumber(
                      this.itemOf(this.stage.vars.o, this.stage.vars._35 - 1)
                    ) / 12
                  ),
              this.stage.vars._36,
              1
            );
          }
        } else {
          if (this.toString(this.stage.vars._36) === "J") {
            this.stage.vars._35 = 0;
            for (let i = 0; i < 4; i++) {
              this.stage.vars._35++;
              this.warp(this.XY)(
                -190 +
                  12 *
                    (((this.toNumber(
                      this.itemOf(this.stage.vars.j, this.stage.vars._35 - 1)
                    ) +
                      6) %
                      12) -
                      6),
                110 +
                  12 *
                    Math.round(
                      this.toNumber(
                        this.itemOf(this.stage.vars.j, this.stage.vars._35 - 1)
                      ) / 12
                    ),
                this.stage.vars._36,
                1
              );
            }
          } else {
            if (this.toString(this.stage.vars._36) === "L") {
              this.stage.vars._35 = 0;
              for (let i = 0; i < 4; i++) {
                this.stage.vars._35++;
                this.warp(this.XY)(
                  -190 +
                    12 *
                      (((this.toNumber(
                        this.itemOf(this.stage.vars.l, this.stage.vars._35 - 1)
                      ) +
                        6) %
                        12) -
                        6),
                  110 +
                    12 *
                      Math.round(
                        this.toNumber(
                          this.itemOf(
                            this.stage.vars.l,
                            this.stage.vars._35 - 1
                          )
                        ) / 12
                      ),
                  this.stage.vars._36,
                  1
                );
              }
            } else {
              if (this.toString(this.stage.vars._36) === "S") {
                this.stage.vars._35 = 0;
                for (let i = 0; i < 4; i++) {
                  this.stage.vars._35++;
                  this.warp(this.XY)(
                    -190 +
                      12 *
                        (((this.toNumber(
                          this.itemOf(
                            this.stage.vars.s,
                            this.stage.vars._35 - 1
                          )
                        ) +
                          6) %
                          12) -
                          6),
                    110 +
                      12 *
                        Math.round(
                          this.toNumber(
                            this.itemOf(
                              this.stage.vars.s,
                              this.stage.vars._35 - 1
                            )
                          ) / 12
                        ),
                    this.stage.vars._36,
                    1
                  );
                }
              } else {
                if (this.toString(this.stage.vars._36) === "Z") {
                  this.stage.vars._35 = 0;
                  for (let i = 0; i < 4; i++) {
                    this.stage.vars._35++;
                    this.warp(this.XY)(
                      -190 +
                        12 *
                          (((this.toNumber(
                            this.itemOf(
                              this.stage.vars.z,
                              this.stage.vars._35 - 1
                            )
                          ) +
                            6) %
                            12) -
                            6),
                      110 +
                        12 *
                          Math.round(
                            this.toNumber(
                              this.itemOf(
                                this.stage.vars.z,
                                this.stage.vars._35 - 1
                              )
                            ) / 12
                          ),
                      this.stage.vars._36,
                      1
                    );
                  }
                } else {
                  if (this.toString(this.stage.vars._36) === "T") {
                    this.stage.vars._35 = 0;
                    for (let i = 0; i < 4; i++) {
                      this.stage.vars._35++;
                      this.warp(this.XY)(
                        -190 +
                          12 *
                            (((this.toNumber(
                              this.itemOf(
                                this.stage.vars.t,
                                this.stage.vars._35 - 1
                              )
                            ) +
                              6) %
                              12) -
                              6),
                        110 +
                          12 *
                            Math.round(
                              this.toNumber(
                                this.itemOf(
                                  this.stage.vars.t,
                                  this.stage.vars._35 - 1
                                )
                              ) / 12
                            ),
                        this.stage.vars._36,
                        1
                      );
                    }
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
  }

  *_8() {
    if (this.toNumber(this.stage.vars._39) === 1) {
      if (this.toString(this.stage.vars._40) === "t") {
        this.stage.vars.time =
          this.toString(
            this.itemOf(
              this.stage.vars.numbers,
              Math.floor((this.timer % 3600) / 60)
            )
          ) +
          " : " +
          this.toString(
            this.itemOf(this.stage.vars.numbers, Math.floor(this.timer % 60))
          ) +
          (" . " +
            this.toString(
              this.itemOf(
                this.stage.vars.numbers,
                Math.round((this.timer * 100) % 100)
              )
            ));
      } else {
        this.stage.vars.time =
          this.toString(
            this.itemOf(this.stage.vars.numbers, Math.floor(this.timer / 3600))
          ) +
          " : " +
          (this.toString(
            this.itemOf(
              this.stage.vars.numbers,
              Math.floor((this.timer % 3600) / 60)
            )
          ) +
            " : " +
            this.toString(
              this.itemOf(this.stage.vars.numbers, Math.floor(this.timer % 60))
            ));
      }
    }
    if (this.toString(this.stage.vars._40) === "m") {
      if (this.compare(this.stage.vars.score, this.stage.vars.M) < 0) {
        this.stage.vars.highscore = this.stage.vars.M;
      } else {
        this.stage.vars.highscore = this.stage.vars.score;
      }
    }
    if (this.toString(this.stage.vars._40) === "i") {
      if (this.compare(this.stage.vars.score, this.stage.vars.I) < 0) {
        this.stage.vars.highscore = this.stage.vars.I;
      } else {
        this.stage.vars.highscore = this.stage.vars.score;
      }
    }
    if (this.toString(this.stage.vars._40) === "u") {
      if (
        this.compare(this.timer, 180) > 0 &&
        this.toNumber(this.stage.vars._39) === 1
      ) {
        this.stage.vars._19 = 0;
        for (let i = 0; i < 4; i++) {
          this.stage.vars._19++;
          this.stage.vars._.splice(
            this.itemOf(this.stage.vars._6, this.stage.vars._19 - 1) - 1,
            1,
            this.stage.vars._17
          );
        }
        this.broadcast("game clear");
        this.stage.vars._39 = 0;
      }
      if (this.compare(this.stage.vars.score, this.stage.vars.U) < 0) {
        this.stage.vars.highscore = this.stage.vars.U;
      } else {
        this.stage.vars.highscore = this.stage.vars.score;
      }
    }
    if (this.toString(this.stage.vars._40) === "t") {
      this.stage.vars.timeRecord = this.stage.vars.TimeRecord;
    }
  }

  *_9() {
    if (this.toNumber(this.stage.vars.replay) === 0) {
      this.stage.vars._48 =
        this.toString(
          0 +
            this.toNumber(this.keyPressed("left arrow") || this.keyPressed("4"))
        ) +
        (this.toString(
          0 +
            this.toNumber(
              this.keyPressed("right arrow") || this.keyPressed("6")
            )
        ) +
          (this.toString(
            0 +
              this.toNumber(
                this.keyPressed("z") ||
                  this.keyPressed("3") || this.keyPressed("7")
              )
          ) +
            (this.toString(
              0 +
                this.toNumber(
                  this.keyPressed("x") ||
                    this.keyPressed("1") ||
                      this.keyPressed("5") || this.keyPressed("9")
                )
            ) +
              (this.toString(
                0 +
                  this.toNumber(
                    this.keyPressed("down arrow") || this.keyPressed("2")
                  )
              ) +
                (this.toString(
                  0 +
                    this.toNumber(
                      this.keyPressed("up arrow") ||
                        this.keyPressed("space") || this.keyPressed("8")
                    )
                ) +
                  this.toString(
                    0 +
                      this.toNumber(
                        this.keyPressed("c") || this.keyPressed("0")
                      )
                  ))))));
      this.stage.vars.replayData.push(this.stage.vars._48);
    } else {
      this.stage.vars._48 = this.itemOf(
        this.stage.vars.replayData2,
        this.stage.vars._52 - 1
      );
      this.stage.vars.replayData.push(this.stage.vars._48);
      this.stage.vars._51++;
      if (
        this.compare(
          this.stage.vars._51,
          this.itemOf(this.stage.vars._12, this.stage.vars._52 - 1)
        ) === 0
      ) {
        this.stage.vars._52++;
        this.stage.vars._51 = 0;
      }
    }
  }

  *whenIReceive2() {
    yield* this._2();
    yield* this._3();
    yield* this._7();
  }
}
