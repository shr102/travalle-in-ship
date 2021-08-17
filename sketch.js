var seaImg, sea;
var ship, shipImg;

function preload(){
 seaImg = loadImage("sea.png");
 shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(600,400);
  sea = createSprite(600,400);
  sea.addImage( seaImg);
  sea.velocityX = -1

  ship = createSprite(18, 200, 50, 50);
  ship.scale = 0.5;
  ship.addAnimation(shipImg);
}

function draw() {
  background("blue");
  
}