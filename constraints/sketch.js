// taken from this tutorial: https://github.com/b-g/p5-matter-examples

let Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;
  
let engine;
let world;
let boxes = [];
let ground;


function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  let options = {
    isStatic: true
  };
  ground = Bodies.rectangle(200, height-20, width, 10, options);
  World.add(world, ground);
}

function mousePressed(){
  boxes.push(new Box(mouseX, mouseY, 50, 50));
}

function draw() {
  background(0);
  for (let i = 0; i < boxes.length; i++){
    boxes[i].show();
  }
  
}