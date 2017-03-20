const NORMAL_FRAME_TIME_DELTA = 1000/60;

class Coin {
  constructor(options) {
    this.pos = options.pos || this.generatePosition();
    this.vel = options.vel || [-4, 0];
    this.size = [100, 100];
    this.game = options.game;
    this.spriteCounter = 0;
  }

  draw(ctx) {
    this.spriteCounter = (this.spriteCounter + .2) % 5;
    const spriteIndex = Math.floor(this.spriteCounter);
    const imageArray = [[0, 0], [100, 0], [200, 0], [300, 0], [400, 0], [500, 0]];
    const image = new Image();
    image.src = "./assets/coin_sprite.png";
    ctx.drawImage(image, imageArray[spriteIndex][0],
      imageArray[spriteIndex][1], 100, 100,
      this.pos[0] - 25, this.pos[1] - 25, 75, 50);
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
}

export default Coin;
