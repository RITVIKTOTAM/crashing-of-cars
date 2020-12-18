var ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,paddle1,paddle2,paddle3,ball9,ball10,ball11;


function setup() {
  createCanvas(300,200);
  ball1 = createSprite(30,40,10,10);
  ball1.velocityX = 1;
  ball2 = createSprite(30,80,10,10);
  ball2.velocityX = 2;
  ball3 = createSprite(30,120,10,10);
  ball3.velocityX = 3;
  ball4 = createSprite(30,160,10,10);
  ball4.velocityX = 4;
  ball5 = createSprite(260,40,10,20);
  ball6 = createSprite(260,80,10,20);
  ball7 = createSprite(260,120,10,20)
  ball8 = createSprite(260,160,10,20);
  paddle1 = createSprite(150,60,300,5);
  paddle2 = createSprite(150,100,300,5);
  paddle3 = createSprite(150,140,300,5);
  ball9 = createSprite(50,0,10,10);
  ball9.velocityY = 2;
  ball10 = createSprite(150,0,10,10);
  ball10.velocityY = 2;
  ball11 = createSprite(250,0,10,10);
  ball11.velocityY = 2;

  ball1.shapeColor = "white";
  ball2.shapeColor = "white";
  ball3.shapeColor = "white";
  ball4.shapeColor = "white";
  ball5.shapeColor = "blue";
  ball6.shapeColor = "blue";
  ball7.shapeColor = "blue";
  ball8.shapeColor = "blue";
  paddle1.shapeColor = "white";
  paddle2.shapeColor = "white";
  paddle3.shapeColor = "white";
  ball9.shapeColor = "green";
  ball10.shapeColor = "green";
  ball11.shapeColor = "green";
}

function draw() {
  
  background("black"); 
  
  if(ball1.collide(ball5)){
    ball1.shapeColor = "red";
    ball1.velocityX = 0;
    
  }
  
  if(ball1.collide(ball9)){
    ball1.shapeColor = "red";
    ball1.velocityX = 0;
    ball9.velocityY = 0;
    ball1.velocityY = 0;
  }
  
  if(ball1.collide(ball10)){
    ball1.shapeColor = "red";
    ball1.velocityX = 0;
    ball10.velocityY = 0;
    ball1.velocityY = 0;
  }
  
  if(ball1.collide(ball11)){
    ball1.shapeColor = "red";
    ball1.velocityX = 0;
    ball11.velocityY = 0;
    ball1.velocityY = 0;
  }

  if(ball2.collide(ball6)  ){
    ball2.shapeColor = "red";
    ball2.velocityX = 0;
    
  }

  if(ball2.collide(ball9)  ){
    ball2.shapeColor = "red";
    ball2.velocityX = 0;
    ball9.velocityY = 0;
    ball2.velocityY = 0;
  }

  if(ball2.collide(ball10)  ){
    ball2.shapeColor = "red";
    ball2.velocityX = 0;
    ball10.velocityY = 0;
    ball2.velocityY = 0;
  }

  if(ball2.collide(ball11)  ){
    ball2.shapeColor = "red";
    ball2.velocityX = 0;
    ball11.velocityY = 0;
    ball2.velocityY = 0;
  }

  if(ball3.collide(ball7) ){
    ball3.shapeColor = "red";
    ball3.velocityX = 0;
  }

  if(ball3.collide(ball9) ){
    ball3.shapeColor = "red";
    ball3.velocityX = 0;
    ball9.velocityY = 0;
    ball3.velocityY = 0;
  }

  if(ball3.collide(ball10) ){
    ball3.shapeColor = "red";
    ball3.velocityX = 0;
    ball10.velocityY = 0;
    ball3.velocityY = 0;
  }

  if(ball3.collide(ball11) ){
    ball3.shapeColor = "red";
    ball3.velocityX = 0;
    ball11.velocityY= 0;
    ball3.velocityY = 0;
  }

  if(ball4.collide(ball8)  ){
    ball4.shapeColor = "red";
    ball4.velocityX = 0;
  }
  
  if(ball4.collide(ball9)  ){
    ball4.shapeColor = "red";
    ball4.velocityX = 0;
    ball9.velocityY = 0;
    ball4.velocityY = 0;
  }

  if(ball4.collide(ball10)  ){
    ball4.shapeColor = "red";
    ball4.velocityX = 0;
    ball10.velocityY = 0;
    ball4.velocityY = 0;
  }

  if(ball4.collide(ball11)  ){
    ball4.shapeColor = "red";
    ball4.velocityX = 0;
    ball11.velocityY = 0;
    ball4.velocityY = 0;
  }
  drawSprites();
}
