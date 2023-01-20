var canvas;
var backgroundImage, car1, car2, track, car1Img, car2Img, trackImg;
var database, gameState,gamestate;
var form, player, playerCount;
var allPlayers;
var cars = []

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Img = loadImage("assets/car1.png");
  car2Img = loadImage("assets/car2.png");
  trackImg = loadImage("assets/track.jpg");
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

  if(playerCount===2) {
    game.update(1); //start - 0 ; play - 1; end - 2
  }
  if(gamestate===1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
