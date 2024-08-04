
// API Key = 4643fde98e9d41d794b173915241307
// Base URL: http://api.weatherapi.com/v1


// Weather Icons and Codes
// In the JSON response we return a condition:code which is a code for describing weather. For example clear, sunny, etc.


// You may retrieve the whole condition list as JSON to implement different weather icons or apply other logic to your application. It also includes multi-language translations of weather condition text.


// Multilingual Condition list URL: https://www.weatherapi.com/docs/conditions.json


// English Condition list URL (CSV): https://www.weatherapi.com/docs/weather_conditions.csv


// English Condition list URL (JSON): https://www.weatherapi.com/docs/weather_conditions.json


// English Condition list URL (XML): https://www.weatherapi.com/docs/weather_conditions.xml


// Please download the list and use it offline instead of directly linking into your application.



// So to get current weather for London: JSON: http://api.weatherapi.com/v1/current.json?key=<YOUR_API_KEY>&q=London

// To get 7 day weather for US Zipcode 07112: JSON: http://api.weatherapi.com/v1/forecast.json?key=<YOUR_API_KEY>&q=07112&days=7

// Search for cities starting with Lond: JSON: http://api.weatherapi.com/v1/search.json?key=<YOUR_API_KEY>&q=lond
// XML: http://api.weatherapi.com/v1/search.xml?key=<YOUR_API_KEY>&q=lond

// Check if the browser supports Geolocation
// if (navigator.geolocation) {
//     // Get the current position
//     navigator.geolocation.getCurrentPosition(function(position) {
//       // Retrieve latitude and longitude
//       var latitude = position.coords.latitude;
//       var longitude = position.coords.longitude;
  
//       // Display the current location
//       console.log("Latitude: " + latitude + ", Longitude: " + longitude);
//     }, function(error) {
//       // Handle errors (e.g. user denied location access)
//       console.error("Error getting current location: " + error.message);
//     });
//   } else {
//     console.error("Geolocation is not supported by this browser.");
//   }