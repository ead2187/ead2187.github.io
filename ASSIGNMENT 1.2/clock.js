function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(10, 80, 19);
  fill(16, 128, 31);

  // Map the function second() to values from 0~400
  rect(30, 20, 60, map(second(), 0, 60, 0, 400));

  push(); // Start a new drawing state
  scale(7.55, 7.55); // Use function hour() directly to apply scale
  ellipse(40, 46, 55, 55);
  pop(); // Restore original state (scale, specifically)


  // First change the mode to degrees (default is radians)
  angleMode(DEGREES);
  // Map the function minute() to values from 0~360
  rotate(map(minute(), 0, 60, 0, 360));
  textSize(25);
  fill(218, 247, 166);
  text('nope', 10, 60);
}
