function Bike () {
  this.bikeList = [];
  this.stolenColors = {Black: 0, Blue: 0, Brown: 0, Green: 0, Orange: 0, Pink: 0, Purple: 0, Red: 0, Silver: 0, Stickers: 0, Teal: 0, White: 0, Yellow: 0};
  this.black = 0;
}

Bike.prototype.getBikes = (function() {
  var newBike = this;
  $.get('https://bikeindex.org:443/api/v3/search?page=10&per_page=100&location=IP&distance=10&stolenness=stolen&access_token=bd2db312ba544f2d20fb8f1cacf39e99ab60a5ade579786438d48d8d67acf74b').then(function(response){
    // console.log(JSON.stringify(response));
    response.bikes.forEach(function(bike) {
      newBike.bikeList.push(bike.frame_colors);
    });
    console.log("HERE " + newBike.bikeList[4]);
  });
});

Bike.prototype.countColors = (function() {
  var newBike = this;
  console.log("newbike " + newBike.bikeList[0]);
  newBike.bikeList.forEach(function(color) {
    if(color === "Black") {
      newBike.black++;
    } if (color === "Blue") {
      newBike.stolenColors.Blue++;
    } if (color === "Brown" ) {
      newBike.stolenColors.Brown++;
    } if (color === "Green" ) {
      newBike.stolenColors.Green++;
    } if (color === "Orange") {
      newBike.stolenColors.Orange++;
    }  if (color === "Pink") {
      newBike.stolenColors.Pink++;
    } if (color === "Purple") {
      newBike.stolenColors.Purple++;
    } if (color === "Red") {
      newBike.stolenColors.Red++;
    } if (color === "Silver or Grey") {
      newBike.stolenColors.Silver++;
    } if (color === "Stickers") {
      newBike.stolenColors.Stickers++;
    } if (color === "Teal") {
      newBike.stolenColors.Teal++;
    } if (color === "White") {
      newBike.stolenColors.White++;
    } if (color === "Yellow or Gold") {
      newBike.stolenColors.Yellow++;
    }
  });
  console.log("HOW MANY " + newBike.black);
});

exports.bikeModule = Bike;
