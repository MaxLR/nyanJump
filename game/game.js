import Player from './player';
import Platform from './platform';

class Game {
  constructor() {
    this.player = null;
    this.platforms = [];
    this.count = 30;
    this.platformTimer = 0;
    this.newPlatformTime = 60;
    this.gameOver = true;
    this.score = 0;
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

    if (this.gameOver === true) {
      this.loadingScreen(ctx);
    } else {
      this.allObjects().forEach((object) => {
        object.draw(ctx);
      });
      this.drawScore(ctx);
    }
  }

  drawScore(ctx) {
    ctx.font = '30px "Indie Flower"';
    ctx.fillStyle = "#DD443C";
    ctx.fillText(`${Math.floor(this.score) * 10}`, 900, 50);
  }

  loadingScreen(ctx) {
    ctx.font = '100px "Indie Flower"';
    ctx.fillStyle = "#DD443C";
    ctx.fillText("Nyan Jump", (Game.DIM_X / 2) - 250, 75);
    ctx.font = '65px "Indie Flower"';
    ctx.fillText("Controls: Press Space to jump", (Game.DIM_X / 2) - 450, 175);
    ctx.fillText("up to 3 times in a row.", (Game.DIM_X / 2) - 350, 225);
    ctx.fillText("Instructions: Keep Nyan Cat off", (Game.DIM_X / 2) - 450, 350);
    ctx.fillText("the ground for as long as you can!", (Game.DIM_X / 2) - 475, 400);
    ctx.fillText("Press Enter to start!", (Game.DIM_X / 2) - 300, 550);
  }

  moveObjects(delta) {
    this.allObjects().forEach((object, idx) => {
      if (object instanceof Player) {
        if (object.pos[1] + object.radius >= 600) {
          this.gameOver = true;
        }
        object.onPlatform = false;
        object.maxHeight = 600;
        this.platforms.forEach((platform) => {
          object.setMaxHeight(platform);
        });
        if (object.vel[1] >= -25 && object.vel[1] <= 15) {
          object.vel[1] = object.vel[1] += 1.5;
        }
      }
      if (object instanceof Platform) {
        if (this.isPastBorder(object)) {
          delete this.platforms[idx];
        }
      }
      object.move(delta);
    });
  }

  step(delta) {
    this.platformTimer += 1;
    this.score += .1;
    if (Math.floor(this.platformTimer) >= this.newPlatformTime) {
      this.addPlatform({});
      this.setPlatformTimer();
      this.platformTimer = 0;
    }
    this.moveObjects(delta);
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

  setPlatformTimer() {
    this.newPlatformTime = (Math.random() * 60) + 30;
  }
}

Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;

export default Game;
