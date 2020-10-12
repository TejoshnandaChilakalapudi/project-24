
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var trash,g1,b1,b2,b3;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(800, 700);

	
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	trash = new Ball(50,600,15);
    g1 = new Ground(400,690,800,10);
	b1 = new Dustbin(450,647,10,76);
	b2 = new Dustbin(550,680,210,10);
	b3 = new Dustbin(650,647,10,76);

	Engine.run(engine);
	
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  trash.display();
 g1.display();
 b1.display();
 b3.display();
 b2.display();

 keyPressed();
  drawSprites();
 
}
function keyPressed(){

	
	if(keyCode===UP_ARROW){

    Matter.Body.applyForce(trash.body,trash.body.position,{x:5,y:-20})

	}
}

function keyPressed1(){
	
	if(keyCode===LEFT_ARROW){

    Matter.Body.applyForce(trash.body,trash.body.position,{x:-5,y:20})

	}
}
