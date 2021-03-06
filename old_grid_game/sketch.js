// Grid Neighbours

let gridDimensions = 10;
let grid;
let cellsize;

let playerX = 0;
let playerY = 0;
let isPlace = false;
let ranY = 0;
let ranX = 0;
let oldPlayerX = 0;
let oldPlayerY = 0;
let occupied = false;
let usedX, usedY = 0;
let movespot;

let movement = [];
let snakeBody = [];

class snakebody {
  constructor(x, y){
    this.x = x;
    this.y = y;

  }

  move(){
    if (key === "w"){
      tryMovingTo(this.x, this.y-1);
      console.log("up");
      movement.push(0);
    }
    else if (key === "a"){
      tryMovingTo(this.x-1, this.y);
      console.log("left");
      movement.push(1);
    }  
    else if (key === "s"){
      tryMovingTo(this.x, this.y+1);
      console.log("down");
      movement.push(2);
    }  
    else if (key === "d"){
      tryMovingTo(this.x+1, this.y);
      console.log("right");
      movement.push(3);
    }
  }

  movementTo(ar){
    if (ar === 0){
      tryMovingTo(this.x, this.y-1);
    }
    if (ar === 1){
      tryMovingTo(this.x-1, this.y);
    }
    if (ar === 2){
      tryMovingTo(this.x, this.y+1);
    }
    if (ar === 3){
      tryMovingTo(this.x+1, this.y);
    }
  }
}

snakeBody.push(new snakebody(5, 5));
snakeBody.push(new snakebody(5, 4));

function setup() {
  if (windowWidth > windowHeight){
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createRandomArray(gridDimensions);
  cellsize = width / gridDimensions;
  
  // place player


}

function draw() {
  background(220);
  displayGrid();
  for(let snakes of snakeBody){
    grid[snakes.y][snakes.x] = 9;
  }
  
  if(isPlace === false){
    newApple();
    isPlace = false;
    
    
  }
}


function keyPressed() {
  for(let j of snakeBody){
    j.move();
  }
}

function spawnSnake(oldX, oldY){
  snakeBody.push(new snakebody(oldX, oldY));
}

function tryMovingTo(newX, newY){
  // make sure you are on the grid
  if (newX >= 0 && newY >=0 && newX < gridDimensions && newY < gridDimensions){
    // check if new spot is empty
    if (grid[newY][newX] === 0) {
      // reset current spot to be empty
      for (let i of snakeBody){
        movespot = movement.pop;
        grid[i.y][i.x] = 9;
        i.movementTo(movespot);
        console.log(i.x,i.y);
        snakeBody[0].x = newX;
        snakeBody[0].y = newY;
      }
      // move player

      // put player back in grid
      
    }
  }

  else if(grid[newY][newX] === 6){
    grid[snakeBody[0].y][snakeBody[0].x] = 9;

    usedX = snakeBody[0].x;
    usedY = snakeBody[0].y;

    snakeBody[0].x = newX;
    snakeBody[0].y = newY;
    grid[newY][newX] = 9;
    spawnSnake(usedX, usedY);
    isPlace = false;
  }
}



function mousePressed(){
  if (mouseX <= width && mouseY <= height){
    let cellx = Math.floor(mouseX/cellsize);
    let celly = Math.floor(mouseY/cellsize);

    swap(cellx, celly);
    // swap2(cellx, celly);
  }
}



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

function swap2(x, y) {
  if (x >= 0 && x < gridDimensions && y >= 0 && y < gridDimensions){
  
    if (grid[y][x] === 0){
      grid[y][x] = 6;
    }
    else if (grid[y][x] === 9){
      occupied = true;
      
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
      else if (grid[y][x] === 9){
        fill("red");
      }
      else if (grid[y][x] === 6){
        fill("green");
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
function newApple() {

  // errror correcting
  while (occupied){
    ranY = random(0,9);
    ranX = random(0,9);
    ranY = Math.round(ranY);
    ranX = Math.round(ranX);
    if (grid[ranY][ranX] === 0){
      occupied = false;
      
    }
  }

  swap2(ranX, ranY);
  isPlace = true;

    
  
}