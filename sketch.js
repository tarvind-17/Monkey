

var monkey , monkey_running
var banana ,bananaImage,bananaGroup, obstacle, obstacleImage,obstacleGroup
var FoodGroup, obstacleGroup
var score, ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,600);
  monkey=createSprite(70,300);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(300,360,1200,8);
  ground.shapeColor="green";

  bananaGroup=new Group();
  obstacleGroup=new Group();

}


function draw() {
background("white");
  monkey.collide(ground);
 if(keyDown("space")){
   monkey.velocityY=-4;
 }
  monkey.velocityY+=0.3;
  
  makeObstacles();
  makeBanana();
  score=Math.round(frameCount*5/100);
  fill("black");
  textSize=15;
  text("survivalTime:"+score,100,50);
  drawSprites();
}

function makeBanana(){
  if(frameCount%100===0){
  banana=createSprite(610,120);
  banana.addImage(bananaImage);
  banana.scale=0.09;
  banana.velocityX=-4;
  banana.lifetime=620;
    banana.y=Math.round(random(100,190));
    bananaGroup.add(banana);
    
  }
}
function makeObstacles(){
  if(frameCount%400===0){
  obstacle=createSprite(610,315);
 obstacle.addImage(obstaceImage);
  obstacle.scale=0.2;
    obstacle.lifetime=610;
    obstacle.velocityX=-4;
    obstacleGroup.add(obstacle);
  }
}




