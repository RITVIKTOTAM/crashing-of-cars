var sprite1,sprite2;

function setup() {
  createCanvas(800,400);
  sprite1 = createSprite(400, 200, 50, 50);
  sprite2 = createSprite(100,200,50,50);

  sprite1.shapeColor = "green";
  sprite2.shapeColor = "green";

  sprite1.debug = true;
  sprite2.debug = true;
}

function draw() {
  background("black"); 
  sprite1.x = mouseX;
  sprite1.y = mouseY;
  
  if(sprite1.x - sprite2.x <= sprite1.width/2 + sprite2.width/2){

    sprite1.shapeColor = "red";
    sprite2.shapeColor = "red";

  }
  else {sprite1.shapeColor = "green";
  sprite2.shapeColor = "green"; } 
  drawSprites();
}