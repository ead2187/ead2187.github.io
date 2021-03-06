
var table;
var cost;
var time;

function preload(){
  table = loadTable("queens_v3.csv", "csv", "header");
}

function setup(){
  createCanvas(800, 800);
  background (196,255,51);
  textSize(20);
  noLoop();
  loadData();

}

function loadData() {
  cost = table.getColumn("Cost");
  time = table.getColumn("Time");
  county = table.getColumn("County");
}


function draw(){
    background(196,255,51);
    stroke(0,135,50,50);
    
    //drawing the ticks for time reference
    // noStroke();
    // fill(180, 237, 23);
    // textSize(16);
    // textAlign(CENTER);
    // text('Midnight', width/2, height/4);
    // text('6AM', 3*(width/4), height/2);
    // text('Noon', width/2, 3*(height/4));
    // text('6PM', width/4, height/2);
    
    //drawing the circles for cost reference
    for (var j=0; j<3; j++){
    noFill();
    stroke('lightgreen');
    ellipse(width/2, height/2, 300-(j*100));
    fill('lightgreen');
    noStroke();
    // textSize(12);
    // text(200-(j*50),width/2,248+(j*50) )
    }
    
    //drawing the bars/lines
    for (var i=0;i<cost.length; i++) {
    
    angleMode(DEGREES);
    var myDegrees = map(time[i], 0, 2400, 0, 360);
    var radius = map (cost[i],0,200,0,150);

    var v = p5.Vector.fromAngle(radians(myDegrees), radius);
    var vx = v.x;
    var vy = v.y;
    
    push();
    translate(width / 2, height / 2);
    noFill();
    stroke(150);
    line(0, 0, 50, 0);
    stroke(0,0,255,10);
    line(0, 0, vx, vy);
    pop();
    }
  
  
} 