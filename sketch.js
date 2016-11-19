var bubbles = [];
var obstacles = [];
var numPixelsAcross = 10;
var numPixelsHigh = 10;
var gameSpeed = 5;
var totalTrackLength;

function setup() {
  createCanvas(800,600);
  loadGoogleSpreadsheetData();
  screenYPosition = 0;
  bubbles[0] = new Bubble((width / 2) - (width / 4), height-100);
  bubbles[1] = new Bubble((width / 2) + (width / 4), height-100);
}

function draw() {
  background(0);
  fill(100)
  line(width/2, 0, width/2, height);
  screenYPosition += gameSpeed;
  if (screenYPosition >= totalTrackLength + height) {
    console.log('reset');
    screenYPosition = 0;
    gameSpeed += 1;
  }
  for(bubble of bubbles) {
    bubble.update(screenYPosition);
    bubble.display();
  }
  for (obstacle of obstacles) {
    obstacle.updateVerticalPosition(gameSpeed);
    if (obstacle.active) {
      obstacle.updateActive();
      obstacle.display();
    }
  }

  controlPlayers();
}

function detectCollisions() {
  // detectCollisions
  for(var i = bubbles.length - 1; i >= 0; i--) {
    for (obstacle of obstacles) {
      obstacle.updateVerticalPosition(gameSpeed);
      if (obstacle.active) {

      }
    }
  }
}

function controlPlayers() {
  const playerOne = bubbles[0];
  if (keyIsDown(65)) {
    playerOne.applyForce(playerOne.leftForce);
  }
  if (keyIsDown(68)) {
    playerOne.applyForce(playerOne.rightForce);
  }
  if (keyIsDown(87)) {
    playerOne.applyForce(playerOne.upForce);
  }
  if (keyIsDown(83)) {
    playerOne.applyForce(playerOne.downForce);
  }
  const playerTwo = bubbles[1];
  if (keyIsDown(LEFT_ARROW)) {
    playerTwo.applyForce(playerTwo.leftForce);
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerTwo.applyForce(playerTwo.rightForce);
  }
  if (keyIsDown(UP_ARROW)) {
    playerTwo.applyForce(playerTwo.upForce);
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerTwo.applyForce(playerTwo.downForce);
  }
}
