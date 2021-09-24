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
let money = 100;
let state_placing = 0;
let towers = [];
class tower {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
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

  

  for(let towels of towers){
    image(testimage, towels.x, towels.y);
  }
  textSize(100);
  text(money, windowWidth/3, 100);
}

function mouseClicked(){
  if (mouseX <= windowWidth / 1.3 + 10 && mouseX >= windowWidth / 1.3 - 10 && mouseY <= windowHeight / 1.3 + 10 && mouseY >= windowHeight / 1.3 - 10){
    state_placing = 1;

  }
  else if (state_placing === 1 && money >= 100){
    towers.push(new tower(mouseX, mouseY));
    money -= 100;
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