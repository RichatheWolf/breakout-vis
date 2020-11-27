var brick = [], counter, paddle, ball;
var t = 0;
var f = 0;
function setup(){
    paddle = createSprite(175,375,120,20);
    ball = createSprite(200,200,20,20);
    paddle.shapeColor = "royalblue";
    ball.shapeColor = "indigo";
    createEdgeSprites();
    ball.velocityX= -3;
    ball.velocityY= -3;
    counter = 20;
    for ( var i = 0; i<21; i++){
        if (i < 11){
          brick[i] = createSprite(20 + t,10,40,20);
          t = t + 41;
          brick[i].shapeColor = "firebrick";
        }
        else {
          brick[i] = createSprite(20 + f,31,40,20);
          f = f+41;
          brick[i].shapeColor = "firebrick";
        }
      }
}

function draw() {
background("snowwhite");
paddle.x = World.mouseX;
ball.bounceOff(topEdge);
ball.bounceOff(leftEdge);
ball.bounceOff(rightEdge);
ball.bounceOff(paddle);
for (var i = 0; i < 21; i++){
  if (ball.isTouching(brick[i])){
    ball.bounceOff(brick[i]);
    brick[i].destroy();
    counter--;
    ball.velocityX = ball.velocityX+2;
    ball.velocityY = ball.velocityY+2;
    paddle.width = paddle.width-0.5;
}
if(counter <= 0){
  fill("gold");
  textSize(20);
  text("You Win!",200,200);
}
}
  
  
  
  
  drawSprites();
}