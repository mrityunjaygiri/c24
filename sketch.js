// namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground; 
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;



function setup() {
  createCanvas(1200,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

 ground=new Ground(600,390,1200,20);

 box1=new Box(700,300,70,70);
 box2=new Box(900,300,70,70);
 pig1=new pig(800,320,50,50);
 log1=new log(800,270,300,PI/2);

 box3=new Box(700,250,70,70);
 box4=new Box(900,250,70,70);
 pig2=new pig(800,260,50,50);
 log2=new log(800,220,300,PI/2);

 box5=new Box(800,180,70,70);
 log3=new log(770,180,150,PI/7);
 log4=new log(870,180,150,-PI/7);

 bird1=new bird(200,200,60,60);



}

function draw() {
  background(0); 
  Engine.update(myEngine);

  ground.display();
 
  box1.display();
  box2.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();
  
  bird1.display();
}
