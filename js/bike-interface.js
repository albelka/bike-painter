var Bike = require('./../js/bike.js').bikeModule;
var apiKey = require('./../.env').apiKey;



$(document).ready(function() {
  $('#bike-form').submit(function(event){
    event.preventDefault();
    var color = $('#color').val();
    var city = $('#city').val();
    $('#city').val("");
    $('#color').val("");
    var newBike = new Bike(color);

    newBike.getBikes();
  });
});
