class Platform {
  constructor(options) {
    options.color = "#00BFFF";
    this.pos = options.pos || this.generatePosition();
    this.vel = options.vel || [-4, 0];
    this.size = options.size || this.generateSize();
    this.color = options.color;
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

  generatePosition() {
    const yPos = (Math.random() * 500) + 50;
    return [1000, yPos];
  }

  generateSize() {
    const length = (Math.random() * 240) + 30;
    return [length, 15];
  }
}

export default Platform;
