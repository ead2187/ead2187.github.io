function setup(){
    createCanvas(1300, 1300)
}

function draw() {
    background('black');

	var h=hour();
	var m=minute();
	var s=second();

if (h==0){
    fill(0,77,64);
	rect(200, 50, map(minute(), 0, 60, 0, 1100), 20); }
if (h==1){
    fill(0,77,64);
	rect(200, 100, map(minute(), 0, 60, 0, 1100), 20); }
if (h==2){
    fill(0,77,64);
	rect(200, 150, map(minute(), 0, 60, 0, 1100), 20); }
if (h==3){
    fill(0,105,92);
	rect(200, 200, map(minute(), 0, 60, 0, 1100), 20); }
if (h==4){
    fill(0,105,92);
	rect(200, 250, map(minute(), 0, 60, 0, 1100), 20); }
if (h==5){
    fill(0,105,92);
	rect(200, 300, map(minute(), 0, 60, 0, 1100), 20); }
if (h==6){
    fill(0,121,107);
	rect(200, 350, map(minute(), 0, 60, 0, 1100), 20); }
if (h==7){
    fill(0,121,107);
	rect(200, 400, map(minute(), 0, 60, 0, 1100), 20); }
if (h==8){
    fill(0,121,107);
	rect(200, 450, map(minute(), 0, 60, 0, 1100), 20); }
if (h==9){
    fill(0,137,123);
	rect(200, 500, map(minute(), 0, 60, 0, 1100), 20); }
if (h==10){
    fill(0,137,123);
	rect(200, 550, map(minute(), 0, 60, 0, 1100), 20); }
if (h==11){
    fill(0,137,123);
	rect(200, 600, map(minute(), 0, 60, 0, 1100), 20); }
if (h==12){
    fill(0,150,136);
	rect(200, 650, map(minute(), 0, 60, 0, 1100), 20); }
if (h==13){
    fill(0,150,136);
	rect(200, 700, map(minute(), 0, 60, 0, 1100), 20); }
if (h==14){
    fill(38,166,154);
	rect(200, 750, map(minute(), 0, 60, 0, 1100), 20); }
if (h==15){
    fill(38,166,154);
	rect(200, 800, map(minute(), 0, 60, 0, 1100), 20); }
if (h==16){
    fill(77,182,172);
	rect(200, 850, map(minute(), 0, 60, 0, 1100), 20); }
if (h==17){
    fill(77,182,172);
	rect(200, 900, map(minute(), 0, 60, 0, 1100), 20); }
if (h==18){
    fill(128,203,196);
	rect(200, 950, map(minute(), 0, 60, 0, 1100), 20); }
if (h==19){
    fill(128,203,196);
	rect(200, 1000, map(minute(), 0, 60, 0, 1100), 20); }
if (h==20){
    fill(178,223,219);
	rect(200, 1050, map(minute(), 0, 60, 0, 1100), 20); }
if (h==21){
    fill(178,223,219);
	rect(200, 1100, map(minute(), 0, 60, 0, 1100), 20); }
if (h==22){
    fill(224,242,241);
	rect(200, 1150, map(minute(), 0, 60, 0, 1100), 20); }
if (h==23){
    fill(224,242,241);
	rect(200, 1200, map(minute(), 0, 60, 0, 1100), 20); }
if (h==24){
    fill(224,242,241);
	rect(200, 1250, map(minute(), 0, 60, 0, 1100), 20); }

  var widthvar=map(s,0,60,0,width);

  stroke(255);
  strokeWeight(1);
  line(widthvar,10, widthvar, 1290);

}