function Box(x, y, w, h, img, stuck, mat){
  if (mat === "wood"){
    this.body = Bodies.rectangle(x, y, w, h, {
      // the properties of the pig being created
      friction: 1,
      force: { x: 0, y: 0},
      frictionAir: 0,
      density: 10,
      inertia: 0, 
      isStatic: stuck,
    }
    );
  }
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.img = img;
  World.add(world, this.body);

  this.slowDown = function(){
    // Body.setVelocity(this.body, {x: 0, y: 0});
  
  };
  this.show = function() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.img, 0, 0, this.w, this.h); 
    pop();
  };
}