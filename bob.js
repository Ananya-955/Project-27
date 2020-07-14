class Bob {
    constructor (x,y, radius){
        var options={
            isStatic:false,
            restitution:0.8,
            friction:1, 
            density: 1.2 

        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        //rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        strokeWeight(5);
        fill("blue");
        ellipse(0, 0, this.radius*2, this.radius*2);
        pop();
      }
    };
