class Suspender{
    constructor(bodyA,bodyB,offsetx,offsety){
        this.offsetx=offsetx;
        this.offsety=offsety;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetx,y:this.offsety}
        }
    this.suspender=Constraint.create(options)
    World.add(world,this.suspender);
    }
    display(){
var pointA=this.suspender.bodyA.position
var pointB=this.suspender.bodyB.position
var anc2x=pointB.x+this.offsetx
var anc2y=pointB.y+this.offsety

line (pointA.x,pointA.y,anc2x,anc2y);
    }
}