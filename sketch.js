var canvas, object, engine,world;
 const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
function setup() {
  canvas= createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;
 object = Bodies.rectangle(200,100,50,50);
 World.add(world.object);
 console.log(object);
}

function draw() {
  background(205,255,255);
  rectMode(CENTER);
  rect(200,200,50,50);
 
}