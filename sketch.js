var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5; 
var bobDiamter=50;
var roof;
var rope1, rope2, rope3, rope4, rope5;
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

	//Create the Bodies Here.

	roof= new Roof(200,20,800,30);


	bobObject1= new Bob(200,300,40);
	bobObject2 = new Bob(300,300,40);
	bobObject3 = new Bob(400,300,40);
	bobObject4 = new Bob(500,300,40);
	bobObject5 = new Bob(600,300,40);

	rope1=new Chain(bobObject1.body, roof.body, -bobDiamter*2,0);
	rope2 = new Chain(bobObject2.body, roof.body, -bobDiamter*1,0);
	rope3 = new Chain(bobObject3.body, roof.body, 0,0);
	rope4 = new Chain(bobObject4.body, roof.body, bobDiamter*1,0);
	rope5 = new Chain(bobObject5.body, roof.body, bobDiamter*2,0);

	

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();


  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100});

	}
}


