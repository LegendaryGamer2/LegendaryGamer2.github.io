// Sudoku + Randomizer
// Ali Ahmed
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let initialGrid;
let input, button, greeting;
let inputedNum;
let grid;
let gridDimensions = 9;
let cellSize;
let gridInArray;
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
  input.size(100,50);
  input.position(windowWidth/4-50, windowHeight/2);
  button = createButton("");
  button.size(50,56);
  button.position(windowWidth/4-100 , windowHeight/2);
  button.mousePressed(displayText);

  greeting = createElement("h2","Insert Number");
  greeting.position(windowWidth/4-100, windowHeight/2-50);

  textAlign(CENTER);
  textSize(10);
}
// takes input and resets the text box to be empty
function displayText(){
  let name = input.value();
  input.value("");
  name = int(name);
  
  if (Number.isInteger(name) === true && name <=9){
    console.log(name);
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
    let cellx = Math.floor(mouseX/gridDimensions);
    let celly = Math.floor(mouseY/gridDimensions);

    console.log(cellx, celly);
  }
}

function windowResized() {
  setup();
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