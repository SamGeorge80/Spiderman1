const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint


var engine,world;
var spiderman,spidermanImage,spidermanImage2;
var building,buildingImage,buildingImage2;
var portal,portalImage;
var gameover,gameoverImage;
var instruction,instructionImage;
var coin,coinImage;
var wall,wallImage;
var bkground,bkgroundImage,bkgroundImage2;
var btnStart;


function preload(){
   spidermanImage = loadImage("Images/Spiderman.png");
   spidermanImage2 = loadImage("Images/Spiderman2.png");
   buildingImage = loadImage("Images/Building1.png");
   buildingImage2 = loadImage("Images/Building2.png");
   instructionImage = loadImage("Images/InstructionPage.png");
   coinImage = loadImage("Images/coin.jpg");
   wallImage = loadImage("Images/Wall.png");
   bkgroundImage = loadImage("Images/Background1.png");
   bkgroundImage2 = loadImage("Images/Background2.jpg");
   portalImage = loadImage("Images/Portal.jpg");
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    
    Engine.run(engine);
    spiderman = createSprite(200, 300);
    
    //spiderman.scale = 0.15;

    btnStart = createSprite(200,350,100,25);
    btnStart.shapeColor = "red";
    //text("Click here to start", 200,350);

    bkground = createSprite(200,0,400,400);
    //bkground.shapeColor = "white";
    bkground.scale = 6;
    
     
}
function draw() {
    //background("black");
    drawSprites();
    spiderman.addImage("spiderman",spidermanImage);
    textSize(25);
    text("Welcome to the Spiderman Game", 15, 100);
    text("Instructions:",10,140);
    textSize(16);
    text("1. Collect coins to move to the next level",10,160);
    text("2. You can move by pressed the arrow buttons ",10 ,180);
    text("3. Press w,a,d keys to move", 10, 200);
    text("4. Dodge building and obstacles to survive",10,220);
    text("Press SpaceBar to start",10,260);
    
    if (keyDown("space")) {
      bkground.addImage("background",bkgroundImage);
      
    }
    
    
  }

  function keyPressed(){
      if(keyCode === 32){
          
      }
  }