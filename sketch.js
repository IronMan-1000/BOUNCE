var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);

  movingRect.shapeColor= "blue";
  fixedRect.shapeColor= "blue";

  movingRect.velocityX = 5;
  fixedRect.velocityX = -5;
  
}

function draw() {
  background(255,255,255); 

  console.log(movingRect.x - fixedRect.x);
  
  bounceOff(movingRect, fixedRect);
  drawSprites();
}

