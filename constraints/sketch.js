// taken from this tutorial: https://github.com/b-g/p5-matter-examples

let engine;
let world;
let boxA;
let boxB;
let boxes = [];
let ground;

let Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;
  
let engine;
let world;
let boxA;
let boxB;
let boxes = [];
let ground;

function setup() {
  createCanvas(800, 800);
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  boxA = Bodies.rectangle(400, 200, 80, 80);
  boxB = Bodies.rectangle(450, 50, 80, 80);
  ground = Bodies.rectangle(0, 610, width, 80, {
  Engine.run(engine);
  let options = {
    isStatic: true
  });
  Matter.Runner.run(engine);
  World.add(engine.world, [boxA, boxB, ground]);
  };
  ground = Bodies.rectangle(200, height-20, width, 10, options);
  World.add(world, ground);
}

function mousePressed(){
  boxes.push(new Box(mouseX, mouseY, 50, 50));
}

function draw() {
  background(0);

  fill(255);
  rect(boxA.position.x, boxA.position.y, 80, 80);
  rect(boxB.position.x, boxB.position.y, 80, 80);
  rect(ground.position.x, ground.position.y, width, 10);
  for (let i = 0; i < boxes.length; i++){
    boxes[i].show();
  }
  
}