
var box;



function setup() { // CRIADORA
  createCanvas(400,400);

  box = createSprite(200,200,50,50)

}



function draw() // DESENHADORA
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)) {
    background("yellow")
  }


  drawSprites()
}




