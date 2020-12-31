class Ball{
    constructor(x,y,r){
        var options ={
            isStatic:false,
            friction:0.5,
            restitution:1,
            density:1,
        }
    this.body=Bodies.circle(x,y,r,options);
    //this.width=width
    //this.height=height
    this.r=r
    World .add(world,this.body);
    }
    display(){
        fill ("pink")
        ellipseMode (CENTER);
ellipse (this.body.position.x,this.body.position.y,this.r);
    }
} 
