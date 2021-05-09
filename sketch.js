//Step 1 : 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


//Step 2 : 
var engine, world;

var ground;
var snowDrop1;



function preload(){
  bg=loadImage("snow3.jpg")
}
function setup() {
  createCanvas(800,400);

  //Step 3:
 engine=Engine.create();
 world=engine.world;

 snowDrop1=new Snow(200,200, 50)
 snowDrop2=new Snow(200,100,100)
 snowDrop3=new Snow(200,50,100)
 snowDrop4=new Snow(200,40, 100)
 snowDrop5=new Snow(200,30, 100)
 snowDrop6=new Snow(200,20, 100)
 frost1=new Frost(50, 100, 70)
 
 frost2= new Frost(50, 100,50)
 
 ground=Bodies.rectangle(400,380,800,25,{isStatic:true});
World.add(world, ground)
}

function draw() {
  background(bg);  
  Engine.update(engine);

  snowDrop1.display();
  snowDrop2.display();
  snowDrop3.display();
  snowDrop4.display();
  snowDrop5.display();
  snowDrop6.display();

frost1.display();
  frost2.display();

fill("brown")
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,25)

}