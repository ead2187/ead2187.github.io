
function setup() {
  createCanvas(1000, 1000);

}

function draw(){
  background(2,136,209);

  var h=hour();
  var m=minute();
  var s=second();

  fill(105,240,174);
  ellipse(width/2, height/2, s*10,s*10);

  var heightvar=map(h,0,24,0,height)

  stroke(255)
  line(10,heightvar,990,heightvar)

  if (h==24){
  background(0) }
 
 if (mouseIsPressed) {
    fill(2,136,209);
    text(h + ':'+ m +':'+ s,480, 500);
}

  fill(51,105,30);
  angleMode(DEGREES);
  rotate(45);
  rect(500, 50, map(minute(), 0, 60, 600, 300), 20);

}
