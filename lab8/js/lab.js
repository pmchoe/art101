// lab.js - Learning about anonymous functions and callbacks
// Author: Philip Choe
// Date: 11/4/23


// initialize array
var numArray = [1, 74, 25, 99, 30];

// prints out initial array
console.log("Initial array: " + numArray); 

function calculation(x) {
    var results = Math.sqrt(x);
    return results;
}

// debug check if function works
/*
console.log(calculation(4));
console.log(calculation(25));
*/

// prints out sqrt of array
console.log("Square Root of the array is: " + numArray.map(calculation));

// prints out each array element + 12
console.log("Adds 12 to each element in the array: " + 
numArray.map(function(x){ return x + 12; }));






// puts id "output" onto variable arrayOutput and prints out console results
var arrayOutput = document.getElementById("output");
arrayOutput.innerHTML = "Initial array: " + numArray;

// puts id "output2" onto variable arrayOutput2 and prints out console results
var arrayOutput2 = document.getElementById("output2");
arrayOutput2.innerHTML = "Square Root of the array is: " + numArray.map(calculation);

// puts id "output3" onto variable arrayOutput3 and prints out console results
var arrayOutput3 = document.getElementById("output3");
arrayOutput3.innerHTML = "Adds 12 to each element in the array: " + numArray.map(function(x){ return x + 12; });
