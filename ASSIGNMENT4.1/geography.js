// var table;
// var cost;
// var time;
// var county;
// var margin = 50;


// function preload() {
//         table = loadTable('parkingticketdata.csv', 'csv', 'header');
//         noLoop(); //draw background once; recommended for static graphs//
//         console.log('Table has been loaded...');
// }

// // In this sketch everything happens in setup
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   loadData();
//   noLoop();
// }

// function loadData() {
//     cost = table.getColumn("Cost");
//     time = table.getColumn("Time");
//     county = table.getColumn("County");
//     console.log(cost);
//     console.log(time);
//     console.log(county);
//   }

//   function draw() {
//   background(0,0,255,50);
//   fill(0,255,0,20);

//   for (var i = 0; i < cost.length; i++) {

//         var j = 0; j < time.length; j++;

//         if (county == 'BK'){
//                                 fill (130, 130, 130, 30);
//                         }
//                         else if (county == 'BX') {
//                                 fill (70, 178, 157, 30);
//                         }
//                         else if (county == 'K') {
//                                 fill (146, 214, 195, 30);
//                         }
//                         else if (county == 'MN') {
//                                 fill (19, 96, 74, 30);
//                         }
//                         else if (county == 'NY') {
//                                 fill (219, 49, 70, 30);
//                         } 
//                         else if (county == 'Q') {
//                                 fill (92,96, 161, 30);
//                         }
//                         else if (county == 'QN') {
//                                 fill (4, 227, 229, 30);
//                         }
//                         else if (county == 'R') {
//                                 fill (7, 166, 212, 30);
//                         }
//                         else if (county == 'ST') {
//                                 fill (100, 6, 200, 30);
//                         }

//   ellipse(time[j], height/2, cost[i]/10);

//   var d = int(dist(mouseX, mouseY, positionX, positionY));
//                         if (d < 8){
//                                 text('COST:', 50, 500);
//                                 text(cost, 175, 500);
//                                 text('COUNTY:', 50, 515);
//                                 text(county, 175, 515);
//                                 text('TIME:', 50, 530);
//                                 text(time, 175, 530);
//                                 noStroke();
//                         }
// }
//   }






function preload(){
    table = loadTable("parkingticketdata.csv", "csv", "header");
    console.log(table);

}

function setup(){
    createCanvas(750, 750);
    background (255);
    textSize(20);
    noLoop();

}

function loadData() {
  leadingCauses = table.getColumn("Cost");
  deathRates = table.getColumn("Time");
  console.log(Cost);
  console.log(timeout);
}


function draw(){
    background(0);


    for (var i=0;i<Cost.length; i++) {
        fill('red');
        var Xaxis = map (Time[i],0,1499,50,width-50)
        var radius = map (Cost[i],0,515,0,50)

        ellipse(height*0.5, Xaxis, radius,radius)
    }

}
