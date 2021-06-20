// var for sprites(withouth images)
 var playerName, title, country;

 // var for game states
 var FORM = 1;
 var INTRO = 2;
 var INSTRUCT = 3;
 var INFINITE = 4;
 var PLAYINF = 5;
 var gameState = 1;

 // var for loading iamge
 var startImg, insImg, infImg, levelImg, backImg, playImg,covidImg, coinsImg, bg4Img, boyImg, girlImg, boy1Img, girl1Img, dropImg;
 
 // var for adding Image
 var start, bg1, instruction, infinite, level, back, play, covid, coins, bg4, boy, girl, boy1, girl1, drop; 




 
 





function preload(){
  startImg = loadImage("Images/start.png");
  bg1Img = loadImage("Images/bg2.jpg");
  insImg = loadImage("Images/instructions.png");
  infImg = loadImage("Images/infinite.png");
  levelImg = loadImage("Images/levels.png");
  backImg = loadImage("Images/back.png");
  playImg = loadImage("Images/play.png");
  covidImg = loadImage("Images/covid.png");
  coinsImg= loadImage("Images/coinsss.png");
  bg4Img = loadImage("Images/bg4.jpeg");
  
  boy1Img = loadImage("Images/girl.png");
  dropImg = createSprite("Images/back.png");

}



function setup(){

  createCanvas(windowWidth-5,windowHeight-5);

  // for creating player name input
  playerName = createInput("Name");
  playerName.position(670,235);

  // for creating title
  title = createElement('h1');
  title.html("✨COVID SHOOTER GAME✨");
  title.position(520,65);


  // for creating country input
  country = createInput("Country");
  country.position(670,415);


  // for creating start button
  start = createSprite(756,600);
  start.addImage(startImg);
  start.scale = 0.5;
  
  // to make intruction button
  instruction = createSprite(1270,70);
  instruction.addImage(insImg);
  instruction.scale = 0.8;

  // to make infinite button
  infinite = createSprite(1150,570);
  infinite.addImage(infImg);
  infinite.scale = 0.2;

  // to make level button
  level = createSprite(370,570);
  level.addImage(levelImg);
  level.scale = 0.2

  // to make back button
  back = createSprite(80,80);
  back.addImage(backImg);
  back.scale = 0.5;

  // to set baclground
  bg4 = createSprite(0,0);
  bg4.addImage(bg4Img);
  bg4.scale = 8;

  // to create play button
  play = createSprite(740,540);
  play.addImage(playImg);
  play.scale = 0.3;

  
  


  }

function draw(){

  // for setting background
  background(bg1Img);


  // WHEN GAME STATE IS FORM
  if(gameState === 1){

    stroke("black");
    fill("black");
    textSize(20);
    text("Enter Your Name Here 👇👇",640,200);
    text("Enter Your Country Name Here 👇👇",610,380);

    // to hide button
    instruction.visible = false;
    infinite.visible = false;
    level.visible = false;
    back.visible = false;
    play.visible = false;
    bg4.visible = false;
   

    

  }


  // gameState changing from FORM to INTRO
  if(mousePressedOver(start) && gameState === 1){
    gameState = 2;
  }

  // gameState changong from INTRO to INSTRUCT
  if(mousePressedOver(instruction) && gameState === 2){
    gameState = 3;
  }

  // gameState changong back from INSTRUCT to INTRO
  if(mousePressedOver(back) && gameState === 3){
    gameState = 2;
  }

  // gameState changing from INTRO to INFINITE
  if(mousePressedOver(infinite) && gameState === 2){
    gameState = 4;
  }

  // gameState changing from INFINITE to PLAYINF
  if(mousePressedOver(play) && gameState === 4){
    gameState = 5;
    
  }
  



  drawSprites();


  // WHEN GAME STATE IS INTRO
  if(gameState === 2){

    // to hide form options
    hiding();

    // making start button invisible
    start.visible = false;

    // to tell the player story of game
    
    stroke("black");
    fill("black");
    textSize(20);
    textFont("algerian");
    text("your  country  is  in  danger !!  there  is  a  deadly  virus🎇🎇",450,200);
    text("which  is  continuously  killing  many  residents  of  your  country",420,250);
    text("you  are  warrior  and  i  am  pretty  sure you  will  save  your  country",390,300);
    text("so  let's  do  this  mission👐",630,350);
    
    // to tell the players about modes
    stroke("red");
    fill("red")
    textSize(20);
    textFont("comic sans");
    text("Choose any one mode",670,470);

    // to make the buttons visible
    instruction.visible = true;
    infinite.visible = true;
    level.visible = true;
    back.visible = false;
    play.visible = false;
    bg4.visible = false;
    



    

    

    
    
  }

  // WHEN GAME STATE IS INSTRUCT
  if(gameState === 3){
    
    // to hide intro button
    instruction.visible = false;
    infinite.visible = false;
    level.visible = false;
    play.visible = false;
    bg4.visible = false;
    



    // to tell that it is instruction mode

    stroke("black");
    fill("black");
    textSize(50);
    textFont("algerian");
    text("INSTRUCTIONS",640,100);

    // to tell the instruction

    stroke("blue");
    fill("blue");
    textSize(39);
    textFont("monotype corsiva");
    text("1. Use  right  and  left  arrow  key  to  move.",200,200);
    text("2. Complete the target given to you to defeat the virus.",200,250);
    text("3. Don't collide with virus !!",200,300);
    text("4. Collect coins 📀",200,350);
    text("5. There will be 2 modes of game 'levels' and 'infinite'.",200,400);
    text("Its you choice you can choose any mode😃",500,500);

    // to make the button visible
    back.visible = true;
    play.visible = false;

  }


  // WHEN GAME STATE IS INFINITE
  if(gameState === 4){
    
    // to hide buttons
    instruction.visible = false;
    infinite.visible = false;
    level.visible = false;
    bg4.visible = false;
    play.visible = true;
   


    // to tell what to do
    stroke("black");
    fill("black");
    textSize(25);
    text("1. Either use right and left arrow keys or use right and left button to move.",200,100);
    text("2. Either use space key or use space button to shoot covid.",200,150);
    text(" Press start button to play the game",600,350);

    
    

  }


  // WHEN GAME STATE IS PLAYINF
  if(gameState === 5){
    
    // to hide buttons
   
    bg4.visible = true;
    play.visible = false;
    


    // to spawn covids;
    Covid();

    // to spawn coins
    Coins();

    
    

    
  }


  
}

function hiding(){
  playerName.hide();
  title.hide();
  country.hide();

}


function Covid(){
 
  if(frameCount % 30 === 0){
    covid = createSprite(200,windowHeight-5);
    covid.addImage(covidImg);
    covid.scale = 0.1
    covid.velocityY = -5;

    covid.x = random(10,1400);
    covid.lifetime = 200;
  }
  
}

function Coins(){
  if(frameCount % 100 ===0){
    coins = createSprite(200,windowHeight-5);
    coins.addImage(coinsImg);
    coins.scale = 0.1;
    coins.x = random(50,1000);
    coins.velocityY = -5;
    coins.lifetime = 200;

  }
  
}











  

  
  
  
  
  
  
  
  
  
  
 