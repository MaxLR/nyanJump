class Platform {
  constructor(game) {
    const options = {pos: [550, 350], vel: [-4, 0], size: [120, 15], color: "#00BFFF"};
    options.game = game;
    this.pos = options.pos || this.generatePosition();
    this.size = options.size || this.generateSize();
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

  generatePosition() {
    const yPos = Math.random() * 500;
    return [1000, yPos];
  }

  generateSize() {
    const length = (Math.random() * 240) + 10;
    return [length, 15];
  }
}

export default Platform;
