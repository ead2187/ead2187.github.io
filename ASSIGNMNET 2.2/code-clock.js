function setup(){
    createCanvas(1000, 1000)
}

function draw() {
    background('white');

    fill(48, 79, 254, 150);
    ellipse(map(minute(), 0, 60, 1000, 501), 400, 30, 30);

    fill(67, 160, 71);
    ellipse(map(hour(), 0, 24, 500, 500), 400, 30, 30)

    fill(255, 214, 0, 150);
    ellipse(map(second(), 0, 60, 0, 501), 400, 30, 30);

    fill(67, 160, 71);
    ellipse(500, map(hour(), 0, 24, 100, 900), 30, 30);


    var h=hour();
	var m=minute();
	var s=second();

     if (mouseIsPressed) {
    fill(255, 109, 0);
    text(h + ':'+ m +':'+ s, 478, 405);
}

}