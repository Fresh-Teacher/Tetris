import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Pen from "./Pen/Pen.js";
import _ from "./_/_.js";
import _2 from "./_2/_2.js";
import _3 from "./_3/_3.js";
import ModeSelect from "./ModeSelect/ModeSelect.js";
import Marathon from "./Marathon/Marathon.js";
import _4 from "./_4/_4.js";
import Ren from "./Ren/Ren.js";
import _5 from "./_5/_5.js";
import GameOver from "./GameOver/GameOver.js";
import ReturnToMenu from "./ReturnToMenu/ReturnToMenu.js";
import GameOver2 from "./GameOver2/GameOver2.js";
import Replay from "./Replay/Replay.js";
import Infinite from "./Infinite/Infinite.js";
import TimeAttack from "./TimeAttack/TimeAttack.js";
import Ultra from "./Ultra/Ultra.js";
import ReadyGo from "./ReadyGo/ReadyGo.js";
import ReplayData from "./ReplayData/ReplayData.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Pen: new Pen({
    x: -160,
    y: 160,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  _: new _({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  _2: new _2({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  _3: new _3({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  ModeSelect: new ModeSelect({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Marathon: new Marathon({
    x: 15,
    y: 8,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  _4: new _4({
    x: -191,
    y: -110,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Ren: new Ren({
    x: -197,
    y: 56,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  _5: new _5({
    x: -60,
    y: 60,
    direction: 90,
    costumeNumber: 1,
    size: 45,
    visible: false,
    layerOrder: 9
  }),
  GameOver: new GameOver({
    x: 0,
    y: 64,
    direction: 90,
    costumeNumber: 1,
    size: 130,
    visible: true,
    layerOrder: 10
  }),
  ReturnToMenu: new ReturnToMenu({
    x: 0,
    y: -81,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 12
  }),
  GameOver2: new GameOver2({
    x: 0,
    y: 64,
    direction: 90,
    costumeNumber: 1,
    size: 130,
    visible: false,
    layerOrder: 13
  }),
  Replay: new Replay({
    x: 130,
    y: -115,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 18
  }),
  Infinite: new Infinite({
    x: 222,
    y: -19,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 14
  }),
  TimeAttack: new TimeAttack({
    x: -44,
    y: -29,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 16
  }),
  Ultra: new Ultra({
    x: -131,
    y: -115,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 15
  }),
  ReadyGo: new ReadyGo({
    x: 264,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 17
  }),
  ReplayData: new ReplayData({
    x: 120,
    y: -120,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 11
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
