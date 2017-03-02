class Platform {
  constructor(game) {
    const options = {pos: [550, 350], vel: [-4, 0], size: [120, 15], color: "#00BFFF"};
    options.game = game;
    this.pos = options.pos;
    this.size = options.size;
    this.color = options.color;
    this.vel = options.vel;
    this.game = options.game;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.fillRect(this.pos[0], this.pos[1], this.size[0], this.size[1]);
  }

  move() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }
}

export default Platform;
