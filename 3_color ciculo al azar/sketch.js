function setup() {
  createCanvas(400, 400);
  background(250,250,100);
}

function draw() {
 fill(random(0,255),random(0,255),random(0,255));
  ellipse(mouseX,mouseY,50,50);
}

function mousePressed() {
  background(250,250,100);
}