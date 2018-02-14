var abstract = [];
var sign = [
"?", "!"];
var punc = [
"-", ".", ",","(", ")", "'"];

function preload() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "70c087000f21458e97dd86f0ad303924"; 
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
}

function setup() {
  createCanvas(2500, 1000);
  background(255);

  textSize(20);
  textAlign(LEFT);

  noLoop(); 

  extractHeadlines();
}

function draw() {

  var lineheight = 0;
  var margin = 25;
  translate(margin, 400);

  for (var i = 0; i < abstract.length; i++) {
    var words = split(abstract[i], '');

    var nextX = 0;


    for (var j = 0; j < words.length; j++) {
      stroke(0,0,255);
      strokeWeight(3);
      line(0,i*lineheight, nextX, i*lineheight);

      //text
      noFill();
      noStroke();
      text(words[j]+' ', nextX, i*lineheight);
      nextX += textWidth(words[j]+'  ');
    

      //define size of alphabets
      var str1 = 'abcdefghijklmnopqrstuvwxyz';
      var str2 = split(str1, '');
      var size = (str2.indexOf(words[j])+1);

      //define size of numbers
      var str3 = '0123456789';
      var str4 = split(str3, '');
      var sizen = (str4.indexOf(words[j])+1);
      var h = nytResponse.results[i].abstract;



      //signs 
      if (sign.includes(words[j].toLowerCase())) {
        noStroke();
        fill(255,87,51);
        ellipse(nextX,i*lineheight,75,75);
        //punc
       } else if (punc.includes(words[j])){
        noStroke();
        fill(255, 195, 0);
        rect(nextX,i*lineheight,1,50);
        //alphabets
      } else if (str2.includes(words[j].toLowerCase())){
        fill(0,0,255,70);
        text(h,i*lineheight,margin);

      };
      
    }
  }


}




function extractHeadlines() {

  // console.log(nytResponse); // take a look at the full API response structure

  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].abstract;
    // besides .title, other text data available to you include:
    // .abstract, .byline, .section, etc. etc.

    append(abstract, h);
  }

  // console.log(headlines); // make sure counted data looks as expected
}