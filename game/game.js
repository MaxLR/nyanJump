import Player from './player';
import Platform from './platform';

class Game {
  constructor() {
    this.player = null;
    this.platforms = [];
    this.count = 30;
  }

  add(object) {
    if (object instanceof Player) {
      this.player = object;
    } else if(object instanceof Platform) {
      this.platforms.push(object);
    } else {
      throw 'unknown type of object';
    }
  }

  allObjects() {
    return [].concat(this.player, this.platforms);
  }

  addPlatform() {
    const platform = new Platform({ game: this });
    this.add(platform);

    return platform;
  }

  addPlayer() {
    const player = new Player({ game: this });
    this.add(player);

    return player;
  }

  onPlatform() {
      this.player.setMaxHeight(this.platforms[0]);
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

  moveObjects() {
    this.allObjects().forEach((object) => {
      if (object instanceof Player) {
        this.onPlatform();
        object.vel[1] = object.vel[1] += 1.5;
      }
      object.move();
    });
  }

  step() {
    this.moveObjects();
  }
}

Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;

export default Game;
