# Nyan Jump

[Nyan Jump Live](http://maxrauchman.com/nyanJump)

## Features and Implementation

### Technologies

Nyan Jump is primarily written in "vanilla" ES6 JavaScript, using Canvas in order to animate the game itself.  [Webpack](https://webpack.github.io) and [Babel](https://babeljs.io) are used to transpile the code from ES6 in order to provide for greater browser compatibility.

### Game Objects

- `Player`: Renders the user character, and handles specific implementation relating to the logic used to move the sprite.
- `Platform`: Rendering based on location, implements random positions and sizes.

### User Interface

- The `Game` class manages the overall game state. It also handles the movement and re-rendering of the game objects.
- The `GameView` class handles the animation times, click handlers, and handles resetting the state of the game itself.
- The `KeyMaster` library enables the GameView class to assign click handlers easily.
- The `NyanJump` takes care of interfacing the JavaScript code required to run the game with the canvas element acquired after waiting for the DOM content to load.

## Running Nyan Jump

### Prerequisites

An up to date version of [npm](https://www.npmjs.com).

### Project Setup

1. `git clone https://github.com/MaxLR/nyanJump.git`
2. `cd nyanJump`
3. `npm install`
4. `npm run webpack-once`

### Starting a Local Server
1. `npm install -g http-server` (This globally installs a simple web server to serve the page locally)
2. `http-server`
3. Visit `http://localhost:8080/`
