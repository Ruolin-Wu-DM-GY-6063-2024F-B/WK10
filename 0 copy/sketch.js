// TODO: add color and mouseover
//       classify it

let blinks = [];

class Blicky{
  constructor(x,y){
    this.x = x,
    this.y = y,
    this.visible = false,
    this.period = random(100, 1000),
    this.changed = 0,
    this.diam = 50,
    this.mocolor = color(255,0,0)
}
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

update(){
  if 
}

function draw() {
  background(200, 20, 120);
  for (let idx = 0; idx < blinks.length; idx++){

  }
}

function mousePressed() {
  blinks.push(new Blicky(mouseX,mouseY))
  };

