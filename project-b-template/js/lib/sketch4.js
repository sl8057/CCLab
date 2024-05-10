let img1, img2, img3; 
let button1, button2;
let t = 0;
function preload() {
  img1 = loadImage("js/lib/image1.jpg");
  img2 = loadImage("js/lib/image2.jpg")
  img3 = loadImage("js/lib/image3.jpg");
}

function setup() {  
  createCanvas(1400, 1000);
  background(200);
  textWrap(WORD);

  button1 = createButton('Follow him');
  button2 = createButton("Don't follow him");

  button1.mousePressed(run);
  button2.mousePressed(death);
}

function draw() {
  if (frameCount%60==0){
    t++;
  }
  
  story();
}

function death(){
  image(img2, 300, 0, 800, 800);
  text("...Lucky you. Don't climb this mountain at this late night ever again.", 400, 600, 600);
}

function run(){
  image(img3, 300, 0, 800, 800);
  text("Don't worry. Once you bring another person to replace you, you will be free like me!", 400, 600, 600);
}


function story(){
  if (t >= 0 && t < 5) {
    image(img1, 300, 0, 800, 800);
    textSize(20);
    fill("white");
    text("Did you enjoy my singing? It's getting darker. Let's hurry up.", 400, 600, 600);
  }else if (t >= 5 && t < 10) {
    button1.position(0, 100);
    button2.position(0, 150);
  
    button1.mousePressed(run);
    button2.mousePressed(death);
  }
}
