var ground ,paperObject;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);

  groundSprite=createSprite(600,585,1200,20);
  groundSprite.shapeColor=color(225)

  engine = Engine.create();
  world = engine.world;

	paperObject = new Pball(200,450,70)

    //Create a Ground
    ground = Bodies.rectangle(600, 585, 1200, 20 ,{isStatic:true ,friction:1 } );
    World.add(world, ground); 


	Engine.run(engine);

   box1 = new Box(900,565,200,20);
    box2 = new Box(790,525,20,100);
    box3 = new Box(1010,525,20,100);
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundSprite.x= ground.position.x
  groundSprite.y=ground.position.y



  	box1.display();
    box2.display();
    box3.display();
    paperObject.display();


  drawSprites();
}

function keyPressed() {
 if (keyCode === UP_ARROW) {

 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:100 , y:-115});

  }
  
  if (keyCode === DOWN_ARROW) {

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:-115,y:110});
 }

}