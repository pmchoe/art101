// lab.js - Learning about arrays and objects
// Author: Philip Choe
// Date: 10/28/23

// define variables
var myTransport = ["Car", "Bus", "eBike", "Walking"];

// object for my ways of transportation
var myMainRide = {
  make: "Tesla",
  model: "Model 3",
  color: "White",
  year: 2021,
  age: function() { return 2023 - this.year; }
}

// output
document.writeln("The ways I get around: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");