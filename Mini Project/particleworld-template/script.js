// CCLab Mini Project - 9.R Particle World Template

let NUM_OF_PARTICLES = 100; // Decide the initial number of particles.

let particles = [];

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");

  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(-height, 0));
  }
}

function draw() {
  background(50);

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.applyWind();
    p.stop();
    p.update();
    p.display();
    if(p.y > height){
      particles.splice(i, 1);
    }
    if(particles.length == 0){
      for (let i = 0; i < NUM_OF_PARTICLES; i++) {
        particles[i] = new Particle(random(width), random(-height, 0));
      }
    }
  }
}

class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.xspd = random(0, 0.8);
    this.yspd = random(0.5, 2);
    this.diax = random(10, 15);
    this.diay = random(30, 40);
    this.dir = 1;
    this.rotate = 0;
  }
  // methods (functions): particle's behaviors
  update() {
    this.x += this.xspd;
    this.y += this.yspd;
    this.rotate += 0.01;
  }

  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    rotate(this.rotate);
    noFill();
    stroke(50, 140, 48);
    strokeWeight(2);

    arc(50, 60, 40, 40, 0, PI, OPEN);
    noFill();

    arc(65, 60, 40, 80, PI / 1.5, (3 * PI) / 2, OPEN);
    arc(65, 60, 70, 80, PI, (3 * PI) / 2, OPEN);
    arc(70, 20, 10, 80, PI / 2, PI, OPEN);

    fill(50, 140, 48);

    strokeWeight(1);

    line(46, 75, 69, 62, 44, 68);
    line(44, 68, 32, 60, 46, 75);
    line(45, 60, 65, 44, 45, 51);
    line(45, 60, 33, 44, 45, 51);
    line(49, 36, 43, 30, 47, 40);
    line(49, 36, 65, 31, 47, 40);

    pop();
  }

  applyWind(){
    if(mouseX < width / 2){
      this.dir = 1;
    }else{
      this.dir = -1;
    }
  }

  stop(){
    if(this.y > height - 5){
      this.xspd = 0;
      this.yspd = 0;
    }
  }
}
