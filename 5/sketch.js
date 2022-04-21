function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  textSize(30);
  fill(0, 155, 255);
  text("Norte", 350, 50);

  textSize(30);
  fill(0, 155, 255);
  text("Sur", 200, 550);

  textSize(30);
  fill(0, 155, 255);
  text("Oeste", 5, 250);

  textSize(30);
  fill(0, 155, 255);
  text("Este", 520, 350);

  //elipses
  fill(0);

  ellipse(300, 300, 420, 420);

  fill(255);

  ellipse(300, 300, 300, 300);
  
    //sudoeste
     fill(255);
  triangle(300, 300, 200, 400, 300, 360);
  
     fill(0);
  triangle(300, 300, 200, 400, 240, 300);
  
   translate(600, 0);
  rotate(PI / 2);
  
   //noroeste
     fill(255);
  triangle(300, 300, 200, 400, 300, 360);
  
     fill(0);
  triangle(300, 300, 200, 400, 240, 300);
  
  translate(600, 0);
  rotate(PI / 2);
  
   //noreste
     fill(255);
  triangle(300, 300, 200, 400, 300, 360);
  
     fill(0);
  triangle(300, 300, 200, 400, 240, 300);
  
  translate(600, 0);
  rotate(PI / 2);
  
   //sudeste
     fill(255);
  triangle(300, 300, 200, 400, 300, 360);
  
     fill(0);
  triangle(300, 300, 200, 400, 240, 300);

  //norte
  fill(255);

  triangle(300, 300, 300, 0, 240, 240);

  fill(0);

  triangle(300, 300, 300, 0, 360, 240);

  //este
  translate(600, 0);
  rotate(PI / 2);

  fill(255);

  triangle(300, 300, 300, 0, 240, 240);

  fill(0);

  triangle(300, 300, 300, 0, 360, 240);

  //sur
  translate(600, 0);
  rotate(PI / 2);
  fill(255);

  triangle(300, 300, 300, 0, 240, 240);

  fill(0);

  triangle(300, 300, 300, 0, 360, 240);

  //oeste
  translate(600, 0);
  rotate(PI / 2);

  fill(255);

  triangle(300, 300, 300, 0, 240, 240);

  fill(0);

  triangle(300, 300, 300, 0, 360, 240);
  
 
  
}
