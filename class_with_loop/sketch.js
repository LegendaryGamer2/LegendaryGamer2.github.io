let x = 0
let y = 0
let bColor = 255
loop1 = 0




let length = 0;
class Ball{
  constructor (x, y, r) {
   this.x = x;
   this.y = y;
   this.r = r;
}
  circleCreator(){
    circle(this.x, this.y, this.r)
  
  }
  move(){

  if (this.y <= y1 - 25){
    this.y += .2

  }
  else if (this.x <= x2 + 25 && loop1 <= 10000){
    this.x += .2
    loop1 += 1
  }
  else if(this.y <= y2 + 25){
    this.y += .2


  
  }
  
  
  
  }
  
  
    correcting(){
    if (this.x !== windowWidth/ 10){
      this.x = windowWidth / 10 + 25
    }
  }
  
  
  
}
let balls = [];
for (i = 0; i <= 10; i ++){
  balls.push(new Ball(75, 0, 25))
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  balls[1].correcting()
}

function draw() {
  background(bColor);
  frameRate(60)
  pathway();

for(let ball of balls){
  u = balls[1] 
    u.circleCreator()
  u.move()

  
}
function pathway(){
  //setting up path of the enemies
  x1 = width/10
  y1 = height/3
  x2 = width /1.5
  y2 = height/ 1.5
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
  line(x1 + 50, y2 + 50, x1 + 50, height)
} 



}