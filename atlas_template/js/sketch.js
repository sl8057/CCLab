let butterfly = ['red','orange', 'blue', 'green', 'white'];
let positionX;
let positionY;
let newButterfly = false;
function setup() {
    let canvas = createCanvas(400, 400);
    canvas.id("p5canvas");
    canvas.parent("p5-canvas-container");
}

function draw() {
  background(0);
  butterFlies();
  moon();  
  flower();
  
}


function moon() {
  fill(230,230,180);
  stroke('black')
  rotate(cos(frameCount));
  circle(200, 400, 300)
  // arc(200, 400, width, height, 180, PI + QUARTER_PI, OPEN);
}


function flower() {

  circle(200, 180, 30);
  stroke('black')
  strokeWeight(5);
  angleMode(DEGREES);

  let a = 360 / 5;
  for (let i = 0; i < 5; i++) {
    if (mouseIsPressed) {
      drawingContext.shadowBlur = 12;
      drawingContext.shadowColor = color(255, 165, 0);;
      fill(random(butterfly));
      circle(200, 180, 30 * sin(frameCount));
    }
      push();
      translate(200, 180);
      rotate(a * i);
      ellipse(40, 0, 30 * cos(frameCount), 10 * cos(frameCount));
      pop();
    }
  line(200, 200, 200, 300);
}


function butterFlies() {
  positionX = mouseX;
  positionY = mouseY;
  
  ellipse(positionX-40, positionY-7, 40, 35);
  ellipse(positionX-40, positionY+17, 40, 35);
  ellipse(positionX+40, positionY-7, 40, 35);
  ellipse(positionX+40, positionY+17, 40, 35);
  ellipse(positionX, positionY, 50, 100);
  line(positionX+8, positionY-47, positionX+30, positionY-65)
  line(positionX-8, positionY-47, positionX-30, positionY-65)
  
  let distance = dist(positionX, positionY, 200, 180);
  if (distance < 30) {
    noStroke();
    fill(0);
    
    ellipse(positionX-40, positionY-7, 40, 35);
    ellipse(positionX-40, positionY+17, 40, 35);
    ellipse(positionX+40, positionY-7, 40, 35);
    ellipse(positionX+40, positionY+17, 40, 35);
    ellipse(positionX, positionY, 50, 100);
    line(positionX+8, positionY-47, positionX+30, positionY-65)
    line(positionX-8, positionY-47, positionX-30, positionY-65)
  } else{
    fill(random(butterfly));
  }
  
    if (mouseIsPressed) {
    noStroke()
    ellipse(positionX-40, positionY-7, 40, 35);
    ellipse(positionX-40, positionY+17, 40, 35);
    ellipse(positionX+40, positionY-7, 40, 35);
    ellipse(positionX+40, positionY+17, 40, 35);
    ellipse(positionX, positionY, 50, 100);
    line(positionX+8, positionY-47, positionX+30, positionY-65)
    line(positionX-8, positionY-47, positionX-30, positionY-65)
    if (!newButterfly) {
      fill(random(butterfly));
      newButterfly = true;
    }
    }
  }

