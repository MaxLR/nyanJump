const NORMAL_FRAME_TIME_DELTA = 1000/60;

class Platform {
  constructor(options) {
    this.pos = options.pos || this.generatePosition();
    switch (this.pos[1] > 350) {
      case true:
        options.color = "#ffffff";
        break;
      case false:
        options.color = "#000000";
        break;
    }
    this.color = options.color;
    this.vel = options.vel || [-4, 0];
    this.size = options.size || this.generateSize();
    this.game = options.game;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.fillRect(this.pos[0], this.pos[1], this.size[0], this.size[1]);
  }

  move(delta) {
    const velocityScale = delta / NORMAL_FRAME_TIME_DELTA;
    this.pos[0] += this.vel[0] * velocityScale;
    this.pos[1] += this.vel[1] * velocityScale;
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
