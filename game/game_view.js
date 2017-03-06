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
    this.game.step();
    this.game.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }

  bindKeyHandlers() {
    const player = this.player;

    key("space", () => { player.jump(); } );
    key("w", () => { player.resetJumps(); });
  }
}

export default GameView;
