// Grid Neighbours

let gridDimensions = 4;
let grid;
let cellsize;

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

function draw() {
  background(220);
  displayGrid();
}


function mousePressed(){
  if (mouseX <= width && mouseY <= height){
    let cellx = Math.floor(mouseX/cellsize);
    let celly = Math.floor(mouseY/cellsize);

    swap(cellx, celly);
    swap(cellx, celly-1);
    swap(cellx, celly+1);
    swap(cellx-1, celly);
    swap(cellx+1, celly);
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
      if (random(0,100) > 50){
        newArray[y].push(0);
      }
    
      else {
        newArray[y].push(1);
      }
    }
  }
  return newArray;

}