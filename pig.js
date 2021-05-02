class pig{
    constructor(x,y,width,height){
        var options = {
            density: 1,
            restitution: 0.8,
            friction: 0.3
          }
         
          this.body = Bodies.rectangle(x,y,width,height,options);
          this.width=width
          this.height=height
          World.add(myWorld,this.body);
    }
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red")
    rect(0, 0,this.width,this.height); 
    pop();
    
    }
    }