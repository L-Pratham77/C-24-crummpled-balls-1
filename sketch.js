var ground ,PballBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);

	groundSprite=createSprite(600,585,1200,20);
  groundSprite.shapeColor=color(225)

  // Pball_Sprite=createSprite(100,400,20,20);
  // Pball_Sprite.shapeColor=color("blue")

  engine = Engine.create();
  world = engine.world;
  
    //Create a Ground
    ground = Bodies.rectangle(600, 585, 1200, 20 ,          {isStatic:true ,friction:1 } );
    World.add(world, ground); 

    PballBody = Matter.Bodies.circle(100, 400 ,20, 
                 {restitution:0.3, isStatic:false,friction:1 , density:1.2});
    World.add(world, PballBody);



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
//  Pball_Sprite.x=PballBody.position.x
//  Pball_Sprite.y=PballBody.position.y

  keyPressed();

  	box1.display();
    box2.display();
    box3.display();

    ellipseMode(RADIUS);
    strokeWeight(0);
    stroke("blue");
    ellipse(PballBody.position.x ,PballBody.position.y , 20 ,20);
  drawSprites();
}

function keyPressed() {
 if (keyCode === UP_ARROW) {

 Matter.Body.applyForce(PballBody.body,PballBody.body.position,{x:85,y:-85});



  }
}