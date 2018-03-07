var table;
var cost;
var time;
var county;
var margin = 50;


function preload() {
        table = loadTable('parkingticketdata.csv', 'csv', 'header');
        noLoop(); //draw background once; recommended for static graphs//
        console.log('Table has been loaded...');
}

// In this sketch everything happens in setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  loadData();
  noLoop();
}

function loadData() {
    cost = table.getColumn("Cost");
    time = table.getColumn("Time");
    county = table.getColumn("County");
    console.log(cost);
    console.log(time);
    console.log(county);
  }

  function draw() {
  background(0,0,255,50);
  fill(0,255,0,20);

  for (var i = 0; i < cost.length; i++) {

        var j = 0; j < time.length; j++;

  ellipse(time[j], height/2, cost[i]);
}
  }