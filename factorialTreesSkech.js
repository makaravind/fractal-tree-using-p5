var angle;
var slider;
var baseHeight;

function setup() {
  createCanvas(640, 480);
  baseHeight = 5.5;

  slider = createSlider(0, PI, 0.5, 0.1);
  slider.position(10, 10);
  slider.style('width', '80px');
}

function draw() {
  background(51);
  translate(width/2, height);
  // console.log(slider.value());
  angle = slider.value();
  branch(150, 0);
}

function branch(height, level) {

  if(height < baseHeight) {
    return;
  }

  // trunk
  stroke(139,69,19);
  line(0, 0, 0, -height);

  push();
  translate(0, -height);
  rotate(angle);
  if(height < baseHeight + 10) {
    stroke(255, 0, 0);
  }
  //stroke(225, 0, 0);
  line(0, 0, 0, -(height * 0.6));
  branch(height * 0.6);
  pop();

  push();
  translate(0, -height);
  rotate(-angle);
  if(height < baseHeight + 10) {
    stroke(255, 255, 0);
  }
  
  line(0, 0, 0, -(height * 0.6));
  branch(height * 0.6);
  pop();

  push();
  translate(0, -height);
  rotate(PI / 3);
  //stroke(0, 255, 0);
  line(0, 0, 0, -(height * 0.6));
  branch(height * 0.6);
  pop();
  // ellipse(0, 0, 80, 80);
}