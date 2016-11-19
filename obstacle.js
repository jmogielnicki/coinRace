

function Obstacle(xPosition, yPosition, type) {
  const obstaclesObject = {
    6: {name: 'gold', size: 10, color: color(255, 238, 10)},
    1: {name: 'bloodsucker', size: 40, color: color(212, 18, 67)},
    2: {name: 'bonecruncher', size: 40, color: color(142, 193, 39)},
    3: {name: 'headsmasher', size: 40, color: color(162, 0, 255)},
    4: {name: 'hellraiser', size: 40, color: color(0, 174, 219)},
    5: {name: 'deathscreamer', size: 40, color: color(244, 120, 53)}
  }
  this.startingPosition = createVector(xPosition, yPosition);
  this.relativePosition = createVector(xPosition, yPosition);
  this.obstacle = obstaclesObject[type];
  this.color = this.obstacle.color;
  this.size = this.obstacle.size;
  this.radius = this.size/2;
  this.active = false;

  this.updateVerticalPosition = function(gameSpeed) {
    this.relativePosition.y += gameSpeed;
    if (this.relativePosition.y > this.radius * -1 && this.relativePosition.y < height + this.radius) {
      this.active = true;
    } else {
      this.active = false;
    }
    if (this.relativePosition.y > height - 10) {
      this.relativePosition.y = totalTrackLength * -1
    }
  }

  this.display = function() {
    fill(this.color)
    const leftScreenXPosition = map(xPosition, 0, width, 0, width/2);
    const rightScreenXPosition = map(xPosition, 0, width, width/2, width);
    ellipse(leftScreenXPosition, this.relativePosition.y, this.size, this.size);
    ellipse(rightScreenXPosition, this.relativePosition.y, this.size, this.size);
  }
  this.updateActive = function() {
    
  }

}
