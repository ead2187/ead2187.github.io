
//-----------------------ORIGINAL-----------------------
// var table;
// var cost;
// var time;
// var length;
// var county;
// var margin = 50;

// function preload(){
//   table = loadTable("parkingticketdata.csv", "csv", "header");
//   console.log('table');

// }

// function setup(){
//   createCanvas(1000, 1000);
//   background (196,255,51);
//   textSize(20);
//   noLoop();
//   loadData();
//   console.log('setup');

// }

// function loadData() {
//   cost = table.getColumn("Cost");
//   time = table.getColumn("Time");
//   county = table.getColumn("County");
//   console.log('cost + time');
// }


// function draw(){
//   background(196,255,51);

// console.log(cost.length);
//   for (var i=0;i<cost.length; i++) {
    
//     fill(0,255,168);
//     var Xaxis = map (time[i],0,1499,50,width-50);
//     var radius = map (cost[i],0,515,0,50);
//     stroke(0,0,255,10);
//     push();
//     translate(Xaxis,height/2);
//     rotate(PI/3);
//     line(0, -1*radius*4, 0, radius*4);
//     pop();
//   }
// }

//-----------------------VERTICAL TEST-----------------------
var table;
var cost;
var time;
var length;
var county;
var margin = 50;

function preload(){
  table = loadTable("parkingticketdata.csv", "csv", "header");
  console.log('table');

}

function setup(){
  createCanvas(1000, 1000);
  background (196,255,51);
  textSize(20);
  noLoop();
  loadData();
  console.log('setup');

}

function loadData() {
  cost = table.getColumn("Cost");
  time = table.getColumn("Time");
  county = table.getColumn("County");
  console.log('cost + time');
}


function draw(){
  background(196,255,51);

console.log(cost.length);
  for (var i=0;i<cost.length; i++) {
    
    fill(0,255,168);
    var Xaxis = map (0,time[i],50,1499,width-50);
    var radius = map (0,cost[i],0,515,50);
    stroke(0,0,255,10);
    push();
    translate(width/2,Xaxis);
    rotate(PI/3);
    line(0, -1*radius*4, 0, radius*4);
    pop();
  }
}