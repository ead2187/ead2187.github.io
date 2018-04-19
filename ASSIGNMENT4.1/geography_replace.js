var table;
var cost;
var time;
var length;
var margin = 50;


// function preload() {
//         table = loadTable('parkingticketdata.csv', 'csv', 'header');
//         noLoop(); //draw background once; recommended for static graphs//
//         console.log('Table has been loaded...');
// }

// // In this sketch everything happens in setup
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   loadData();
//   console.log('"load data"');
//   noLoop();

//   console.log("setup");
// }

// function loadData() {
//     cost = table.getColumn("Cost");
//     time = table.getColumn("Time");
//     console.log(cost);
//     console.log(time);
//   }

//   function draw() {
//   background(0,0,255,50);
//   fill(0,255,0,20);

//   ellipse(time[j], height/2, cost[i]/10);
// }// end for loop
// //   var d = int(dist(mouseX, mouseY, positionX, positionY));
// //                         if (d < 8){
// //                                 text('COST:', 50, 500);
// //                                 text(cost, 175, 500);
// //                                 text('TIME:', 50, 530);
// //                                 text(time, 175, 530);
// //                                 noStroke();
// //                         }
// // }




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
    fill(0,255,168,30);
    var Yaxis = map (time[i],0,1499,50,width-50);
    var radius = map (cost[i],0,515,0,50);

    ellipse(height*0.5, Yaxis, radius,radius);
  }


 if (height*0.5 && mouseX < radius && mouseY > Yaxis && mouseY < radius) {
    fill('blue');
    ellipse(height*0.5, Yaxis, radius,radius);
    console.log('blue circle should render');
  }



    // var d = int(dist(mouseX, mouseY, radius, radius));
    //                     if (d < 8){
    //                             text('COST:', 50, 500);
    //                             text(cost, 175, 500);
    //                             text('TIME:', 50, 530);
    //                             text(time, 175, 530);
    //                             noStroke();
    //                     }



//if mouse x = circle center then change color + draw lable

//week 4 demo basic mouse events (if center is same as mouse x)


}



//WORKS: PRESSED
// function mousePressed(){
//   var i=0
//   var Yaxis = map (time[i],0,1499,50,width-50)
//   var radius = map (cost[i],0,515,0,50)
//   var d = dist(mouseX, mouseY, height*0.5, Yaxis);
//   if (d < height*0.5/2) {
//     ellipse(height*0.5, Yaxis, radius,radius)
//      fill('orange');
//      console.log('orange');
//   }
// }