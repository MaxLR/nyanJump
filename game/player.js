import Platform from './platform';

const NORMAL_FRAME_TIME_DELTA = 1000/60;

class Player {
  constructor(game) {
    const options = {pos: [100,50], vel: [0,1], radius: 25, color: "#FF0000"};
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
    this.jumps = 3;
    this.maxHeight = 600;
    this.spriteCounter = 0;
  }

  draw(ctx) {
    this.spriteCounter = (this.spriteCounter + .25) % 5;
    const spriteIndex = Math.floor(this.spriteCounter);
    const imageArray = [[0, 0], [0, 90], [0, 180], [0, 270], [0, 360]];
    const image = new Image();
    image.src = "./assets/nyan_sprite.png";
    ctx.drawImage(image, imageArray[spriteIndex][0],
      imageArray[spriteIndex][1], 125, 75,
      this.pos[0] - 25, this.pos[1] - 25, 75, 50);
  }

  move(delta) {
    const velocityScale = delta / NORMAL_FRAME_TIME_DELTA;
    this.pos[0] += this.vel[0] * velocityScale;
    this.pos[1] += this.vel[1] * velocityScale;

    if (this.pos[1] + this.radius > this.maxHeight) {
      this.pos[1] = this.maxHeight - this.radius;
    }
  }

  setMaxHeight(otherObject) {
    if (otherObject instanceof Platform) {
      let platformRange = [otherObject.pos[0],
        (otherObject.pos[0] + otherObject.size[0])];
      let platformBottom = otherObject.pos[1] + otherObject.size[1];
      if (this.pos[0] > platformRange[0] && this.pos[0] < platformRange[1]) {
        if((this.pos[1] + this.radius >= otherObject.pos[1])
          && (this.pos[1] + this.radius <= (platformBottom + 25))) {
          this.resetJumps();
          this.maxHeight = otherObject.pos[1];
          return;
        }
      }
    }
  }

  jump() {
    if (this.jumps > 0) {
      this.jumps -= 1;
      this.vel[1] = -25;
    }
  }

  resetJumps() {
    this.jumps = 2;
  }
}

export default Player;
