
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var girl;
function preload()
{
//this.image=loadImage("spriites/boy.png");
	//this.image2=loadImage("sprites/mango.png");
	//this.image3=loadImage("sprites/stone.png");
	//this.image4=loadImage("sprites/tree.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	girl= new Girl(200,200,20,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  girl.display();

  drawSprites();
 
}



