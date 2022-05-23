var backgroundImg;
var superhero, superheroImage, superheroShoot;
var alienImage, alienRun, alienShoot, alien, alienGroup;
var spaceship, spaceshipImage;
var invisibleGround;
function setup() {
  createCanvas(windowWidth, windowHeight);
 superhero = createSprite(width-1600, height-200);
 superhero.addImage(superheroImage);
 superhero.scale = 0.5;

 alienGroup = new Group();

 spaceship = createSprite(width, height-450);
 spaceship.addImage(spaceshipImage);

 
}

function draw() {
  background(backgroundImg);

    spawnSprites();
  drawSprites();
}
function preload(){
 backgroundImg = loadImage("images/backgroundImage.png")
 superheroImage = loadImage("images/superheroImage.png");
 superheroShoot = loadAnimation("images/superheroShoot.png");
 alienRun = loadAnimation("images/alien_green/ALIEN1.png" , "images/alien_green/ALIEN2.png");
 alienShoot = loadAnimation("images/alien_green/ALIENSHOOT.png");
 alienImage = loadAnimation("images/alien_green/ALIEN1.png");
 alienRun = loadAnimation("images/alien_green/ALIEN1.png", "images/alien_green/ALIEN2.png");
 spaceshipImage = loadImage("images/spaceship.png");

 
}
function spawnSprites(){
  if(frameCount % 150 === 0){
    alien = createSprite(width, height-200);
    alien.addAnimation("alien_image", alienImage);
   alien.addAnimation("alien_run", alienRun);
    alien.scale = 0.5
    alien.debug = true;
   
    alienGroup.add(alien);
    alien.setCollider("rectangle", 0,0,alien.width, alien.height)
   
    for(var i = 0; i < alienGroup.length; i++){
alienGroup.get(i).depth= invisibleGround.depth;

    
alienGroup.get(i).velocityX = -5;
  alienGroup.get(i).velocityY = 0;
  alienGroup.get(i).velocityX = -3;
  alienGroup.get(i).changeAnimation("alien_run", alienRun);
}

    }
  }

