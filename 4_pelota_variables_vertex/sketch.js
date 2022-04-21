var x=50;
var y=325;
var vx=1;
var vy=0;

function setup() {
  createCanvas(1000, 400);
}

function draw() {
  background(220);


   beginShape(); //inicializador
  fill(0,250,0);
  vertex(0,350);
  vertex(200,350);
  vertex(300,200);
  vertex(375,200);
  vertex(450,75);
  vertex(550,75);
  vertex(675,350);
  vertex(1000,350);
  vertex(1000,400);
  vertex(0,400);
  endShape(); //finalizador



  fill(255,0,0);
  circle(x,y,50);

  x=x+vx; //Ecuacion de movimiento rectilineo para x
  y=y+vy; //Ecuacion de movimiento rectilineo para y
  
  if(x>=190){
    vx=0.7;
    vy=-1;
    }
  
    if(x>=290){
    vx=1;
    vy=0;
    }

    if(x>=365){
    vx=0.7;
    vy=-1;
    }
  
   if(x>=455){
    vx=1;
    vy=0;
    }
    
    if(x>=562){
    vx=1.9;
    vy=5;
    }
  
  if(y>=335){
    vx=2;
    vy=0;
    }
  
  if(x>=1050){
    x=0;
    y=325;
    }
}