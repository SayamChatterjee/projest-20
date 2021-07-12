var bg ;
var cat,mouse;
var cati,mousei;
var cat2,mouse2;
var cat3,mouse3;

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    cati =loadImage("images/cat1.png");
    mousei =loadImage("images/mouse1.png");

    cat1=loadAnimation("images/cat2.png","images/cat3.png");
    cat2=loadAnimation("images/cat4.png");

    mouse1=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse2=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600)
    cat.addImage(cati);
    cat.scale=0.2;
    mouse=createSprite(200,600);
    mouse.addImage(mousei);
    mouse.scale=0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
       if(cat.x-mouse.x<(cat.width-mouse.width)/2){
           cat.velocityX=0;
           cat.addAnimation("catlastimage", cat2);
       cat.X=300;
       cat.scale=0.2
       cat.changeAnimation("catlastimage");

        mouse.addAnimation("mouselastimage",mouse2);
        mouse.scale=0.15;
        mouse.changeAnimation("mouselastimage");
   }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if(keyCode===LEFT_ARROW){
        cat.velocityX=-5;
    cat.addAnimation("catrunning",cat1);
    cat.changeAnimation("catrunning");

    mouse.addAnimation("mouseteasing",mouse1);
    mouse.changeAnimation("mouseteasing");


    }

}
