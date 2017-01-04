var Bike = require('./../js/bike.js').bikeModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#bike-form').submit(function(event){
    event.preventDefault();
    var color = $('#color').val();
    var city = $('#city').val();
    $('#city').val("");
    $('#color').val("");
    console.log("hi");
    $.get('https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=proximity&access_token=21b2166f6205c3e4d1ad4eef60359991c023ac09db015ac909493a5b628275ca', function(response){
      console.log(response);
    });
  });
});
