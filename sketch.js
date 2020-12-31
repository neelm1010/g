function setup() {
  createCanvas(800,400);
 var hrAngle, mnAngle, scAngle; 

  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  hr = hour();
  mn = minute();
  sc = seconds();
  scAngle = map(sc,0,60,0,360)
  hrAngle = map(hr,0,12,0,360)
  mnAngle = map(mn,0,60,0,360)
 
  push();
  rotate(scAngle);
  stroke(255,0,0)
  strokeWeight(7);
  line(0,0,100,0);
pop();
  push();
  rotate(hrAngle);
  stroke(400,0,0)
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
  rotate(mnAngle);
  stroke(600,0,0)
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  drawSprites();
}
