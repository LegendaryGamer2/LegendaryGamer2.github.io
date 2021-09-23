// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = 0;
let y = 0;
let bColor = 255;
let loop1 = -1;
let changer = 0;
let speed;
let x1;
let x2;
let y1;
let y2;
let i;
let stage = 0;
let testimage;
let button;
let complete = 0;
let loop2 = 0;
let times = 0;
let state = -1;
let speedAdd = 0;
let health = 1;
function preload() {
  testimage = loadImage("Testing Image.png");
}

let length = 0;
class Ball {
  constructor(x, y, r, health) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.h = health;
  }
  circleCreator() {
    // fill("white");
    circle(this.x, this.y, this.r);
  }

  move() {
    if (complete === 0) {
      if (changer === 0) {
        loop1 = x1 + 25;
        changer = 1;
      }
      // Code to make a ball go from start to first bend
      if (this.y <= y1 - 25) {
        this.y += speed;
        this.correcting2();
      }
      // To make ball go from first bend to second
      else if (this.x <= x2 + 25 && loop1 <= x2 + 25) {

        loop1 += speed / 14;
        this.x += speed;
      }
      // To make ball go from second bend to third
      else if (this.y <= y2 + 25) {
        this.y += speed;
        loop1 += 80;
        this.correcting4();
      }
      // To make ball go from third bend to fourth
      else if (this.x > x1 + 25 && loop1 >= x2 + 25) {
        this.x -= speed;
      }
      // Correcting for if the ball goes over the last line
      else if (this.x <= x1 + 24 && loop1 >= x2 + 25) {
        this.x = x1 + 25;
      }
      // Makes ball go down to the exit
      else if (this.y <= height + 50) {
        this.y += speed;
      }
      else if (this.y >= height + 50) {
        console.log("done");

        if (loop2 === 1000) {
          loop1 = -1;
          changer = 0;
          for (let ball2 of balls) {
            ball2.x = 100;
            ball2.y = 0;
            ball2.correcting();
          }
          speedAdd = random(0, 6);
          loop2 = 0;
        }
        else {
          loop2 += 10;
        }
      }
    }
  }

  correcting() {
    if (this.x !== windowWidth / 10) {
      this.x = windowWidth / 10 + 25;
    }
  }
  correcting2() {
    if (this.x !== x1 + 25) {
      this.x = x1 + 25;
    }
  }

  
  correcting4(){
    if (this.x !== x2 + 25){
      this.x = x2 + 25;
    }
  }
}
let balls = [];
for (i = 0; i <= 10; i++) {
  balls.push(new Ball(75, 0, 25, health));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  for (let ball1 of balls) {
    ball1.correcting();

  }
  speed = windowWidth/ 600 + windowHeight / 600;
}

function draw() {
  background(bColor);
  frameRate(60);
  pathway();
  image(testimage, windowWidth / 1.3, windowHeight / 1.3);
  speedChanger();
  createEnemy();
}

function speedChanger(){
  speed = windowWidth/ 600 + windowHeight / 600 + speedAdd;
}


function createEnemy() {
  for (let ball of balls) {
    ball.circleCreator();

    ball.move();
    
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}
function pathway() {
  //setting up path of the enemies
  x1 = windowWidth / 10;
  y1 = windowHeight / 3;
  x2 = windowWidth / 1.5;
  y2 = windowHeight / 1.5;
  //First Row/ Entrance
  line(x1, 0, x1, y1);
  line(x1 + 50, 0, x1 + 50, y1 - 50);

  //Second Row
  line(x1, y1, x2, y1);
  line(x1 + 50, y1 - 50, x2 + 50, y1 - 50);

  //Third Row
  line(x2, y1, x2, y2);
  line(x2 + 50, y1 - 50, x2 + 50, y2 + 50);

  //Fourth Row
  line(x2, y2, x1, y2);
  line(x2 + 50, y2 + 50, x1 + 50, y2 + 50);

  //Last Row/ Exit
  line(x1, y2, x1, height);
  line(x1 + 50, y2 + 50, x1 + 50, height);
}