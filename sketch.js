
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,paper1,dustbin1;

/*function preload()
{
	
}*/

function setup() 
{
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(400,690,800,20);
	dustbin1 = new dustbin(600,680);
	paper1 = new paper(50,680,20)

	Engine.run(engine);
}

function draw() 
{
  rectMode(CENTER);
  background(0);

  dustbin1.display();
  paper1.display();
  ground1.display();
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:15,y:-15})
	}
}

