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
let towers = [];
class tower {
  constructor(x, y) {
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
  image(testimage, windowWidth / 1.3, windowHeight / 1.3);
  for(let towels of towers){
    image(testimage, towels.x, towels.y);
  }
}

function mouseClicked() {
  towers.push(new tower(mouseX, mouseY));
}