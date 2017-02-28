## Nyan Jump

### Background

Nyan Jump is a new take on the classic platform jumping game. Based off of games like Bit-Trip Runner, Platform Jumper, this game allows players to take control of Nyan Cat and see how many points they can accumulate in three lives. The rules are as follows:

1) Don't fall into pitfalls in the floor,
2) The player needs to avoid the enemies to keep Nyan cat moving,
3) Collecting items and powerups on the way can help increase your score

### Functionality & MVP

With this platform jumping game, users will be able to:

- [ ] Start, pause, and reset the game
- [ ] Control the Nyan cat sprite
- [ ] Jump over enemies, and gaps between platforms

In addition, this project will include:

- [ ] An Controls/About modal describing the controls and rules of the game
- [ ] A production README

### Wireframes

This app will consist of a single screen with game board and nav links to the Github, my LinkedIn,
and the Controls/About modal.  Game controls will include Start, Stop, and Reset buttons as well as a difficulty selector.  On the right, there will be three (or more) clickable rectangles used to toggle between map schemes (see Bonus Features).

![main](./main.png)
![modal](./modal.png)

### Architecture and Technologies

**NB**: one of the main things you should be researching and deciding upon while you write this proposal is what technologies you plan to use.  Identify and create a plan of attack for the major technical challenges in your project.

This project will be implemented with the following technologies:

- Vanilla JavaScript and `jQuery` for overall structure and game logic,
- `Processing.js` with `HTML5 Canvas` for DOM manipulation, rendering, and user interaction
- Webpack to bundle and serve up the various scripts.

In addition to the webpack entry file, there will be three scripts involved in this project:

`game.js`: this script will handle the logic for creating and updating the necessary `Processing.js` elements and rendering them to the DOM.

`nyanCat.js`: this script will handle the logic behind the Nyan cat sprite. It will be responsible for animating the Nyan cat sprite as well as collision detection.

`enemies.js`: this script will house the constructor and logic for the `enemy` objects.  It will be responsible for animating the enemies as well logic behind their movements.

`collectables.js`: this script will house the constructor and update functions for the `collectable` objects.  Each `collectable` will contain a `type` (bronze, silver, or gold) and a `value` (1, 2, or 5). (see bonus features)

### Implementation Timeline

**Day 1**: Setup all necessary Node modules, including getting webpack up and running and `Processing.js` installed.  Create `webpack.config.js` as well as `package.json`.  Write a basic entry file and the bare bones of all 4 scripts outlined above.  Learn the basics of `Processing.js`.  Goals for the day:

- Get a green bundle with `webpack`
- Learn enough `Processing.js` to render an object to the `Canvas` element

**Day 2**: Dedicate this day to learning the `Processing.js` API.  First, build out the `nyanCat` object to connect to the `Game` object.  Then, use `game.js` to create and render the background of the game. Goals for the day:

- Complete the `nyanCat.js` module (constructor, update functions)
- Render a square grid to the `Canvas` using `Processing.js`
- Develop the three levels for game.js

**Day 3**: Create the enemies logic backend. Develop logic for enemy collisions. Be able to render enemies on Canvas in `game.js`.  Goals for the day:

- Export an `enemy` object with correct type and handling logic
- Have a functional grid on the `Canvas` frontend that correctly handles player movement and enemy collisions


**Day 4**: Install the controls for the user to interact with the game.  Style the frontend, making it polished and professional.  Goals for the day:

- Create controls for game speed, stop, start, reset
- Have a styled `Canvas`, nice looking controls and title
- If time: include buttons on the side to switch between different maps


### Bonus features

There are many additional features this side-scrolling game could include.  Some anticipated updates are:

- [ ] Add multiple choices for character sprites
- [ ] Add options for different difficulties
