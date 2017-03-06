import Platform from './platform';

class Player {
  constructor(game) {
    const options = {pos: [50,50], vel: [0,1], radius: 25, color: "#FF0000"};
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
    this.jumps = 3;
    this.maxHeight = 600;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI
    );

    ctx.fill();
  }

  move() {
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];

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
    this.jumps = 3;
  }
}

export default Player;
