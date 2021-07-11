const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

engine = Engine.create();
world = engine.world;

var ball,blower,blowermouth;
var button;

function setup() {
  createCanvas(800,600);
  createSprite(400, 200, 50, 50);

  ball = new Ball(100,200,10,10);
  blowermouth = new Blowermouth(423,227,90,10);
  blower = new Blower(500,200,65,65);

  button = createButton("click to blow");
  button.position(width/2,height-200);
  button.class("blowButton")
  button.mousePressed(blow)
}

function draw() {
  background("grey");  
  drawSprites();
  Engine.update(engine);
  ball.show();
  blower.show();
  blowermouth.show();
}

function blow() {
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.001});
  Matter.Body.setStatic(ball.body,false)
}
