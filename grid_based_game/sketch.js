// Grid Neighbours

let gridDimensions = 10;
let grid;
let cellsize;
let x = 5;
let y = 5;
let i;

class ball{
  constructor(x, y ,r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  circleCreator() {
    fill(255);
    circle(this.x, this.y, this.r);
  }
  movement(){
    if (keyCode === LEFT_ARROW) {
      this.x -= 1;
      // let cellx = Math.floor(this.x/cellsize);
      // let celly = Math.floor(this.y/cellsize);
      // window.setInterval(swap(cellx, celly), 1000);
    } 
    else if (keyCode === RIGHT_ARROW) {
      this.x += 1;
      // let cellx = Math.floor(this.x/cellsize);
      // let celly = Math.floor(this.y/cellsize);
      // window.setInterval(swap(cellx, celly), 1000);
    }
    else if (keyCode === UP_ARROW) {
      this.y -= 1;
      // let cellx = Math.floor(this.x/cellsize);
      // let celly = Math.floor(this.y/cellsize);
      // window.setInterval(swap(cellx, celly), 1000);
    }
    else if (keyCode === DOWN_ARROW) {
      this.y += 1;
      // let cellx = Math.floor(this.x/cellsize);
      // let celly = Math.floor(this.y/cellsize);
      // window.setInterval(swap(cellx, celly), 1000);
    }
  }
}


function setup() {
  if (windowWidth > windowHeight){
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createRandomArray(gridDimensions);
  cellsize = width / gridDimensions;
  
}

let balls = [];
for (i = 0; i < 1; i++) {
  balls.push(new ball(100, 100, 7, 2));
}

function draw() {
  background(220);
  frameRate(60);
  displayGrid();
  createEnemy();
}

function createEnemy() {
  for (let ball of balls) {
    ball.circleCreator();
    ball.movement();
    let cellx = Math.floor(ball.x/cellsize);
    let celly = Math.floor(ball.y/cellsize);
    for(let i = 0; i !== 60; i ++){
      swap(cellx, celly);
    }
    i = 0;
  }
}



// function mousePressed(){
//   if (mouseX <= width && mouseY <= height){
//     let cellx = Math.floor(mouseX/cellsize);
//     let celly = Math.floor(mouseY/cellsize);

//     swap(cellx, celly);
//     swap(cellx, celly-1);
//     swap(cellx, celly+1);
//     swap(cellx-1, celly);
//     swap(cellx+1, celly);
//   }
// }

function swap(x, y) {
  if (x >= 0 && x < gridDimensions && y >= 0 && y < gridDimensions){
  
    if (grid[y][x] === 0){
      grid[y][x] = 1;
    }
    else if (grid[y][x] === 1){
      grid[y][x] = 0;
    }
  }
}

function displayGrid(){
  for (let y=0; y < gridDimensions; y ++){
    for (let x=0; x < gridDimensions; x++){
      if (grid[y][x] === 0){
        fill("white");
      }
      else if (grid[y][x] === 1){
        fill("black");
      }
      rect(x *cellsize, y*cellsize, cellsize, cellsize);
    }
  

  }
}

function createRandomArray(howLarge) {
  let newArray = [];
  for (let y = 0; y < howLarge; y++){
    newArray.push([]);
    for (let x = 0; x < howLarge; x++){

      newArray[y].push(0);
    }
  }
  return newArray;

}