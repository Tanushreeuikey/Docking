var iss;
var spacebg,issImg,spacecraft1Img,spacecraft2Img,spacecraft3Img,spacecraft4Img;
var spacecraft1,spacecraft2,spacecraft3,spacecraft4;
var position;

function preload()
{
   spacebg=loadImage("Docking-undocking/spacebg.jpg")
   issImg=loadImage("Docking-undocking/iss.png")
   spacecraft1Img=loadImage("Docking-undocking/spacecraft1.png")
   spacecraft2Img=loadImage("Docking-undocking/spacecraft2.png")
   spacecraft3Img=loadImage("Docking-undocking/spacecraft3.png")
   spacecraft4Img=loadImage("Docking-undocking/spacecraft4.png")
}
function setup() {
  createCanvas(1200,700);
  //iss=createSprite(400, 200, 200, 90);
  //iss.addImage(issImg)
  spacecraft1=createSprite(350,600,50,80)
  spacecraft1.addImage(spacecraft1Img)
  spacecraft1.scale=0.3

  iss=createSprite(400, 200, 200, 100);
  iss.addImage(issImg)

}

function draw() {
  background(spacebg); 
  
if(spacecraft1.y===333 && iss.y===200)
{
   fill("white")
   textSize(40)
  text("DOCKING SUCCESSFUL !!",400,400)
}

/*if(iss.x-spacecraft1.x < iss.width/2+spacecraft1.width/2
  &&spacecraft1.x-iss.x < iss.width/2+spacecraft1.width/2
  &&iss.x-spacecraft1.x < iss.height/2+spacecraft1.height/2
  &&spacecraft1.x-iss.x < iss.height/2+spacecraft1.height/2)
{
  fill("white")
  text("DOCKING SUCCESSFUL !!",400,400)
}*/


  if(keyDown(LEFT_ARROW))
  {
    changePosition(-1,0);
    spacecraft1.addImage(spacecraft4Img);
    
  }
  else if(keyDown(RIGHT_ARROW))
  {
    changePosition(1,0);
    spacecraft1.addImage(spacecraft3Img);
    
  }
  else if(keyDown(UP_ARROW))
  { 
    changePosition(0,-1);
    spacecraft1.addImage(spacecraft2Img);
  }
  else if(keyDown(DOWN_ARROW))
  { 
    changePosition(0,1);
    spacecraft1.addImage(spacecraft2Img);
  }

  console.log(spacecraft1.y)
  console.log(iss.y)
 
  drawSprites();
}
function changePosition(x,y)
{
    spacecraft1.x = spacecraft1.x + x;
    spacecraft1.y = spacecraft1.y + y;
}
 /*function hasDocked(liss,lspacecraft)
 {
    issTop=liss.y
    craftBottom=lspacecraft.y
    if(issTop>=craftBottom)
    {
      return true 
    }
    return false;
 }*/