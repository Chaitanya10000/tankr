const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var tanker,ground;
var canonball,canonImage;

function setup() {
   var canvas = createCanvas(500,500);
   engine = Engine.create();
   world = engine.world;
   shootball = new Shootball(200,150);
   ground = new Ground(200,500,600,20);
   tanker = new Tanker(40,470,200,150);
   canonball = new CanonBall(400,300,80,80);
}

function draw() {
    Engine.update(engine);
    background("#1F123D");
    tanker.display();
    canonball.display();
    ground.display();
  
}

function keyPressed(){
    if(keyCode === 32 ){
      canonball.fly();
    }
}