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

let gridDimensions = 9;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}
