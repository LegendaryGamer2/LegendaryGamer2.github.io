// taken from this tutorial: https://github.com/b-g/p5-matter-examples

let Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;
  
let engine;
let world;
let boxes = [];
let ground, ground2, ground3, ground4;


function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  let options = {
    isStatic: true
  };
  ground = Bodies.rectangle(0, height, windowWidth * 2, 10, options);


  World.add(world, ground);
}

function mousePressed(){
  boxes.push(new Box(mouseX, mouseY, 20, 20));
}

function draw() {
  background(51);


  
  for (let i = 0; i < boxes.length; i++){
    boxes[i].show();
  }
  noStroke();
  fill(170);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width*2, 10);
}