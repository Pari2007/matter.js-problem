const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var dustbinObj, paperObject, groundObject, slingshot;
var world;
var backimg;
function preload() {
  backimg = loadImage("2162.jpg");
}

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  paperObject = new paper(200, 450, 70);
  groundObject = new ground(width / 2, 670, width, 20);
  dustbinObj = new dustbin(1200, 650);
  slingshot = new SlingShot(paperObject, { x: 200, y: 100 });

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(backimg);

  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  slingshot.display();
}

function mouseDragged() {
  Matter.Body.setPosition(paperObject.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  slingshot.fly();
}
