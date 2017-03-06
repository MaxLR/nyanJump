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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Platform = function () {
  function Platform(options) {
    _classCallCheck(this, Platform);

    options.color = "#00BFFF";
    this.pos = options.pos || this.generatePosition();
    this.vel = options.vel || [-4, 0];
    this.size = options.size || this.generateSize();
    this.color = options.color;
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
    value: function move() {
      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];
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
  }]);

  return Platform;
}();

exports.default = Platform;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _player = __webpack_require__(3);

var _player2 = _interopRequireDefault(_player);

var _platform = __webpack_require__(0);

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.player = null;
    this.platforms = [];
    this.count = 30;
  }

  _createClass(Game, [{
    key: 'add',
    value: function add(object) {
      if (object instanceof _player2.default) {
        this.player = object;
      } else if (object instanceof _platform2.default) {
        this.platforms.push(object);
      } else {
        throw 'unknown type of object';
      }
    }
  }, {
    key: 'allObjects',
    value: function allObjects() {
      return [].concat(this.platforms, this.player);
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
    key: 'removeFirstPlatform',
    value: function removeFirstPlatform() {
      this.platforms = this.platforms.slice(1);
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
      ctx.fillStyle = Game.BG_COLOR;
      ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

      this.allObjects().forEach(function (object) {
        object.draw(ctx);
      });
    }
  }, {
    key: 'moveObjects',
    value: function moveObjects() {
      var _this = this;

      this.allObjects().forEach(function (object) {
        if (object instanceof _player2.default) {
          object.onPlatform = false;
          object.maxHeight = 600;
          _this.platforms.forEach(function (platform) {
            object.setMaxHeight(platform);
          });
          if (object.vel[1] !== 0) {
            object.vel[1] = object.vel[1] += 1.5;
          }
        }
        if (object instanceof _platform2.default) {
          if (_this.isFirstPlatform(object) && _this.isPastBorder(object)) {
            _this.updatePlatforms();
          }
        }
        object.move();
      });
    }
  }, {
    key: 'step',
    value: function step() {
      this.moveObjects();
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
    key: 'updatePlatforms',
    value: function updatePlatforms() {
      this.removeFirstPlatform();
      this.addPlatform({});
    }
  }]);

  return Game;
}();

Game.BG_COLOR = "#000000";
Game.DIM_X = 1000;
Game.DIM_Y = 600;

exports.default = Game;

/***/ }),
/* 2 */
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
      this.game.step();
      this.game.draw(this.ctx);

      requestAnimationFrame(this.animate.bind(this));
    }
  }, {
    key: "bindKeyHandlers",
    value: function bindKeyHandlers() {
      var player = this.player;

      key("space", function () {
        player.jump();
      });
      key("w", function () {
        player.resetJumps();
      });
    }
  }]);

  return GameView;
}();

exports.default = GameView;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _platform = __webpack_require__(0);

var _platform2 = _interopRequireDefault(_platform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
  function Player(game) {
    _classCallCheck(this, Player);

    var options = { pos: [50, 50], vel: [0, 1], radius: 25, color: "#FF0000" };
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
    this.jumps = 3;
    this.maxHeight = 600;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);

      ctx.fill();
    }
  }, {
    key: "move",
    value: function move() {
      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];

      if (this.pos[1] + this.radius > this.maxHeight) {
        this.pos[1] = this.maxHeight - this.radius;
      }
    }
  }, {
    key: "setMaxHeight",
    value: function setMaxHeight(otherObject) {
      if (otherObject instanceof _platform2.default) {
        var platformRange = [otherObject.pos[0], otherObject.pos[0] + otherObject.size[0]];
        var platformBottom = otherObject.pos[1] + otherObject.size[1];
        if (this.pos[0] > platformRange[0] && this.pos[0] < platformRange[1]) {
          if (this.pos[1] + this.radius >= otherObject.pos[1] && this.pos[1] + this.radius <= platformBottom + 25) {
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
      this.jumps = 3;
    }
  }]);

  return Player;
}();

exports.default = Player;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

var _game_view = __webpack_require__(2);

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

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map