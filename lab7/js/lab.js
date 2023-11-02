// lab.js - Learning about functions
// Author: Philip Choe
// Date: 11/1/23

// function that sorts user-inputted name 
function getName() {
  let userName = prompt("Enter your name", "John Smith");

  var nameArray = userName.split("").sort();
  var nameString = nameArray.join("");

  return nameString;
}

// stores sorted name
var nameSorted = getName();

// puts id "output" onto variable nameOutput and prints out the sorted name
var nameOutput = document.getElementById("output");
nameOutput.textContent = "Sorting things is fun! Here's your name sorted: " + nameSorted;
