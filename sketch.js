var mr,fr;

function setup() {
  createCanvas(800,400);

 mr = createSprite(400, 200, 30, 80);
 mr.shapeColor = "green";
 mr.debug = true;
 mr.velocityX=-2;

 fr = createSprite(100, 200, 80, 30);
 fr.debug = true;
 fr.shapeColor = "green";
 fr.velocityX=2;
}

function draw() {
  background(255,255,255); 
  mr.x = mouseX
  mr.y = mouseY

  if (mr.x - fr.x < mr.width/2 + fr.width/2 && fr.x - mr.x < mr.width/2 + fr.width/2 && mr.y - fr.y < mr.height/2 + fr.height/2 && fr.y - mr.y < mr.height/2 + fr.height/2 ){
    mr.shapeColor = "red"; 
    fr.shapeColor = "red";
  }
  else{
    mr.shapeColor = "green"; 
    fr.shapeColor = "green";
  }
  if (mr.x - fr.x < mr.width/2 + fr.width/2 && fr.x - mr.x < mr.width/2 + fr.width/2){
    mr.velocityX = mr.velocityX *(-1);
    fr.velocityX = fr.velocityX *(-1);
  }

  drawSprites();
}
