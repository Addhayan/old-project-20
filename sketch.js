var cat1,cat1img;
var cat,catwalking;
var cat4,cat4img;

var mouse1,mouse1img;
var mouse,mousedancing;
var mouse4,mouse4img;

var garden;

function preload() {
    //loading the images
    garden = loadImage("garden.png");

    cat1img = loadImage("cat1.png");
    catwalking = loadAnimation("cat2.png","cat3.png");
    cat4img = loadImage("cat4.png");

    mouse1img = loadImage("mouse1.png");
    mousedancing = loadAnimation("mouse2.png","mouse3.png");
    mouse4img = loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    cat1 = createSprite(700,900,50,50);
    cat1.addImage(cat1img);
    
    cat = createSprite(700,900,50,50);

    cat4 = createSprite(500,900,50,50);
    cat4.addAnimation(cat4img);

    mouse1 = createSprite(500,900,50,50);
    mouse1 = addImage(mouse1img);

    mouse = createSprite(500,900,50,50);

    mouse4 = createSprite(500,900,50,50);
    mouse4 = addImage(mouse4img);

}

function draw() {

    background("garden");
    
    if(cat.x - mouse.x < cat.width/2 + mouse.width/2 &&
        mouse.x - cat.x < mouse.width/2 + cat.width/2){
            cat.velocityX = cat.velocityX(-1);
            mouse.velocityX = mouse.velocityX(-1);
        }

        if(cat.y - mouse.y < cat.height/2 + mouse.height/2 &&
            mouse.y - cat.y < mouse.height/2 + cat.height/2){
                cat.velocityY = cat.velocityY(-1);
                mouse.velocityY = mouse.velocityY(-1);
            }

    drawSprites();
}


function keyPressed(){

  if(keyDpwn(LEFT_ARROW)){
      mouse.addAnimation("mouseteasing",mousedancing);
      mouse.changeAnimation("mouseteasing");
      mouse.frameDelay = 25;
      cat.addAnimation("catrunning",catwalking);
      cat.changeAnimation("catrunning");
      cat.velocityX = -2
  }

  if(keyDpwn(RIGHT_ARROW)){
    mouse.addAnimation("mouseteasing",mousedancing);
    mouse.changeAnimation("mouseteasing");
    mouse.frameDelay = 25;
    cat.addAnimation("catrunning",catwalking);
    cat.changeAnimation("catrunning");
    cat.velocityX = -2
}


}
