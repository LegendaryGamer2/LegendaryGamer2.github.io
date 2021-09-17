// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 0
let y = 0
let bColor = 255
let testimage;
let button;
// function preload() {
//   testimage = loadImage("Testing Image.png");
// }


let length = 0;
class Vehicle{
  constructor (x, y, r) {
   this.x = x;
   this.y = y;
   this.r = r;
}
  circleCreator(){
    circle(this.x, this.y, this.r)
  }
  correcting(){
    if (this.x !== windowWidth/ 10){
      this.x = windowWidth / 10 + 25
    }
  }
  move(){
  if (length <= 14){
    this.y += windowHeight / 50
    length += 1
  }
  else if (length <= 42 && length > 14){
    this.x += windowWidth / 50
    length += 1
  }
  else if(length <= 62 && length > 42){
    this.y += windowHeight / 50
    length += 1
  }
  

  
    
}
  
}
let circle1 = new Vehicle(75, 0, 20);


function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);
  circle1.correcting() // to make the ball centered between the lines
//   code below is to use a button

  // tower1 = createButton('');
  // tower1.size(25, 25);
  // tower1.position(400, 375);
}

function draw() {
  background(bColor);
  // frameRate(1)

  // image(testimage, 400, 375);
  // grid()
  pathway();
  circle1.circleCreator()
  circle1.move()
  // tower1.mousePressed(grid)
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





// setting up the grid for placing towers
function grid() {
  while (x !== 450){
    fill(255)
    line(x, 0, x , height)
    x = x + 50

    // to make all lines look the same uncomment
    // if (x / 2 === 50){
    //   strokeWeight(3)
    // }
}
  x = 0
  while (y !== 400){
    fill (255)
    line(0, y, 400, y)
    y = y + 50
    
  }
  y = 0
}