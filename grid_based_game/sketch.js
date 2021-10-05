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

let snakeBody = [];


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
  grid[playerY][playerX] = 9;
  spawnSnake(0, 0);
}

function draw() {
  background(220);
  displayGrid();
  if(isPlace === false){
    newApple();
    isPlace = false;
    
    
  }
}


function keyPressed() {
  for (let snake in snakeBody){
    if (key === "w"){
      tryMovingTo(snake.x, snake.y-1);
    }
    else if (key === "a"){
      tryMovingTo(snake.x-1, snake.y);
    }  
    else if (key === "s"){
      tryMovingTo(snake.x, snake.y+1);
    }  
    else if (key === "d"){
      tryMovingTo(snake.x+1, snake.y);
    }
  }
  if (key === "w"){
    tryMovingTo(playerX, playerY-1);
  }
  else if (key === "a"){
    tryMovingTo(playerX-1, playerY);
  }  
  else if (key === "s"){
    tryMovingTo(playerX, playerX+1);
  }  
  else if (key === "d"){
    tryMovingTo(playerX+1, playerY);
  }
}

function spawnSnake(oldX, oldY){
  let newSnakeBody = {
    x: oldX,
    y: oldY,


  };
  snakeBody.push(newSnakeBody);
}

function tryMovingTo(newX, newY){
  // make sure you are on the grid
  if (newX >= 0 && newY >=0 && newX < gridDimensions && newY < gridDimensions){
    // check if new spot is empty
    if (grid[newY][newX] === 0) {
      // reset current spot to be empty
      grid[playerY][playerX] = 0;

      // move player
      playerX = newX;
      playerY = newY;

      // put player back in grid
      grid[newY][newX] = 9;
    }
    else if(grid[newY][newX] === 6){
      grid[playerY][playerX] = 9;
      oldPlayerX = playerX;
      oldPlayerY = playerY;

      playerX = newX;
      playerY = newY;
      grid[newY][newX] = 9;
      spawnSnake(oldPlayerX, oldPlayerY);
      isPlace = false;
    }
  }
}


function mousePressed(){
  if (mouseX <= width && mouseY <= height){
    let cellx = Math.floor(mouseX/cellsize);
    let celly = Math.floor(mouseY/cellsize);

    swap(cellx, celly);
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
    console.log(ranX, ranY);
    if (grid[ranY][ranX] === 0){
      occupied = false;
      
    }
  }

  swap2(ranX, ranY);
  isPlace = true;
  console.log(ranX, ranY);
    
  
}