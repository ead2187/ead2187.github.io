var headlines = [];
var letter = [
  "O",
  "o"
];

function preload() {

  // Assemble url for API call
  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  var apikey = "70c087000f21458e97dd86f0ad303924"; // see: https://developer.nytimes.com
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
  // loadJSON() is asynchronous, but calling it inside preload() guarantees
  // we'll have a response before setup() and draw() is run.
}

function setup() {
  createCanvas(1000, 1000);
  background(0);

  textSize(10);
  textAlign(LEFT);

  noLoop(); // since we're not animating, one frame is sufficient: run draw() just once

  extractHeadlines();
}

function draw() {
  background('blue');

  var lineheight = 20;
  var margin = 40;
  translate(margin, margin);


      //define size of alphabets
      var str1 = 'abcdefghijklmnopqrstuvwxyz';
      var str2 = split(str1, '');
      var size = (str2.indexOf(letter[j])+1);


  for (var i = 0; i < headlines.length; i++) {
    var words = split(headlines[i], ' ');
    // console.log(words);

    var nextX = 0;

    for (var j = 0; j < words.length; j++) {
      if (letter.includes(letter[j].toLowerCase())) {
        fill("white");
      } else {
        fill('blue');
      }

      text(letter[j]+' ', nextX, i*lineheight);
      nextX += textWidth(words[j]+' ');
    }
  }
}

function extractHeadlines() {

  // console.log(nytResponse); // take a look at the full API response structure

  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].abstract;
    // besides .title, other text data available to you include:
    // .abstract, .byline, .section, etc. etc.
    append(headlines, h);
  }

  // console.log(headlines); // make sure counted data looks as expected
}