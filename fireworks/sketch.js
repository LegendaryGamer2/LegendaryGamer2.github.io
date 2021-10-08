// Fireworks Demo

let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");


  for (let i=fireworks.length-1; i>=0; i--) {
    if (fireworks[i].isDead()) {
      //remove it from the array
      fireworks.splice(i, 1);
    }
    else {
      fireworks[i].update();
      fireworks[i].display();
    }
  }
}

function mousePressed(){
  angleMode(DEGREES);
  let numberOfFireworks = 100;
  for(let i = 0; i <numberOfFireworks; i++){
    let scaler = random(1,3);
    let dx = cos(i * 360/ numberOfFireworks) * scaler;
    let dy = sin(i * 360/ numberOfFireworks) * scaler;
    let sumParticle = new Particle(mouseX, mouseY, dx, dy);
    fireworks.push(sumParticle);
  }
}

class Particle {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = 10;
    this.alpha = 255;
    this.color = color(255, 0, 0, this.alpha);
  }

  display() {
    noStroke();
    this.color = color(255, 0, 0, this.alpha);
    fill(this.color);
    circle(this.x, this.y, this.size);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    this.alpha--;
  }

  isDead() {
    
    return this.alpha <= 0;
    
  }
}