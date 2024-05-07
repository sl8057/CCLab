let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16; 
let button1, button2, button3;
let t = 0;
function preload() {
  img1 = loadImage("js/lib/1.jpg");
  img2 = loadImage("js/lib/2.jpg")
  img3 = loadImage("js/lib/3.jpg");
  img4 = loadImage("js/lib/4.jpg")
  img5 = loadImage("js/lib/5.jpg")
  img6 = loadImage("js/lib/6.jpg")
  img7 = loadImage("js/lib/7.png");
  img8 = loadImage("js/lib/8.png");
  img9 = loadImage("js/lib/9.jpg");
  img10 = loadImage("js/lib/10.jpg");
  img11 = loadImage("js/lib/11.jpg");
  img12 = loadImage("js/lib/12.jpg");
  img13 = loadImage("js/lib/13.jpg");
  img14 = loadImage("js/lib/14.jpg");
  img15 = loadImage("js/lib/15.jpg");
  img16 = loadImage("js/lib/16.jpg");
}

function setup() {  
  createCanvas(1400, 1000);
  background(200);
  textWrap(WORD);

  button1 = createButton('arms');
  button2 = createButton('legs');
  button3 = createButton('torso');

  button1.mousePressed(arms);
  button2.mousePressed(legs);
  button3.mousePressed(torso);
}

function draw() {
  if (frameCount%60==0){
    t++;
  }
  
  story();
}

function arms(){
  image(img7, 300, 0, 800, 800);
  t = 32;
}
function legs(){
  image(img8, 300, 0, 800, 800);
  t = 32;
}

function torso(){
  image(img9, 300, 0, 800, 800);
  t = 32;
}

function story(){
  if (t >= 0 && t < 2) {
    image(img1, 300, 0, 800, 800);
    textSize(20);
    fill("white");
    text("Where am I? Damn, it's all foggy. I must lost my way.", 460, 600, 600);
  }else if (t >= 2 && t < 4) {
    image(img2, 300, 0, 800, 800);
    textSize(20);
    text("Is that a person? I should ask for help.", 550, 600, 600);
  }else if (t >= 4 && t < 6) {
    image(img3, 300, 0, 800, 800);
    textSize(20);
    text("You must be lost. Many people get lost here. Follow me.", 490, 650, 600);
  }else if (t >= 6 && t < 8) {
    image(img4, 300, 0, 800, 800);
    textSize(20);
    text("Have you heard of the story about the lady who was killed by a tiger on this mountain?", 470, 600, 500);
  }else if (t >= 8 && t < 10) {
    image(img5, 300, 0, 800, 800);
    textSize(20);
    text("The woman was coming from the neighboring town late at night. Unfortunately, she encountered a tiger in the middle of the mountain", 420, 600, 600);
  }else if (t >= 10 && t < 12) {
    image(img6, 300, 0, 800, 800);
    textSize(20);
    text("What would you give me instead?", 530, 600, 600);
  }else if (t >= 12 && t < 34) {
    button1.position(0, 100);
    button2.position(0, 150);
    button3.position(0, 200);
  
    button1.mousePressed(arms);
    button2.mousePressed(legs);
    button3.mousePressed(torso);
  }else if (t >= 34 && t <36) {
    image(img10, 300, 0, 800, 800);
    textSize(20); 
    text("However, the tiger showed up again on the next uphill climb.", 450, 600, 600);
  }else if (t >= 36 && t < 38) {
    image(img11, 300, 0, 800, 800);
    textSize(20);
    text("Everytime she climbs an uphill, the tiger asked for the different part of her body....untill only her head was left", 400, 600, 600);
  }else if (t >= 38 && t < 40) {
    image(img12, 300, 0, 800, 800);
    textSize(20);
    fill("black");
    text("Do you know how she returned home...?", 530, 650, 600);
  }else if (t >= 40 && t < 42) {
    image(img13, 300, 0, 800, 800);
    textSize(20);
    fill("white");
    text("Her head rolled down the hill to get back home!", 500, 600, 600);
  }else if (t >= 42 && t < 44) {
    image(img14, 300, 0, 800, 800);
    textSize(20);
    text("Isn't it funny? Haha, but you should know it's just a metaphor. The lady was already dead.", 430, 600, 550);
  }else if (t >= 44 && t < 46) {
    image(img15, 300, 0, 800, 800);
    textSize(20);
    text("The thing is the tiger followed the lady and killed her babies too.", 430, 600, 600);
  }else if (t >= 46 && t < 48) {
    image(img16, 300, 0, 800, 800);
    textSize(20);
    text("She became the tiger ghost! You don't know what a tiger ghost is? Let me sing the song, 'Tiger Ghost' for you.", 400, 600, 600);
  }else if (t >= 49) {
    background(0);
  }
}