// Sudoku

let initialGrid = [
  [0, 2, 4, 3, 8, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 6, 0, 0, 7],
  [0, 5, 8, 0, 0, 0, 4, 0, 0],
  [4, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 7, 0, 5, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 0, 8],
  [0, 0, 1, 0, 0, 0, 6, 7, 0],
  [3, 0, 0, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 4, 9, 2, 1, 0],
];

let grid;
let gridDimensions = 9;
let cellSize;

function setup() {
  if (windowWidth > windowHeight){
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = initialGrid;
  cellSize = width/gridDimensions;
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
  for(let y = 0; y < gridDimensions; y ++){
    for(let x = 0; x < gridDimensions; x++){
      fill("white");
      strokeWeight(1);
      // noStroke();
      rect(x * cellSize, y * cellSize, cellSize, cellSize);

      if (grid[y][x] !== 0){
        fill("black");
        textSize(cellSize * 0.75);
        textAlign(CENTER, CENTER);
        text(grid[y][x], x * cellSize + cellSize/2, y * cellSize + cellSize/2);
      }
    }
  }
  drawCageLines();
}


function drawCageLines() {
  strokeWeight(2);
  for(let location = 0; location <= 9; location += 3){
    // horizontal lines
    line(0, location * cellSize, width, location* cellSize);
    // vertical lines
    line(location * cellSize, 0, location * cellSize, height);
  }
}