var bg,bg2,afterTheQuestionImg, room1Img,form,system,code,security;
var score=0;
var gameState=1;
var room4Img;
 


function preload() {
 
  
  bg= loadImage("Images/Haunted House.jpg");
  //bg2= loadImage("treasure.jpg");
  room1Img = loadImage("Images/Room 1.jpg");
  afterTheQuestionImg = loadImage ("Images/Background.png");
  room4Img = loadImage("Images/room4.jpg");
  
}

function setup() {
  createCanvas(1000,500);
  
  system = new System();
  system1 = new System1();
  security = new Security();
  security1 = new Security1();
  
  
  
  
}

function draw() {
  background(bg);
  
 
  if (gameState === 1){

  
  textSize(20);
  fill("black");
  text("I HAVE YOUR FRIEND CAPTURED HAHAHA!! \n ANSWER THE QUESTIONS TO FIND HIM ", 300, 50);

  

    fill("Yellow")
    textSize(20);
    text("Press Space To Start",5, 200);
  
    if (keyCode === 32){
      gameState=2;
    }
  }
  else if(gameState === 2){
    background(room1Img);
    
    clues();
  //security=new Security();
  //document.getElementById("security").readOnly=true
    security.display();

    textSize(20);
    fill("Yellow");
    text("Score: "+ score, 450, 50);

    if (score === 3){
      clear();
      background(afterTheQuestionImg);
      fill("Red");
      textSize(40)
      text(" You got lucky this time \nYOU WILL NOT IN THE NEXT LEVEL!!" ,250, 450)
      fill("Yellow")
      textSize(20);
        text("Press Left Arrow To Proceed",5, 200);
    }
  
        if (keyCode === 37){
          gameState=3;
        }
    }
   
  
  
 // else if (gameState === 3){
   // background(room4Img);
    //clue();
   // security1.display();
  //}
  drawSprites()
}