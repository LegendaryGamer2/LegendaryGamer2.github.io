// Ball Tower Defense
// Ali Ahmed
// 24/9/2021
// Extra for Experts: Interaction with the keyboard and mouse
// - I made it so that if you press the e key then click on the screen it will place a tower down or if you click on the tower than click on the map it will place a tower down


// sets if the game starts
let starter = 0;


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
let health = 10;
let x = 0;
let y = 0;
let addHealth = 0;

// total lives player has
let lives = 10;

// tower related stuff
let money = 100;
let state_placing = 0;
let hit = false;
let towers = [];
class tower {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
  }
  hitted() {
    health -=1;
  }
}


function preload() {
  testimage = loadImage("Testing Image.png");
}
// enemy related behaviour
let length = 0;
class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.h = health;
  }
  //   Creates the actual circle
  circleCreator() {
    fill(255);
    circle(this.x, this.y, this.r);
  }
  // Make the ball move accross the track
  move() {
    if (complete === 0) {
      if (changer === 0) {
        loop1 = x1 + 25;
        changer = 1;
      }
      // Code to make a ball go from start to first bend
      if (this.y < y1 - 25) {
        this.y += speed;
        this.correcting2();
      }
      // To make ball go from first bend to second
      else if (this.x < x2 + 25 && loop1 <= x2 + 25) {

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
      // Sets up the next enemy to spawn
      else if (this.y >= height + 50) {
        console.log("done");
        
        if (loop2 === 2000) {
          lives -= 1;
          loop1 = -1;
          changer = 0;
          for (let ball2 of balls) {
            ball2.restart();
          }
          speedAdd = random(3, 5);
          loop2 = 0;
          
          
        } 
        else {
          loop2 += 10;
        }
      }
    }
  }
  // Correcting window being resized while running for most parts of the track and the digit represents for which track
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
  //   Restarting the ball path if it dies
  restart(){
    for (let ball2 of balls) {
      ball2.x = 100;
      ball2.y = 0;
      ball2.correcting();
      ball2.h = 1 + addHealth;
    }
  }
}
// Chooses how many balls keep it at 1 to make the object look clean
let balls = [];
for (i = 0; i < 1; i++) {
  balls.push(new Ball(75, -50, 25, 2));
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
  // creates the game if any key is pressed
  if (starter === 0){
    textSize(200);
    text("Ball Tower Defense", windowWidth / 2 - 900, windowHeight / 2 - 200);
    textSize(50);
    text("Each tower costs 100 points and the balls health increases by 1 each time it dies", windowWidth / 2 - 900, windowHeight / 2 );
    textSize(50);
    text("To start the game press any key", windowWidth / 2 - 900, windowHeight / 2 + 100);
    if (keyIsPressed === true){
      keyIsPressed = false;
      window.setInterval(start, 3000);
    
    }
  }
  else if (starter === 1){
    frameRate(60);
    // Enemy related objects
    pathway();
    speedChanger();
    createEnemy();
    restart();

    // Image setting up
    imageMode(CENTER);
    image(testimage, windowWidth / 1.3, windowHeight / 1.3);
    if (state_placing === 1){
    
      image(testimage, mouseX, mouseY);
      fill(0, 255, 0, 100);
      circle(mouseX, mouseY, 150);
    }


    for(let block of towers){
      image(testimage, block.x, block.y);
      fill(0, 255, 0, 100);
      circle(block.x, block.y, 150);

      for (let enemyH of balls){
        hit = collidePointCircle(enemyH.x, enemyH.y, block.x, block.y, 150);
        if (hit === true){
          enemyH.h -= 0.05;
        }
        // ball killed 
        if (enemyH.h <= 0){
          enemyH.restart();
          addHealth += 1;
          money += 100;
        }

      }  
    }

  
    textSize(100);
    fill(0);
    text(money, windowWidth/3, 100);
    text(lives, windowWidth - 200, 100);
    if (lives === 0){
      starter = 2;
    }
  }
  else if (starter === 2){
    textSize(50);
    text("You Lose, hit refresh to restart", windowWidth / 2 - 900, windowHeight / 2);
  }
  
}

function start (){
  starter = 1;
}


// Increases and decreses speed of enemy
function speedChanger(){
  speed = windowWidth/ 600 + windowHeight / 600 + speedAdd;
}

// Drawing the enemy
function createEnemy() {
  for (let ball of balls) {
    ball.circleCreator();

    ball.move();
    
  }
}
// Resizing the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

// Resetting the balls to the start of the track
function restart(){
  if (health === 0){
    for (let ballR of balls){
      ballR.restart();
    }
  }
}

function pathway() {
  if (starter === 1){
  //Setting up path of the enemies
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
}
// All the tower code
function mouseClicked(){
  if (mouseX <= windowWidth / 1.3 + 10 && mouseX >= windowWidth / 1.3 - 10 && mouseY <= windowHeight / 1.3 + 10 && mouseY >= windowHeight / 1.3 - 10){
    state_placing = 1;

  }
  // placement of the tower
  else if (state_placing === 1 && money >= 100 && (mouseX > x1 + 50 && ((mouseY < y1 - 50 || mouseY > y1) && (mouseY > y2 + 50 || mouseY < y2)) || mouseX < x1 && mouseY > 0 && mouseY < height || (mouseX < x1 + 50 && (mouseY > y1 && mouseY < y2) || mouseX > x1 && (mouseY > y1 && mouseY < y2) ))){
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