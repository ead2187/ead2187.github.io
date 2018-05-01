var table;
var cost;
var time;
var length;
var margin = 50;

function preload(){
  table = loadTable("parkingticketdata.csv", "csv", "header");
  console.log('table');

}

function setup(){
  createCanvas(750, 750);
  background (196,255,51);
  textSize(20);
  noLoop();
  console.log('setup');

}

function loadData() {
  cost = table.getColumn("Cost");
  time = table.getColumn("Time");
  console.log('cost + time');
}


function draw(){
  background(196,255,51);
  stroke(0,135,50,50);

  cost = table.getColumn("Cost");
  time = table.getColumn("Time");

  for (var i=0;i<cost.length; i++) {
    fill(0,255,168);
    var Xaxis = map (time[i],0,1499,50,width-50);
    var radius = map (cost[i],0,515,0,50);

    line(Xaxis, height*0.5, Xaxis, height*0.5);
  }
}