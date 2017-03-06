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
    return [].concat(this.platforms, this.player);
  }

  addPlatform(options) {
    options.game = this;
    const platform = new Platform(options);
    this.add(platform);

    return platform;
  }

  removeFirstPlatform() {
    this.platforms = this.platforms.slice(1);
  }

  addStartingPlatforms() {
    this.addPlatform({pos: [100, 200], size: [200, 15]});
    this.addPlatform({pos: [400, 300], size: [150, 15]});
    this.addPlatform({pos: [700, 350], size: [125, 15]});
    this.addPlatform({pos: [900, 350], size: [100, 15]});
  }

  addPlayer() {
    const player = new Player({ game: this });
    this.add(player);

    return player;
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
        object.onPlatform = false;
        object.maxHeight = 600;
        this.platforms.forEach((platform) => {
          object.setMaxHeight(platform);
        });
        if (object.vel[1] !== 0) {
          object.vel[1] = object.vel[1] += 1.5;
        }
      }
      if (object instanceof Platform) {
        if (this.isFirstPlatform(object) && this.isPastBorder(object)) {
          this.updatePlatforms();
        }
      }
      object.move();
    });
  }

  step() {
    this.moveObjects();
  }

  isFirstPlatform(object) {
    if (object.pos[0] === this.platforms[0].pos[0]) {
      return true;
    }

    return false;
  }

  isPastBorder(object) {
    if (object.pos[0] + object.size[0] <= 0) {
      return true;
    }

    return false;
  }

  updatePlatforms() {
    this.removeFirstPlatform();
    this.addPlatform({});
  }
}

Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;

export default Game;
