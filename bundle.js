/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(5);

var _player2 = _interopRequireDefault(_player);

var _platform = __webpack_require__(3);

var _platform2 = _interopRequireDefault(_platform);

var _coin = __webpack_require__(4);

var _coin2 = _interopRequireDefault(_coin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.player = null;
    this.platforms = [];
    this.coins = [];
    this.count = 30;
    this.platformTimer = 0;
    this.newPlatformTime = 60;
    this.coinTimer = 0;
    this.newCoinTime = 60;
    this.gameOver = true;
    this.score = 0;
    this.highScore = 0;
    this.difficulty = 1;
  }

  _createClass(Game, [{
    key: 'add',
    value: function add(object) {
      if (object instanceof _player2.default) {
        this.player = object;
      } else if (object instanceof _platform2.default) {
        this.platforms.push(object);
      } else if (object instanceof _coin2.default) {
        this.coins.push(object);
      } else {
        throw 'unknown type of object';
      }
    }
  }, {
    key: 'allObjects',
    value: function allObjects() {
      return [].concat(this.platforms, this.coins, this.player);
    }
  }, {
    key: 'addPlatform',
    value: function addPlatform(options) {
      options.game = this;
      var platform = new _platform2.default(options);
      this.add(platform);

      return platform;
    }
  }, {
    key: 'addCoin',
    value: function addCoin(options) {
      options.game = this;
      var coin = new _coin2.default(options);
      this.add(coin);

      return coin;
    }
  }, {
    key: 'addStartingPlatforms',
    value: function addStartingPlatforms() {
      this.addPlatform({ pos: [100, 200], size: [200, 15] });
      this.addPlatform({ pos: [400, 300], size: [150, 15] });
      this.addPlatform({ pos: [700, 350], size: [125, 15] });
      this.addPlatform({ pos: [900, 350], size: [100, 15] });
    }
  }, {
    key: 'addPlayer',
    value: function addPlayer() {
      var player = new _player2.default({ game: this });
      this.add(player);

      return player;
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

      if (this.gameOver === true) {
        this.loadingScreen(ctx);
      } else {
        this.allObjects().forEach(function (object) {
          object.draw(ctx);
        });
        this.drawScore(ctx);
      }
    }
  }, {
    key: 'drawScore',
    value: function drawScore(ctx) {
      ctx.font = '30px "Indie Flower"';
      ctx.fillStyle = "#000000";
      ctx.fillText('' + Math.floor(this.score) * 10, 900, 50);
    }
  }, {
    key: 'loadingScreen',
    value: function loadingScreen(ctx) {
      ctx.font = '100px "Indie Flower"';
      ctx.fillStyle = "#000000";
      ctx.fillText("Nyan Jump", Game.DIM_X / 2 - 250, 75);
      ctx.font = '65px "Indie Flower"';
      ctx.fillText("Controls: Press Space to jump", Game.DIM_X / 2 - 450, 200);
      ctx.fillText("up to 3 times in a row.", Game.DIM_X / 2 - 350, 250);
      ctx.fillText("Instructions: Keep Nyan Cat off", Game.DIM_X / 2 - 450, 375);
      ctx.fillText("the ground for as long as you can!", Game.DIM_X / 2 - 475, 425);
      ctx.fillText("Press Enter to start!", Game.DIM_X / 2 - 300, 550);
      ctx.font = '30px "Indie Flower"';
      if (this.highScore > 0) {
        ctx.fillText('High Score: ' + Math.floor(this.highScore) * 10, Game.DIM_X / 2 + 250, 60);
      }
    }
  }, {
    key: 'moveObjects',
    value: function moveObjects(delta) {
      var _this = this;

      this.allObjects().forEach(function (object, idx) {
        if (object instanceof _player2.default) {
          if (object.pos[1] + object.radius >= 600) {
            _this.gameOver = true;
            if (_this.score > _this.highScore) {
              _this.highScore = _this.score;
            }
          }
          object.onPlatform = false;
          object.maxHeight = 600;
          _this.platforms.forEach(function (platform) {
            object.setMaxHeight(platform);
          });
          if (object.vel[1] >= -25 && object.vel[1] <= 15) {
            object.vel[1] = object.vel[1] += 1.5;
          }
        }
        if (object instanceof _platform2.default) {
          if (_this.isPastBorder(object)) {
            delete _this.platforms[idx];
          }
        }

        if (object instanceof _coin2.default) {
          if (_this.isPastBorder(object)) {
            delete _this.coins[idx - _this.platforms.length];
          }
        }
        object.move(delta);
      });
    }
  }, {
    key: 'step',
    value: function step(delta) {
      if (!this.gameOver) {
        this.platformTimer += 1;
        this.coinTimer += 1;
        this.score += .1;
        this.difficulty += .002;
      }

      if (Math.floor(this.coinTimer) >= this.newCoinTime) {
        this.addCoin({ vel: [-(Math.floor(this.difficulty) + 3), 0] });
        this.setCoinTimer();
        this.coinTimer = 0;
      }

      if (Math.floor(this.platformTimer) >= this.newPlatformTime) {
        this.addPlatform({ vel: [-(Math.floor(this.difficulty) + 3), 0] });
        this.setPlatformTimer();
        this.platformTimer = 0;
      }

      this.moveObjects(delta);
    }
  }, {
    key: 'isFirstPlatform',
    value: function isFirstPlatform(object) {
      if (object.pos[0] === this.platforms[0].pos[0]) {
        return true;
      }

      return false;
    }
  }, {
    key: 'isPastBorder',
    value: function isPastBorder(object) {
      if (object.pos[0] + object.size[0] <= 0) {
        return true;
      }

      return false;
    }
  }, {
    key: 'setPlatformTimer',
    value: function setPlatformTimer() {
      this.newPlatformTime = Math.random() * 60 + 30;
    }
  }, {
    key: 'setCoinTimer',
    value: function setCoinTimer() {
      this.newCoinTime = Math.random() * 60 + 100;
    }
  }]);

  return Game;
}();

Game.DIM_X = 1000;
Game.DIM_Y = 600;

exports.default = Game;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameView = function () {
  function GameView(game, ctx) {
    _classCallCheck(this, GameView);

    this.ctx = ctx;
    this.game = game;
    this.player = this.game.addPlayer();
    this.platforms = this.game.addStartingPlatforms();
  }

  _createClass(GameView, [{
    key: "start",
    value: function start() {
      this.bindKeyHandlers();
      this.lastTime = 0;
      requestAnimationFrame(this.animate.bind(this));
    }
  }, {
    key: "animate",
    value: function animate(time) {
      var timeDelta = time - this.lastTime;
      this.game.step(timeDelta);
      this.game.draw(this.ctx);
      this.lastTime = time;

      requestAnimationFrame(this.animate.bind(this));
    }
  }, {
    key: "reset",
    value: function reset() {
      this.game.difficulty = 1;
      this.game.score = 0;
      this.game.player = [];
      this.game.platforms = [];
      this.game.coins = [];
      this.player = this.game.addPlayer();
      this.platforms = this.game.addStartingPlatforms();
      this.bindKeyHandlers();
    }
  }, {
    key: "bindKeyHandlers",
    value: function bindKeyHandlers() {
      var _this = this;

      var player = this.player;

      key("space", function () {
        player.jump();
      });
      key("w", function () {
        player.resetJumps();
      });
      key("enter", function () {
        if (_this.game.gameOver === true) {
          _this.reset();
          _this.game.gameOver = false;
        }
      });
    }
  }]);

  return GameView;
}();

exports.default = GameView;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(0);

var _game2 = _interopRequireDefault(_game);

var _game_view = __webpack_require__(1);

var _game_view2 = _interopRequireDefault(_game_view);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  var canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = _game2.default.DIM_X;
  canvasEl.height = _game2.default.DIM_Y;

  var ctx = canvasEl.getContext("2d");
  var game = new _game2.default();
  new _game_view2.default(game, ctx).start();
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NORMAL_FRAME_TIME_DELTA = 1000 / 60;
var BOTTOM_COLORS = ["#FFFFFF", "#E9D758", "#FF8552", "#48ACF0", "#EA7317", "#C81D25"];
var TOP_COLORS = ["#8A1C7C", "#EA7317", "#FF5A5F", "#F9F936", "#6A0136", "#222222"];
var MIDDLE_COLORS = ["#73BFB8", "#DA4167", "#20BF55", "#960200", "#FCFF4B", "#F46036"];

var Platform = function () {
  function Platform(options) {
    _classCallCheck(this, Platform);

    this.pos = options.pos || this.generatePosition();
    this.color = this.generateColor();
    this.vel = options.vel || [-4, 0];
    this.size = options.size || this.generateSize();
    this.game = options.game;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.fillRect(this.pos[0], this.pos[1], this.size[0], this.size[1]);
    }
  }, {
    key: "move",
    value: function move(delta) {
      var velocityScale = delta / NORMAL_FRAME_TIME_DELTA;
      this.pos[0] += this.vel[0] * velocityScale;
      this.pos[1] += this.vel[1] * velocityScale;
    }
  }, {
    key: "generatePosition",
    value: function generatePosition() {
      var yPos = Math.random() * 500 + 50;
      return [1000, yPos];
    }
  }, {
    key: "generateSize",
    value: function generateSize() {
      var length = Math.random() * 240 + 30;
      return [length, 15];
    }
  }, {
    key: "generateColor",
    value: function generateColor() {
      if (this.pos[1] > 450) {
        return BOTTOM_COLORS[Math.floor(Math.random() * BOTTOM_COLORS.length)];
      } else if (this.pos[1] > 250) {
        return MIDDLE_COLORS[Math.floor(Math.random() * MIDDLE_COLORS.length)];
      } else {
        return TOP_COLORS[Math.floor(Math.random() * TOP_COLORS.length)];
      }
    }
  }]);

  return Platform;
}();

exports.default = Platform;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NORMAL_FRAME_TIME_DELTA = 1000 / 60;

var Coin = function () {
  function Coin(options) {
    _classCallCheck(this, Coin);

    this.pos = options.pos || this.generatePosition();
    this.vel = options.vel || [-4, 0];
    this.size = [100, 100];
    this.game = options.game;
    this.spriteCounter = 0;
  }

  _createClass(Coin, [{
    key: "draw",
    value: function draw(ctx) {
      this.spriteCounter = (this.spriteCounter + .2) % 5;
      var spriteIndex = Math.floor(this.spriteCounter);
      var imageArray = [[0, 0], [100, 0], [200, 0], [300, 0], [400, 0], [500, 0]];
      var image = new Image();
      image.src = "./assets/coin_sprite.png";
      ctx.drawImage(image, imageArray[spriteIndex][0], imageArray[spriteIndex][1], 100, 100, this.pos[0] - 25, this.pos[1] - 25, 75, 50);
    }
  }, {
    key: "move",
    value: function move(delta) {
      var velocityScale = delta / NORMAL_FRAME_TIME_DELTA;
      this.pos[0] += this.vel[0] * velocityScale;
      this.pos[1] += this.vel[1] * velocityScale;
    }
  }, {
    key: "generatePosition",
    value: function generatePosition() {
      var yPos = Math.random() * 500 + 50;
      return [1000, yPos];
    }
  }]);

  return Coin;
}();

exports.default = Coin;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _platform = __webpack_require__(3);

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NORMAL_FRAME_TIME_DELTA = 1000 / 60;

var Player = function () {
  function Player(game) {
    _classCallCheck(this, Player);

    var options = { pos: [100, 50], vel: [0, 1], radius: 25, color: "#FF0000" };
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
    this.jumps = 3;
    this.maxHeight = 600;
    this.spriteCounter = 0;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw(ctx) {
      this.spriteCounter = (this.spriteCounter + .25) % 5;
      var spriteIndex = Math.floor(this.spriteCounter);
      var imageArray = [[0, 0], [0, 90], [0, 180], [0, 270], [0, 360]];
      var image = new Image();
      image.src = "./assets/nyan_sprite.png";
      ctx.drawImage(image, imageArray[spriteIndex][0], imageArray[spriteIndex][1], 125, 75, this.pos[0] - 25, this.pos[1] - 25, 75, 50);
    }
  }, {
    key: "move",
    value: function move(delta) {
      var velocityScale = delta / NORMAL_FRAME_TIME_DELTA;
      this.pos[0] += this.vel[0] * velocityScale;
      this.pos[1] += this.vel[1] * velocityScale;

      if (this.pos[1] + this.radius > this.maxHeight) {
        this.pos[1] = this.maxHeight - this.radius;
      }
    }
  }, {
    key: "checkCoin",
    value: function checkCoin(coin) {
      var widthRange = [coin.pos[0], coin.pos[0] = coin.size[0]];
      var heightRange = [coin.pos[1], coin.pos[1] = coin.size[1]];

      if (this.pos[0] + 35 > widthRange[0] && this.pos[0] < widthRange[1]) {
        if (this.pos[1] + this.radius >= heightRange[1] && this.pos[1] + this.radius <= heightRange[1] + 10) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "setMaxHeight",
    value: function setMaxHeight(otherObject) {
      if (otherObject instanceof _platform2.default) {
        var platformRange = [otherObject.pos[0], otherObject.pos[0] + otherObject.size[0]];
        var platformBottom = otherObject.pos[1] + otherObject.size[1];
        if (this.pos[0] + 35 > platformRange[0] && this.pos[0] < platformRange[1]) {
          if (this.pos[1] + this.radius >= otherObject.pos[1] && this.pos[1] + this.radius <= platformBottom + 10) {
            this.resetJumps();
            this.maxHeight = otherObject.pos[1];
            return;
          }
        }
      }
    }
  }, {
    key: "jump",
    value: function jump() {
      if (this.jumps > 0) {
        this.jumps -= 1;
        this.vel[1] = -25;
      }
    }
  }, {
    key: "resetJumps",
    value: function resetJumps() {
      this.jumps = 2;
    }
  }]);

  return Player;
}();

exports.default = Player;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map