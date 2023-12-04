/*
lab.js - This uses AJAX to get info from an external source (Pokemon API)

Requirements: jQuery must be loaded for this script to work

Author: Philip Choe
Date: 12/3/23
*/

// base api url without name/id at end
const pokemonEndpoint = "https://pokeapi.co/api/v2/pokemon/";

// adds click functionality to button
$("#activate").click(function() { 
    // get user's inputted pokemon name/id
    var pokemonName = document.getElementById("input").value;

    // construct API URL with pokemon's name/id at end
    const apiURL = pokemonEndpoint + pokemonName;

    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the api docs)
        url: apiURL,
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        //   all the action goes in here
        success: ajaxSuccess,
        // What we do if the api call fails
        error: ajaxError
    });

    // function for api success
    function ajaxSuccess(data) {
        // do stuff
        console.log(data);

        // extract relevant info from pokemon data
        const pokemonSpriteURL = data.sprites.front_default;
        const pokemonName = data.name;
        const pokemonTypes = data.types.map(typeObj => typeObj.type.name);
        const pokemonAbilities = data.abilities.map(ability => ability.ability.name);
        const pokemonHeightInFeet = Math.floor(data.height * 3.937007874 / 12);
        const pokemonHeightRemainderInInches = Math.floor(data.height * 3.947007874 % 12);
        const pokemonWeight = data.weight;

        // print pokemon info in output div
        $("#output").append(`
        <p>Name: ${pokemonName}</p>
        <img src="${pokemonSpriteURL}" alt="${pokemonName}"/>
        <p>Type(s): ${pokemonTypes.join(', ')}</p>
        <p>Abilities: ${pokemonAbilities.join(', ')}</p>
        <p>Height: ${pokemonHeightInFeet}' ${pokemonHeightRemainderInInches}"</p>
        <p>Weight: ${pokemonWeight} lbs</p>
        `);
    }

    function ajaxError(data) {
        // do stuff
        console.log("This pokemon does not exist, or");
        console.log("Error:", textStatus, errorThrown);
    }
});