// taken from this tutorial: https://github.com/b-g/p5-matter-examples

let Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;
  
let engine;
let world;
let boxA;
let boxB;
let ground;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  boxA = Bodies.rectangle(400, 200, 80, 80);
  boxB = Bodies.rectangle(450, 50, 80, 80);
  ground = Bodies.rectangle(0, 610, width, 80, {
    isStatic: true
  });
  Matter.Runner.run(engine);
  World.add(engine.world, [boxA, boxB, ground]);
}


function draw() {
  background(0);

  fill(255);
  rect(boxA.position.x, boxA.position.y, 80, 80);
  rect(boxB.position.x, boxB.position.y, 80, 80);
  rect(ground.position.x, ground.position.y, width, 10);
}