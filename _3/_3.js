/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("コスチューム1", "./_3/costumes/コスチューム1.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [
      new Sound("ハードドロップ", "./_3/sounds/ハードドロップ.wav")
    ];

    this.triggers = [new Trigger(Trigger.CLONE_START, this.startAsClone)];
  }

  *startAsClone() {
    yield* this.playSoundUntilDone("ハードドロップ");
    this.deleteThisClone();
  }
}
