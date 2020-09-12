
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage,randY;
var FoodGroup, obstacleGroup;
var score=0;
var ground;

function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  ground=createSprite(200,370,400,10);
  monkey=createSprite(110,324);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.15;
  
  
  
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background(255);
  
  monkey.collide(ground);
  //monkey.debug=true;
  
  if(keyDown("space") && monkey.y >=318) {
    monkey.velocityY=-16   
   
  }

  
  if(foodGroup.isTouching(monkey)){
    foodGroup.destroyEach();
  }
  
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.destroyEach();
    score=0;
  }
  
  
  
  score = score + Math.round(getFrameRate()/60);
  text("Survival Time: "+score, 100,30);
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  makeHappy();
  rocks();
  
  drawSprites();
}



function makeHappy(){
  if(frameCount % 80 === 0){
     randY=Math.round(random(120,200));
     banana=createSprite(400,randY);
     banana.addImage("bananaImage",bananaImage);
     banana.velocityX=-4;
     banana.scale=0.2
     banana.lifetime=500;
     foodGroup.add(banana);
  }

}


function rocks(){

  if(frameCount % 300 === 0){

  obstacle=createSprite(410,324);
  obstacle.addImage("obstacleImage",obstacleImage);
  obstacle.scale=0.2;
  obstacle.lifetime=500;
  obstacle.velocityX=-5;
  obstacleGroup.add(obstacle);


  }
}