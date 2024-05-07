let bgm;
let amp;
let vol;
let timer = 0;
let i = 0;
let roundNum = 10;

function preload(){
  bgm = loadSound("js/lib/audio.m4a");
  img = loadImage("js/lib/tiger ghost.PNG");
}

function setup() {
  createCanvas(800, 600);
  bgm.play();
  amp = new p5.Amplitude();
}

function draw() {
  background(255, 0, 0);
  if (frameCount%60==0){
    timer++;
  }

  vol = amp.getLevel();
  
  
  graphics();  
}

function graphics(){
  for(let i=50; i<800; i+=50){
    fill('black');
    circle(i, height/2, vol*300);
  }
  if(timer>=20 && timer<30){
    background(0);
    for(let i=50; i<800; i+=50){
      for(let j=0; j<800; j+=50){
        fill('red');
        ellipse(i, j, vol*300);
      }
    }
  }else if(timer>=15 && timer%15==0){
    translate(-180, -250);
    image(img, width/2, height/2);

  }else if(timer>=30 && timer<50){
    for(let i = 0; i <= roundNum; i++){
      let angle = sin(frameCount)*0.01
      let dia = 50*i;
      noFill();
      if( i % 2 == 0){
        stroke('black');
      }
      rotate(angle);
      circle(width/2, height/2, dia);
    }
  }else if(timer>=17 && timer<25){
    stroke('black');
    textSize(20);
    text("Who are you there? Come closer", 90, 100);
  }else if(timer>=34 && timer<36){
    background(0);
    strokeWeight(20);
    stroke('red')
    text("that's it, awesome", 130, height/2);
  }else if(timer>=45 && timer<55){
    for(let i = 0; i <= roundNum; i++){
      let angle = sin(frameCount)*0.01
      let dia = 50*i;
      noFill();
      if( i % 2 == 0){
        stroke('black');
      }
      rotate(angle);
      circle(width/2, height/2, dia);
    }
  }else if(timer>=55 && timer<65){
    for(let i = 0; i <= roundNum; i++){
      let angle = sin(frameCount)*0.01
      let dia = 50*i;
      noFill();
      if( i % 2 == 0){
        stroke('black');
      }
      rotate(angle);
      circle(width/2, height/2, dia);
    }
  }
} 