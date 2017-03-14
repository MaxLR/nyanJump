const NORMAL_FRAME_TIME_DELTA = 1000/60;
const BOTTOM_COLORS = [
  "#FFFFFF",
  "#E9D758",
  "#FF8552",
  "#48ACF0",
  "#EA7317",
  "#C81D25"
];
const TOP_COLORS = [
  "#8A1C7C",
  "#EA7317",
  "#FF5A5F",
  "#F9F936",
  "#6A0136",
  "#222222"
];
const MIDDLE_COLORS = [
  "#73BFB8",
  "#DA4167",
  "#20BF55",
  "#960200",
  "#FCFF4B",
  "#F46036"
];


class Platform {
  constructor(options) {
    this.pos = options.pos || this.generatePosition();
    this.color = this.generateColor();
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

  generateColor() {
    if (this.pos[1] > 450) {
      return BOTTOM_COLORS[Math.floor(Math.random()*BOTTOM_COLORS.length)];
    } else if (this.pos[1] > 250) {
      return MIDDLE_COLORS[Math.floor(Math.random()*MIDDLE_COLORS.length)];
    } else {
      return TOP_COLORS[Math.floor(Math.random()*TOP_COLORS.length)];
    }
  }
}

export default Platform;
