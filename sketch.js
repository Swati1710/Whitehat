var canvas, object, engn,wrld;
 const ENGINE = Matter.Engine;
  const WORLD = Matter.World;
  const BODIES = Matter.Bodies;
function setup() {
  canvas= createCanvas(400,400);
 engn = ENGINE.create();
 wrld = engn.world;
 object = BODIES.rectangle(200,100,50,50);
 WORLD.add(wrld.object);
 console.log(object);
}

function draw() {
  background(205,255,255);
  rectMode(CENTER);
  rect(200,200,50,50);
 
}