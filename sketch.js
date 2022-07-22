var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage, obstacle1Image, obstacle2Image;
var blastImage;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, car3, fuels, powerCoins, obstacle1, obstacle2;
var crow_attack, shelly_attack, leon_attack, crow_attackImage, shelly_attackImage, leon_attackImage;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("./assets/Crow_jump.gif");
  car2_img = loadImage("./assets/Shelly_kick.gif");
  car3_img = loadImage("./assets/Leon_hide.gif");
  track = loadImage("./assets/track.png");
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  lifeImage = loadImage("./assets/life.png");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  blastImage = loadImage("./assets/blast.png");

  //Attack Images
  crow_attackImage = loadImage("./assets/Crow_Attack.png");
  shelly_attackImage = loadImage("./assets/Shelly_Attack.png");
  leon_attackImage = loadImage("./assets/Leon_Attack.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
