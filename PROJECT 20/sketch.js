var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  car=createSprite(50,200,50,50);
  
  
  speed=random(20,35);
  weight=random(400,1500);

wall=createSprite(730,200,60,height/2)
wall.shapeColor=color(80,80,80);


car.velocityX=speed;


}

function draw() {
  
  background(255,255,255);  
  
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
car.velocityX=0;
var deformation =0.5* weight*speed*speed/22509
console.log(deformation);
if (deformation<5)
{

car.shapeColor=color(255,0,0);
}

if(deformation<10 && deformation>5)
{

car.shapeColor=color(230,0,0);
}
  if(deformation>10)
{

car.shapeColor=color(0,255,0);

}
}
  drawSprites();
}

