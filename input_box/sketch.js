let input, button, greeting;
let inputedNum;

function setup() {
  // create canvas
  createCanvas(400, 400);
  buttonMake();

}

function displayText(){
  let name = input.value();
  input.value("");
  name = int(name);
  if (Number.isInteger(name) === true){
    console.log(name);
  }
  else{
    console.log("that is not a number");
  }
}

function buttonMake(){
  input = createInput();
  input.size(10,10);
  input.position(width/4+20, height/4+10);
  button = createButton("");
  button.size(10,16);
  button.position(width/4+5, height/4+10);
  button.mousePressed(displayText);

  greeting = createElement("h6","Insert Number");
  greeting.position(width/4, height/4);

  textAlign(CENTER);
  textSize(10);
}