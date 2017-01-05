var Bike = require('./../js/bike.js').bikeModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#bike-form').submit(function(event){
    event.preventDefault();
    var color = $('#color').val();
    var city = $('#city').val();
    $('#city').val("");
    $('#color').val("");
    var newBike = new Bike();
    newBike.getBikes();
    newBike.countColors();
    // $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=stolen&access_token=bd2db312ba544f2d20fb8f1cacf39e99ab60a5ade579786438d48d8d67acf74b', function(response){
    //   console.log(JSON.stringify(response));
    // });
  });
});
