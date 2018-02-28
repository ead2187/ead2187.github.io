var parkingCost;
var startX = 50;
var endX = 950;
var startY = 900;
var endY = 50;
var County = ["BX", "NY", "K", "Q", "MN", "QN"];
var startCost = 0;
var endCost = 645;

function preload() {
        parkingCost = loadTable('parkingticketdata.csv', 'csv', 'header');
        console.log('Table has been loaded...');
}

function setup(){
        createCanvas(1000, 1000);
        console.log('hi');
        print(parkingCost.getColumnCount() + 'column count');
        print(parkingCost.getRowCount() + 'row count');
        noLoop(); //draw background once; recommended for static graphs//
}

function draw(){
        background(255);
        text('BOROUGH', 375, 950);
        noStroke();
        for (var i = 0; i < parkingCost.getRowCount(); i++){
                var County = parkingCost.getString(i, 'County');
                var Cost = parkingCost.getNum(i, 'Cost');
                var positionX = map(County[i], 950, 45 + 20 * i, startX, endX);
                var positionY = map(Cost, startCost, endCost, startY, endY);
                ellipse(positionX, positionY, 8, 8);
        }
}
