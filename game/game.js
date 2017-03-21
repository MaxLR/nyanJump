import Player from './player';
import Platform from './platform';
import Coin from './coin';

class Game {
  constructor() {
    this.player = null;
    this.platforms = [];
    this.coins = [];
    this.count = 30;
    this.platformTimer = 0;
    this.newPlatformTime = 60;
    this.coinTimer = 0;
    this.newCoinTime = 60;
    this.gameOver = true;
    this.score = 0;
    this.highScore = 0;
    this.difficulty = 1;
  }

  add(object) {
    if (object instanceof Player) {
      this.player = object;
    } else if(object instanceof Platform) {
      this.platforms.push(object);
    } else if(object instanceof Coin) {
      this.coins.push(object);
    } else {
      throw 'unknown type of object';
    }
  }

  allObjects() {
    return [].concat(this.platforms, this.coins, this.player);
  }

  addPlatform(options) {
    options.game = this;
    const platform = new Platform(options);
    this.add(platform);

    return platform;
  }

  addCoin(options) {
    options.game = this;
    const coin = new Coin(options);
    this.add(coin);

    return coin;
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
    ctx.fillStyle = "#000000";
    ctx.fillText(`${Math.floor(this.score) * 10}`, 900, 50);
  }

  loadingScreen(ctx) {
    ctx.font = '100px "Indie Flower"';
    ctx.fillStyle = "#000000";
    ctx.fillText("Nyan Jump", (Game.DIM_X / 2) - 250, 75);
    ctx.font = '65px "Indie Flower"';
    ctx.fillText("Controls: Press Space to jump", (Game.DIM_X / 2) - 450, 200);
    ctx.fillText("up to 3 times in a row.", (Game.DIM_X / 2) - 350, 250);
    ctx.fillText("Instructions: Keep Nyan Cat off", (Game.DIM_X / 2) - 450, 375);
    ctx.fillText("the ground for as long as you can!", (Game.DIM_X / 2) - 475, 425);
    ctx.fillText("Press Enter to start!", (Game.DIM_X / 2) - 300, 550);
    ctx.font = '30px "Indie Flower"';
    if (this.highScore > 0) {
      ctx.fillText(`High Score: ${Math.floor(this.highScore) * 10}`, (Game.DIM_X / 2) + 250, 60);
    }
  }

  moveObjects(delta) {
    this.allObjects().forEach((object, idx) => {
      if (object instanceof Player) {
        if (object.pos[1] + object.radius >= 600) {
          this.gameOver = true;
          if (this.score > this.highScore) { this.highScore = this.score; }
        }
        object.onPlatform = false;
        object.maxHeight = 600;
        this.platforms.forEach((platform) => {
          object.setMaxHeight(platform);
        });
        this.coins.forEach((coin, coinIdx) => {
          if (object.checkCoin(coin) === true) {
            this.score += 10;
            delete this.coins[coinIdx];
          }
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

      if (object instanceof Coin) {
        if (this.isPastBorder(object)) {
          delete this.coins[idx - this.platforms.length];
        }
      }
      object.move(delta);
    });
  }

  step(delta) {
    if (!this.gameOver) {
      this.platformTimer += 1;
      this.coinTimer += 1;
      this.score += .1;
      this.difficulty += .002;
    }

    if (Math.floor(this.coinTimer) >= this.newCoinTime) {
      this.addCoin({vel: [-(Math.floor(this.difficulty) + 3), 0]});
      this.setCoinTimer();
      this.coinTimer = 0;
    }

    if (Math.floor(this.platformTimer) >= this.newPlatformTime) {
      this.addPlatform({vel: [-(Math.floor(this.difficulty) + 3), 0]});
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

  setCoinTimer() {
    this.newCoinTime = (Math.random() * 60) + 100;
  }
}

Game.DIM_X = 1000;
Game.DIM_Y = 600;

export default Game;
