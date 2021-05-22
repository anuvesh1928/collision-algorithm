var fixed,move;


function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
fixed.shapeColor="green";


  move = createSprite(500,250,50,50);
  move.shapeColor="green";
}

function draw() {
  background("blue");  

  move.x=World.mouseX;
  move.y=World.mouseY;

  if(fixed.x-move.x<move.width/2+fixed.width/2 &&
    move.x-fixed.x< move.width/2+fixed.width/2 &&
    move.y-fixed.y< move.height/2+fixed.height/2 &&
    fixed.y-move.y< move.height/2+fixed.height/2){
   fixed.shapeColor="red";
   move.shapeColor="red";

  }else{
    fixed.shapeColor="green";
   move.shapeColor="green";
  }

  console.log(move.x)
  drawSprites();
}