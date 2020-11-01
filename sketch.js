var bullet;
var wall;
var speed;
var weight;
 var damage;
 var thickness;

function setup() {
  createCanvas(1600,400);
  speed=Math.round(random(221,321));
  weight=Math.round(random(30,52));
  thickness=Math.round(random(22,83))


  bullet=createSprite(50, 200, 30, 10);
  bullet.shapeColor=color("white")
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)

  bullet.velocityX=speed;



}

function draw() {
  background("black");  

  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
if(wall.x-bullet.x < (wall.width+bullet.width)/2) {
 bullet.velocityX=0

if(damage>10){
  wall.shapeColor=color("red");
}

if(damage<10){
  wall.shapeColor=color("green")
}

 
}





  drawSprites();
}