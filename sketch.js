var hr,min,sec;
var scAngle,minAngle,hourAngle;





function setup() {


 angleMode(DEGREES)


  createCanvas(400,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background('black');  
  
  translate(200,200);
  rotate(-90);
  hr=hour();
 min=minute();
 sec=second();

 angleMode(DEGREES);
 scAngle=map(sec,0,60,0,360);
 minAngle=map(min,0,60,0,360);
 hrAngle=map(hr%12,0,12,0,360);


push();
 rotate(scAngle);
 stroke("orange");
 strokeWeight(10);
 line(0,0,120,0);
pop();

push();
rotate(minAngle);
stroke('blue');
strokeWeight(13);
line(0,0,100,0);
pop();

push();
rotate(hrAngle);
stroke('pink');
strokeWeight(18);
line(0,0,80,0);
pop();


stroke("orange");
strokeWeight(10);
noFill();
arc(0,0,300,300,0,scAngle);

stroke("blue");
arc(0,0,250,250,0,minAngle);

stroke("pink");
arc(0,0,200,200,0,hrAngle);

  drawSprites();
}