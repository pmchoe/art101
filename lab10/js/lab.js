/*
lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

Requirements: jQuery must be loaded for this script to work

Author: Philip Choe
Date: 11/13/23
*/

// add buttons for challenge, problems, and results
$("#challenge").append("<br><button id='challenge-button'>Change Style</button>");
$("#problems").append("<br><button id='problems-button'>Change Style</button>");
$("#reflection").append("<br><button id='reflection-button'>Change Style</button>");
$("#results").append("<br><button id='results-button'>Change Style</button>");


// add click listener to challenge button
$("#challenge-button").click(function(){
    // adds or subtracts the "special" class to challenge section
    $("#challenge").toggleClass("special");
});

// add click listener to problems button
$("#problems-button").click(function(){
    // adds or subtracts the "special" class to problems section
    $("#problems").toggleClass("special");
});

// add click listener to reflection button
$("#reflection-button").click(function(){
    // adds or subtracts the "special" class to reflection section
    $("#reflection").toggleClass("special");
});

// add click listener to results button
$("#results-button").click(function(){
    // adds or subtracts the "special" class to results section
    $("#results").toggleClass("special");
});