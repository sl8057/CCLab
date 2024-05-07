let input;
function setup() {
  let canvas = createCanvas(400, 130);
  canvas.parent("canvasContainer");
  input = createInput("");
  input.position(880, 580);
  input.input(type);

  textWrap(WORD);
}

function draw(){
  background(220);
  text("When tigers used to smoke cigarettes", 90, 30);
  describe("Type the corresponding meaning for the given expression!", LABEL);
  
  correct();
}

function type(){
  let ans = input.value();
}


function correct(){
  let ans = input.value();
  if (ans === "Once upon a time" || ans === "once upon a time"){
    fill("blue");
    text("Correct!", 280, 60);
    text("*Hint: The song tells the stranger's story. Look at the 9th line of the lyrics.", 100, 80, 230);
  }else{
    fill("red");
    text("Incorrect!", 280, 60);
  }
}

function keyPressed(){
  if (keyCode === ENTER){
    redraw();
  }
}


