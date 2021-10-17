// Sudoku
// Ali Ahmed
// 17/10/2021
//
// Extra for Experts:
// Added a button titled check to see which squares were incorrect

let input, button, numInput;
let inputedNum;
let grid;
let gridDimensions = 9;
let cellSize;
let gridInArray;
let initialGrid;
let spot1, spot2;
let textDefault;
let instructions;
let placing = false;
let finalGrid;
let checkCorrect;
let finalGridNumCheck;
let gridNumCheck;
let counter;
let amountOfNumInGrid;
let amountOfCorrect = 0;
let timesChecked = 0;
let checkClicked = false;
let checkButton;
let check = false;
let level = 0;
let checkButtonText = "Check";
let instructions0;
let setuping = 0;
let setup1 = 0;
let diffucultySelector = 0;
let diffucultySelected;
let input1;

function preload() {
  // uncomment out if you want to have almost complete grid and change bottom right number to 3 then hit check to finish game
  initialGrid = loadStrings("assets/level_intermediate_answer_copy.txt");

  // Completed and incomplete sudoku
  // initialGrid = loadStrings("assets/level_intermediate.txt");
  finalGrid = loadStrings("assets/level_intermediate_answer.txt");
}

function setup() {
  if (windowWidth > windowHeight){
    createCanvas(windowHeight * 0.8, windowHeight * 0.8);
  }
  else {
    createCanvas(windowWidth * 0.8, windowWidth * 0.8);
  }
  finalGrid = convertedToIntGrid(finalGrid);
  initialGrid = convertedToIntGrid(initialGrid);
 
  grid = initialGrid;
  cellSize = width/gridDimensions;
  
  
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
  // setting different stages of the game
  
  // Title Screen
  if (level === 0){
    if (setup1 === 0){
      instructions0 = createElement("h1", "Welcome to my Sudoku, and press e to start, and you can press enter to submit the numbers you enter, press check to show inccorect squares in red for 10 seconds, and press check at the end to reach win screen after you solve it");
      instructions0.position(0, height/2);
      setup1 = 1;
    }
  }
  // Adding Buttons and actual game
  else if (level === 1){
    if (setuping === 0){
      buttonInput();
      buttoncheck();
      setuping = 1;
      
    }

    background(220);
    displayGrid();
    if (check){
      answerCorrectChecker(true);
    }
  }
  // End Screen
  else if (level === 2){
    background(255);
  }
}

// Creating the check button
function buttoncheck(){
  checkButton = createButton(checkButtonText);
  checkButton.size(100, 65);
  checkButton.position(0, windowHeight/2);
  checkButton.mousePressed(checkButtonClicked);
}

// Making it show you the incorrect square and then after 10 secondes it goes back to hinding checks with the switchcheckOff function
function checkButtonClicked(){
  check = true;
  window.setInterval(switchcheckOff, 10000);
}

function switchcheckOff(){
  check = false;
}


// creates a buttton and text box for inserting a number into the grid
function buttonInput(){
  input = createInput();
  input.size(50,59);
  input.position(windowWidth/2, windowHeight - cellSize);
  button = createButton("Insert Number Between 1 And 9");
  button.size(100,65);
  button.position(windowWidth/2-100, windowHeight - cellSize);
  button.mousePressed(displayText);
  textDefault = "Enter a number between 1 and 9";
  instructions = createElement("h1", textDefault);
  instructions.position(width/10, height + height/7);
  
}

// takes input and resets the text box to be empty and tells you if a number is allowed
function displayText(){
  let name = input.value();
  input.value("");
  name = int(name);
  if (Number.isInteger(name) === true && name <=9 && placing){
    initialGrid[spot1][spot2] = name;
  }
  else if (Number.isInteger(name) === true && (name > 9 || name < 1) && placing){
    instructions.html("Please choose a number between 1 and 9");
  }
  else if (Number.isInteger(name) === false && placing){
    instructions.html("That is not a number please choose a number between 1 and 9");
    
  }
  else{
    instructions.html("Please select a box to change the number in first then submit");
  }
}

// checking each square against the finished grid 
function answerCorrectChecker(checkClicked){
  let amountOfCorrect = 0;
  let timesChecked = 0;
  
  for (let y = 0; y < initialGrid.length; y++){
    for (let x = 0; x < initialGrid[y].length; x++){
      gridNumCheck = initialGrid[y][x];
      finalGridNumCheck = finalGrid[y][x];
      
     
      // checking the current grid number against the final grid number and if it is fully correct it finishes the game after pressing the check button
      if (gridNumCheck === finalGridNumCheck && amountOfCorrect <= 80){
        if(amountOfCorrect >= 80){
          instructions.html("You Win");
          instructions.position(width/2, height/2);
          level = 2;
          checkButton.position(width * width, height * height);
          button.remove();
          input.remove();
        }
        else{
          amountOfCorrect ++;
          timesChecked++;
        }
      }
      // if the check button is pressed it marks the inccorect grid in red
      else if (checkClicked && gridNumCheck !== finalGridNumCheck){
        fill("red");
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
        fill("black");
        text(grid[y][x], x * cellSize + cellSize/2, y * cellSize + cellSize/2);
      }
      // resets the square that is checked to 0 and starts again
      else if (timesChecked === 81){
        amountOfCorrect = 0;
        timesChecked = 0;
      }
        
      
    }
  }
}

// allows you to press enter key to enter number
function keyPressed() {
  // enter key to enter a number into the grid after putting a allowed number into the text box
  if (keyCode === 13) {
    if (level !== 2){
      displayText();
    }
  }
  // e key to start the game
  if (keyCode === 69){
    if (level === 0){
      instructions0.remove();
      level = 1;
    }
  }
}



function mousePressed(){
  // selects the grid that will have the number changed
  if (mouseX <= width && mouseY <= height){
    let cellx = Math.floor(mouseX/cellSize);
    let celly = Math.floor(mouseY/cellSize);
    spot1 = celly;
    spot2 = cellx;
    placing = true;
  }
}



function displayGrid() {
  // displays the grid and the number in it
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
  // draws the lines seperating the 3x3 squares
  strokeWeight(5);
  for(let location = 0; location <= 9; location += 3){
    // horizontal lines
    line(0, location * cellSize, width, location* cellSize);
    // vertical lines
    line(location * cellSize, 0, location * cellSize, height);
  }
}