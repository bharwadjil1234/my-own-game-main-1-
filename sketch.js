var bg, bgImage;
var zombie, zombieImage;
var brokencar, brokenImage;
function preload(){
    bgImage = loadImage("background_image.jpg");
    zombieImage = loadImage("zombie image (1).png");
    brokencarImage = loadImage("broken car.png");
}

function setup(){
    var canvas = createCanvas(600,400);
    bg = createSprite(200,300,600,400);
    bg.addImage(bgImage);
    bg.x = bg.width/2;
    bg.velocityX = -6;
    bg.scale = 2;
    zombie = createSprite(300,300,30,50);
    zombie.addImage(zombieImage);
    brokencar = createSprite(300,300,30,50);
    brokencar.addImage(brokencarImage);
}

function draw(){
    if(bg.x<0){
     bg.x = bg.width/2;
     
    }
    drawSprites();
}