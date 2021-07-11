class Ball  {
    constructor(x,y,w,h) {
        var options = {
            restitution: 0.8,
            isStatic:true
          };
          this.w = w;
          this.h = h;
      
          this.body = Bodies.rectangle(x, y, w,h, options);
          World.add(world, this.body);  
    
     }
     
     show() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
     }

  }
