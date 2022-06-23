var path,Sonic,cash,diamonds,jwellery,Eggman;
var pathImg,SonicImg,cashImg,diamondsImg,jwelleryImg,EggmanImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,EggmanGroup;

//Esttados de Jogo
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  SonicImg = loadAnimation("SuperSonic.gif");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  EggmanImg = loadAnimation("Eggman.gif");
  endImg =loadAnimation("fimdeJogo.png");
}

function setup(){
  
//crie uma tela

// createCanvas(window,window);
 createCanvas(windowWidth,windowHeight);
// createCanvas(width,height);
// createCanvas(200,200);

//plano de fundo se movendo

path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;


//crie o menino correndo
Sonic = createSprite(width/2,height-20,20,20);
Sonic.addAnimation("soinc",SonicImg);
Sonic.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
EggmanGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  Sonic.x = World.mouseX;
  
  edges= createEdgeSprites();
  Sonic.collide(edges);
  
  
   if(path.y > height ){
     path.y = height/2;
   }
  
    createCash();
    createDiamonds();
    createJwellery();
    createEggman();

    if (cashG.isTouching(Sonic)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection + 50;
    }
    else if (diamondsG.isTouching(Sonic)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection + 100;
      
    }else if(jwelleryG.isTouching(Sonic)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(EggmanGroup.isTouching(Sonic)) {
        gameState=END;
        
        Sonic.addAnimation("soinc",SonicImg);
        Sonic.x=width/2;
        Sonic.y=height/2;
        Sonic.scale=0.6;
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        EggmanGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        EggmanGroup.setVelocityYEach(0);
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Tesouro: "+ treasureCollection,width-150,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 5;
  cash.lifetime = 200;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, width-50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 5;
  diamonds.lifetime = 200;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, width-50),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 5;
  jwellery.lifetime = 200;
  jwelleryG.add(jwellery);
  }
}

function createEggman(){
  if (World.frameCount % 530 == 0) {
  var Eggman = createSprite(Math.round(random(50, width-50),40, 10, 10));
  Eggman.addImage(EggmanImg);
  Eggman.scale=0.1;
  Eggman.velocityY = 4;
  Eggman.lifetime = 200;
  EggmanGroup.add(Eggman);
  }
}