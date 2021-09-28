// Grid Neighbours

let gridDimensions = 10;
let grid;
let cellsize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandomArray(gridDimensions);
}

function draw() {
  background(220);
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