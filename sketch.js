var bgImg;
var tom;
var jerry;
var catimg,mouseImg1, mouseImg2,catImg3,mouseImg3,catimg2
function preload() {
    //load the images here(
    bgImg = loadImage("garden.png")
    catimg = loadAnimation("tomOne.png")
    mouseImg1 = loadAnimation("jerryOne.png")
   catimg2 = loadAnimation("tomTwo.png,tomThree.png")
   mouseImg2 = loadAnimation("jerryTwo.png,jerryThree.png")
   catImg3 = loadAnimation("tomFour(1).png")
   mouseImg3 = loadAnimation("jerryFour.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   tom = createSprite(870,600 )
   tom.addAnimation("TomDying", catimg)
  jerry = createSprite(720,100)
  jerry.addAnimation("mouseMurdered", mouseImg1)
}

function draw() {
    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
   if(tom.x-jerry.x < (tom.width-jerry.width/2)){
       tom.velocityX = 0
       tom.addAnimation("tomRunning",catimg2)
       tom.x = 300
       tom.changeAnimation("tomRunning")
       jerry.addAnimation("jerryKilled", mouseImg1)
       jerry.changeAnimation("jerryKilled")
   }
    drawSprites();
}

function keyPressed(){

    //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {
    tom.velocityX = -100
  tom.addAnimation("tomSnoring", catimg2)
  tom.changeAnimation("tomSnoring")
  
    jerry,addAnimation ("mouseTeasing",mouseImg2);
    jerry.frameDelay = 25;
    jerry.changeAnimation("mouseTeasing")
  
  }
}