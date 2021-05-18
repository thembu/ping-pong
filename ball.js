function Ball(){
    this.x = 150;
    this.y = 150;
    this.xspeed = 2;
    this.yspeed = 1;


    this.display = function(){
      ellipse(this.x,this.y,15,15);
    }

    this.move = function(){
        this.x = this.x - this.xspeed;
        this.y = this.y - this.yspeed;
    }

    this.bounce = function(){
        if(this.y < 0 || this.y > 300 && this.x > 300 || this.x < 0 ) this.yspeed = this.yspeed * -1; 
        
        if(this.x === player.x + 30 && this.y >=  player.y && this.y <= player.y + 40 ){
          
            this.xspeed = this.xspeed * -1;
            this.yspeed = this.yspeed *-1;

    }

        if(this.x === player2.x -20 && this.y >= player2.y && this.y <= player2.y + 40){
            this.xspeed = this.xspeed * -1;
            this.yspeed = this.yspeed *-1;

        }
    }


}