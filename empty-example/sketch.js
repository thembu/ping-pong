let player;
let ball;
let player2;

function setup() {
     createCanvas(300,300);
     player = new Player();
     ball = new Ball();
     player2 = new Player2();
}

function draw() {

  background(0);
  player.show();
  restrict();
  restrict2();
  ball.display();
  ball.move();
  ball.bounce();
  player2.show();
  player2.move();
}

function Player() {

this.x = 10;
this.y = 140;
this.speed = 25;

this.show = function(){
rect(this.x,this.y,20,40);
  }
}



function keyPressed() {
  if(keyCode === 38 && keyIsPressed){
    player.y = player.y - player.speed;
  }
  if(keyCode === 40 && keyIsPressed){
    player.y = player.y + player.speed;
  }

}

function restrict(){
  player.y = constrain(player.y,0,260)
}

window.addEventListener('keydown',(e)=>{
  console.log(keyCode)
})