var movingRect,fixedRect,gameobject1,gameobject2;




function setup() {
  createCanvas(800,400);
 fixedRect= createSprite(400, 100, 50, 50);
  movingRect=createSprite(400,300,60,80);
//fixedRect.velocityY=2
//movingRect.velocityY=-2
gameobject1=createSprite(180,100,50,60)
gameobject2=createSprite(400,100,30,70)
gameobject1.velocityX=4
gameobject2.velocityX=-4
}

function draw() {
  background(0);  
  drawSprites();
  movingRect.shapeColor="yellow"
  fixedRect.shapeColor="red"
  gameobject1.shapeColor="blue"
  gameobject2.shapeColor="green"
  bouncingoff(gameobject2,gameobject1)
  
  }

 