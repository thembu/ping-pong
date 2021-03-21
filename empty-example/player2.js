function Player2(){
    this.x = 270;
    this.y = 140;
    this.speed = 4;

    this.show = function(){
        rect(this.x,this.y,20,40)
        
    }


this.move =  function keyTyped(){
        if(key === 't' && keyIsPressed){
            this.y = this.y - this.speed;
        }

        if(key === 'y' && keyIsPressed){
            this.y = this.y + this.speed;
        }

    }
}


function restrict2(){
    player2.y = constrain(player2.y,0,260)
}