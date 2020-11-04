var helicopterIMG, helicopterSprite, packageSprite,packageSprite1,packageSprite2,packageSprite3,packageSprite4,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
    

	rectMode(CENTER);
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	side1=new Box(250,610,20,100);
	side2=new Box(550,610,20,100);
	side3=new Box(400,height-45,300,30);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.0, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);


  side1.display();
  side2.display();
  side3.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	
	textSize(20);
	fill("blue");
	text(" The package is dropped successfully",250,400);

	rectMode(CENTER);
	packageSprite.x= packageBody.position.x; 
	packageSprite.y= packageBody.position.y;

	
  }


}



