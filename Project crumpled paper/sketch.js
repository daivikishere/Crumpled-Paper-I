
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    waste = new Paper(100,610,20);
    ground = new Ground(400,690,800,20)
  Engine.run(engine);
  dustbin1 = new Dustbin(600,675);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  waste.display();
  ground.display();
  dustbin1.display();  
}

function keyPressed(){
  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(waste.body,waste.body.position,{x:73,y:73})   
  }
}

