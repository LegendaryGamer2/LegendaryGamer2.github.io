function Box(x, y, w, h){
  let options = {
    friction: 0.5,
    restitution: 1
    
  };
  this.body = Bodies.rectangle(x, y, w, h, options);

  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(127);
    rect(0, 0, w, h);
    pop();
  };
}