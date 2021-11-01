// taken from this tutorial: https://github.com/b-g/p5-matter-examples

let pigX = 100;
let pigY = 100;
let pigX2 = 200;
let pigY2 = 400;
let ground;
let i = 0;
let pig;
let wood;
let rotation = 0;
let moveRight = false;
let engine;
let world;
let vector;
let particles = [];
let spot1, spot2, spot3, spot4;
let level = 1;
let boxXY;
let step = 0;
let hasHappened = false;
let mConstraint;


let Engine = Matter.Engine,
  World = Matter.World,
  Vector = Matter.Vector,
  Render = Matter.Render,
  Bodies = Matter.Bodies,
  Body = Matter.Body,
  Composites = Matter.Composite,
  MouseConstraint = Matter.MouseConstraint,
  Mouse = Matter.Mouse,
  Constraint = Matter.Constraint;
  
function preload(){
  wood = loadImage("assets/wood.png");
}


function rolling(x, y, img, rotated){
  translate(x, y);
  rotate(PI / 180 * rotated);
  imageMode(CENTER);
  image(img, x - x, y - y, 30, 30);
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  vector = Vector.create(width/2, height/2);
  Engine.run(engine);
  if (hasHappened === false){
    let prev = null;
    for(let x = 400; x < 680; x+= 20){

      let fixed = false;

      if (!prev){
        fixed = true;
      }
      let p = new Particle(x, 100, 10, fixed);

      particles.push(p);

      if (prev) {
        let options = {
          bodyA: p.body,
          bodyB: prev.body,
          length: 45,
          stiffness: 0.4
        };

        let constraint = Constraint.create(options);
        World.add(world, constraint);
      }
      
      prev = p;
    }
  }
  ground = Bodies.rectangle(0, height-20, windowWidth * 2, 10, {isStatic: true});
  World.add(world, ground);
  let canvasMouse = Mouse.create(canvas.elt);
  canvasMouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasMouse

  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}

// function mousePressed(){
//   if (key === "b"){
//     particles.push(new Particle(mouseX, mouseY, 50, false));
//   }
// }


function windowResized(){
  hasHappened = true;
  setup();

}


function draw() {
  background(0);
  // representation of the ground
  fill(255);
  rect(0, height-25, windowWidth, 10);
  for (let i = 0; i < particles.length; i++){
    particles[i].show();
    if (particles[i].isOffScreen()){
      particles[i].removeFromWorld();
      particles.splice(i, 1);
      
    }
  }
  fill(0);
  for(let f = 0; f < particles.length; f ++){
    if (f > 0){
      line(particles[f].body.position.x, particles[f].body.position.y, particles[f-1].body.position.x, particles[f-1].body.position.y);
    }
  }
}