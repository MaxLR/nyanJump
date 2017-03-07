class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.player = this.game.addPlayer();
    this.platforms = this.game.addStartingPlatforms();
  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }

  reset() {
    this.game.difficulty = 1;
    this.game.score = 0;
    this.game.player = [];
    this.game.platforms = [];
    this.player = this.game.addPlayer();
    this.platforms = this.game.addStartingPlatforms();
    this.bindKeyHandlers();
  }

  bindKeyHandlers() {
    const player = this.player;

    key("space", () => { player.jump(); } );
    key("w", () => { player.resetJumps(); });
    key("enter", () => { if(this.game.gameOver === true) {
      this.reset();
      this.game.gameOver = false;
    }});
  }
}

export default GameView;
