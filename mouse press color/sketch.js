function setup() {
  createCanvas(800,800);

}

function draw() {

 if(mouseIsPressed){
  fill(255,5,5);
 } else {
  fill(2,255,3);
 }

 ellipse(mouseX,mouseY,50,50);
}