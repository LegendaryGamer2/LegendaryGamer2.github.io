// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let testimage;
let i;
let x = 0;
let y = 0;
let money = 300;
let state_placing = 0;
let hit = false;
let towers = [];
class tower {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
  }

  hitted() {
    print('colliding?', hit);

    
  }
}

function preload() {
  testimage = loadImage("Testing Image.png");
}




function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  imageMode(CENTER);
  image(testimage, windowWidth / 1.3, windowHeight / 1.3);
  if (state_placing === 1){
    image(testimage, mouseX, mouseY);
    fill(0, 255, 0, 100);
    circle(mouseX, mouseY, 100);
  }

  
  for(let block of towers){
    image(testimage, block.x, block.y);
    fill(0, 255, 0, 100);
    circle(block.x, block.y, 100);

    
    hit = collidePointCircle(mouseX, mouseY, block.x, block.y, 100);
    
    block.hitted();
  }
  textSize(100);
  fill(0);
  text(money, windowWidth/3, 100);
}

function mouseClicked(){
  if (mouseX <= windowWidth / 1.3 + 10 && mouseX >= windowWidth / 1.3 - 10 && mouseY <= windowHeight / 1.3 + 10 && mouseY >= windowHeight / 1.3 - 10){
    state_placing = 1;

  }
  else if (state_placing === 1 && money >= 100){
    towers.push(new tower(mouseX, mouseY));
    money -= 100;
    state_placing = 0;
  }
  else{
    state_placing = 0;
  }
}


function keyPressed() {
  if (keyCode === 69) {
    state_placing = 1;
  } 

}