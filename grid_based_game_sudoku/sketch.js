// Sudoku + Randomizer
// Ali Ahmed
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let input, button, numInput;
let inputedNum;
let grid;
let gridDimensions = 9;
let cellSize;
let gridInArray;
let initialGrid;
let spot1, spot2;


function preload() {
  initialGrid = loadStrings("assets/level2.txt");
}

function setup() {
  if (windowWidth > windowHeight){
    createCanvas(windowHeight * 0.8, windowHeight * 0.8);
  }
  else {
    createCanvas(windowWidth * 0.8, windowWidth * 0.8);
  }

  initialGrid = convertedToIntGrid(initialGrid);

  grid = initialGrid;
  cellSize = width/gridDimensions;
  buttonMake();
}

function convertedToIntGrid(initialGrid){
  // assume rectangular array
  let rows = initialGrid.length;
  let cols = initialGrid[0].length;

  let newGrid = [];
  for (let y = 0; y<rows; y++){
    newGrid.push([]);
    for (let x=0; x<cols; x++){
      newGrid[y].push( int(initialGrid[y][x]));
    }
  }
  return newGrid;
}


function draw() {
  background(220);
  displayGrid();
  
}
// creates a buttton for inserting the number into the grid
function buttonMake(){
  input = createInput();
  input.size(50,59);
  input.position(windowWidth/2, windowHeight - cellSize);
  button = createButton("Insert Number Between 1 And 9");
  button.size(100,65);
  button.position(windowWidth/2-100, windowHeight - cellSize);
  button.mousePressed(displayText);

}

function keyPressed() {
  if (keyCode === 13) {
    displayText();
  }
}

// takes input and resets the text box to be empty
function displayText(){
  let name = input.value();
  input.value("");
  name = int(name);
  
  if (Number.isInteger(name) === true && name <=9){
    console.log(name);
    initialGrid[spot1][spot2] = name;
  }
  else if (Number.isInteger(name) === true && (name > 9 || name < 1)){
    console.log("Please choose a number between 1 and 9");
  }
  else{
    console.log("That is not a number please choose a number between 1 and 9");
  }
}


function mousePressed(){
  if (mouseX <= width && mouseY <= height){
    let cellx = Math.floor(mouseX/cellSize);
    let celly = Math.floor(mouseY/cellSize);
    console.log(cellx, celly);
    console.log(initialGrid[celly][cellx]);
    spot1 = celly;
    spot2 = cellx;
  }
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
  strokeWeight(5);
  for(let location = 0; location <= 9; location += 3){
    // horizontal lines
    line(0, location * cellSize, width, location* cellSize);
    // vertical lines
    line(location * cellSize, 0, location * cellSize, height);
  }
}