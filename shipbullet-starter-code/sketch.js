// OOP Pair Programming Starter Code
// Your Names
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;
let bullet;
let bullets = [];
let bullet1;
let stop = 0;
let shootSound;
let bgMusic;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
  shootSound = loadSound("assets/laser1.mp3");
  bgMusic = loadSound("assets/OrbitalColossus.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width / 2, height / 2, shipImage);
  bgMusic.setVolume(0.5);
  bgMusic.loop();
}

function draw() {
  background(0);
  enterprise.update();
  enterprise.display();
  
}



// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.image = theImage;
    this.move = false;

  }



  update() {
    // move ship


    if (keyIsDown(87)) { //w
      this.y -= 5;
    } 
    if (keyIsDown(83)) { //s
      this.y += 5;
    } 
    if (keyIsDown(65)) { //a
      this.x -= 5;
    } 
    if (keyIsDown(68)) {  //d
      this.x += 5;
    }
    for (bullet1 of bullets){
      bullet1.update();
    }
    for (let i=0; i<bullets.length; i++){
      if (bullets[i].alive === false){
        bullets.splice(bullets[i], 1);
      }
    }
    if (key === "e") {
      if (keyIsPressed){
        bullets.push(new Bullet(enterprise.x, enterprise.y, 5, 5, bulletImage));
        
      }
      key = false;
      
      
    }
    // if doing extra for experts, show bullet(s)
  }

  display() {
    // show the ship
    image(this.image, this.x, this.y, 20, 20);
  }

}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    this.x = x + 7;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.theImage = bulletImage;
    this.alive = true;
  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
    // while (this.y >= 0){
    // }
    if (this.alive) {
      this.y -= 7;
      this.display();
      this.isOnScreen();
    }
  }

  display() {
    // show the bullet
    image(this.theImage, this.x, this.y, 5, 5);
  }

  isOnScreen() {
    // check if the bullet is still on the screen
    if (this.y <= 0){
      this.alive = false;
    }
  }
}

