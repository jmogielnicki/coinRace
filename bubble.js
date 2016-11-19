function Bubble(x, y) {
  this.absoluteLocation = createVector(x, y);
  this.size = 40
  this.radius = this.size/2;
  this.velocity = createVector(0, 0);
  this.gravity = createVector(0, .2);
  this.vAcceleration = createVector(0, 0);
  this.rocketPower = .2;
  this.leftForce = createVector(this.rocketPower * -1, 0);
  this.rightForce = createVector(this.rocketPower, 0);
  this.upForce = createVector(0, this.rocketPower * -1);
  this.downForce = createVector(0, this.rocketPower);

  this.display = function() {
    stroke(40);
    fill(250);
    ellipse(this.absoluteLocation.x, this.absoluteLocation.y, this.size, this.size);
  }

  this.applyForce = function(force) {
    this.vAcceleration.add(force);
  }

  this.update = function(screenYPosition) {
    if (this.absoluteLocation.x > (width - this.radius) || this.absoluteLocation.x < this.radius) {
      this.velocity.x = this.velocity.x * -1
    }
    if (this.absoluteLocation.y > height - (this.radius)) {
      this.absoluteLocation.y = (height - (this.radius))-1;
      this.velocity.y *= -1;
    }
    this.velocity.add(this.vAcceleration);
    this.absoluteLocation.add(this.velocity);
    this.vAcceleration.mult(0);
  }
}
