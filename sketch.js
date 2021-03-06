
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree
var ground
var stone
var boy,boyImg
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10
var string
 var constraintStone
function preload()
{
	boyImg=loadImage("Plucking mangoes/boy.png")
	treeimage=loadImage("Plucking Mangoes/tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  // tree=new Tree(580,380,415,615)
	ground=new Ground(400,680,800,60)
	boy=createSprite(150,600,20,10)
	boy.addImage("boy",boyImg)
	boy.scale=0.11
	
	stone=new Stone(90,530,40)
	string=new String(stone.body,{x:190,y:330}) 
	//constraintStone=new Stone(90,530,40)
	mango1=new Mango(580,200,30)//radius is actually 45 for all mangoes
	mango2=new Mango(630,280,30)
	mango3=new Mango(530,240,30)
	mango4=new Mango(700,300,30)
	mango5=new Mango(500,340,30)
	mango6=new Mango(460,290,30)
	mango7=new Mango(680,220,30)
	mango8=new Mango(550,160,30)
	mango9=new Mango(570,300,30)
	mango10=new Mango(650,165,30)
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display()
  //tree.display()
  image(treeimage,380,100,415,615)
  stone.display()
  string.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9)
  detectCollision(stone,mango10)
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:90,y:530})
		launcherObject.attach(stone.body)
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    string.fly();
}
function detectCollision(stone,mango){
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	console.log("man "+mango.radius+stone.radius)
	console.log(distance)
if(distance<=mango.radius+stone.radius){
	console.log(distance)
	Matter.Body.setStatic(mango.body,false)
}
}



