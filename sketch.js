var movingRect, fixedRect; 
function setup() { 
  createCanvas(1200,600);
   fixedRect= createSprite(600, 200, 50, 50);
    fixedRect.shapeColor="blue";
     movingRect= createSprite(600, 250, 80, 50); 
     movingRect.shapeColor="blue";
     movingRect.velocityY=-8;
     fixedRect.velocityY=8;
     } 

     function draw() 
     { 
       background("black"); 
      // movingRect.x = World.mouseX;
       // movingRect.y = World.mouseY; 
  //if (movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2
    // && fixedRect.x - movingRect.x< movingRect.width/2+fixedRect.width/2
    // &&movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2
     //&& fixedRect.y - movingRect.y< movingRect.height/2+fixedRect.height/2  ) 
  //{ 
   // fixedRect.shapeColor="yellow"; 
   // movingRect.shapeColor="yellow"; 
  //} 
  //else { 
    //fixedRect.shapeColor="blue"; 
   // movingRect.shapeColor="blue";
  // } 
   if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 
    && fixedRect.x - movingRect.x< movingRect.width/2+fixedRect.width/2){
      movingRect.velocityX=movingRect.velocityX*(-1);
      fixedRect.velocityX=fixedRect.velocityX*(-1);
    }
    if(movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2
      && fixedRect.y - movingRect.y< movingRect.height/2+fixedRect.height/2 ){
        movingRect.velocityY=movingRect.velocityY*(-1);
        fixedRect.velocityY=fixedRect.velocityY*(-1);
      }
   drawSprites();
   }
