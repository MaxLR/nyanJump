class Coin {
  constructor(options) {
    this.pos = options.pos || this.generatePosition();
    this.vel = options.vel || [-4, 0];
    this.game = options.game;
    this.spriteCounter = 0;
  }

  draw(ctx) {
    this.spriteCounter = (this.spriteCounter + .25) % 5;
    const spriteIndex = Math.floor(this.spriteCounter);
    const imageArray = [[0, 0], [90, 0], [180, 0], [270, 0], [360, 0], [450, 0]];
    const image = new Image();
    image.src = "./assets/coin_sprite.png";
    ctx.drawImage(image, imageArray[spriteIndex][0],
      imageArray[spriteIndex][1], 125, 75,
      this.pos[0] - 25, this.pos[1] - 25, 75, 50);
  }
}

export default Coin;
