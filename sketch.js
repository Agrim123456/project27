var stand 
var ball1
var ball2
var ball3
var ball4
var ball5


var suspender1,suspender2,suspender3,suspender4,suspender5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 

stand=new Stand(350,150,350,40);
ball1=new Ball(300,430,50);
ball2=new Ball(300,400,50);
ball3=new Ball(300,450,50);
ball4=new Ball(300,500,50);
ball5=new Ball(300,550,50);
suspender1= new Suspender(ball1.body,stand.body,50,0); 
suspender2= new Suspender(ball2.body,stand.body,-100,0); 
suspender3= new Suspender(ball3.body,stand.body,150,0); 
suspender4= new Suspender(ball4.body,stand.body,-200,0); 
suspender5= new Suspender(ball5.body,stand.body,250,0); 

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stand.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
suspender1.display();
suspender2.display();
suspender3.display();
suspender4.display();
suspender5.display();

  drawSprites();
  
}



