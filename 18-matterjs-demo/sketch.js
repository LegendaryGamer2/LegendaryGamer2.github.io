// taken from this tutorial: https://github.com/b-g/p5-matter-examples

const Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;
  

const drawBody = Helpers.drawBody;

let engine;

let ballA;
let ballB;
let ballC;
let ballD;
let ground;
let myCar;

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();

  ballA = Bodies.circle(200, 100, 20);
  ballB = Bodies.circle(300, 100, 20);
  ballC = Bodies.circle(400, 100, 20);
  ballD = Bodies.circle(500, 100, 20);
  
  ground = Bodies.rectangle(0, 400, windowWidth, 20,{
    isStatic: true
  });

  World.add(engine.world, [ballA, ballB, ballC, ballD, ground]);
  Matter.Runner.run(engine);
}


function draw() {
  background(0);

  fill(255);
  drawBody(ballA);
  drawBody(ballB);
  drawBody(ballC);
  drawBody(ballD);

  fill(255, 0, 0);
  drawBody(ground);
}