/*
lab.js - This uses AJAX to get info from an external source (XKCD API)

Requirements: jQuery must be loaded for this script to work

Author: Philip Choe
Date: 12/5/23
*/

const endpoint = "https://xkcd.com/2863/info.0.json";
const endpoint_latest = "https://xkcd.com/info.0.json";

var comicObj = {
    
};


// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: endpoint,
    // The data to send (will be converted to a query string)
    data: { 
            // here is where any data required by the api 
            //   goes (check the api docs)
            id: 123,
            api_key: "blahblahblah",
          },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        console.log(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
})