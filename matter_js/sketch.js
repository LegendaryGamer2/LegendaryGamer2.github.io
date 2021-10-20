let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Composites = Matter.Composites;
let engine =  Matter.Runner.run(Engine);
let render = Render.create({
  element: document.body,
  engine: engine
});
Engine.run(engine);
Render.run(render);
 
let ball=Bodies.circle(200, 10, 40);
let ground=Bodies.trapezoid(340,300,500,100,.9,{isStatic: true});
let myCar=Composites.car(390, 0, 100, 30, 40);
let myCradle=Composites.newtonsCradle(600, 100, 5, 10, 160);
World.add(engine.world, [ball,ground,myCar,myCradle]);