
var table;
var cost;
var time;
var length;
var county;
var margin = 50;

function preload(){
  table = loadTable("queens_v4.csv", "csv", "header");
  // var table = 'hi';
  // console.log(table);

}

function setup() {
  	createCanvas(800, 800);
	// console.log(cost);
	loadData();

  angleMode(DEGREES);
  noLoop();
  
}


function loadData() {
  cost = table.getColumn("Cost");
  time = table.getColumn("Time");
  county = table.getColumn("County");
  console.log('cost + time');
}


function draw() {
  background('red');
  

  // console.log(time);
  for (var i=0; i<10; i++)
  {
  var timeToAngle = map(time[i], 0, 2400, 1, 360);
  var costNew = map(cost[i],0,115,0,50)
  // console.log(time(i));
  	// console.log(timeToAngle);
	// var x = sin(timeToAngle);
	// var y = cos(timeToAngle);
	// var r = 400;
	// var r2 = cost[i]/2;
	// var pointX = r*x;
	// var pointY = r*y;
	// var pointX2 = r2*x;
	// var pointY2 = r2*y;
	// console.log(pointX);
	// console.log(pointY);
	// console.log(pointX2);
	// console.log(pointY2);
	
	

	
	stroke('black');
    push();
    translate(0,0);
    rotate(timeToAngle);
    line(400, 400, 400, 800 - costNew);
    pop();



  }
  
  

  
  

  
}