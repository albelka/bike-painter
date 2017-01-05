var apiKey = require('./../.env').apiKey;

function Bike (color, city) {
  this.bikeList = [];
  this.stolenColors = {Black: 0, Blue: 0, Brown: 0, Green: 0, Orange: 0, Pink: 0, Purple: 0, Red: 0, Silver: 0, Stickers: 0, Teal: 0, White: 0, Yellow: 0};
  this.trueFalse = true;
  this.bikeColor = color;
  this.bikeCity = city;
}

Bike.prototype.getBikes = (function(city) {
  var newBike = this;
  $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=100&location=' + city + '&distance=10&stolenness=stolen&access_token=' + apiKey).then(function(response){
    // console.log(JSON.stringify(response));
    response.bikes.forEach(function(bike) {
      newBike.bikeList.push(bike.frame_colors);
    });
    newBike.countColors();
    newBike.trueFalse = newBike.isCommon();
    if(newBike.trueFalse) {
      $('.response').text(newBike.stolenColors[newBike.bikeColor] + " out of 100 stolen bikes in " + newBike.bikeCity + " were painted " + newBike.bikeColor + ". You should paint your bike teal or cover it with stickers!");
      $('.result .teal').show();
      $('.result .crappy').hide();
    } else {
      $('.response').text("Only " + newBike.stolenColors[newBike.bikeColor] + " out of 100 stolen bikes in " + newBike.bikeCity + " were painted " + newBike.bikeColor + ". You don't have to paint your bike. Unless you want to." );
      $('.result .crappy').show();
      $('.result .teal').hide();
    }
  });
});

Bike.prototype.countColors = (function() {
  var newBike = this;
  newBike.bikeList.forEach(function(color) {
    if(color.includes("Black")) {
      newBike.stolenColors.Black++;
    } if (color.includes("Blue")) {
      newBike.stolenColors.Blue++;
    } if (color.includes("Brown")) {
      newBike.stolenColors.Brown++;
    } if (color.includes("Green")) {
      newBike.stolenColors.Green++;
    } if (color.includes("Orange")) {
      newBike.stolenColors.Orange++;
    }  if (color.includes("Pink")) {
      newBike.stolenColors.Pink++;
    } if (color.includes("Purple")) {
      newBike.stolenColors.Purple++;
    } if (color.includes("Red")) {
      newBike.stolenColors.Red++;
    } if (color.includes("Silver or Gray")) {
      newBike.stolenColors.Silver++;
    } if (color.includes("Stickers")) {
      newBike.stolenColors.Stickers++;
    } if (color.includes("Teal")) {
      newBike.stolenColors.Teal++;
    } if (color.includes("White")) {
      newBike.stolenColors.White++;
    } if (color.includes("Yellow or Gold")) {
      newBike.stolenColors.Yellow++;
    }
  });
});

Bike.prototype.isCommon = function() {
  var howMany = this.stolenColors[this.bikeColor];
  console.log(howMany);
  if(howMany > 10) {
    return true;
  }
};

exports.bikeModule = Bike;
